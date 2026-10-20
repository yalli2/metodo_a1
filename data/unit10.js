window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
window.UNITS[10]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"10-1",num:"1",sec:S,title:"Así viajan los jóvenes españoles",page:191,acts:[
 {type:"choice",label:"A",instr:"Vamos a leer algunas notas sobre la forma de viajar de los jóvenes españoles. Según el texto, ¿verdadero o falso?",ko:"(자체 제작 O/X 문제) 본문을 읽고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"Muchos jóvenes prefieren pasar sus vacaciones fuera de España, especialmente en Europa.",o:VF,a:0},
   {q:"América es el destino preferido porque es barato.",o:VF,a:1},
   {q:"Un 40% de los jóvenes trabaja los fines de semana y ahorra para viajar.",o:VF,a:0},
   {q:"Una mayoría de jóvenes prefiere viajar en solitario.",o:VF,a:1},
   {q:"Algunos han tenido problemas con el transporte: retrasos, cancelaciones, averías…",o:VF,a:0},
   {q:"Cuando viajan, suelen llevar mucho equipaje.",o:VF,a:1}
  ]},
 {type:"open",label:"B",instr:"¿Qué os ha llamado más la atención? ¿Cuál es vuestra opinión? ¿Cuáles son vuestras preferencias cuando viajáis?",ko:"(말하기·작문) 가장 눈길을 끈 점, 의견, 여행 선호를 말해 보세요.",
  items:[{q:"Me ha llamado la atención que…",model:"Me ha llamado la atención que casi todos han estado en la playa. Yo prefiero viajar con amigos y en verano."}]},
 {type:"open",label:"C",instr:"Ahora, individualmente, completa la siguiente ficha (frecuencia, transporte, compañía, tipo de viaje, equipaje, época, vacaciones de este año, viajes en solitario).",ko:"(자유 작문) 여행 설문 8문항에 자기 답을 쓰세요.",
  items:[{q:"1. ¿Con qué frecuencia viajas? … 8. ¿Has viajado alguna vez solo?",model:"1. Viajo dos veces al año. 2. Prefiero el avión porque es rápido. 3. Suelo viajar con mi familia. 4. Prefiero ir por libre. 5. Llevo siempre mi móvil. 6. Me gusta viajar en verano. 7. Este año he estado en Japón. 8. No, nunca he viajado solo."}]},
 {type:"open",label:"D",instr:"En grupos, elaborad una lista con las ventajas y los inconvenientes de viajar (transporte, alojamiento, destino, acompañantes, equipaje). Usad: Para mí… / Yo creo que… / Estoy de acuerdo / No estoy de acuerdo…",ko:"(모둠 활동) 여행의 장점과 단점 목록을 만드세요.",
  items:[{q:"Ventajas / Inconvenientes",model:"Ventajas: conoces gente nueva; practicas idiomas; descubres culturas. Inconvenientes: es caro; hay retrasos; llevas mucho equipaje."}]}
]},
/* ===== OBSERVA Y APRENDE ===== */
{id:"10-2",num:"2",sec:O,title:"¡Ha sido increíble!",page:193,acts:[
 {type:"check",label:"B",instr:"Lee el correo de Kelly. Busca los verbos que tienen la misma estructura que HE VISITADO (haber + participio) y márcalos.",ko:"켈리의 이메일에서 he visitado와 같은 구조(haber + 과거분사)의 표현을 모두 고르세요.",
  opts:["me ha gustado","hemos salido","estoy muy contenta","hemos estado","es una ciudad","hemos entrado","ha sido","nos ha contado","tiene mucho ambiente","hemos vuelto"],
  a:[0,1,3,5,6,7,9]},
 {type:"fill",label:"C",instr:"Esta forma verbal está compuesta por dos palabras. La primera es el verbo HABER en presente. Completa su conjugación.",ko:"haber 현재형 활용을 완성하세요.",
  items:[
   {t:"Yo ___ · Tú ___ · Él/Ella ___ (usted: ha)",a:[["he"],["has"],["ha"]]},
   {t:"Nosotros ___ · Vosotros habéis · Ustedes ___ · Ellos ___",a:[["hemos"],["han"],["han"]]}
  ]},
 {type:"fill",label:"D",instr:"Fíjate en la segunda parte de los verbos (el participio) y escribe el infinitivo. Terminado en -ado → verbo en -AR; terminado en -ido → verbo en -ER/-IR.",ko:"과거분사의 원형 동사를 쓰세요.",cols:true,
  items:[
   {t:"visitado → ___",a:[["visitar"]]},
   {t:"gustado → ___",a:[["gustar"]]},
   {t:"caminado → ___",a:[["caminar"]]},
   {t:"salido → ___",a:[["salir"]]},
   {t:"tenido → ___",a:[["tener"]]},
   {t:"sido → ___",a:[["ser"]]},
   {t:"hecho → ___",a:[["hacer"]]},
   {t:"vuelto → ___",a:[["volver"]]}
  ]},
 {type:"match",label:"E",instr:"Y ahora relaciona.",ko:"동사 어미와 과거분사 어미를 연결하세요.",cols:true,
  opts:["-ADO","-IDO"],
  items:[{l:"Verbos en -AR",a:0},{l:"Verbos en -ER",a:1},{l:"Verbos en -IR",a:1}]},
 {type:"choice",label:"F",instr:"Por último, marca la opción verdadera. HE VISITADO:",ko:"he visitado는 어떤 시제입니까?",
  items:[{q:"He visitado…",o:["Es un tiempo futuro.","Es un tiempo presente.","Es un tiempo pasado."],a:2}]}
]},
{id:"10-3",num:"3",sec:O,title:"Hans pregunta",page:195,acts:[
 {type:"open",label:"A",instr:"Hans, el amigo de Kelly, es muy curioso. Contesta a sus preguntas: ¿Has hecho algo especial este fin de semana? ¿A qué hora te has levantado hoy? ¿Has ido al cine esta semana? ¿Has comido en un restaurante este mes? ¿Dónde has estado de vacaciones este verano? ¿Te ha pasado algo interesante este año?",ko:"(자유 작문) 한스의 6가지 질문에 답하세요.",
  items:[{q:"Tus respuestas",model:"Sí, he ido al cine con mis amigos. Hoy me he levantado a las siete. Sí, he ido al cine esta semana. Sí, he comido en un restaurante coreano. He estado en Busan. Sí, he conocido a un amigo nuevo."}]},
 {type:"open",label:"B",instr:"Haz este test a alguien de la clase: ¿Has escrito alguna vez un poema de amor? ¿Has copiado en un examen? ¿Has salido en la tele? ¿Has visto un extraterrestre? ¿Has viajado en barco? ¿Cuáles son las diferencias?",ko:"(짝 활동) 짝에게 'alguna vez' 질문을 하고 차이를 말해 보세요.",
  items:[{q:"Yo sí… pero mi compañero…",model:"Yo sí he viajado algunas veces en barco, pero mi compañero solo ha viajado una vez."}]}
]},
{id:"10-g",num:"G",sec:O,title:"Gramática y léxico: participios irregulares",page:196,acts:[
 {type:"fill",label:"Gramática",instr:"(교재 문법 표를 연습 문제로 바꾼 보충 문제) Escribe el participio irregular de cada verbo.",ko:"불규칙 과거분사를 쓰세요.",cols:true,
  items:[
   {t:"decir → ___",a:[["dicho"]]},
   {t:"hacer → ___",a:[["hecho"]]},
   {t:"poner → ___",a:[["puesto"]]},
   {t:"volver → ___",a:[["vuelto"]]},
   {t:"escribir → ___",a:[["escrito"]]},
   {t:"abrir → ___",a:[["abierto"]]},
   {t:"ver → ___",a:[["visto"]]},
   {t:"romper → ___",a:[["roto"]]},
   {t:"resolver → ___",a:[["resuelto"]]},
   {t:"freír → ___",a:[["frito"]]},
   {t:"cubrir → ___",a:[["cubierto"]]},
   {t:"morir → ___",a:[["muerto"]]}
  ]}
]},
/* ===== PRÁCTICA ===== */
{id:"10-4",num:"4",sec:P,title:"Lo mejor",page:197,acts:[
 {type:"fill",label:"A",audio:"2-23",instr:"Escucha a dos estudiantes hablar de las cosas más interesantes que han hecho hasta ahora en España y completa la información. — Linda:",ko:"듣고 린다의 빈칸을 완성하세요. (현재완료)",
  items:[
   {t:"___ a mucha gente en la escuela,",a:[["He conocido","he conocido"]]},
   {t:"___ algunas ciudades de Andalucía: Cádiz, Córdoba y Granada.",a:[["he visitado"]]},
   {t:"Todavía no ___ en Madrid, pero quiero ir en las vacaciones de Navidad.",a:[["he estado"]]},
   {t:"___ muchas tapas, me gusta el pescado…",a:[["He probado","he probado"]]},
   {t:"…y, por supuesto, ya ___ la paella, ¡me encanta!",a:[["he probado"]]},
   {t:"En la escuela ___ mucho, y mucho más que voy a aprender.",a:[["he aprendido"]]}
  ]},
 {type:"fill",label:"A",audio:"2-23",instr:"Yu-ju:",ko:"유주의 빈칸을 완성하세요.",
  items:[
   {t:"Yo solo llevo un mes en Málaga y todavía no ___ otra ciudad.",a:[["he visitado"]]},
   {t:"___ a un chico muy especial en la escuela.",a:[["He conocido","he conocido"]]},
   {t:"___ juntos este fin de semana.",a:[["Hemos salido","hemos salido"]]},
   {t:"___ una bici para pasear por la ciudad.",a:[["Hemos alquilado","hemos alquilado"]]},
   {t:"Ya ___ el Museo Picasso y la catedral.",a:[["he visitado"]]},
   {t:"Algunos días ___ por la playa.",a:[["he corrido"]]}
  ]},
 {type:"choice",label:"B",audio:"2-23",instr:"Escucha la audición otra vez y señala las opciones verdaderas.",ko:"다시 듣고 맞으면 Sí, 틀리면 No를 고르세요.",
  items:[
   {q:"Yu-ju ya ha estado en Granada.",o:["Sí","No"],a:1},
   {q:"Linda ya ha comido paella.",o:["Sí","No"],a:0},
   {q:"Linda todavía no ha ido a Madrid.",o:["Sí","No"],a:0},
   {q:"Yu-ju ya ha ido al Museo Picasso.",o:["Sí","No"],a:0},
   {q:"Yu-ju todavía no ha visitado Barcelona.",o:["Sí","No"],a:0}
  ]}
]},
{id:"10-5",num:"5",sec:P,title:"¿Has cumplido tus propósitos este año?",page:198,acts:[
 {type:"open",label:"A",instr:"Los estudiantes participan en este foro. Lee algunos buenos propósitos (hacer deporte, ahorrar para viajar más, estudiar un idioma…) y contesta si los has cumplido o no. Después pregunta a tus compañeros.",ko:"(말하기·작문) 올해의 결심을 지켰는지 현재완료로 답하세요.",
  items:[{q:"¿Has hecho deporte este año?",model:"Sí, he corrido dos veces a la semana. No he ahorrado mucho, pero he empezado a estudiar español."}]},
 {type:"match",label:"B",instr:"Vamos a participar en otro foro interesante. Relaciona de manera lógica ambas columnas. (A: He escrito correos a mis padres todas las semanas · B: No he visto muchas horas la televisión · C: No he vuelto muy tarde por la noche · D: He hecho siempre los deberes de clase · E: No he puesto música alta por la noche · F: He roto mi último paquete de tabaco · G: He abierto una cuenta en el banco · H: He resuelto el problema de un amigo)",ko:"논리적으로 연결하세요. (1→D 예시 포함)",cols:true,
  opts:["A · Correos a mis padres","B · Poca televisión","C · No volver tarde","D · Deberes de clase","E · Sin música alta","F · Paquete de tabaco","G · Cuenta en el banco","H · Problema de un amigo"],
  items:[
   {no:"1",l:"Este año he sido un buen estudiante.",a:3},
   {no:"2",l:"He sido un buen hijo.",a:0},
   {no:"3",l:"He leído más.",a:1},
   {no:"4",l:"He salido menos durante la semana.",a:2},
   {no:"5",l:"No he gastado mucho dinero.",a:6},
   {no:"6",l:"Mis vecinos están más contentos conmigo.",a:4},
   {no:"7",l:"Soy más feliz.",a:7},
   {no:"8",l:"He dejado de fumar.",a:5}
  ]}
]},
{id:"10-6",num:"6",sec:P,title:"Cosas que pasan",page:199,acts:[
 {type:"open",label:"A",instr:"Levántate y pregunta a tus compañeros si han hecho o les ha pasado alguna vez alguna de las cosas de la lista (saludar a alguien por error, llamar dos veces al mismo número equivocado, dejarse las llaves dentro de casa, perderse en la propia ciudad…). Gana el que consiga primero cinco respuestas afirmativas. Anota la frecuencia.",ko:"(짝·교실 활동) 'Has… alguna vez?'로 친구들에게 묻고 빈도를 적으세요.",
  items:[{q:"¿Has mandado alguna vez un mensaje de texto a la persona equivocada?",model:"Hans lo ha hecho varias veces. A Hans no le ha pasado nunca. (Frecuencia: muchas veces / varias veces / dos, tres… veces / alguna vez / una vez / nunca)"}]}
]},
{id:"10-7",num:"7",sec:P,title:"¿Es o ha sido?",page:200,acts:[
 {type:"fill",label:"A",instr:"Yu-ju habla con Linda de su amigo especial. Completa los verbos en el tiempo correcto: presente o pretérito perfecto.",ko:"현재형 또는 현재완료로 동사를 쓰세요.",
  items:[
   {t:"Kyle (ser) ___ americano, y (él, venir) ___ a España no solo para estudiar español:",a:[["es"],["ha venido"]]},
   {t:"(él, querer) ___ vivir en España. (Él, tener) ___ 25 años y (él, terminar) ___ periodismo.",a:[["quiere"],["tiene"],["ha terminado"]]},
   {t:"Si (él, encontrar) ___ trabajo, (querer) ___ vivir aquí.",a:[["encuentra"],["quiere"]]},
   {t:"Él (estudiar) ___ alemán y ahora español, le (encantar) ___ los idiomas.",a:[["ha estudiado"],["encantan"]]},
   {t:"Nunca (él, estar) ___ en China, mi país, pero en el futuro (ser) ___ posible, porque le (gustar) ___ viajar, conocer culturas muy diferentes a la suya.",a:[["ha estado"],["es"],["gusta"]]},
   {t:"En España (él, llevar) ___ cuatro meses y ya (él, visitar) ___ Sevilla, Córdoba, Cádiz, Madrid, Barcelona…",a:[["lleva"],["ha visitado"]]},
   {t:"(Él, ser) ___ una persona muy abierta y (él, hacer) ___ amigos rápidamente.",a:[["es"],["hace"]]},
   {t:"El móvil (ser) ___ su pasión: (él, hablar) ___, (él, chatear) ___, (él, mandar) ___ mensajes o (él, hacer) ___ fotos.",a:[["es"],["habla"],["chatea"],["manda"],["hace"]]},
   {t:"Dice que de Málaga ya (él, hacer) ___ más de mil fotografías.",a:[["ha hecho"]]},
   {t:"Hoy me (él, invitar) ___ a una fiesta en su casa para el próximo fin de semana.",a:[["ha invitado"]]},
   {t:"(Él, vivir) ___ con otros estudiantes españoles. (Él, estar) ___ muy contento con su vida en Málaga.",a:[["vive"],["está"]]}
  ]},
 {type:"open",label:"B",instr:"Seguro que tú también conoces a alguien interesante. ¿Por qué no nos hablas de él o de ella? ¿Cómo es? ¿Cómo se llama? Comenta las experiencias que ha tenido, los lugares que ha visitado…",ko:"(자유 작문) 흥미로운 사람을 소개하세요.",
  items:[{q:"Yo conozco a una persona que…",model:"Yo conozco a una persona que se llama Ana. Es muy abierta y ha viajado por muchos países. Ha vivido en Argentina y ha visitado Machu Picchu."}]},
 {type:"match",label:"C",instr:"¿Qué objetos o documentos llevas habitualmente en tu bolso o en tu mochila cuando viajas? Relaciona las palabras con las imágenes. (1: documento granate con escudo · 2: mapa de calles doblado · 3: libro sobre Sevilla · 4: tarjeta de banda magnética · 5: bolsa con correas)",ko:"단어와 사진 번호를 연결하세요.",cols:true,
  opts:["1","2","3","4","5"],
  items:[{l:"Pasaporte",a:0},{l:"Tarjeta de crédito",a:3},{l:"Plano",a:1},{l:"Mochila",a:4},{l:"Guía",a:2}]}
]},
{id:"10-8",num:"8",sec:P,title:"¿Tú qué crees?",page:201,acts:[
 {type:"choice",label:"A",instr:"A Kyle le gusta viajar mucho y conocer ciudades diferentes. Mira su cuaderno (✓ Sevilla, ✓ Córdoba, Milán, París, ✓ Roma, Pekín, Egipto, ✓ Madrid). ¿Qué lugares YA ha visitado y cuáles TODAVÍA NO ha visto?",ko:"노트(✓ 표시)를 보고 이미 방문한 곳 / 아직 안 가 본 곳을 고르세요.",
  items:[
   {q:"Córdoba",o:["ya ha visitado","todavía no ha visto"],a:0},
   {q:"Milán",o:["ya ha visitado","todavía no ha visto"],a:1},
   {q:"París",o:["ya ha visitado","todavía no ha visto"],a:1},
   {q:"Roma",o:["ya ha visitado","todavía no ha visto"],a:0},
   {q:"Pekín",o:["ya ha visitado","todavía no ha visto"],a:1},
   {q:"Egipto",o:["ya ha visitado","todavía no ha visto"],a:1},
   {q:"Madrid",o:["ya ha visitado","todavía no ha visto"],a:0}
  ]},
 {type:"open",label:"B",instr:"Ahora fíjate en lo que dicen estos jóvenes acerca de viajar y escribe tu opinión. (Para mí… / Yo creo que… / Estoy de acuerdo / No estoy de acuerdo…)",ko:"(자유 작문) 여행에 대한 세 의견에 자기 생각을 쓰세요.",
  items:[{q:"Tú:",model:"No estoy de acuerdo. Yo creo que viajar es siempre bueno, conoces gente muy diferente. / Yo también pienso que viajar por tu país es una buena forma de conocer tu historia. / Para mí es muy interesante conocer la historia del mundo."}]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"10-9",num:"9",sec:C,title:"Un paseo por Madrid",page:202,acts:[
 {type:"choice",label:"A",instr:"Sam quiere visitar algunas ciudades de España y está leyendo información sobre Madrid. Lee el texto «Madrid: De Madrid al cielo» y contesta.",ko:"(자체 제작 O/X 문제) 마드리드 본문을 읽고 답하세요.",
  items:[
   {q:"Madrid es el centro geográfico de la península ibérica.",o:VF,a:0},
   {q:"Los inviernos en Madrid son muy calurosos.",o:VF,a:1},
   {q:"El Museo del Prado es una de las pinacotecas más importantes del mundo.",o:VF,a:0},
   {q:"San Isidro se celebra el 15 de abril.",o:VF,a:1},
   {q:"El oso y el madroño son el símbolo y el escudo de la ciudad.",o:VF,a:0}
  ]},
 {type:"open",label:"A–B",instr:"En grupo: ¿Qué os ha interesado más? ¿Qué creéis que significa la expresión «De Madrid al cielo»? Haced con vuestro compañero una lista de ciudades que los dos conocéis; uno prepara una descripción y el otro adivina de qué ciudad se trata. ¿Podéis inventar un eslogan?",ko:"(말하기) 'De Madrid al cielo'의 의미를 추측하고, 도시 설명 알아맞히기 게임을 해 보세요.",
  items:[{q:"De Madrid al cielo",model:"«De Madrid al cielo» significa que Madrid es tan especial que, después de Madrid, solo queda el cielo."}]},
 {type:"match",label:"C",instr:"Aquí tenéis imágenes relacionadas con la ciudad. Escribid debajo de cada imagen la palabra correspondiente. (1: cartel con una H · 2: pila de libros · 3: claqueta y rollo de película · 4: plano de metro · 5: señal con niños · 6: cruz verde)",ko:"사진에 맞는 단어를 연결하세요.",cols:true,
  opts:["farmacia","metro","cine","colegio","librería","hospital"],
  items:[{no:"1",l:"Imagen 1",a:5},{no:"2",l:"Imagen 2",a:4},{no:"3",l:"Imagen 3",a:2},{no:"4",l:"Imagen 4",a:1},{no:"5",l:"Imagen 5",a:3},{no:"6",l:"Imagen 6",a:0}]}
]},
{id:"10-10",num:"10",sec:C,title:"¿Qué visitamos?",page:203,acts:[
 {type:"open",label:"A",instr:"En grupo, pensad en un lugar que habéis visitado últimamente y contad al resto cómo es, qué habéis hecho allí, con quién habéis ido, qué os ha gustado más o menos…",ko:"(모둠 말하기) 최근 방문한 장소를 현재완료로 이야기하세요.",
  items:[{q:"Hemos visitado…",model:"Hemos visitado el Museo del Prado con mis compañeros. Hemos visto muchos cuadros y nos ha gustado mucho. No nos ha gustado la cola."}]},
 {type:"match",label:"B",instr:"Individualmente valora las siguientes experiencias y clasifícalas en el lugar correspondiente (experiencia mala / buena). Ejemplo: la 7 es mala.",ko:"좋은 경험인지 나쁜 경험인지 분류하세요. (7번 = 나쁨 예시)",cols:true,
  opts:["Experiencia mala","Experiencia buena"],
  items:[
   {no:"1",l:"¡Qué noche! He pasado toda la noche sin dormir por el ruido.",a:0},
   {no:"2",l:"Mi cantante favorito me ha firmado un autógrafo.",a:1},
   {no:"3",l:"El autobús ha llegado con retraso.",a:0},
   {no:"4",l:"Hemos estado más de una hora en un atasco en el centro.",a:0},
   {no:"5",l:"En el museo he visto una exposición que me ha encantado.",a:1},
   {no:"6",l:"El despertador no ha sonado.",a:0},
   {no:"7",l:"Hemos visto un accidente.",a:0}
  ]},
 {type:"open",label:"C",instr:"Ahora transforma las malas experiencias en positivas ampliando la información. Ejemplo: Hemos visto un accidente pero no ha pasado nada. Ha sido una prueba de emergencia.",ko:"(자유 작문) 나쁜 경험을 긍정적으로 바꿔 쓰세요.",
  items:[{q:"El autobús ha llegado con retraso…",model:"El autobús ha llegado con retraso, pero hemos tenido tiempo para charlar. / El despertador no ha sonado, pero me he despertado a tiempo."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"10-x1",num:"1",sec:"¡extra! Contextos",title:"Visita mi ciudad",page:204,acts:[
 {type:"choice",label:"A",audio:"2-24",instr:"Escucha a dos jóvenes hablando de su ciudad (Sandra, de Vigo; Javier, de Sevilla). Después responde si son verdaderas o falsas las siguientes afirmaciones.",ko:"듣고 O/X로 답하세요.",
  items:[
   {q:"Sandra ha vivido en Vigo durante mucho tiempo.",o:VF,a:0},
   {q:"Galicia está en el norte de España.",o:VF,a:0},
   {q:"Las Cíes son unas islas y están en la ría de Vigo.",o:VF,a:0},
   {q:"La playa de Rodas es muy famosa.",o:VF,a:0},
   {q:"Javier ha vivido toda su vida en Sevilla.",o:VF,a:1},
   {q:"Le gusta el verano porque hace mucho calor.",o:VF,a:1},
   {q:"Javier recomienda visitar Sevilla en primavera.",o:VF,a:0},
   {q:"Lo que menos le gusta de Sevilla es que no es muy tranquila.",o:VF,a:0}
  ]},
 {type:"open",label:"B",instr:"Los lugares turísticos de una ciudad pueden ser muy diferentes (catedral, museos, parques naturales, puentes, barrios típicos, ruinas, río, fuentes, paseo marítimo…). ¿Cuáles son más interesantes para ti? Explica tus razones.",ko:"(자유 작문) 가장 흥미로운 관광지와 이유를 쓰세요.",
  items:[{q:"Para mí…",model:"Para mí los más interesantes son los barrios típicos porque puedes conocer la vida de la gente."}]}
]},
{id:"10-x2",num:"2",sec:"¡extra! Práctica",title:"Una postal",page:205,acts:[
 {type:"open",label:"A",instr:"Yu-ju ha enviado esta postal a su familia (Torre del Oro, Sevilla). ¿Por qué no escribes una postal tú también? Decide a quién y cuéntale algunas de las cosas que has hecho en España.",ko:"(자유 작문) 스페인에서 한 일을 엽서로 써 보세요.",
  items:[{q:"Querida…",model:"Querida mamá: Estoy en Sevilla y ha sido increíble. He visitado la Torre del Oro y he probado muchas tapas. Un beso."}]},
 {type:"open",label:"B",instr:"Carta, postal, correo electrónico o mensaje. ¿Cuál es vuestra opinión sobre estas formas de comunicación? ¿Cuáles son vuestras preferencias? Justificad las respuestas.",ko:"(토론) 편지·엽서·이메일·메시지 중 선호와 이유를 말하세요.",
  items:[{q:"Yo creo que… / Para mí…",model:"Para mí el mensaje es lo mejor porque es rápido, pero yo creo que una postal es más personal."}]}
]},
{id:"10-x3",num:"3",sec:"¡extra! En comunicación",title:"A ver si descubres…",page:206,acts:[
 {type:"open",label:"A",instr:"Mira con atención la oficina de la profesora Martina Quiroga. Habla sobre sus experiencias pasadas.",ko:"(말하기) 사무실의 사진·물건을 보고 교수의 경험을 추측해 보세요.",
  items:[{q:"Pues yo creo que ha estudiado mucho porque…",model:"Pues yo creo que ha estudiado mucho porque tiene un diploma. Creo que ha viajado a París y que ha visto un musical. Ha tenido un hijo y se ha casado."}]}
]},
{id:"10-x4",num:"4",sec:"¡extra! En comunicación",title:"Queremos saber",page:207,acts:[
 {type:"open",label:"A",instr:"Tu opinión es importante. Individualmente escribe sobre cómo ha sido tu curso de español: hablar en clase, las audiciones, la gramática, escribir una composición, los deberes, las películas, los juegos, Internet, los textos, los exámenes, trabajar en grupos…",ko:"(자유 작문) 스페인어 수업에 대한 소감을 쓰세요.",
  items:[{q:"En la clase hemos…",model:"En la clase hemos hablado mucho. He escuchado a mis compañeros y también he aprendido. Me han gustado mucho los juegos y las películas."}]},
 {type:"open",label:"B",instr:"Para terminar, en grupo, valorad vuestra experiencia en la clase, a los compañeros, a los profesores, la escuela… ¡Sed sinceros!",ko:"(모둠 활동) 수업·친구·선생님·학교를 솔직하게 평가하세요.",
  items:[{q:"La escuela me ha gustado porque…",model:"La escuela me ha gustado porque he conocido a gente de muchos países. Creo que he aprendido mucho. Los profesores han sido muy simpáticos."}]}
]}
]};
})();
