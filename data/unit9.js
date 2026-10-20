window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
const row8=(verb,f)=>({t:`${verb}: yo ___ · tú ___ · usted ___ · él/ella ___ · nosotros ___ · vosotros ___ · ustedes ___ · ellos ___`,a:f.map(x=>[x])});
window.UNITS[9]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"9-1",num:"1",sec:S,title:"Mi familia española",page:173,acts:[
 {type:"choice",label:"A",audio:"2-17",instr:"Sam, un chico de Estados Unidos, llega a nuestra clase. Vive con una familia española. Escucha y descubre qué foto representa una escena de la que habla Sam. (Foto 2: la familia con los abuelos · Foto 3: una pareja con un perro · Foto 4: cuatro jóvenes viendo el fútbol)",ko:"듣고 샘이 말하는 장면에 해당하는 사진을 고르세요. (자체 답안: 형제 넷이 축구를 본다는 말)",
  items:[{q:"La escena de la que habla Sam es la foto número…",o:["2","3","4"],a:2}]},
 {type:"match",label:"B",audio:"2-17",instr:"Vuelve a oír la grabación y decide a qué personas de la familia se refieren las afirmaciones.",ko:"다시 듣고 누구에 대한 설명인지 연결하세요.",cols:true,
  opts:["Pablo (el padre)","Cristina (la madre)","Javier","Silvia","Carmen","Charo (la abuela)"],
  items:[{no:"1",l:"Es muy buena cocinera.",a:5},{no:"2",l:"Le gusta mucho el fútbol.",a:2},{no:"3",l:"Es empresario.",a:0},{no:"4",l:"Es abogada y trabaja demasiado.",a:1},{no:"5",l:"Es muy divertida.",a:5},{no:"6",l:"Vive con su novio en otra ciudad.",a:3}]}
]},
{id:"9-2",num:"2",sec:S,title:"En la universidad…",page:174,acts:[
 {type:"match",label:"A",instr:"Javier, el amigo de Sam, está estudiando en la universidad. Lee las opiniones de sus amigos y de algunas personas de su familia y relaciona.",ko:"누가 한 말인지 연결하세요.",cols:true,
  opts:["La madre","La abuela","Elvira, la novia","Leo, un amigo","Ana, una amiga","El padre"],
  items:[{l:"A veces Javier no limpia, no lava los platos… Es bastante desordenado.",a:0},{l:"Ahora está estudiando más que antes.",a:1},{l:"Ahora está durmiendo menos porque madruga más.",a:2},{l:"Salimos bastante. A Javier le gusta mucho un bar que se llama Salsa.",a:3},{l:"Siempre está haciendo deporte.",a:4},{l:"En este momento de su vida está conociendo a gente muy interesante.",a:5}]},
 {type:"open",label:"B",instr:"En grupo comentad qué cambios en la vida de Javier os parecen positivos o negativos.",ko:"(말하기·작문) 하비에르의 변화 중 긍정적/부정적인 것을 쓰세요.",
  items:[{q:"Un cambio positivo es que ahora está… / El cambio más negativo es que…",model:"Un cambio positivo es que ahora está haciendo más deporte. El cambio más negativo es que ahora está durmiendo menos."}]},
 {type:"open",label:"C",instr:"Seguro que tú también tienes algunos cambios en este momento de tu vida. Coméntalos utilizando ESTAR + gerundio.",ko:"(자유 작문) 요즘 나의 변화를 estar + gerundio로 쓰세요.",
  items:[{q:"Ahora estoy…",model:"Ahora estoy practicando más deporte. Estoy saliendo menos por la noche. En esta ciudad estoy conociendo a mucha gente de otros países."}]}
]},
/* ===== OBSERVA Y APRENDE ===== */
{id:"9-3",num:"3",sec:O,title:"Una vida diferente",page:175,acts:[
 {type:"fill",label:"B",instr:"Sam utiliza ESTAR + gerundio. Completa el esquema.",ko:"estar 활용과 gerundio 규칙을 완성하세요.",
  items:[
   {t:"ESTAR: yo ___ · nosotros ___ · ellos/ellas ___",a:[["estoy"],["estamos"],["están"]]},
   {t:"bailar → bail + ___ (-AR → -ANDO)",a:[["ando"]]},
   {t:"aprender → aprend ___ (-ER → -IENDO)",a:[["iendo"]]},
   {t:"salir → sal + ___ (-IR → -IENDO)",a:[["iendo"]]}
  ]},
 {type:"fill",label:"C",instr:"En los ejemplos del ejercicio 3 A hay un gerundio irregular. ¿Sabes cuál es? (Luisa está ___ un libro en la playa.)",ko:"불규칙 현재분사를 쓰세요. (leer)",
  items:[{t:"leer → ___",a:[["leyendo"]]}]}
]},
{id:"9-3d",num:"3",sec:O,title:"Gerundios regulares e irregulares",page:176,acts:[
 {type:"match",label:"D",instr:"En parejas, relacionad cada verbo con su gerundio correspondiente. (Son irregulares: dormir, ir, reírse, decir.)",ko:"동사와 현재분사를 연결하세요.",cols:true,
  opts:["yendo","riéndose","diciendo","bebiendo","durmiendo","comiendo","hablando"],
  items:[{no:"1",l:"hablar",a:6},{no:"2",l:"beber",a:3},{no:"3",l:"dormir",a:4},{no:"4",l:"ir",a:0},{no:"5",l:"comer",a:5},{no:"6",l:"reírse",a:1},{no:"7",l:"decir",a:2}]},
 {type:"choice",label:"E",instr:"¿Cuándo se debe usar ESTAR + gerundio? Marca la opción correcta.",ko:"estar + gerundio를 언제 쓰나요?",
  items:[{q:"ESTAR + gerundio sirve…",o:["Para expresar un plan o un proyecto","Para expresar una acción que se hace en el momento que se habla o que está realizando la persona de la que se habla","Para hablar de una acción futura"],a:1}]}
]},
{id:"9-4",num:"4",sec:O,title:"Pablo y Cristina",page:176,acts:[
 {type:"match",label:"A",audio:"2-18",instr:"Pablo y Cristina, los «padres españoles» de Sam, llevan mucho tiempo casados. Escucha y marca sus hábitos y sus gustos.",ko:"듣고 파블로 또는 크리스티나에 해당하는 것을 연결하세요.",cols:true,
  opts:["Pablo","Cristina"],
  items:[{no:"1",l:"No le gusta nada el calor.",a:0},{no:"2",l:"Duerme poco.",a:0},{no:"3",l:"Trabaja mucho.",a:0},{no:"4",l:"Come poco.",a:1},{no:"5",l:"Duerme bastante.",a:1},{no:"6",l:"En verano le gusta mucho salir a cenar.",a:0},{no:"7",l:"Cocina poco.",a:1}]},
 {type:"fill",label:"B",instr:"Completa el esquema de los adverbios de cantidad: más → menos.",ko:"수량 부사를 쓰세요. (+ 에서 − 순)",
  items:[
   {t:"Come ___ (9 puntos)",a:[["mucho"]]},
   {t:"Trabaja ___ (5 puntos)",a:[["bastante"]]},
   {t:"Duerme ___ (3 puntos)",a:[["poco"]]},
   {t:"No hace ___ (0 puntos)",a:[["nada"]]}
  ]}
]},
{id:"9-5",num:"5",sec:O,title:"¿Un fin de semana romántico?",page:177,acts:[
 {type:"choice",label:"A",audio:"2-19",instr:"Elvira, la novia de Javier, viene a la ciudad para pasar el fin de semana. Lee y escucha el diálogo y contesta.",ko:"O/X로 답하세요.",
  items:[
   {q:"Elvira propone cenar en un restaurante.",o:VF,a:0},
   {q:"Javier prefiere ir al cine.",o:VF,a:0},
   {q:"Javier recuerda qué pasa el fin de semana.",o:VF,a:1},
   {q:"El fin de semana celebran su segundo aniversario.",o:VF,a:0}
  ]},
 {type:"fill",label:"B–C",instr:"Marca las formas verbales con las que Elvira y Javier expresan sus planes para el fin de semana. Completa el esquema: IR + A + infinitivo.",ko:"ir 활용을 쓰세요.",
  items:[row8("ir",["voy","vas","va","va","vamos","vais","van","van"])]},
 {type:"check",label:"D",instr:"En parejas, marcad las expresiones de tiempo que pueden usarse con IR A + infinitivo.",ko:"ir a + 동사원형과 함께 쓸 수 있는 시간 표현을 모두 고르세요.",
  opts:["El año que viene","En 1990","En 2050","El 4 de enero de 1925","El próximo fin de semana","Pasado mañana","Dentro de una semana","El jueves que viene","Desde 1982"],a:[0,2,4,5,6,7]}
]},
{id:"9-gram",num:"+",sec:O,title:"Gramática y léxico",page:178,acts:[
 {type:"fill",instr:"Gerundios: escribe el gerundio.",ko:"현재분사를 쓰세요.",cols:true,
  items:[
   {t:"cantar → ___",a:[["cantando"]]},{t:"beber → ___",a:[["bebiendo"]]},{t:"vivir → ___",a:[["viviendo"]]},
   {t:"decir → ___",a:[["diciendo"]]},{t:"dormir → ___",a:[["durmiendo"]]},{t:"pedir → ___",a:[["pidiendo"]]},
   {t:"leer → ___",a:[["leyendo"]]},{t:"ir → ___",a:[["yendo"]]},{t:"oír → ___",a:[["oyendo"]]}
  ]},
 {type:"fill",instr:"Estar + gerundio con pronombres: completa.",ko:"대명사 위치를 쓰세요.",
  items:[
   {t:"Me estoy duchando → Estoy ___ .",a:[["duchándome"]]},
   {t:"Lo está escribiendo → Está ___ .",a:[["escribiéndolo"]]}
  ]},
 {type:"fill",instr:"Hablar del clima: completa con hace / hay / está / llueve / nieva.",ko:"날씨 표현을 쓰세요.",bank:["hace","hay","está","llueve","nieva"],
  items:[
   {t:"___ frío en invierno.",a:[["hace"]]},
   {t:"___ niebla por la mañana.",a:[["hay"]]},
   {t:"___ nublado.",a:[["está"]]},
   {t:"En Madrid ___ poco en invierno.",a:[["nieva"]]},
   {t:"En el norte de España ___ mucho.",a:[["llueve"]]}
  ]},
 {type:"match",instr:"Estaciones y meses del año.",ko:"월과 계절을 연결하세요.",cols:true,
  opts:["Primavera","Verano","Otoño","Invierno"],
  items:[{l:"abril",a:0},{l:"julio",a:1},{l:"octubre",a:2},{l:"enero",a:3},{l:"mayo",a:0},{l:"agosto",a:1},{l:"noviembre",a:2},{l:"diciembre",a:3}]}
]},
/* ===== PRÁCTICA ===== */
{id:"9-6",num:"6",sec:P,title:"¿Quién es?",page:179,acts:[
 {type:"fill",instr:"Sam recibe una llamada de teléfono de su amiga Natalia. Completa la conversación con ESTAR + gerundio. Usa los verbos: escuchar, bailar, tomarse, hacer, charlar, celebrar.",ko:"estar + gerundio를 쓰세요.",
  bank:["escuchar","bailar","tomarse","hacer","charlar","celebrar"],
  items:[
   {no:"1",t:"…pero… ¿qué (tú) ___ ? ¿Estás en una fiesta?",a:[["estás haciendo"]]},
   {no:"2",t:"Sí, es que hoy es mi cumpleaños y (yo) ___ una fiesta…",a:[["estoy celebrando"]]},
   {no:"3",t:"¿Por qué no te vienes un rato? (Nosotros) ___ algo y ___ .",a:[["estamos tomándonos","nos estamos tomando"],["charlando"]]},
   {no:"4",t:"Espera, que no te oigo muy bien porque ___ música…",a:[["estamos escuchando"]]},
   {no:"5",t:"…y Javier, uno de mis amigos, ___ salsa sin parar.",a:[["está bailando"]]}
  ]}
]},
{id:"9-7",num:"7",sec:P,title:"El cumpleaños de Sam",page:179,acts:[
 {type:"match",label:"A",audio:"2-20",instr:"Escucha las descripciones de los amigos de Sam y relaciona cada nombre con la descripción (en el dibujo, escribe el nombre de cada invitado).",ko:"듣고 이름과 설명을 연결하세요.",cols:true,
  opts:["Jaime","Lola","Rodrigo","Óscar","Benjamín","Pedro","Eugenia"],
  items:[{l:"El chico del traje y la corbata (primo de Antonio)",a:0},{l:"La chica del pelo rasta (habla con su novio, Javier)",a:1},{l:"El chico de la chaqueta marrón",a:2},{l:"El chico de la camisa de flores (hermano de Rodrigo)",a:3},{l:"El chico pelirrojo del jersey morado (estudia matemáticas)",a:4},{l:"El chico de la camiseta blanca y manga corta (pone música)",a:5},{l:"La chica de la falda negra y camiseta roja (novia de Alberto)",a:6}]},
 {type:"open",label:"B",instr:"¿Qué están haciendo los amigos de Sam? Escribe oraciones a partir del dibujo (ej.: Raúl está viendo la tele).",ko:"(자유 작문) 그림을 보고 estar + gerundio 문장 5개를 쓰세요.",
  items:[{q:"… está / están + gerundio",model:"Raúl está viendo la tele. Pedro está poniendo música. Lola está bailando. Óscar está comiendo un bocadillo. Eugenia está hablando con Alberto."}]}
]},
{id:"9-8",num:"8",sec:P,title:"El futuro de Sam",page:180,acts:[
 {type:"open",label:"A",instr:"Lola Losabe, una famosa adivinadora, le hace a Sam algunas predicciones sobre su vida dentro de diez años. Fijaos en los dibujos (coche rojo, hijos, oficina, viaje en barco con una chica, Roma) y escribid oraciones con IR A + infinitivo.",ko:"(자유 작문) ir a + 동사원형으로 샘의 10년 후를 쓰세요.",
  items:[{q:"Sam va a vivir… / Sam va a tener…",model:"Sam va a vivir en España. Va a tener un coche rojo. Va a trabajar en una oficina. Va a tener tres hijos. Va a viajar a Roma con su novia."}]},
 {type:"open",label:"B",instr:"Ahora elige a uno de tus compañeros de clase. Debes escribir un pequeño texto para imaginar cómo va a ser su vida dentro de diez años. Usa la imaginación.",ko:"(자유 작문) 친구의 10년 후를 상상해 쓰세요.",
  items:[{q:"El futuro de…",model:"Mi amiga Ana va a tener muchos hijos con un chico español. Va a vivir en España y va a trabajar de profesora."}]}
]},
{id:"9-9",num:"9",sec:P,title:"Un viaje por España",page:181,acts:[
 {type:"fill",label:"A",audio:"2-21",instr:"Sam quiere saber qué tiempo hace en diferentes ciudades españolas. Escucha su conversación con Javier y escribe el nombre de cada ciudad (1 sol → ___ ; 2 viento → ___ ; 3 llueve/nublado → ___ ; 4 nieva/frío → ___ ). Ciudades: Málaga, Cádiz, Bilbao, Madrid.",ko:"듣고 도시 이름을 쓰세요.",
  items:[
   {no:"1",t:"Hace sol. Está soleado. → Ciudad: ___",a:[["málaga"]]},
   {no:"2",t:"Hace viento. → Ciudad: ___",a:[["cádiz"]]},
   {no:"3",t:"Llueve. Está nublado. → Ciudad: ___",a:[["bilbao"]]},
   {no:"4",t:"Nieva. Hace frío. → Ciudad: ___",a:[["madrid"]]}
  ]},
 {type:"open",label:"B",instr:"Explica al resto de la clase qué tiempo hace en tu ciudad en primavera, verano, otoño e invierno. (Hace (bastante / mucho) frío… Estamos a … grados. Hay niebla. Tenemos un clima templado. Llueve. Nieva.)",ko:"(자유 작문) 사계절 날씨를 설명하세요.",
  items:[{q:"En primavera / verano / otoño / invierno…",model:"En primavera hace buen tiempo. En verano hace mucho calor. En otoño llueve bastante. En invierno nieva y hace mucho frío."}]}
]},
{id:"9-10",num:"10",sec:P,title:"Un poco de pronunciación",page:182,acts:[
 {type:"match",audio:"2-22",instr:"Todas las palabras del español con dos o más sílabas tienen una sílaba más fuerte (sílaba tónica). Relaciona cada palabra con su sílaba tónica y comprueba con la grabación.",ko:"각 단어의 강세 음절을 연결하세요.",cols:true,
  opts:["1.ª sílaba","2.ª sílaba","3.ª sílaba"],
  items:[{l:"sofá (so-fá)",a:1},{l:"hijo (hi-jo)",a:0},{l:"flamenco (fla-men-co)",a:1},{l:"sílaba (sí-la-ba)",a:0},{l:"camisa (ca-mi-sa)",a:1},{l:"vaso (va-so)",a:0},{l:"bolígrafo (bo-lí-gra-fo)",a:1},{l:"vivir (vi-vir)",a:1},{l:"Málaga (Má-la-ga)",a:0},{l:"alcachofa (al-ca-cho-fa)",a:2},{l:"pequeño (pe-que-ño)",a:1},{l:"peluche (pe-lu-che)",a:1}]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"9-11",num:"11",sec:C,title:"En familia",page:183,acts:[
 {type:"match",label:"A",instr:"Sam descubre en este periódico digital que en España existen muchos tipos de familias diferentes. Lee y relaciona.",ko:"누구에 대한 설명인지 연결하세요.",cols:true,
  opts:["Ana (35 años)","Juan y Luisa (40 y 42)","Ángel y Sveta (30 y 29)","Paco y Alfredo (28 y 30)"],
  items:[{l:"Vive sola en un pequeño apartamento en el centro.",a:0},{l:"Adoptaron a una niña china, Xiang.",a:1},{l:"No están casados y no tienen hijos. Prefieren viajar y salir.",a:2},{l:"Viven en un piso cerca de la playa.",a:3},{l:"No quiere tener hijos ni una pareja estable.",a:0},{l:"Sveta es de Rusia y él es español.",a:2}]},
 {type:"open",label:"B",instr:"¿Existen estos tipos de familias en tu país? ¿Cómo es la familia tradicional? Redacta un pequeño informe y preséntalo.",ko:"(자유 작문) 자국의 가족 형태를 소개하세요.",
  items:[{q:"En mi país…",model:"En mi país la familia tradicional tiene dos hijos. Hoy hay también muchas personas que viven solas."}]}
]},
{id:"9-12",num:"12",sec:C,title:"Cumpleaños feliz, cumpleaños feliz…",page:184,acts:[
 {type:"match",label:"A",instr:"Sam celebra por primera vez su cumpleaños fuera de su país. En este foro descubre curiosidades sobre las diferentes formas de celebrar esta fiesta. Léelas y relaciona.",ko:"어느 나라의 풍습인지 연결하세요.",cols:true,
  opts:["Bolivia","China","España"],
  items:[{l:"Cuando las chicas cumplen quince años, celebran una gran fiesta y se ponen un vestido blanco.",a:0},{l:"El que cumple años recibe dinero de sus padres.",a:1},{l:"Se toman fideos para desear larga vida.",a:1},{l:"Se come tarta y se pone una vela por cada año.",a:2},{l:"Se canta «Cumpleaños feliz» y se apagan las velas.",a:2},{l:"Si se apagan todas las velas, los deseos se van a hacer realidad.",a:2}]},
 {type:"open",label:"B",instr:"¿Cómo celebráis vosotros los cumpleaños en tu país? Coméntalo.",ko:"(자유 작문) 자국의 생일 풍습을 소개하세요.",
  items:[{q:"En mi país…",model:"En mi país comemos sopa de algas en el cumpleaños y celebramos con la familia."}]},
 {type:"match",label:"C",instr:"Más curiosidades del foro: relaciona cada tradición con la persona.",ko:"풍습과 사람을 연결하세요.",cols:true,
  opts:["Corina (Ecuador)","Mónica (Italia)","Raúl (México)"],
  items:[{l:"La chica se viste de rosa y se cambia sus zapatos de niña por unos zapatos de tacón.",a:0},{l:"Se tira de las orejas al que cumple años: un tirón por cada año.",a:1},{l:"Se cuelga una piñata llena de golosinas y el niño la golpea con los ojos vendados.",a:2},{l:"Se canta una canción que se llama «Las mañanitas».",a:2}]},
 {type:"open",label:"D",instr:"En parejas, vamos a preparar el proyecto de la fiesta de cumpleaños perfecta. (Vamos a hacer una fiesta de disfraces / organizar la fiesta en la playa / ir a un parque de atracciones.)",ko:"(자유 작문) ir a + 동사원형으로 완벽한 생일 파티 계획을 쓰세요.",
  items:[{q:"Vamos a…",model:"Vamos a organizar la fiesta en la playa. Vamos a invitar a todos los amigos. Vamos a comer tarta y vamos a bailar."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"9-x1",num:"1",sec:"¡extra! Contextos",title:"¡Nos vamos de excursión!",page:186,acts:[
 {type:"open",label:"A",instr:"Javier y Sam deciden pasar el próximo fin de semana en Córdoba. En pequeños grupos, diseñad un plan para ellos (sábado y domingo: por la mañana, por la tarde, por la noche) usando IR A + infinitivo. Recomendaciones: visitar la Mezquita, ir de tapas, ver un espectáculo flamenco, pasear por el barrio judío, comer en un restaurante del centro, ir de compras, salir por la noche, visitar Medina Azahara, comer salmorejo.",ko:"(자유 작문) 코르도바 주말 계획을 ir a + 동사원형으로 쓰세요.",
  items:[{q:"Sam y Javier van a…",model:"El sábado por la mañana Sam y Javier van a desayunar en el centro. Por la tarde van a visitar la Mezquita. Por la noche van a ir de tapas. El domingo van a visitar Medina Azahara y van a comer salmorejo."}]},
 {type:"fill",label:"B",instr:"Javier está chateando con algunos de sus amigos por Internet. Completa las oraciones usando el presente o ESTAR + gerundio.",ko:"현재형 또는 estar + gerundio를 쓰세요.",
  items:[
   {t:"Javier: ¡Hola! ¿(haber) ___ alguien ahí?  Sam: Sí, aquí (estar, yo) ___ .",a:[["hay"],["estoy"]]},
   {t:"Clara: ¡Hola, chicos! ¿Cómo (estar, vosotros) ___ ?",a:[["estáis"]]},
   {t:"Sam: Ahora (estudiar, yo) ___ . (Tener, yo) ___ un examen de gramática el lunes.",a:[["estoy estudiando"],["tengo"]]},
   {t:"Clara: No (gustar, a mí) ___ nada los exámenes.",a:[["me gustan"]]},
   {t:"Sam: Clara, ¿dónde (estar) ___ Peter?",a:[["está"]]},
   {t:"Clara: No está en casa. Ahora (trabajar, él) ___ . (Volver, él) ___ a las nueve o nueve y media.",a:[["está trabajando"],["vuelve"]]},
   {t:"Javier: Yo también (trabajar) ___ ahora. (Necesitar, yo) ___ dinero.",a:[["estoy trabajando"],["necesito"]]},
   {t:"Javier: Normalmente (ir, yo) ___ de lunes a jueves; (tener, yo) ___ que trabajar el fin de semana.",a:[["voy"],["tengo"]]},
   {t:"Clara: Pues yo hoy no (ir) ___ a clase… Es que (estar, yo) ___ resfriada; creo que (tener, yo) ___ un poco de fiebre.",a:[["voy"],["estoy"],["tengo"]]},
   {t:"Sam: ¿Qué (pasar, a ti) ___ ?",a:[["te pasa"]]}
  ]}
]},
{id:"9-x2",num:"2",sec:"¡extra! Práctica",title:"El blog de Sam",page:187,acts:[
 {type:"fill",label:"A",instr:"Este es el blog de Sam. Completa con el presente o IR A + infinitivo.",ko:"현재형 또는 ir a + 동사원형을 쓰세요.",
  items:[
   {no:"1",t:"(Ser, yo) ___ muy extrovertido. (Tener, yo) ___ veinte años y (estudiar, yo) ___ en la universidad.",a:[["soy"],["tengo"],["estudio"]]},
   {no:"2",t:"(Encantar, a mí) ___ salir con mis amigos. (Gustar, a mí) ___ mucho la gente deportista y divertida.",a:[["me encanta"],["me gusta"]]},
   {no:"3",t:"(Odiar, yo) ___ el despertador. Por suerte, nunca (levantarse, yo) ___ temprano porque (ir, yo) ___ a clase por la tarde.",a:[["odio"],["me levanto"],["voy"]]},
   {no:"4",t:"(Preferir, yo) ___ las películas de aventuras, pero también (gustar, a mí) ___ las románticas.",a:[["prefiero"],["me gustan"]]},
   {no:"5",t:"El próximo año (volver, yo) ___ a EE.UU.",a:[["voy a volver","vuelvo"]]},
   {no:"6",t:"Mi hermana (tener) ___ un bebé el mes que viene. (Ser, yo) ___ tío por primera vez.",a:[["va a tener","tiene"],["voy a ser","soy"]]},
   {no:"7",t:"María, mi mejor amiga, (ir) ___ a México. (Vivir, ella) ___ en Acapulco y el verano que viene ella (visitar, a mí) ___ .",a:[["va","va a ir"],["va a vivir","vive"],["me va a visitar","va a visitarme"]]},
   {no:"8",t:"El próximo verano mis amigos y yo (viajar) ___ a Egipto, ¿(venirse, vosotros) ___ ?",a:[["vamos a viajar","viajamos"],["os venís","vais a venir"]]},
   {no:"9",t:"¿(Apetecer, a vosotros) ___ conocerme?",a:[["os apetece"]]}
  ]},
 {type:"open",label:"B",instr:"Escribe en tu blog oraciones sobre ti similares a las de Sam. Descríbete, habla de lo que haces actualmente y de tus planes para el futuro.",ko:"(자유 작문) 나의 블로그: 현재와 미래 계획을 쓰세요.",
  items:[{q:"Soy… Estoy… Voy a…",model:"Soy muy simpática. Tengo treinta años y trabajo en una escuela. Ahora estoy aprendiendo italiano. El próximo año voy a viajar a Italia."}]}
]},
{id:"9-x3",num:"3",sec:"¡extra! En comunicación",title:"Una familia famosa",page:188,acts:[
 {type:"fill",label:"A",instr:"Javier enseña a Sam fotos de una de las familias más famosas de España: los reyes de España. Escribe el nombre de los miembros usando las pistas (Don Juan Carlos I y su esposa Doña Sofía tienen tres hijos: Felipe VI y las infantas Elena y Cristina. Los reyes de España, Felipe VI y Doña Letizia, tienen dos hijas: Leonor, la mayor, y Sofía, la pequeña).",ko:"사진 속 인물 이름을 쓰세요. (1 후안 카를로스 I세, 2 소피아 왕비, 3 펠리페 6세, 4 레티시아 왕비, 5 레오노르, 6 소피아)",
  items:[
   {no:"1",t:"Don ___ I (el padre de Felipe VI)",a:[["juan carlos"]]},
   {no:"2",t:"Doña ___ (esposa de Juan Carlos I)",a:[["sofía"]]},
   {no:"3",t:"Don ___ VI (el rey de España)",a:[["felipe"]]},
   {no:"4",t:"Doña ___ (esposa de Felipe VI)",a:[["letizia"]]},
   {no:"5",t:"___ (la hija mayor de Felipe VI)",a:[["leonor"]]},
   {no:"6",t:"___ (la hija pequeña de Felipe VI)",a:[["sofía"]]}
  ]},
 {type:"open",label:"B",instr:"Ahora tú puedes presentar a una familia famosa de tu país o, si quieres, a tu propia familia. (¿Cuántos miembros tiene? ¿Cómo se llaman? ¿Cuáles son sus profesiones? ¿Qué hacen? ¿Por qué es una familia famosa?)",ko:"(자유 작문) 유명한 가족 또는 자신의 가족을 소개하세요.",
  items:[{q:"Mi familia… / La familia famosa es…",model:"Mi familia tiene cuatro miembros: mi padre, mi madre, mi hermana y yo. Mi padre es médico y mi madre es profesora."}]}
]}
]};
})();
