window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
const row8=(verb,f)=>({t:`${verb}: yo ___ · tú ___ · usted ___ · él/ella ___ · nosotros ___ · vosotros ___ · ustedes ___ · ellos ___`,a:f.map(x=>[x])});
window.UNITS[6]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"6-1",num:"1",sec:S,title:"Hoy no me levanto",page:113,acts:[
 {type:"open",label:"A",instr:"En clase, Laura y sus estudiantes leen el test «¿Eres una persona activa?» (8 preguntas: ¿Te levantas temprano los fines de semana? ¿Haces deporte? ¿Qué haces cuando te despiertas? ¿Puedes hacer dos cosas al mismo tiempo? ¿Te acuestas tarde a menudo? ¿Sueles hacer un plan para el día? ¿Puedes pasar un día entero en casa?). ¿Te atreves a contestar?",ko:"(자유 작문) 테스트(p.113)의 질문 3개 이상에 자신의 답을 완전한 문장으로 쓰세요.",
  items:[{q:"Mis respuestas:",model:"Me levanto tarde los fines de semana. Hago deporte normalmente una vez a la semana. Cuando me despierto, duermo cinco minutos más."}]},
 {type:"open",label:"B",instr:"En parejas comparad vuestros resultados. ¿Cómo es tu compañero: activo, pasivo o vago? Justifica tu respuesta.",ko:"(말하기·작문) 짝은 active / pasivo / vago 중 어떤 사람인지 이유와 함께 쓰세요.",
  items:[{q:"Mi compañero es … porque …",model:"Mi compañero es activo porque se levanta temprano y hace deporte todos los fines de semana."}]}
]},
{id:"6-1c",num:"1",sec:S,title:"El más activo, el más pasivo, el más vago",page:114,acts:[
 {type:"open",label:"C",instr:"Ahora, haced el test en grupo y decidid quién es el más activo, el más pasivo y el más vago de la clase.",ko:"(말하기) 반에서 가장 활동적/수동적/게으른 사람을 정해 보세요.",
  items:[{q:"El más activo es … porque …",model:"El más activo es Ana porque se levanta a las seis y hace deporte todos los días."}]}
]},
{id:"6-2",num:"2",sec:S,title:"Día libre",page:114,acts:[
 {type:"choice",audio:"2-01",instr:"Evelyn es una de las chicas más activas y deportistas de la clase. Escucha algunas de sus actividades y contesta a las preguntas.",ko:"듣고 알맞은 답을 고르세요.",
  items:[
   {q:"1. ¿A qué hora se levanta Evelyn?",o:["A las siete","A las ocho","A las nueve"],a:1},
   {q:"2. ¿Qué hace cuando se levanta?",o:["Desayuna solo un café","Hace yoga","Se ducha y se va"],a:0},
   {q:"3. ¿Qué actividad empieza a las nueve?",o:["El gimnasio","La clase de baile","El yoga"],a:0},
   {q:"4. ¿Con quién suele ir de compras?",o:["Con su madre","Con una amiga","Sola"],a:1},
   {q:"5. ¿Qué hace a la una de la tarde?",o:["Come","Queda con compañeros para tomar el aperitivo","Duerme la siesta"],a:1},
   {q:"6. ¿Cuántas veces a la semana tiene clases de baile?",o:["Una","Dos","Tres"],a:1},
   {q:"7. ¿Ve mucho la tele?",o:["Sí, muchas horas","No, solo las noticias o alguna película","Nunca"],a:1},
   {q:"8. ¿A qué hora se acuesta generalmente?",o:["A las diez","A las once","A las doce"],a:1}
  ]}
]},
{id:"6-3",num:"3",sec:O,title:"Ganar dinero",page:115,acts:[
 {type:"match",label:"A",instr:"Durante el verano Evelyn trabaja en una tienda de moda. ¿A qué horas crees que hace estas actividades? Relaciona las actividades con las horas. (Respuesta propuesta: orden lógico del día; el ejemplo 1→f ya está dado.)",ko:"활동과 시간을 연결하세요. (교재에 정답이 없어 논리적 일과 순서로 구성)",cols:true,
  opts:["a) nueve menos veinte de la mañana","b) ocho y media de la mañana","c) nueve de la mañana","d) nueve y media de la noche","e) ocho menos cuarto de la mañana","f) siete y media de la mañana","g) ocho de la tarde","h) ocho y cuarto de la mañana","i) tres de la tarde","j) once de la noche"],
  items:[{no:"1",l:"Se levanta a las…",a:5},{no:"2",l:"Se ducha a las…",a:4},{no:"3",l:"Desayuna a las…",a:7},{no:"4",l:"Sale de casa a las…",a:1},{no:"5",l:"Coge el autobús a las…",a:0},{no:"6",l:"Empieza a trabajar a las…",a:2},{no:"7",l:"Come a las…",a:8},{no:"8",l:"Sale del trabajo a las…",a:6},{no:"9",l:"Llega a casa a las…",a:3},{no:"10",l:"Se acuesta a las…",a:9}]},
 {type:"fill",label:"B",instr:"Completa la conjugación del verbo LEVANTARSE (me / te / se / nos / os).",ko:"재귀대명사 + 동사를 함께 쓰세요.",
  items:[row8("levantarse",["me levanto","te levantas","se levanta","se levanta","nos levantamos","os levantáis","se levantan","se levantan"])]},
 {type:"fill",label:"C",instr:"Los verbos como LEVANTARSE se llaman pronominales. Escribe el infinitivo pronominal de estos verbos de la actividad 3A.",ko:"재귀동사 원형을 쓰세요. (-se)",
  items:[
   {t:"ducha → ___",a:[["ducharse"]]},
   {t:"acuesta → ___",a:[["acostarse"]]},
   {t:"despierta → ___",a:[["despertarse"]]},
   {t:"viste → ___",a:[["vestirse"]]}
  ]}
]},
{id:"6-4",num:"4",sec:O,title:"En verano",page:116,acts:[
 {type:"match",label:"A",instr:"Lee las actividades que suelen hacer algunos compañeros de Evelyn en verano. ¿Quién es?",ko:"본문(p.116)을 읽고 알맞은 사람을 연결하세요.",cols:true,
  opts:["El chico que trabaja en un bar","El chico que va a fiestas y conciertos","La chica que hace natación","El chico que hace excursiones y es voluntario","La chica que juega al paddle y hace cursos","La chica que va al cine y lee libros"],
  items:[{l:"Suele trabajar un mes para conseguir dinero.",a:0},{l:"Los domingos siempre va a la playa y se relaja.",a:1},{l:"Prefiere la piscina y suele hacer un curso de natación.",a:2},{l:"Trabaja como voluntario.",a:3},{l:"Suele hacer algún curso de cocina, de música, de informática…",a:4},{l:"Suele leer más libros y conocer gente.",a:5}]},
 {type:"fill",label:"B",instr:"Completa la conjugación del verbo SOLER.",ko:"soler 활용을 쓰세요.",
  items:[row8("soler",["suelo","sueles","suele","suele","solemos","soléis","suelen","suelen"])]},
 {type:"fill",label:"B",instr:"El verbo SOLER es especial por su construcción y uso: completa.",ko:"빈칸을 채우세요. (soler + 동사 ___ / ___ 행동을 말할 때)",
  items:[
   {t:"SOLER + verbo en ___ .",a:[["infinitivo"]]},
   {t:"SOLER se usa para hablar de acciones ___ .",a:[["habituales","de costumbre","costumbres","frecuentes"]]}
  ]},
 {type:"fill",label:"C",instr:"Responde con las expresiones del ejemplo: yo también / yo tampoco / yo sí / yo no.",ko:"알맞은 표현을 쓰세요.",
  items:[
   {t:"> Yo suelo leer muchas novelas en verano. < Ah, yo ___ .",a:[["también"]]},
   {t:"> Yo no suelo hacer cursos en verano. < ¡Ah, y yo ___ !",a:[["tampoco"]]},
   {t:"> Yo nunca voy al parque de atracciones. < ¡Ah, pues yo ___ !",a:[["sí"]]},
   {t:"> Yo siempre tomo muchos helados en verano. < Yo ___ .",a:[["no"]]}
  ]}
]},
{id:"6-5",num:"5",sec:O,title:"Tiempo solidario",page:117,acts:[
 {type:"choice",label:"A",audio:"2-02",instr:"Fran, compañero de Evelyn, nos habla de una actividad que hace todos los veranos. Escucha y comprueba si las afirmaciones son verdaderas o falsas.",ko:"듣고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"1. Normalmente trabaja de cooperante.",o:VF,a:1},
   {q:"2. Colabora casi siempre en verano, en el mes de julio.",o:VF,a:1},
   {q:"3. A menudo trabaja con chicos.",o:VF,a:0},
   {q:"4. Muchos veranos colabora en países latinoamericanos.",o:VF,a:1},
   {q:"5. A veces participa en programas con personas mayores.",o:VF,a:0},
   {q:"6. Generalmente ayuda a los chicos con los estudios.",o:VF,a:1}
  ]},
 {type:"open",label:"B",instr:"¿Y tú? ¿Realizas acciones solidarias en tu tiempo libre? ¿Con qué frecuencia? (siempre / casi siempre / a menudo / normalmente / a veces / nunca)",ko:"(자유 작문) 빈도부사를 사용해 써 보세요.",
  items:[{q:"En mi tiempo libre…",model:"En mi tiempo libre a veces ayudo a mis vecinos. Normalmente no hago acciones solidarias, pero casi siempre colaboro en Navidad."}]}
]},
{id:"6-gram",num:"+",sec:O,title:"Gramática y léxico",page:118,acts:[
 {type:"match",instr:"Adverbios de frecuencia: ordena de más a menos frecuente. Relaciona cada adverbio con su porcentaje aproximado.",ko:"빈도부사와 대략적인 빈도를 연결하세요.",cols:true,
  opts:["100 %","90 %","70 %","50 %","30 %","10 %","0 %"],
  items:[{l:"siempre",a:0},{l:"casi siempre",a:1},{l:"normalmente",a:2},{l:"a veces",a:3},{l:"casi nunca",a:5},{l:"nunca",a:6}]},
 {type:"fill",instr:"Dormir / dormirse: completa.",ko:"dormir(완전한 행동) vs dormirse(행동의 시작): 알맞은 형태를 쓰세요.",
  items:[
   {t:"¿Cuántas horas ___ normalmente? — ___ ocho horas al día. (dormir, tú / yo)",a:[["duermes"],["duermo"]]},
   {t:"Estoy muy cansado: ___ de pie. (dormirse, yo)",a:[["me duermo"]]},
   {t:"Yo me acuesto y ___ rápidamente. (dormirse)",a:[["me duermo"]]}
  ]}
]},
/* ===== PRÁCTICA ===== */
{id:"6-6",num:"6",sec:P,title:"La entrevista",page:119,acts:[
 {type:"fill",label:"A",instr:"Evelyn y Kelly hablan con varios españoles sobre sus actividades cotidianas. Completa los textos con la forma correcta del presente. — Nuria, 28 años",ko:"괄호 속 동사를 현재형으로 쓰세요. (Nuria)",
  items:[
   {t:"Nuria, ¿a qué hora (levantarse, tú) ___ ?",a:[["te levantas"]]},
   {t:"¿Cuándo (acostarse, tú) ___ normalmente?",a:[["te acuestas"]]},
   {t:"Ah, ahora lo (entender, yo) ___ .",a:[["entiendo"]]}
  ]},
 {type:"fill",instr:"Amelia, 60 años.",ko:"Amelia",
  items:[
   {t:"Señora, ¿qué (hacer, usted) ___ por la mañana?",a:[["hace"]]},
   {t:"(Levantarse, yo) ___ a las ocho. Soy jubilada, pero (despertarse, yo) ___ muy pronto.",a:[["me levanto"],["me despierto"]]},
   {t:"(Peinarse, yo) ___ , (lavarse, yo) ___ los dientes y (vestirse, yo) ___ para salir a la calle.",a:[["me peino"],["me lavo"],["me visto"]]},
   {t:"(Preferir, yo) ___ pasear a primera hora. Nunca (quedarse) ___ en casa por la mañana.",a:[["prefiero"],["me quedo"]]}
  ]},
 {type:"fill",instr:"Sergio, 42 años.",ko:"Sergio",
  items:[
   {t:"Señor, ¿a qué hora (levantarse, usted) ___ normalmente?",a:[["se levanta"]]},
   {t:"A las siete. (Empezar, yo) ___ a trabajar a las ocho.",a:[["empiezo"]]},
   {t:"¿Y qué (hacer, usted) ___ a continuación?",a:[["hace"]]},
   {t:"Primero, (ducharse, yo) ___ , (arreglarse, yo) ___ , (desayunar, yo) ___ rápido y (irse, yo) ___ porque no (querer, yo) ___ llegar tarde.",a:[["me ducho"],["me arreglo"],["desayuno"],["me voy"],["quiero"]]},
   {t:"¿Cómo (divertirse, usted) ___ ?",a:[["se divierte"]]},
   {t:"(Escuchar, yo) ___ ópera, (jugar, yo) ___ al ajedrez… No (ver, yo) ___ la tele porque (aburrirse, ella) ___ muchísimo.",a:[["escucho"],["juego"],["veo"],["se aburre"]]}
  ]},
 {type:"fill",instr:"Santiago, 18 años.",ko:"Santiago",
  items:[
   {t:"Normalmente (vestirse, yo) ___ con ropa deportiva. No me (soler) ___ arreglar mucho. Solo (querer, yo) ___ estar cómodo.",a:[["visto"],["suelo"],["quiero"]]},
   {t:"¿Cómo (divertirse, tú) ___ ? — (Divertirse, yo) ___ como mucha gente de mi edad.",a:[["te diviertes"],["me divierto"]]},
   {t:"(Ir, yo) ___ al cine, (salir, yo) ___ con mis amigos, (jugar, yo) ___ al fútbol…",a:[["voy"],["salgo"],["juego"]]},
   {t:"¿A qué hora (acostarse, tú) ___ durante la semana? — A la una o la una y media porque (ver, yo) ___ la tele hasta muy tarde.",a:[["te acuestas"],["veo"]]}
  ]},
 {type:"open",label:"B",instr:"En parejas, responded a las preguntas sobre las entrevistas: ¿Quién se levanta antes? ¿A qué hora se suele acostar Santiago? ¿Quién se acuesta más tarde? ¿Cómo se divierte Sergio? ¿Quién no se queda en casa nunca por la mañana?",ko:"(말하기·작문) 인터뷰 내용으로 답하세요.",
  items:[{q:"Respuestas:",model:"Sergio se levanta antes (a las siete). Santiago se suele acostar a la una o la una y media. Sergio se divierte escuchando ópera y jugando al ajedrez. Amelia no se queda nunca en casa por la mañana."}]}
]},
{id:"6-7",num:"7",sec:P,title:"Soy un presumido",page:120,acts:[
 {type:"open",label:"A",instr:"Hugo, uno de los amigos de Evelyn, se cuida muchísimo. Observa las imágenes (afeitarse todos los días / ducharse por la mañana y por la noche / peinarse con mucha frecuencia / vestirse casi siempre con ropa elegante) y descríbelas con un verbo pronominal. ¿Crees que es presumido?",ko:"(자유 작문) 재귀동사를 사용해 그림을 설명하세요.",
  items:[{q:"Creo que Hugo es muy presumido porque…",model:"Creo que Hugo es muy presumido porque se afeita todos los días, se ducha por la mañana y por la noche, se peina con mucha frecuencia y casi siempre se viste con ropa elegante."}]},
 {type:"open",label:"B",instr:"Habla con tu compañero o compañera y averigua si es presumido o presumida (¿Te arreglas mucho para salir? ¿Te vistes con ropa elegante? ¿Te depilas? ¿Te pintas los labios? ¿Te preocupas por tu aspecto físico? ¿Te cuidas la cara con cremas? ¿Te maquillas?). Justifica tu opinión.",ko:"(말하기·작문) 친구가 멋쟁이인지 알아보고 의견을 쓰세요.",
  items:[{q:"Mi compañero/a es / no es presumido/a porque…",model:"Mi compañera no es presumida porque solo se arregla a veces para salir y nunca se maquilla."}]}
]},
{id:"6-8",num:"8",sec:P,title:"Nunca me baño",page:122,acts:[
 {type:"fill",label:"A",instr:"Evelyn y su compañero Fran chatean. Completa su conversación con los verbos en la forma correcta del presente.",ko:"괄호 속 동사를 현재형으로 쓰세요.",
  items:[
   {no:"1",t:"Fran: Nada, (aburrirse, yo) ___ y (querer, yo) ___ hablar con alguien.",a:[["me aburro"],["quiero"]]},
   {no:"2",t:"Evelyn: ¿No (ir, tú) ___ a trabajar hoy?",a:[["vas"]]},
   {no:"3",t:"Fran: Sí, (empezar, yo) ___ a las diez… Todos los días (acostarse, yo) ___ a las nueve, pero el sábado y el domingo no.",a:[["empiezo"],["me acuesto"]]},
   {no:"4",t:"Evelyn: Siempre (levantarse, yo) ___ a las siete o siete y media pero el domingo mis compañeros de piso y yo nos (soler) ___ levantar a las dos.",a:[["me levanto"],["solemos"]]},
   {no:"5",t:"Evelyn: Pero mi hermano (levantarse) ___ a las tres o tres y media.",a:[["se levanta"]]},
   {no:"6",t:"Evelyn: Sí, (quedarse, él) ___ dos semanas. Nosotros (divertirse) ___ mucho juntos; con él siempre (reírse, yo) ___ .",a:[["se queda"],["nos divertimos"],["me río"]]},
   {no:"7",t:"Evelyn: Solo tiene un problema, nunca (ducharse, él) ___ . Fran: ¿Nunca (ducharse, él) ___ ? ¿Por qué?",a:[["se ducha"],["se ducha"]]},
   {no:"8",t:"Evelyn: Bueno, quiero decir que no (soler) ___ ducharse porque (preferir) ___ bañarse.",a:[["suele"],["prefiere"]]},
   {no:"9",t:"Fran: ¡Ah! Ahora (entender, yo) ___ . Evelyn: Yo creo que si (bañarse, nosotros) ___ todos, nos arruinamos enseguida porque gastamos mucho en agua.",a:[["entiendo"],["nos bañamos"]]}
  ]},
 {type:"open",label:"B",instr:"Ahora tú chateas con Evelyn. Responde: ¿Qué prefieres, ducharte o bañarte? ¿Te diviertes mucho en la ciudad donde estudias español? ¿A qué hora te levantas entre semana? ¿Y el fin de semana? ¿A qué hora te sueles acostar el sábado?",ko:"(자유 작문) 에블린의 질문에 답하세요.",
  items:[{q:"Tus respuestas:",model:"Prefiero ducharme. Sí, me divierto mucho porque tengo amigos. Entre semana me levanto a las siete y el fin de semana a las diez. El sábado me suelo acostar a la una."}]}
]},
{id:"6-9",num:"9",sec:P,title:"Un poco de ortografía: ¿LL o Y?",page:123,acts:[
 {type:"fill",audio:"2-03",instr:"Completa las palabras con la letra adecuada (ll / y). Después escucha la audición.",ko:"ll 또는 y를 쓰세요.",cols:true,
  items:[
   {no:"1",t:"las ___ aves",a:[["ll"]]},{no:"2",t:"___ ate",a:[["y"]]},{no:"3",t:"no para ___ over",a:[["ll"]]},
   {no:"4",t:"___ o me levanto",a:[["y"]]},{no:"5",t:"en mi ca___ e",a:[["ll"]]},{no:"6",t:"un ___ o ___ ó rosa",a:[["y"],["y"]]},
   {no:"7",t:"un co___ ar",a:[["ll"]]},{no:"8",t:"el cue___ o",a:[["ll"]]},{no:"9",t:"___ eso",a:[["y"]]}
  ]}
]},
{id:"6-10",num:"10",sec:P,title:"Dos chicas muy diferentes",page:124,acts:[
 {type:"open",label:"A",instr:"Evelyn y Sophia son dos amigas muy distintas. Observa las imágenes y explica qué suele hacer cada una. (Evelyn: estudiar en la biblioteca, leer, escuchar música, hacer deporte. Sophia: ver mucho la tele, jugar con el ordenador, comer comida basura, dormir en el sofá.)",ko:"(자유 작문) soler + 동사원형으로 각자가 보통 하는 일을 쓰세요.",
  items:[{q:"Evelyn suele… / Sophia suele…",model:"Evelyn suele estudiar en la biblioteca, leer y hacer deporte. Sophia suele ver mucho la tele, jugar con el ordenador y dormir en el sofá."}]},
 {type:"open",label:"B",instr:"¿Y tú? Completa las oraciones con tus hábitos. Usa SOLER + infinitivo. 1. Después de clase, mis amigos y yo… 2. Durante el fin de semana yo nunca… 3. Cuando me aburro, casi siempre… 4. En clase mis compañeros y yo… 5. Durante la semana, por la noche, … 6. En mi país casi nunca… 7. En España, a veces, … 8. Cuando viajo, normalmente…",ko:"(자유 작문) soler를 사용해 8문장을 쓰세요.",
  items:[{q:"Tus frases:",model:"Después de clase, mis amigos y yo solemos tomar un café. Cuando me aburro, casi siempre suelo ver la televisión. En España, a veces, suelo tomar tapas."}]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"6-11",num:"11",sec:C,title:"¿Dónde compran los españoles?",page:126,acts:[
 {type:"choice",instr:"Lee el texto «De compras» y contesta.",ko:"본문(p.126)을 읽고 O/X로 답하세요.",
  items:[
   {q:"El Rastro es un mercado al aire libre en Madrid.",o:VF,a:0},
   {q:"En el Rastro solo se pueden comprar cosas nuevas.",o:VF,a:1},
   {q:"Después de visitar el Rastro, muchos visitantes toman unas cañas y unas tapas.",o:VF,a:0},
   {q:"La calle principal del Rastro es Ribera de Curtidores.",o:VF,a:0},
   {q:"Hay rastros en casi todas las ciudades de España los sábados o los domingos.",o:VF,a:0},
   {q:"En las tiendas pequeñas de toda la vida el trato es menos personal que en los grandes almacenes.",o:VF,a:1}
  ]},
 {type:"open",instr:"¿Hay rastro en tu ciudad? ¿Dónde prefieres comprar tú?",ko:"(자유 작문)",
  items:[{q:"En mi ciudad…",model:"En mi ciudad hay un mercado de segunda mano los domingos. Yo prefiero comprar en las tiendas pequeñas porque el trato es más personal."}]}
]},
{id:"6-12",num:"12",sec:C,title:"¿Un disco o un cuaderno?",page:127,acts:[
 {type:"fill",label:"A",instr:"¡Vamos de compras con Evelyn! Completa los diálogos con las oraciones: ¿Tienen…? / ¿Qué desea? / ¡Hola, buenas tardes! / ¿Cuál prefiere? / ¿Cuánto vale? / ¿Cuánto es?",ko:"알맞은 표현을 넣으세요.",
  items:[
   {t:"Diálogo 1: — Un cuaderno. — ¿ ___ ? — Ese rojo y verde.",a:[["cuál prefiere"]]},
   {t:"Diálogo 1: — Aquí tiene. — ¿ ___ ? — Son dos euros.",a:[["cuánto vale","cuánto es"]]},
   {t:"Diálogo 2: — ¡Hola! ¿Qué desea? — ¿ ___ el último disco de U2?",a:[["tienen"]]},
   {t:"Diálogo 3: — Buenas tardes, ¿ ___ ? — Quiero una mochila, por favor.",a:[["qué desea"]]},
   {t:"Diálogo 3: — La azul… La más grande. ¿ ___ ? — Está en oferta. 18 euros.",a:[["cuánto vale","cuánto es"]]}
  ]},
 {type:"choice",label:"B",audio:"2-04",instr:"Escucha el diálogo entre Evelyn y la dependienta de unos grandes almacenes y marca el objeto que compra.",ko:"에블린이 산 물건을 고르세요.",
  items:[{q:"Compra un…",o:["libro","DVD"],a:1}]},
 {type:"fill",instr:"…porque en la conversación hablan de…",ko:"왜 그렇게 생각하나요? 빈칸을 채우세요.",
  items:[{t:"Hablan de una ___ de terror (regalo para su novio).",a:[["película","pelicula"]]}]}
]},
{id:"6-13",num:"13",sec:C,title:"Toda la vida es cine",page:128,acts:[
 {type:"match",label:"A",instr:"Fran participa en el blog «Amigos del cine español». Lee las preferencias de estos tres internautas y explica a qué tipo de películas se refieren.",ko:"각 사람이 좋아하는 영화 장르를 연결하세요.",cols:true,
  opts:["Romántico","Ciencia ficción","Terror","Drama","Comedia","Suspense","Musical","Animación","Acción","Histórico"],
  items:[{l:"Blanca: quiere ver películas para reírse, historias divertidas, sin dramas.",a:4},{l:"Christian: prefiere historias de extraterrestres, del espacio, del futuro.",a:1},{l:"Almudena: sus favoritas son las historias de amor.",a:0}]},
 {type:"open",label:"B",instr:"Explica a tus compañeros el argumento y los datos más importantes de una película famosa de tu país o de tu película preferida y recomiéndala (título, director, actores, argumento, género).",ko:"(말하기·작문) 좋아하는 영화를 소개하세요.",
  items:[{q:"La película se llama… El director es… Es una película… La recomiendo porque…",model:"La película se llama «Parasite». El director es Bong Joon-ho. Es una película de suspense. La recomiendo porque es muy original."}]}
]},
{id:"6-14",num:"14",sec:C,title:"Radio pop",page:129,acts:[
 {type:"fill",label:"A",audio:"2-05",instr:"Evelyn casi siempre escucha Radio Pop, su emisora musical preferida. Completa la sección de noticias con las palabras que faltan: disco, concierto, grupo, cantante, canciones.",ko:"알맞은 단어를 쓰세요. (B: 듣고 확인)",
  bank:["disco","concierto","grupo","cantante","canciones"],
  items:[
   {no:"1",t:"El próximo mes de mayo Shakira, la famosa ___ colombiana de música pop, actúa en un ___ único en Madrid.",a:[["cantante"],["concierto"]]},
   {no:"2",t:"El ___ Maná empieza su gira de conciertos el día 2 de junio.",a:[["grupo"]]},
   {no:"3",t:"Nuevo ___ de Enrique Iglesias. En este nuevo trabajo encontramos ___ en español y en inglés, y los temas románticos esperados por sus fans.",a:[["disco"],["canciones"]]}
  ]},
 {type:"open",label:"C",instr:"En pequeños grupos, buscad en Internet información sobre alguno de los grupos o cantantes y presentadla al resto de la clase.",ko:"(조사·발표) 가수/그룹 한 팀을 조사해 소개하세요.",
  items:[{q:"El cantante / grupo … es de … Toca / Hace música …",model:"Shakira es una cantante colombiana. Hace música pop. Tiene muchos fans en todo el mundo."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"6-x1",num:"1",sec:"¡extra! Contextos",title:"Un día en la vida de un vago",page:130,acts:[
 {type:"choice",instr:"Un amigo de Frank es el más vago de la clase. Lee esta presentación y contesta.",ko:"본문(p.130)을 읽고 O/X로 답하세요.",
  items:[
   {q:"Se levanta tarde siempre que puede.",o:VF,a:0},
   {q:"Se va a la oficina a las nueve en autobús.",o:VF,a:0},
   {q:"Nunca llega tarde a la oficina.",o:VF,a:1},
   {q:"Piensa que el estrés es bueno para la salud.",o:VF,a:1},
   {q:"Cena un bocadillo porque no quiere cocinar.",o:VF,a:0},
   {q:"Se acuesta a las diez.",o:VF,a:0}
  ]},
 {type:"open",instr:"Explica por qué esta persona es «poco trabajadora» o vaga.",ko:"(자유 작문) 이 사람이 왜 게으른지 설명하세요.",
  items:[{q:"Es vago porque…",model:"Es vago porque se levanta tarde, llega tarde a la oficina, hace las cosas con tranquilidad y no quiere cocinar."}]}
]},
{id:"6-x2",num:"2",sec:"¡extra! Práctica",title:"Un ejercicio para Evelyn",page:131,acts:[
 {type:"match",label:"A",instr:"Evelyn recibe un correo de su profesora con un ejercicio de repaso de algunos verbos. Ayúdala y relaciona el verbo con la foto correspondiente (1 🧔 peinándose, 2 😄, 3 🚰 manos, 4 😐 cansado, 5 🪒 pinzas, 6 👋, 7 🍊 en los ojos, 8 👔 poniéndose la camisa, 9 🛏️ almohada, 10 🪒 espuma, 11 🧴 toalla, 12 🛁, 13 💄, 14 🪑).",ko:"사진(이모지 설명)에 맞는 동사를 연결하세요. (교재 정답 없음 — 자체 답안)",cols:true,
  opts:["aburrirse","lavarse","secarse","depilarse","despedirse","divertirse","peinarse","afeitarse","reírse","sentarse","bañarse","acostarse","vestirse","maquillarse"],
  items:[{no:"1",l:"hombre con peine en el pelo",a:6},{no:"2",l:"chica sonriendo con la boca abierta",a:8},{no:"3",l:"manos bajo el grifo",a:1},{no:"4",l:"hombre con la mano en la cabeza, cansado en clase",a:0},{no:"5",l:"chica con pinzas en la ceja",a:3},{no:"6",l:"chico moviendo la mano",a:4},{no:"7",l:"dos chicas con naranjas sobre los ojos",a:5},{no:"8",l:"hombre poniéndose la camisa",a:12},{no:"9",l:"chica con almohada, bostezando",a:11},{no:"10",l:"hombre con espuma y cuchilla",a:7},{no:"11",l:"hombre con toalla roja",a:2},{no:"12",l:"mujer en la bañera",a:10},{no:"13",l:"mujer con brocha de maquillaje",a:13},{no:"14",l:"mujer en una silla de oficina",a:9}]},
 {type:"open",label:"B",instr:"Ahora usa los verbos que no son de aseo personal (aburrirse, despedirse, divertirse, reírse, sentarse, acostarse) para hablar sobre la clase de español.",ko:"(자유 작문) 스페인어 수업에 대해 쓰세요.",
  items:[{q:"En clase…",model:"En clase siempre me divierto porque las clases son amenas. Nunca me siento en la primera fila de la clase."}]}
]},
{id:"6-x3",num:"3",sec:"¡extra! En comunicación",title:"www.radiopop.es",page:132,acts:[
 {type:"choice",label:"A",instr:"Evelyn encuentra en la página de Radio Pop información sobre tres famosos cantantes españoles. Lee y contesta.",ko:"본문을 읽고 O/X로 답하세요.",
  items:[
   {q:"Chambao es una banda de Málaga.",o:VF,a:0},
   {q:"Chambao toca música rock clásico.",o:VF,a:1},
   {q:"Alejandro Sanz es conocido por sus canciones románticas.",o:VF,a:0},
   {q:"David Bisbal es conocido por su energía en los escenarios.",o:VF,a:0},
   {q:"Los tres artistas solo tienen conciertos en verano.",o:VF,a:1}
  ]},
 {type:"open",label:"B",instr:"¿Cómo te imaginas la vida de Alejandro Sanz? (un día en su vida, cuidar su voz, conciertos, diversión, estar atractivo)",ko:"(자유 작문) 알레한드로 산스의 하루를 상상해 쓰세요.",
  items:[{q:"Creo que…",model:"Creo que se levanta tarde, desayuna y ensaya con su guitarra. Suele cuidar su voz bebiendo agua. Normalmente tiene más conciertos en verano."}]},
 {type:"open",label:"C–D",instr:"¿Cuáles son vuestras preferencias musicales (flamenco, rock, pop, ópera, electrónica, hip hop, rap, reggae, punk, blues, jazz, disco, salsa, clásica, alternativa)? Habla con tu compañero sobre su grupo o cantante favorito.",ko:"(말하기·작문) 좋아하는 음악 장르와 가수를 소개하세요.",
  items:[{q:"Mi grupo / cantante favorito es…",model:"Prefiero el hip hop, y mi grupo favorito es BTS. Es de Corea. Hace música pop y hip hop. Tiene muchos fans en todo el mundo."}]}
]}
]};
})();
