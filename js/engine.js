/* Motor de ejercicios: render + corrección + puntuación + audio */
(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s);
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));

/* ---------- storage ---------- */
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
};
window.MA1={store};
const SKEY=n=>"metodo_a1:u"+n;

/* ---------- normalización ---------- */
const strip=s=>s.normalize("NFD").replace(/[̀-ͯ]/g,"");
function norm(s,strict){
  s=String(s).toLowerCase().replace(/[¿?¡!.,;:"“”«»()]/g,"").replace(/\s+/g," ").trim();
  return strict?s.normalize("NFC"):strip(s).normalize("NFC");
}
const strictAcc=()=>store.get("metodo_a1:strict",false);

/* ---------- audio ---------- */
let manifest=null;
function loadManifest(){
  if(manifest!==null)return Promise.resolve(manifest);
  return fetch("audio/manifest.json").then(r=>r.ok?r.json():{}).catch(()=>({})).then(m=>manifest=m);
}
function candidates(id){
  const [c,t]=id.split("-");const tt=t.padStart(2,"0");
  const out=[];
  if(manifest&&manifest[id])out.push("audio/"+manifest[id]);
  out.push(`audio/cd${c}-${tt}.mp3`,`audio/CD${c}_${tt}.mp3`,`audio/cd${c}_${tt}.mp3`);
  return out;
}
function audioBox(id){
  const box=el("div","audio");
  box.appendChild(el("span","tag","🎧 CD "+id.split("-")[0]+" · 트랙 "+id.split("-")[1].padStart(2,"0")));
  const a=document.createElement("audio");a.controls=true;a.preload="none";
  box.appendChild(a);
  const miss=el("span","miss");box.appendChild(miss);
  loadManifest().then(()=>{
    const list=candidates(id);let i=0;
    const next=()=>{ if(i>=list.length){miss.textContent="오디오 파일을 찾을 수 없습니다 (audio 폴더 확인)";return;} a.src=list[i++]; };
    a.addEventListener("error",next);
    next();
  });
  return box;
}

/* ---------- controles ---------- */
/* control: {node, ok():bool|null, sol():string, fill(), clear(), val(), set(v), box (elemento para marcar), note()} */
function makeFill(item,idx,act){
  const row=el("div","it");row.appendChild(el("span","no",(item.no||idx+1)+"."));
  const ctrls=[];
  const parts=(item.t||"").split("___");
  parts.forEach((p,i)=>{
    if(p)row.appendChild(document.createTextNode(p));
    if(i<parts.length-1){
      const inp=document.createElement("input");inp.type="text";inp.autocomplete="off";inp.spellcheck=false;
      const alts=item.a[i];const L=Math.max(...alts.map(x=>x.length));
      inp.style.setProperty("--w",Math.min(Math.max(L*10+30,70),340)+"px");
      inp.setAttribute("aria-label","respuesta "+(idx+1));
      row.appendChild(inp);
      ctrls.push({inp,alts});
    }
  });
  const fb=el("div","fb");fb.hidden=true;row.appendChild(fb);
  return {row,fb,ctrls,type:"fill"};
}

function render(act,state,onchange){
  const wrap=el("div");
  const t=act.type;
  const ctl=[];          // unidades puntuables {ok(), box, sol(), get(), set(v), clear(), fb}
  if(act.ctx)wrap.appendChild(el("div","ctx",act.ctx));
  if(act.bank){const b=el("div","bank");act.bank.forEach(w=>b.appendChild(el("span",null,esc(w))));wrap.appendChild(b);}

  if(t==="fill"){
    const g=el("div","items"+(act.cols?" cols2":""));
    act.items.forEach((it,i)=>{
      const m=makeFill(it,i,act);g.appendChild(m.row);
      const solText=()=>m.ctrls.map(c=>c.alts[0]).join(" / ");
      const c={box:m.row,fb:m.fb,
        get:()=>m.ctrls.map(x=>x.inp.value),
        set:v=>m.ctrls.forEach((x,k)=>x.inp.value=(v&&v[k])||""),
        clear:()=>m.ctrls.forEach(x=>{x.inp.value="";x.inp.classList.remove("ok","bad");}),
        sol:solText,
        solveSet:()=>m.ctrls.forEach(x=>x.inp.value=x.alts[0]),
        check(){ // devuelve {ok,note}
          let ok=true,note="";
          m.ctrls.forEach(x=>{
            const v=x.inp.value;
            const loose=x.alts.some(a=>norm(a)===norm(v));
            const strict=x.alts.some(a=>norm(a,true)===norm(v,true));
            let good=strictAcc()?strict:loose;
            if(loose&&!strict&&!strictAcc())note="악센트 확인: "+x.alts[0];
            x.inp.classList.toggle("ok",good);x.inp.classList.toggle("bad",!good);
            if(!good)ok=false;
          });
          return {ok,note};
        }};
      ctl.push(c);
    });
    wrap.appendChild(g);
  }
  else if(t==="choice"){
    const g=el("div","items");
    act.items.forEach((it,i)=>{
      const row=el("div","it");row.appendChild(el("span","no",(i+1)+"."));
      if(it.q)row.appendChild(el("span",null,esc(it.q)));
      const name="c"+Math.random().toString(36).slice(2);
      const radios=it.o.map((o,k)=>{const l=el("label","opt");const r=document.createElement("input");r.type="radio";r.name=name;r.value=k;l.appendChild(r);l.appendChild(document.createTextNode(o));row.appendChild(l);return r;});
      const fb=el("div","fb");fb.hidden=true;row.appendChild(fb);g.appendChild(row);
      ctl.push({box:row,fb,
        get:()=>{const r=radios.find(x=>x.checked);return r?+r.value:null;},
        set:v=>radios.forEach((x,k)=>x.checked=(v===k)),
        clear:()=>radios.forEach(x=>x.checked=false),
        sol:()=>it.o[it.a],
        solveSet:()=>radios.forEach((x,k)=>x.checked=(k===it.a)),
        check:function(){return {ok:this.get()===it.a,note:""};}
      });
    });
    wrap.appendChild(g);
  }
  else if(t==="match"){
    const g=el("div","items"+(act.cols?" cols2":""));
    act.items.forEach((it,i)=>{
      const row=el("div","it");row.appendChild(el("span","no",(it.no||i+1)+"."));
      row.appendChild(el("span",null,esc(it.l)));
      const sel=document.createElement("select");
      sel.appendChild(new Option("— 선택 —",""));
      act.opts.forEach((o,k)=>sel.appendChild(new Option(o,k)));
      row.appendChild(sel);
      const fb=el("div","fb");fb.hidden=true;row.appendChild(fb);g.appendChild(row);
      const answers=Array.isArray(it.a)?it.a:[it.a];
      ctl.push({box:row,fb,sel,
        get:()=>sel.value===""?null:+sel.value,
        set:v=>sel.value=(v==null?"":v),
        clear:()=>{sel.value="";sel.classList.remove("ok","bad");},
        sol:()=>act.opts[answers[0]],
        solveSet:()=>{sel.value=answers[0];},
        check:function(){const ok=answers.includes(this.get());sel.classList.toggle("ok",ok);sel.classList.toggle("bad",!ok);return {ok,note:""};}
      });
    });
    wrap.appendChild(g);
  }
  else if(t==="check"){
    const g=el("div","items");
    const row=el("div","it");
    const boxes=act.opts.map((o,k)=>{const l=el("label","opt");const c=document.createElement("input");c.type="checkbox";l.appendChild(c);l.appendChild(document.createTextNode(o));row.appendChild(l);return c;});
    const fb=el("div","fb");fb.hidden=true;row.appendChild(fb);g.appendChild(row);wrap.appendChild(g);
    ctl.push({box:row,fb,multi:true,max:act.a.length,
      get:()=>boxes.map(b=>b.checked),
      set:v=>boxes.forEach((b,k)=>b.checked=!!(v&&v[k])),
      clear:()=>boxes.forEach(b=>b.checked=false),
      sol:()=>act.a.map(k=>act.opts[k]).join(", "),
      solveSet:()=>boxes.forEach((b,k)=>b.checked=act.a.includes(k)),
      check:function(){
        const sel=this.get();let good=0,bad=0;
        sel.forEach((s,k)=>{if(s){act.a.includes(k)?good++:bad++;}});
        const pts=Math.max(0,good-bad);
        return {ok:pts===act.a.length&&bad===0,pts,note:""};
      }
    });
  }
  else if(t==="open"){
    const g=el("div","items");
    act.items.forEach((it,i)=>{
      const row=el("div");row.style.width="100%";
      row.appendChild(el("div",null,"<b>"+(i+1)+".</b> "+esc(it.q||"")));
      const ta=document.createElement("textarea");ta.rows=2;ta.placeholder="여기에 써 보세요";row.appendChild(ta);
      const m=el("div","model","<b>예시 답안:</b> "+esc(it.model||""));row.appendChild(m);
      g.appendChild(row);
      ctl.push({open:true,ta,model:m,get:()=>ta.value,set:v=>ta.value=v||"",clear:()=>{ta.value="";m.classList.remove("on");}});
    });
    wrap.appendChild(g);
  }
  return {node:wrap,ctl};
}

/* ---------- actividad ---------- */
function buildAct(act,ai,exId,state,notify){
  const box=el("section","act");
  if(act.label||act.instr){
    const p=el("p","instr",(act.label?`<em>${act.label}</em>`:"")+esc(act.instr||"")+(act.ko?`<span class="ko">${esc(act.ko)}</span>`:""));
    box.appendChild(p);
  }
  if(act.audio)box.appendChild(audioBox(act.audio));
  const key=exId+"#"+ai;
  const r=render(act,state,notify);
  box.appendChild(r.node);
  const scored=r.ctl.filter(c=>!c.open);
  const isOpen=r.ctl.some(c=>c.open);
  const max=scored.reduce((s,c)=>s+(c.max||1),0);
  const api={key,max,score:0,checked:false,open:isOpen,practice:act.type==="practice"};

  const row=el("div","row");const sc=el("span","score");
  function paint(){sc.textContent=api.checked?`${api.score} / ${api.max}`:"";sc.classList.toggle("full",api.checked&&api.score===api.max);}
  function save(){
    state[key]={a:r.ctl.map(c=>c.get()),checked:api.checked,score:api.score,max:api.max,done:api.done||false};
    notify();
  }
  api.grade=function(){
    if(!scored.length)return;
    let s=0;
    scored.forEach(c=>{
      const res=c.check();
      if(c.multi){s+=res.pts;}else if(res.ok){s+=1;}
      c.box.classList.toggle("ok",!!res.ok);c.box.classList.toggle("bad",!res.ok);
      c.fb.hidden=false;
      if(res.ok&&res.note){c.fb.className="fb note";c.fb.innerHTML=esc(res.note);}
      else if(res.ok){c.fb.hidden=true;}
      else {c.fb.className="fb";c.fb.innerHTML="정답: <b>"+esc(c.sol())+"</b>";}
    });
    api.score=s;api.checked=true;paint();save();
  };
  api.reset=function(){
    r.ctl.forEach(c=>{c.clear();if(c.box){c.box.classList.remove("ok","bad");}if(c.fb)c.fb.hidden=true;});
    api.checked=false;api.score=0;api.done=false;paint();save();
  };
  api.solve=function(){scored.forEach(c=>c.solveSet&&c.solveSet());};
  api.show=function(){
    if(isOpen){r.ctl.forEach(c=>c.model.classList.add("on"));api.done=true;save();return;}
    scored.forEach(c=>{c.fb.hidden=false;c.fb.className="fb";c.fb.innerHTML="정답: <b>"+esc(c.sol())+"</b>";});
  };

  if(scored.length){
    const b1=el("button","btn","채점하기");b1.type="button";b1.onclick=api.grade;
    const b2=el("button","btn ghost","정답 보기");b2.type="button";b2.onclick=api.show;
    const b3=el("button","btn ghost","다시 풀기");b3.type="button";b3.onclick=api.reset;
    row.append(b1,b2,b3,sc);box.appendChild(row);
  } else if(isOpen){
    const b2=el("button","btn ghost","예시 답안 보기");b2.type="button";b2.onclick=api.show;
    row.append(b2);box.appendChild(row);
  }
  // restaurar
  const saved=state[key];
  if(saved){
    try{r.ctl.forEach((c,i)=>c.set&&c.set(saved.a[i]));}catch(e){}
    if(saved.checked&&scored.length){api.grade();}
  }
  // guardar respuestas al escribir
  box.addEventListener("input",()=>{if(!api.checked)save();});
  box.addEventListener("change",()=>{if(!api.checked)save();});
  return {node:box,api};
}

/* ---------- página de unidad ---------- */
window.renderUnit=function(U,meta){
  document.documentElement.style.setProperty("--c",meta.color);
  document.title=`Unidad ${U.n||meta.n} · ${meta.title} — Método A1`;
  const state=store.get(SKEY(meta.n),{});
  const root=$("#app");root.innerHTML="";
  const acts=[];
  const exStat={};
  function totals(){let s=0,m=0;acts.forEach(a=>{if(a.api.checked){s+=a.api.score;}m+=a.api.max;});return {s,m};}
  const top=el("div","top",`<a class="back" href="index.html">← Índice</a><div class="ttl">Unidad ${meta.n} · ${esc(meta.title)}</div><div class="sc" id="topsc"></div>`);
  document.body.prepend(top);
  const layout=el("div","layout");root.appendChild(layout);
  const side=el("nav","side");layout.appendChild(side);
  const main=el("main");layout.appendChild(main);

  main.appendChild(el("div","uhead",`<h1>${esc(meta.title)}</h1><p>${esc(meta.sit)} · 교재 ${meta.pages}쪽 · ${esc(meta.ko)}</p>`));
  const opts=el("div","opts");
  const lab=el("label",null,'<input type="checkbox" id="strict"> 악센트(tilde)도 채점');
  lab.querySelector("input").checked=strictAcc();
  lab.querySelector("input").onchange=e=>store.set("metodo_a1:strict",e.target.checked);
  const bAll=el("button","btn","이 단원 전체 채점");bAll.type="button";
  const bRst=el("button","btn ghost","이 단원 초기화");bRst.type="button";
  opts.append(bAll,bRst,lab);main.appendChild(opts);

  let curSec=null;const sideLinks={};
  U.exercises.forEach(ex=>{
    if(ex.sec!==curSec){curSec=ex.sec;main.appendChild(el("h2","sec",esc(curSec)));side.appendChild(el("h4",null,esc(curSec)));}
    const exId=ex.id;
    const card=el("article","ex");card.id="e-"+exId;
    const head=el("header",null,`<span class="n">${esc(ex.num)}</span><h3>${esc(ex.title)}</h3><span class="exs"></span><span class="pg">p.${ex.page}</span>`);
    card.appendChild(head);
    const mine=[];
    ex.acts.forEach((a,i)=>{const b=buildAct(a,i,exId,state,onchange);card.appendChild(b.node);acts.push(b);mine.push(b);});
    main.appendChild(card);
    const link=el("a",null,`<span class="dot"></span>${esc(ex.num)}. ${esc(ex.title)}`);link.href="#e-"+exId;side.appendChild(link);
    sideLinks[exId]={link,mine,head:head.querySelector(".exs")};
  });

  const sum=el("section","summary");main.appendChild(sum);
  const nav=el("div","nextprev");
  const idx=window.UNIT_LIST.findIndex(u=>u.n===meta.n);
  const pv=window.UNIT_LIST[idx-1],nx=window.UNIT_LIST[idx+1];
  nav.innerHTML=(pv?`<a href="unit.html?u=${pv.n}">← Unidad ${pv.n}</a>`:"<span></span>")+(nx?`<a href="unit.html?u=${nx.n}">Unidad ${nx.n} →</a>`:"<span></span>");
  main.appendChild(nav);

  function onchange(){store.set(SKEY(meta.n),state);refresh();}
  function refresh(){
    const t=totals();
    $("#topsc").textContent=t.m?`${t.s} / ${t.m}점`:"";
    let rows="";
    Object.values(sideLinks).forEach(o=>{
      const sc=o.mine.filter(a=>a.api.max>0&&!a.api.open);
      const m=sc.reduce((s,a)=>s+a.api.max,0),s=sc.reduce((x,a)=>x+(a.api.checked?a.api.score:0),0);
      const all=sc.length&&sc.every(a=>a.api.checked),some=sc.some(a=>a.api.checked);
      o.link.classList.toggle("done",!!all);o.link.classList.toggle("part",!all&&!!some);
      o.head.textContent=m?(some?`${s}/${m}`:`${m}점`):"";
      o.head.classList.toggle("full",!!all&&s===m);
    });
    const done=Object.values(sideLinks).filter(o=>o.link.classList.contains("done")).length;
    const totalEx=Object.values(sideLinks).filter(o=>o.mine.some(a=>a.api.max>0)).length;
    sum.style.display="";
    sum.innerHTML=`<h2>점수 요약</h2><p>채점한 문제: <b>${done}</b> / ${totalEx}개 · 현재 점수 <b>${t.s} / ${t.m}</b>${t.m?` (${Math.round(100*t.s/t.m)}%)`:""}</p>`;
    store.set("metodo_a1:sum:"+meta.n,{s:t.s,m:t.m,done,totalEx});
  }
  window.MA1.solveAll=()=>acts.forEach(a=>a.api.solve&&a.api.solve());
  window.MA1.gradeAll=()=>acts.forEach(a=>a.api.max&&!a.api.open&&a.api.grade());
  window.MA1.acts=acts;
  if(new URLSearchParams(location.search).get("teacher")==="1"){
    const bT=el("button","btn ghost","교사용: 정답 채우기");bT.type="button";bT.onclick=()=>window.MA1.solveAll();opts.appendChild(bT);
  }
  bAll.onclick=()=>{acts.forEach(a=>a.api.grade&&a.api.max&&!a.api.open&&a.api.grade());};
  bRst.onclick=()=>{if(confirm("이 단원의 답안과 점수를 모두 지울까요?")){acts.forEach(a=>a.api.reset());}};
  refresh();
};

/* ---------- índice ---------- */
window.renderIndex=function(){
  const wall=$("#wall");let S=0,M=0;
  window.UNIT_LIST.forEach(u=>{
    const sum=store.get("metodo_a1:sum:"+u.n,null);
    const pct=sum&&sum.m?Math.round(100*sum.s/sum.m):0;
    if(sum){S+=sum.s;M+=sum.m;}
    const a=el("a","tile",`<div><div class="no">${u.n===0?"0":u.n}</div><h2>${esc(u.title)}</h2><div class="sit">${esc(u.sit)}</div></div>
      <div><div class="sit" style="margin-top:10px">${esc(u.ko)}</div><div class="meta"><div class="bar"><i style="width:${pct}%"></i></div><span>${sum&&sum.m?pct+"%":"p."+u.pages}</span></div></div>`);
    a.href="unit.html?u="+u.n;a.style.setProperty("--c",u.color);
    wall.appendChild(a);
  });
  $("#total").innerHTML=M?`내 점수 <b>${S}</b> / ${M}`:`아직 푼 문제가 없어요`;
};
})();
