window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
/* conjugación en una sola fila (6 formas) */
const row6=(verb,f,labels)=>({t:`${verb}: `+labels.map((l,i)=>`${l} ___`).join(" · "),a:f.map(x=>[x])});
window.UNITS[4]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"4-1",num:"1",sec:S,title:"Esta es mi casa",page:73,acts:[
 {type:"match",label:"A",instr:"Estos cuatro amigos de Laura viven en la misma ciudad, pero en casas muy diferentes. Lee acerca de sus vidas y contesta: ¿quién es…?",ko:"네 사람(Amanda, Antonio, Domingo, Rosa)의 소개를 읽고 알맞은 사람을 고르세요. (Amanda: 30살, 무용 교사, 혼자 삶, 개 Max / Antonio: 40살, 사업가, 아이 셋, 도심을 싫어함 / Domingo: 28살, 컴퓨터 전문가, 시골을 싫어함 / Rosa: 33살, 농촌 관광업 사장, 채식주의자, 개 3마리·고양이 2마리)",cols:true,
  opts:["Amanda Serrano","Antonio Carmona","Domingo González","Rosa García"],
  items:[{l:"Vive sola y tiene un perro, Max.",a:0},{l:"Tiene tres hijos.",a:1},{l:"Es informático.",a:2},{l:"Es vegetariana.",a:3},{l:"Odia el campo.",a:2},{l:"Odia la ciudad.",a:3},{l:"Es profesora de baile.",a:0},{l:"Odia el centro de las ciudades.",a:1}]},
 {type:"open",label:"B",instr:"¿En qué lugar crees que vive cada una de estas personas (un ático / una casa de campo)? Justifica tus respuestas.",ko:"(자유 작문) 'Yo creo que … vive en … porque …' 형식으로 써 보세요.",
  items:[{q:"Yo creo que Rosa vive … porque …",model:"Yo creo que Rosa vive en una casa de campo porque tiene muchos animales y necesita una casa grande."}]}
]},
{id:"4-2",num:"2",sec:S,title:"Mi casa es tu casa",page:74,acts:[
 {type:"fill",audio:"1-27",instr:"François, el chico francés de la clase, habla de su piso. Escucha y completa los datos que faltan.",ko:"듣고 프랑수아의 집에 대한 정보를 완성하세요.",
  items:[
   {t:"1. El piso tiene dos ___.",a:[["habitaciones"]]},
   {t:"2. El piso es pequeño y muy ___.",a:[["luminoso"]]},
   {t:"3. El piso está en el ___ de la ciudad.",a:[["centro"]]},
   {t:"4. El piso no tiene ___ ni garaje.",a:[["ascensor"]]},
   {t:"5. François vive con ___ , un chico de Colombia.",a:[["Ramón"]]}
  ]}
]},
{id:"4-3",num:"3",sec:S,title:"La casa de…",page:74,acts:[
 {type:"open",instr:"Pregunta a tus compañeros cómo es su casa. Luego explícalo al resto de la clase. Usa: (No) Tiene… / Está… / Vive en… Después comenta: ¿cuál es la casa ideal para vivir? ¿Por qué?",ko:"(말하기·작문) 친구의 집을 묘사해 보세요. 예: La casa de Niklas es un apartamento, está en el centro, tiene una habitación…",bank:["habitaciones","garaje","piscina","ascensor","cerca del centro","lejos","cerca de aquí","un piso","una casa","un apartamento","un ático","un chalé","un estudio"],
  items:[{q:"La casa de … es …, está …, tiene …",model:"La casa de Niklas es un apartamento, está en el centro, tiene una habitación y no tiene garaje."}]}
]},
/* ===== OBSERVA Y APRENDE ===== */
{id:"4-4",num:"4",sec:O,title:"Cosas de casa",page:75,acts:[
 {type:"match",instr:"Ramón, el nuevo compañero de François, lleva algunas de sus cosas al piso. Relaciona cada objeto con su nombre.",ko:"그림(이모지)과 알맞은 단어를 연결하세요.",cols:true,
  opts:["unas camisetas","un paraguas","un marco de fotos","una maleta","un portátil","una manta"],
  items:[{l:"🖼️",a:2},{l:"👕👕",a:0},{l:"🧳",a:3},{l:"☂️",a:1},{l:"💻",a:4},{l:"🛏️ (담요)",a:5}]}
]},
{id:"4-5",num:"5",sec:O,title:"Ramón y sus fotos",page:75,acts:[
 {type:"choice",label:"A",instr:"Ramón enseña a François algunas fotos de su álbum. Fíjate en las palabras marcadas (mi, mis, su, nuestros…). ¿Qué tipo de adjetivos son?",ko:"mi, mis, su, nuestros 같은 단어는 무슨 형용사일까요?",
  items:[{q:"Son adjetivos…",o:["demostrativos","posesivos","numerales"],a:1}]},
 {type:"fill",label:"B",instr:"Completa la tabla de los posesivos con la persona indicada (singular masculino, singular femenino, plural masculino, plural femenino). Ej.: yo → mi perro / mi casa / mis perros / mis casas.",ko:"각 인칭의 소유형용사를 빈칸에 쓰세요. (순서: 남성 단수 · 여성 단수 · 남성 복수 · 여성 복수)",
  items:[
   {t:"yo: ___ perro · ___ casa · ___ perros · ___ casas",a:[["mi"],["mi"],["mis"],["mis"]]},
   {t:"tú: ___ perro · ___ casa · ___ perros · ___ casas",a:[["tu"],["tu"],["tus"],["tus"]]},
   {t:"él/ella/usted: ___ perro · ___ casa · ___ perros · ___ casas",a:[["su"],["su"],["sus"],["sus"]]},
   {t:"nosotros/-as: ___ perro · ___ casa · ___ perros · ___ casas",a:[["nuestro"],["nuestra"],["nuestros"],["nuestras"]]},
   {t:"vosotros/-as: ___ perro · ___ casa · ___ perros · ___ casas",a:[["vuestro"],["vuestra"],["vuestros"],["vuestras"]]},
   {t:"ellos/ellas/ustedes: ___ perro · ___ casa · ___ perros · ___ casas",a:[["su"],["su"],["sus"],["sus"]]}
  ]}
]},
{id:"4-6",num:"6",sec:O,title:"Compañeros de piso",page:76,acts:[
 {type:"open",label:"A",instr:"Ramón y François buscan un nuevo compañero de piso. Aquí tienes a tres de sus candidatos (Fran; July y Marc; Miguel). ¿Quién es tu favorito? Comenta tu opinión con el resto de la clase.",ko:"(자유 작문) 세 후보 중 누구를 고를지, 이유와 함께 써 보세요.",
  items:[{q:"Para mí es … porque …",model:"Para mí es Miguel porque hace muchas cosas en casa: limpia, hace las camas y pone la lavadora."}]},
 {type:"fill",label:"B",instr:"Todos los verbos señalados en el texto (hago, doy, salgo, traigo, pongo, conozco) tienen solo la primera persona irregular. Completa su conjugación.",ko:"각 동사의 나머지 인칭 형태를 쓰세요. (tú · él/ella · nosotros · vosotros · ellos)",
  items:[
   row6("hacer",["haces","hace","hacemos","hacéis","hacen"],["tú","él","nosotros","vosotros","ellos"]),
   row6("dar",["das","da","damos","dais","dan"],["tú","él","nosotros","vosotros","ellos"]),
   row6("salir",["sales","sale","salimos","salís","salen"],["tú","él","nosotros","vosotros","ellos"]),
   row6("traer",["traes","trae","traemos","traéis","traen"],["tú","él","nosotros","vosotros","ellos"]),
   row6("poner",["pones","pone","ponemos","ponéis","ponen"],["tú","él","nosotros","vosotros","ellos"]),
   row6("conocer",["conoces","conoce","conocemos","conocéis","conocen"],["tú","él","nosotros","vosotros","ellos"])
  ]}
]},
{id:"4-7",num:"7",sec:O,title:"¿Quién es Stephanie?",page:77,acts:[
 {type:"fill",label:"A",audio:"1-28",instr:"Stephanie es una estudiante de Estados Unidos que también busca piso. Escucha su conversación y escribe las palabras que faltan.",ko:"듣고 빈칸에 알맞은 동사를 쓰세요.",
  items:[
   {t:"Soy Stephanie y ___ de Estados Unidos.",a:[["vengo"]]},
   {t:"___ a vivir dos meses aquí porque estudio español…",a:[["voy"]]},
   {t:"Hago muchas cosas: ___ a clase, ___ música…",a:[["voy"],["oigo"]]},
   {t:"Ajá… ¿Y ___ que ___ de Estados Unidos?",a:[["dices"],["vienes"]]}
  ]},
 {type:"fill",label:"B",instr:"Escribe los verbos de la actividad anterior en su lugar correspondiente (venir, oír, ir, decir).",ko:"각 동사의 현재형을 쓰세요. (yo · tú · él · nosotros · vosotros · ellos)",
  items:[
   row6("venir",["vengo","vienes","viene","venimos","venís","vienen"],["yo","tú","él","nosotros","vosotros","ellos"]),
   row6("oír",["oigo","oyes","oye","oímos","oís","oyen"],["yo","tú","él","nosotros","vosotros","ellos"]),
   row6("ir",["voy","vas","va","vamos","vais","van"],["yo","tú","él","nosotros","vosotros","ellos"]),
   row6("decir",["digo","dices","dice","decimos","decís","dicen"],["yo","tú","él","nosotros","vosotros","ellos"])
  ]},
 {type:"open",label:"C",instr:"¿En qué se diferencian estos verbos de los de la actividad 6 B?",ko:"(말하기) 6B의 동사들과 어떤 점이 다른지 써 보세요.",
  items:[{q:"Diferencia:",model:"Estos verbos tienen dos irregularidades: la primera persona (yo) y también otras formas (por ejemplo: tú vienes, ellos vienen; yo digo, tú dices)."}]}
]},
{id:"4-8",num:"8",sec:O,title:"Esta es mi calle",page:78,acts:[
 {type:"fill",label:"A",audio:"1-29",instr:"Escucha la conversación entre Ramón y François, y completa con las palabras que faltan (demostrativos).",ko:"듣고 지시사(este/ese/aquel 계열)를 쓰세요.",
  items:[
   {no:"2a",t:"François, ¿dónde está el coche? ¿Es ___ de aquí?",a:[["este"]]},
   {no:"2b",t:"No, es ___ rojo de ahí.",a:[["ese"]]},
   {no:"3a",t:"¿ ___ es la Avenida de Andalucía?",a:[["esta"]]},
   {no:"3b",t:"No, es ___ .",a:[["esa"]]},
   {no:"4a",t:"Ramón, ¿ ___ chica es la novia de Alex?",a:[["esa"]]},
   {no:"4b",t:"No. Es ___ chica de allí, la del vestido rojo que está en ___ mesa.",a:[["aquella"],["aquella"]]}
  ]},
 {type:"fill",label:"B",instr:"Completa el cuadro de los demostrativos.",ko:"지시사 표를 완성하세요. (남성/여성 · 단수/복수)",
  items:[
   {t:"Masculino singular: ___ · ___ · ___ (cerca / medio / lejos)",a:[["este"],["ese"],["aquel"]]},
   {t:"Masculino plural: ___ · ___ · ___",a:[["estos"],["esos"],["aquellos"]]},
   {t:"Femenino singular: ___ · ___ · ___",a:[["esta"],["esa"],["aquella"]]},
   {t:"Femenino plural: ___ · ___ · ___",a:[["estas"],["esas"],["aquellas"]]}
  ]}
]},
{id:"4-9",num:"9",sec:O,title:"Un piso como nuevo",page:79,acts:[
 {type:"match",label:"A",instr:"François y Ramón compran muebles, electrodomésticos y objetos nuevos para el salón y la cocina de su piso. Clasifica cada objeto en la habitación adecuada.",ko:"각 물건이 거실(salón)에 어울리는지 부엌(cocina)에 어울리는지 고르세요.",cols:true,
  opts:["Salón","Cocina"],
  items:[{l:"la alfombra",a:0},{l:"la mesa de centro",a:0},{l:"el televisor",a:0},{l:"la tostadora",a:1},{l:"la lavadora",a:1},{l:"la cafetera",a:1},{l:"la nevera",a:1},{l:"el microondas",a:1},{l:"la vitrocerámica",a:1},{l:"la lámpara de pie",a:0},{l:"la estantería",a:0},{l:"el sofá",a:0}]},
 {type:"check",label:"B",audio:"1-30",instr:"Escucha a Ramón y marca los objetos que nombra en el cuarto de baño.",ko:"듣고 라몬이 욕실에서 언급한 물건을 모두 고르세요.",
  opts:["lavabo","armario","espejo","ducha","váter","bidé","bañera","lavadora","sofá","cama"],a:[0,1,2,3,4,5]},
 {type:"open",label:"C",instr:"En grupos, pensad en otros muebles, electrodomésticos u objetos que hay normalmente en las siguientes habitaciones: salón, cocina, baño.",ko:"(말하기·작문) 각 방에 보통 있는 다른 물건을 더 써 보세요.",
  items:[{q:"Salón / Cocina / Baño:",model:"Salón: sofá, televisión, mesa. Cocina: horno, nevera, fregadero. Baño: toalla, ducha, espejo."}]}
]},
{id:"4-gram",num:"+",sec:O,title:"Gramática: verbos irregulares",page:81,acts:[
 {type:"fill",instr:"Presente de verbos irregulares: completa con la forma adecuada.",ko:"(문법 정리 연습) 괄호 속 동사를 현재형으로 쓰세요.",cols:true,
  items:[
   {t:"saber — yo ___",a:[["sé"]]},{t:"saber — tú ___",a:[["sabes"]]},{t:"saber — nosotros ___",a:[["sabemos"]]},
   {t:"ir — yo ___",a:[["voy"]]},{t:"ir — ustedes ___",a:[["van"]]},{t:"ir — nosotros ___",a:[["vamos"]]},
   {t:"decir — vosotros ___",a:[["decís"]]},{t:"oír — nosotros ___",a:[["oímos"]]},{t:"venir — vosotros ___",a:[["venís"]]}
  ]},
 {type:"fill",instr:"IR + medio de transporte: completa con en / a.",ko:"교통수단 앞에는 en, 걸어서는 a pie.",
  items:[{t:"Voy ___ coche al trabajo.",a:[["en"]]},{t:"Vamos ___ pie mejor que en autobús.",a:[["a"]]},{t:"Ellos van ___ metro.",a:[["en"]]}]}
]},
/* ===== PRÁCTICA ===== */
{id:"4-10",num:"10",sec:P,title:"Macarena es única",page:82,acts:[
 {type:"fill",instr:"Macarena, una exnovia de Ramón, le envía algunas «fotos» de su nueva vida sin él. Escribe todo lo que hace. Usa los verbos del cuadro en presente (salir, hacer, dar, conocer, ir, traer, venir, poner).",ko:"빈칸에 알맞은 동사를 현재형으로 쓰세요.",
  bank:["salir","hacer","dar","conocer","ir","traer","venir","poner"],
  items:[
   {no:"1",t:"Macarena y su compañera de piso ___ una ensalada muy rica para comer.",a:[["hacen"]]},
   {no:"2",t:"Macarena ___ en autobús al centro para trabajar.",a:[["va"]]},
   {no:"3",t:"Macarena y sus amigos ___ por la noche a tomar algo.",a:[["salen"]]},
   {no:"4",t:"Los padres de Macarena ___ a la ciudad para visitarla.",a:[["vienen"]]},
   {no:"5",t:"Clara, Nuria y Macarena ___ la bebida a la fiesta de Marta.",a:[["traen"]]},
   {no:"6",t:"Tú y Macarena ___ a mucha gente de otros países del mundo.",a:[["conocéis"]]},
   {no:"7",t:"Macarena es pinchadiscos y ___ música en la discoteca Cero.",a:[["pone"]]},
   {no:"8",t:"Juan y yo ___ un regalo a Macarena porque es su cumpleaños.",a:[["damos"]]}
  ]}
]},
{id:"4-11",num:"11",sec:P,title:"El barrio de Ramón y François",page:83,acts:[
 {type:"match",label:"A",instr:"Este es el barrio de Ramón y François. Relaciona los lugares de la lista con su significado.",ko:"장소 이름과 한국어 뜻을 연결하세요.",cols:true,
  opts:["버스 정류장","영화관","가판대(키오스크)","학교","박물관","쇼핑센터","보건소(의료센터)","도서관","극장","공중전화 부스","우체국","카페","현금자동인출기(ATM)"],
  items:[{no:"1",l:"una parada de autobús",a:0},{no:"2",l:"un cine",a:1},{no:"3",l:"un quiosco",a:2},{no:"4",l:"un colegio",a:3},{no:"5",l:"un museo",a:4},{no:"6",l:"un centro comercial",a:5},{no:"7",l:"un centro de salud",a:6},{no:"8",l:"una biblioteca",a:7},{no:"9",l:"un teatro",a:8},{no:"10",l:"una cabina de teléfono",a:9},{no:"11",l:"una oficina de correos",a:10},{no:"12",l:"una cafetería",a:11},{no:"13",l:"un cajero automático",a:12}]},
 {type:"open",label:"B",instr:"Completad la lista con otros lugares que aparecen en el dibujo (farmacia, supermercado, parque, estación de metro…). Comentadlo en clase.",ko:"(말하기) 그림에 나오는 다른 장소를 더 써 보세요.",
  items:[{q:"Otros lugares:",model:"una farmacia, un supermercado, un parque, una estación de metro, un garaje."}]}
]},
{id:"4-12",num:"12",sec:C,title:"¿De quién es?",page:84,acts:[
 {type:"fill",instr:"François necesita ordenar todas estas cosas. Completa las oraciones con el posesivo adecuado (modelo: El DVD es de Carmen → Es su DVD).",ko:"소유형용사(mi/tu/su/nuestro/vuestro…)를 알맞게 쓰세요.",
  items:[
   {no:"1",t:"El libro no es de Paco, es ___ libro.",a:[["mi","su","tu","vuestro"]]},
   {no:"2",t:"No son mis llaves. Son de Paco. Son ___ llaves.",a:[["sus"]]},
   {no:"3",t:"El cuaderno es de Jorge. Es ___ cuaderno.",a:[["su"]]},
   {no:"4",t:"La foto es de Luisa, mi exnovia. Es ___ foto.",a:[["su"]]},
   {no:"5",t:"La baraja de cartas es de Diego y mía. Es ___ baraja de cartas.",a:[["nuestra"]]},
   {no:"6",t:"El diccionario es del profesor. Es ___ diccionario.",a:[["su"]]},
   {no:"7",t:"Las carpetas no son de Clara, son ___ carpetas.",a:[["mis","tus","sus","vuestras"]]},
   {no:"8",t:"El iPhone es de Rafa y su novia. Es ___ iPhone.",a:[["su"]]},
   {no:"9",t:"El portátil es de Agustín y Clara. Es ___ portátil.",a:[["su"]]}
  ]}
]},
{id:"4-13",num:"13",sec:C,title:"¿Está Ramón?",page:84,acts:[
 {type:"fill",audio:"1-31",instr:"Ramón no puede vivir sin teléfono. Escucha y completa estos diálogos con las fórmulas de la ficha: ¿Sí? / ¿Dígame? / ¿Quién es? / Ahora se pone.",ko:"전화 표현을 듣고 빈칸을 채우세요.",
  items:[
   {no:"1",t:"Diálogo 1: ¿ ___ ? — Hola, Ramón.",a:[["quién es"]]},
   {no:"2",t:"Diálogo 2: ¿ ___ ? — Ramón, soy Pablo, tu dentista…",a:[["diga","dígame","sí"]]},
   {no:"3a",t:"Diálogo 3: ¿Señora García? — ¿ ___ ? ¿ ___ ?",a:[["sí"],["dígame"]]},
   {no:"3b",t:"Ah, muy bien. Espera un momento, ___ .",a:[["ahora se pone"]]}
  ]}
]},
{id:"4-14",num:"14",sec:P,title:"Un poco de ortografía: ¿B o V?",page:85,acts:[
 {type:"fill",instr:"Completa las palabras con B o V según corresponda.",ko:"b 또는 v를 쓰세요.",cols:true,
  items:[
   {no:"1",t:"___ ino",a:[["v"]]},{no:"2",t:"___ arcelona",a:[["b"]]},{no:"3",t:"___ oca",a:[["b"]]},{no:"4",t:"___ ocadillo",a:[["b"]]},{no:"5",t:"___ eso",a:[["b"]]},
   {no:"6",t:"___ erde",a:[["v"]]},{no:"7",t:"nu ___ e",a:[["b"]]},{no:"8",t:"___ illete",a:[["b"]]},{no:"9",t:"u ___ as",a:[["v"]]},{no:"10",t:"___ aso",a:[["v"]]}
  ]}
]},
{id:"4-15",num:"15",sec:P,title:"Casas del mundo",page:85,acts:[
 {type:"match",label:"A",instr:"Los chicos de la clase descubren en la página web algunas viviendas curiosas. Relaciona cada lugar con su tipo de vivienda.",ko:"장소와 그곳의 독특한 주거 형태를 연결하세요.",
  opts:["casas pintadas de colores","casas colgantes","casas individuales y grandes","casas cueva","barcos"],
  items:[{l:"La Habana (Cuba)",a:0},{l:"Cuenca (España)",a:1},{l:"Estados Unidos",a:2},{l:"Granada (España)",a:3},{l:"Holanda",a:4}]},
 {type:"open",label:"B",instr:"¿Cómo es la casa típica de tu país o de tu región? ¿Hay algún tipo de casa original? Coméntalo con tus compañeros.",ko:"(말하기) 한국의 전형적인 집을 소개해 보세요.",
  items:[{q:"En mi país…",model:"En mi país mucha gente vive en apartamentos grandes y modernos. La casa tradicional se llama hanok y es de madera."}]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"4-16",num:"16",sec:C,title:"Barrios famosos",page:86,acts:[
 {type:"choice",label:"A",instr:"Lee los textos del Foro latino (Malasaña y La Boca) y contesta: verdadero o falso.",ko:"본문(p.86)을 읽고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"Malasaña está en Buenos Aires.",o:VF,a:1},
   {q:"La plaza Dos de Mayo se llama así por la revolución popular de 1808.",o:VF,a:0},
   {q:"En Malasaña se puede ir de compras y salir a cenar.",o:VF,a:0},
   {q:"La Boca es el barrio del equipo de fútbol Boca Juniors.",o:VF,a:0},
   {q:"En La Boca no hay restaurantes ni música.",o:VF,a:1},
   {q:"Caminito es una de las calles más populares de La Boca.",o:VF,a:0}
  ]},
 {type:"open",label:"B–C",instr:"¿Qué diferencias encontráis entre los dos barrios? ¿Cuál os gusta más? Prepara una presentación sobre un barrio muy famoso de tu país.",ko:"(말하기·작문) 두 동네를 비교하고, 우리나라의 유명한 동네를 소개해 보세요.",
  items:[{q:"¿Dónde está? ¿Por qué es famoso? ¿Qué calles importantes tiene?",model:"Hongdae está en Seúl. Es famoso por la música y los jóvenes. Hay muchos cafés, tiendas y discotecas."}]}
]},
{id:"4-17",num:"17",sec:C,title:"Un lugar favorito…",page:87,acts:[
 {type:"match",label:"A",instr:"François y Ramón participan en un foro donde la gente elige su lugar favorito de la ciudad. Lee los comentarios y relaciona.",ko:"누구의 이야기인지 연결하세요.",
  opts:["Marisa (librería Más Libros)","Raúl (Museo de Arte Contemporáneo)","François y Ramón (bar Liceo)"],
  items:[{l:"Es estudiante de Arte.",a:1},{l:"Lee mucho y puede ir a pie desde su casa.",a:0},{l:"Allí conocen a gente de todos los países.",a:2},{l:"Está en la calle Central.",a:0},{l:"Está al lado de la catedral.",a:1},{l:"Hay música rock, pop, tecno…",a:2}]},
 {type:"open",label:"B–D",instr:"¿Hay sitios similares en el lugar donde estudias español? Elegid vuestro lugar favorito y diseñad la ruta por la ciudad para un fin de semana perfecto.",ko:"(말하기·작문) 완벽한 주말 코스를 만들어 보세요. (sábado/domingo: por la mañana, por la tarde, por la noche)",
  items:[{q:"Sábado por la mañana: … / Domingo por la tarde: …",model:"Sábado por la mañana visitamos el museo. Por la tarde vamos de compras. Por la noche cenamos en un restaurante."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"4-x1",num:"1",sec:"¡extra! Contextos",title:"El piso de Kenzo",page:88,acts:[
 {type:"fill",label:"A",audio:"1-32",instr:"Kenzo, un amigo de Ramón y François, llama por teléfono para buscar piso. Escucha los diálogos y completa con las palabras que faltan.",ko:"듣고 빈칸을 채우세요. (Piso 1 / Piso 2)",
  items:[
   {t:"Piso 1: ¿El piso está en el ___ ?",a:[["centro"]]},
   {t:"Piso 1: Es un piso muy ___ . Tiene cuatro ___ .",a:[["grande"],["habitaciones"]]},
   {t:"Piso 1: No, es un piso ___ , pero está como nuevo.",a:[["antiguo"]]},
   {t:"Piso 2: Es un piso con dos habitaciones, ___ , salón y ___ .",a:[["cocina"],["terraza"]]},
   {t:"Piso 2: ¿Tiene ___ a Internet?",a:[["conexión"]]},
   {t:"Piso 2: Es un piso muy ___ y con todos los ___ nuevos.",a:[["luminoso"],["muebles"]]}
  ]},
 {type:"choice",label:"B",instr:"¿En qué piso crees que va a vivir Kenzo? (Kenzo necesita: piso cerca de la escuela, Internet para su trabajo, no hablar japonés.)",ko:"켄조는 어느 집에 살게 될까요?",
  items:[{q:"Creo que va a vivir en el piso…",o:["1","2"],a:1}]}
]},
{id:"4-x2",num:"2",sec:"¡extra! Práctica",title:"Solo en casa",page:89,acts:[
 {type:"fill",label:"A",instr:"François está solo en casa durante el fin de semana. Decide organizar una fiesta con todos sus amigos. Completa los diálogos con la forma adecuada del presente.",ko:"괄호 속 동사를 현재형으로 쓰세요.",
  items:[
   {t:"1. Por favor, me (dar, tú) ___ el móvil de Tony… Es que no (tener, yo) ___ su número guardado.",a:[["das"],["tengo"]]},
   {t:"2. Oye, Tony, tú (traer) ___ la música para la fiesta porque en casa solo (tener, yo) ___ música clásica.",a:[["traes"],["tengo"]]},
   {t:"2. Vale, pero tú (poner) ___ la comida, ¿eh?",a:[["pones"]]}
  ]},
 {type:"match",label:"B",instr:"Fíjate en las conversaciones del ejercicio anterior y marca la posibilidad correcta: ¿«Oiga» o «Oye» se usa con tú o con usted?",ko:"Oiga와 Oye는 각각 tú / usted 중 어느 쪽에 쓸까요?",cols:true,
  opts:["tú","usted"],
  items:[{l:"Oiga",a:1},{l:"Oye",a:0}]},
 {type:"open",label:"3",instr:"Hoy no salgo. Estás chateando con Ramón y otros amigos. Responde con la forma correcta del presente (sí / salir / fiesta; sí / conocer; no / porque…).",ko:"(자유 작문) 친구들의 질문에 현재형으로 대답해 보세요.",
  items:[
   {q:"Ramón: Hoy no salgo porque estoy muy cansado… Tú: (sí / salir / fiesta)",model:"Yo sí salgo a la fiesta."},
   {q:"Miguel: ¿Conoces alguna discoteca para bailar música electrónica? Tú: (sí / conocer)",model:"Sí, conozco una. Se llama Sol y está en el centro."},
   {q:"Marcos: ¿Vienes al cine? Tú: (no / salir / con amigos)",model:"No, salgo con amigos."}
  ]}
]},
{id:"4-x3",num:"4",sec:"¡extra! En comunicación",title:"Tienes un mensaje",page:90,acts:[
 {type:"fill",instr:"Completa estos mensajes para François con el posesivo adecuado.",ko:"괄호 속 의미에 맞는 소유형용사를 쓰세요.",
  items:[
   {no:"1",t:"François, el sábado salimos con (de nosotros) ___ amigos al cine.",a:[["nuestros"]]},
   {no:"2a",t:"Hola, soy Ana, (de ti) ___ compañera de clase…",a:[["tu"]]},
   {no:"2b",t:"¿Cuál es el correo electrónico de (de nosotros) ___ profesor?",a:[["nuestro"]]},
   {no:"3",t:"Voy a tu fiesta del viernes, pero, ¿cuál es (de vosotros) ___ dirección?",a:[["vuestra"]]},
   {no:"4",t:"Voy con (de mí) ___ amigos a ver el partido de fútbol en el bar de Jaime…",a:[["mis"]]},
   {no:"5a",t:"Esta noche salimos con Claudia y (de ella) ___ hermana a Disco Sol.",a:[["su"]]},
   {no:"5b",t:"Vamos en (de ellas) ___ coche.",a:[["su"]]},
   {no:"6a",t:"Por favor, François, tú traes (de ellos) ___ cedés a la fiesta.",a:[["sus"]]},
   {no:"6b",t:"Están en (de ti) ___ casa.",a:[["tu"]]}
  ]},
 {type:"open",label:"5",instr:"Al teléfono: hablad por teléfono en parejas (invitar a cenar, preguntar por la próxima fiesta, avisar de que no hay clase, comprar una entrada).",ko:"(말하기) 전화 역할극: 짝과 상황을 골라 대화를 써 보세요.",
  items:[{q:"Escribe una conversación telefónica breve:",model:"— ¿Dígame? — Hola, soy Ana. ¿Quieres cenar conmigo el viernes? — Sí, claro. ¿A qué hora? — A las nueve en el restaurante Sol."}]}
]},
{id:"4-x4",num:"6",sec:"¡extra! En comunicación",title:"Nuestro barrio favorito",page:91,acts:[
 {type:"open",instr:"En parejas vais a decidir cómo es vuestro barrio favorito (es un barrio…, características, un barrio sin…, un barrio con…, actividades, situación). Después presentad vuestra propuesta.",ko:"(자유 작문) 이상적인 동네를 설계해 소개해 보세요.",
  items:[{q:"Nuestro barrio favorito está en … porque …",model:"Nuestro barrio favorito está en el centro de la ciudad porque es divertido y cultural. Es un barrio sin tráfico y con muchos restaurantes vegetarianos."}]}
]}
]};
})();
