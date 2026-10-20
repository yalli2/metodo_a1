window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
window.UNITS[7]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"7-1",num:"1",sec:S,title:"A los españoles les gusta…",page:135,acts:[
 {type:"match",label:"A",instr:"Leyla encuentra en una revista digital algunos datos sobre gustos e intereses de los españoles. Lee y relaciona cada comentario con la persona.",ko:"누가 한 말인지 연결하세요.",cols:true,
  opts:["Jaime","Clara","Juan","María","Carolina","Jonathan"],
  items:[{l:"Casi todos los españoles nos gusta echarnos la siesta.",a:0},{l:"A los jóvenes españoles les encanta salir de fiesta.",a:1},{l:"A mediodía nos gusta tomar un aperitivo.",a:2},{l:"A mucha gente le gusta el flamenco.",a:3},{l:"A mí me encanta el fútbol.",a:4},{l:"Al 60 % de los jóvenes no les interesa la política.",a:5}]},
 {type:"open",label:"B",instr:"Ahora completa la ficha con la información sobre tu país: deportes, jóvenes, música, comida, bebida, diversión. Usa: A la gente de mi país le encanta/-n…, Nos gusta/-n…, En mi país nos encanta…",ko:"(자유 작문) 자국에 대해 gustar 구문으로 써 보세요.",
  items:[{q:"Ficha de mi país:",model:"A la gente de mi país le encanta el fútbol. A los jóvenes les interesa la tecnología. En mi país nos encanta la música pop. Nos gusta comer arroz."}]}
]},
{id:"7-2",num:"2",sec:S,title:"El sábado, ¡fiesta!",page:136,acts:[
 {type:"choice",label:"A",audio:"2-06",instr:"Leyla habla con sus amigos para organizar una fiesta. Escucha la grabación y marca la opción correcta (A / B).",ko:"듣고 알맞은 보기를 고르세요. (1. Carlos: Por mi cumpleaños / Para mi cumpleaños · 2. Laura: aceitunas / sándwiches · 3. Klaus: salsa / rock · 4. Michael: vino / zumo de naranja · 5. Oliver: por la noche / por la mañana)",
  items:[
   {q:"1. Carlos",o:["Por mi cumpleaños","Para mi cumpleaños"],a:0},
   {q:"2. Laura (lleva…)",o:["aceitunas","sándwiches"],a:0},
   {q:"3. Klaus (música)",o:["salsa","rock"],a:0},
   {q:"4. Michael (bebida)",o:["vino","zumo de naranja"],a:0},
   {q:"5. Oliver (cuándo)",o:["por la noche","por la mañana"],a:0}
  ]},
 {type:"open",label:"B",instr:"En grupos, siguiendo el modelo de la actividad anterior, organizad una fiesta: decidid el motivo, la música, la comida y bebida que hay que llevar.",ko:"(말하기·작문) 파티를 계획해 보세요.",
  items:[{q:"La fiesta es por… Llevamos…",model:"La fiesta es por el cumpleaños de Ana. A todos nos gusta el pop. Llevamos patatas fritas, aceitunas, refrescos y vino."}]}
]},
/* ===== OBSERVA Y APRENDE ===== */
{id:"7-3",num:"3",sec:O,title:"Tú y yo somos distintos",page:137,acts:[
 {type:"match",label:"A",instr:"Ania y Oliver son los dos estudiantes más diferentes de la clase. Busca cuáles son esas diferencias: ¿a quién (Ania, Oliver o a los dos) corresponde cada información?",ko:"누구에게 해당하는지 고르세요.",cols:true,
  opts:["Ania","Oliver","Los dos"],
  items:[{l:"Le gusta el jazz.",a:0},{l:"No le gusta el jazz.",a:1},{l:"Le gustan los coches.",a:1},{l:"No le gustan los coches.",a:0},{l:"Le encanta la bici.",a:0},{l:"No le gusta nada escribir.",a:1},{l:"Le gusta mucho leer.",a:0},{l:"Le encanta conocer gente nueva.",a:1},{l:"Le gustan los idiomas.",a:2},{l:"Le gusta la música.",a:2},{l:"Le encantan los animales y las flores.",a:0},{l:"No le gusta hacer deporte.",a:1}]},
 {type:"match",label:"B",instr:"En parejas clasificad estos enunciados en el grupo correspondiente: 1.º Me gusta + nombre singular · 2.º Me gusta + infinitivo · 3.º Me gustan + nombre plural.",ko:"문장을 세 그룹으로 분류하세요.",cols:true,
  opts:["1.º grupo: nombre singular","2.º grupo: infinitivo","3.º grupo: nombre plural"],
  items:[
   {no:"1",l:"Me gusta hablar por teléfono.",a:1},{no:"2",l:"Me encantan los fines de semana.",a:2},{no:"3",l:"Me interesa conseguir ese trabajo.",a:1},
   {no:"4",l:"Me gustan las flores.",a:2},{no:"5",l:"Me encanta tomar el sol.",a:1},{no:"6",l:"No me interesan los políticos.",a:2},
   {no:"7",l:"No me interesan las películas de terror.",a:2},{no:"8",l:"Me gusta mucho la vida en España.",a:0},{no:"9",l:"Me interesa la informática.",a:0},
   {no:"10",l:"Me encanta el café.",a:0},{no:"11",l:"No me gustan las motos.",a:2},{no:"12",l:"Me encantan los niños.",a:2}]},
 {type:"fill",label:"C",instr:"Ahora construimos la regla para los verbos GUSTAR, ENCANTAR e INTERESAR.",ko:"규칙을 완성하세요.",
  items:[
   {t:"ME GUSTA + nombre en ___ / + verbo en ___ .",a:[["singular"],["infinitivo"]]},
   {t:"ME GUSTAN + nombres en ___ .",a:[["plural"]]}
  ]},
 {type:"fill",label:"D",instr:"Por último, completamos la tabla: escribe el pronombre que corresponde.",ko:"각 인칭의 간접목적어 대명사를 쓰세요.",
  items:[
   {t:"(A mí) ___ · (A ti) ___ · (A usted) ___ · (A él / a ella) ___",a:[["me"],["te"],["le"],["le"]]},
   {t:"(A nosotros/-as) ___ · (A vosotros/-as) ___ · (A ustedes) ___ · (A ellos / a ellas) ___",a:[["nos"],["os"],["les"],["les"]]}
  ]}
]},
{id:"7-4",num:"4",sec:O,title:"Una fiesta para conocernos",page:139,acts:[
 {type:"match",label:"A",instr:"Gastón organiza una fiesta. Recibe algunos mensajes. Léelos y clasifica la parte marcada en la columna correspondiente: POR o PARA.",ko:"por / para 중 알맞은 쪽을 고르세요.",cols:true,
  opts:["POR","PARA"],
  items:[{l:"…por estar enferma",a:0},{l:"…para comprar las cosas",a:1},{l:"…para ayudarte",a:1},{l:"…para decirte",a:1},{l:"…por el tráfico",a:0},{l:"…para avisarte",a:1},{l:"…por las chicas",a:0},{l:"…por Evelyn",a:0},{l:"¿por qué no me llamas?",a:0},{l:"Te llamo por la fiesta",a:0}]}
]},
{id:"7-4b",num:"4",sec:O,title:"Por y para: causa y finalidad",page:140,acts:[
 {type:"fill",label:"B",instr:"Mira el esquema (POR = antes: causa, razón; PARA = después: finalidad, objetivo), completa las oraciones con por o para.",ko:"por / para를 쓰세요.",
  items:[
   {no:"1",t:"No voy a la fiesta ___ la lluvia, es que llueve mucho.",a:[["por"]]},
   {no:"2",t:"Está enfermo ___ beber mucho alcohol.",a:[["por"]]},
   {no:"3",t:"Hace deporte ___ estar bien física y mentalmente.",a:[["para"]]},
   {no:"4",t:"No puedo estudiar ___ el ruido de la calle.",a:[["por"]]},
   {no:"5",t:"La fruta es buena ___ la salud.",a:[["para"]]}
  ]},
 {type:"fill",label:"C",instr:"Vuelve a leer los mensajes de Gastón y completa: ¿qué preposición usamos?",ko:"빈칸을 채우세요.",
  items:[{t:"Para la causa usamos ___ . Para la finalidad usamos ___ .",a:[["por"],["para"]]}]}
]},
{id:"7-gram",num:"+",sec:O,title:"Gramática y léxico",page:141,acts:[
 {type:"fill",instr:"El verbo GUSTAR: completa con gusta o gustan.",ko:"gusta / gustan을 쓰세요.",cols:true,
  items:[
   {t:"Me ___ el café.",a:[["gusta"]]},{t:"Me ___ las motos.",a:[["gustan"]]},{t:"Le ___ tomar café.",a:[["gusta"]]},
   {t:"Nos ___ los gatos.",a:[["gustan"]]},{t:"¿Te ___ ir al cine?",a:[["gusta"]]},{t:"Les ___ las fiestas.",a:[["gustan"]]}
  ]},
 {type:"fill",instr:"Contrastar gustos: completa con a mí también / a mí tampoco / a mí sí / a mí no.",ko:"알맞은 표현을 쓰세요.",
  items:[
   {t:"> Me gustan las clases. < A mí ___ .",a:[["también"]]},
   {t:"> No me interesan los videojuegos. < A mí ___ .",a:[["tampoco"]]},
   {t:"> Me encanta el chocolate. < A mí ___ .",a:[["no"]]},
   {t:"> No me gusta el teatro. < A mí ___ .",a:[["sí"]]}
  ]}
]},
/* ===== PRÁCTICA ===== */
{id:"7-5",num:"5",sec:P,title:"En la fiesta de Gastón",page:142,acts:[
 {type:"fill",label:"A",instr:"Gastón habla con mucha gente en su fiesta. Completa las conversaciones con la forma correcta del verbo en presente y el pronombre correspondiente.",ko:"대명사 + 동사를 함께 쓰세요. (예: me gusta)",
  items:[
   {t:"Linda, ¿(apetecer, a ti) ___ tomar algo?",a:[["te apetece"]]},
   {t:"A mí no (gustar) ___ el vino. Prefiero la cerveza.",a:[["me gusta"]]},
   {t:"A mis amigos y a mí (encantar) ___ vivir en España.",a:[["nos encanta"]]},
   {t:"A Evelyn (gustar) ___ , sobre todo, la comida, y a mí (encantar) ___ la gente.",a:[["le gusta"],["me encanta"]]},
   {t:"Ya sabes que (encantar, a mí) ___ la ropa. Soy muy, muy presumida.",a:[["me encanta"]]},
   {t:"A mí no (gustar) ___ nada comprar ropa.",a:[["me gusta"]]},
   {t:"A mi padre (interesar) ___ mucho las lenguas.",a:[["le interesan"]]},
   {t:"A mí también (gustar) ___ hablar otras lenguas.",a:[["me gusta"]]}
  ]},
 {type:"open",label:"B",instr:"Imagina que tú también estás en la fiesta… ¿Por qué no hablas con Gastón? Responde: ¿Qué te apetece beber? / A mí no me gusta comprar ropa, ¿y a ti? / A mí los españoles me encantan porque son muy simpáticos. ¿Y a ti? / ¿Por qué te interesa aprender español?",ko:"(자유 작문) 가스톤의 질문에 답하세요.",
  items:[{q:"Tus respuestas:",model:"Me apetece beber un zumo. A mí sí me gusta comprar ropa. A mí también me encantan los españoles. Me interesa aprender español para viajar por Latinoamérica."}]}
]},
{id:"7-6",num:"6",sec:P,title:"¿A Gastón le gusta Bea?",page:143,acts:[
 {type:"fill",label:"A",instr:"Bea y Gastón hablan durante mucho tiempo en la fiesta. Completa su conversación con uno de los verbos propuestos (gustar, apetecer, encantar, interesar) y el pronombre adecuado.",ko:"gustar / apetecer / encantar / interesar 중 알맞은 것을 대명사와 함께 쓰세요. (여러 답 가능)",
  items:[
   {no:"1",t:"Bea: A mí ___ muchísimo la música clásica.",a:[["me gusta","me encanta","me interesa"]]},
   {no:"2",t:"Bea: Sí, ___ las películas románticas.",a:[["me encantan","me gustan"]]},
   {no:"3",t:"Bea: Yo soy muy romántica, y muy clásica, ___ los chicos con el pelo corto y muy bien vestidos.",a:[["me gustan","me encantan"]]},
   {no:"4",t:"Bea: ___ la ropa clásica.",a:[["me encanta","me gusta"]]},
   {no:"5",t:"Bea: No ___ ni los pírsines ni los tatuajes.",a:[["me gustan"]]},
   {no:"6",t:"Bea: ¡El fútbol no ___ nada! ¡Lo odio!",a:[["me gusta","me interesa"]]},
   {no:"7",t:"Bea: A mí ___ el ballet.",a:[["me encanta","me gusta","me interesa"]]},
   {no:"8",t:"Bea: Gastón, ¿y a ti? ¿ ___ el cine y la literatura?",a:[["te interesan","te gustan","te encantan"]]},
   {no:"9",t:"Bea: Ya, bueno… Gastón, ¿(a ti) ___ cenar conmigo el sábado?",a:[["te apetece"]]}
  ]},
 {type:"open",label:"B",instr:"Gastón no tiene muchas cosas en común con Bea. Fijaos en la actividad anterior y en esta ficha (Gastón: ropa moderna, casual y deportiva; películas de terror y ciencia ficción; televisión, música tecno, salir con amigos, ir de copas, discotecas, bailar, fútbol) y comentad las diferencias.",ko:"(말하기·작문) 가스톤과 베아의 취향 차이를 쓰세요.",
  items:[{q:"A Gastón le gusta… pero a Bea le gusta más…",model:"A Gastón le gusta la ropa informal, pero a Bea le gusta más la ropa clásica. A Gastón le encanta el fútbol, pero a Bea no le gusta nada."}]}
]},
{id:"7-7",num:"7",sec:P,title:"Tienes un mensaje nuevo",page:144,acts:[
 {type:"fill",audio:"2-07",instr:"Ania tiene en el móvil seis nuevos mensajes de voz. Complétalos con por o para según corresponda. Después, escucha la grabación y comprueba.",ko:"por / para를 쓰세요.",
  items:[
   {no:"1",t:"Te llamo ___ la fiesta del sábado en casa de Gastón.",a:[["por"]]},
   {no:"2",t:"Tengo entradas ___ ir al teatro.",a:[["para"]]},
   {no:"3",t:"Estoy en el hospital ___ un accidente con la moto.",a:[["por"]]},
   {no:"4",t:"No llego ___ cenar. Tú preparas algo ___ comer, ¿vale?",a:[["para"],["para"]]},
   {no:"5",t:"Te invito ___ tomar algo al salir de clase.",a:[["para"]]},
   {no:"6",t:"No voy al cumpleaños de Carmen ___ el examen. Necesito mucho tiempo ___ estudiar.",a:[["por"],["para"]]}
  ]}
]},
{id:"7-8",num:"8",sec:P,title:"¿Por qué aprendéis español?",page:144,acts:[
 {type:"open",label:"A",instr:"Oliver y Ania hablan con otros estudiantes para saber por qué aprenden español. Observa las imágenes (Erika: mapa/viajar; Noriko: flamenco; Vincent: Don Quijote; Mary y Joana: móvil/amigos) y usa por y para.",ko:"(자유 작문) 각 학생이 스페인어를 배우는 이유를 por/para로 쓰세요.",
  items:[{q:"Erika aprende español para… / Noriko lo estudia por…",model:"Erika aprende español para viajar por América Latina. Noriko estudia español por el flamenco. Vincent estudia español para leer el Quijote. Mary y Joana estudian español para hablar con sus amigos."}]},
 {type:"open",label:"B",instr:"Ahora, en grupo, comentad vuestras razones para estudiar español. ¿Cuál es la razón más original o curiosa?",ko:"(말하기)",
  items:[{q:"Estudio español porque / para…",model:"Estudio español para trabajar en un país hispanohablante y porque me encanta la cultura."}]}
]},
{id:"7-9",num:"9",sec:P,title:"A todo el mundo le gusta…",page:145,acts:[
 {type:"match",label:"B",instr:"En parejas, relacionad las imágenes con el país correspondiente (1 💃 tango, 2 🥐 cruasán, 3 🍝 pasta, 4 🍵 té, 5 🍫 chocolate, 6 🏀 baloncesto).",ko:"이미지에 해당하는 나라를 연결하세요.",cols:true,
  opts:["Estados Unidos","Suiza","Argentina","Italia","Francia","Inglaterra"],
  items:[{l:"1 💃 tango",a:2},{l:"2 🥐 cruasán",a:4},{l:"3 🍝 pasta",a:3},{l:"4 🍵 té",a:5},{l:"5 🍫 chocolate",a:1},{l:"6 🏀 baloncesto",a:0}]},
 {type:"open",label:"C–D",instr:"Piensa en tu país y escribe una frase para cada tema (trabajo, tiempo libre, comida y bebida, deportes, viajes, cine, libros, televisión). Usa gustar, encantar, preferir, interesar. Compara con tus compañeros: A los canadienses también les interesa… / A los chinos tampoco nos gusta…",ko:"(자유 작문) 자국에 대해 각 주제별로 문장을 쓰세요.",
  items:[{q:"En mi país…",model:"En mi país preferimos beber té en el almuerzo. A la gente de mi país le interesan mucho los deportes. Nos encanta viajar."}]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"7-10",num:"10",sec:C,title:"No sé qué ropa ponerme",page:146,acts:[
 {type:"open",label:"A",instr:"Vamos a ayudar a Oliver (le gusta la ropa cómoda, deportiva e informal) y a Evelyn (le gusta la ropa clásica, elegante y moderna) a elegir ropa para la fiesta de Gastón. Para la fiesta, Oliver lleva… y Evelyn lleva…",ko:"(자유 작문) 올리버와 에블린이 파티에 입을 옷을 골라 주세요. (llevar = 입다)",
  items:[{q:"Oliver lleva… / Evelyn lleva…",model:"Oliver lleva unos vaqueros, una camiseta y zapatillas deportivas. Evelyn lleva un vestido elegante y unos zapatos de tacón."}]},
 {type:"open",label:"B",instr:"Oliver y Evelyn tienen muchos planes esta semana (Evelyn: martes comida de trabajo, miércoles teatro, viernes cena romántica; Oliver: viernes reunión con el jefe, sábado salir de copas, domingo paseo en bici). Ayúdalos a elegir la ropa adecuada.",ko:"(자유 작문) 각 약속에 알맞은 옷을 추천하세요.",
  items:[{q:"En mi opinión Evelyn puede llevar… / Oliver puede llevar…",model:"En mi opinión Evelyn puede llevar un traje de chaqueta y falda para la comida de trabajo. Oliver puede llevar un traje y una corbata para la reunión con el jefe y unos pantalones cortos para el paseo en bici."}]}
]},
{id:"7-11",num:"11",sec:C,title:"A mí me gusta la siesta",page:147,acts:[
 {type:"match",label:"A",audio:"2-08",instr:"Leyla y Gastón hablan con dos amigos españoles sobre sus actividades de ocio y tiempo libre. Escucha y relaciona cada diálogo con la actividad.",ko:"듣고 대화 번호에 해당하는 활동을 연결하세요.",cols:true,
  opts:["Hacer deporte (gimnasio, baloncesto, bici)","Escuchar música en casa y cocinar poco","Ver el fútbol en la tele","Pasear con el perro, ir a la playa y leer"],
  items:[{l:"Diálogo 1",a:0},{l:"Diálogo 2",a:1},{l:"Diálogo 3",a:2},{l:"Diálogo 4",a:3}]},
 {type:"open",label:"B",instr:"En plenaria, recordamos actividades para hacer durante el tiempo libre. Haz una lista en el orden de tus preferencias.",ko:"(자유 작문) 선호 순서대로 여가 활동 4가지를 쓰세요.",
  items:[{q:"1. 2. 3. 4.",model:"1. escuchar música; 2. salir con amigos; 3. ir al cine; 4. hacer deporte"}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"7-x1",num:"1",sec:"¡extra! Contextos",title:"Muy interesante",page:148,acts:[
 {type:"open",instr:"En la página web de la escuela donde los chicos estudian español proponen todas estas actividades (visitas y excursiones, cursos especiales, otros cursos, otras actividades). Marca las cuatro que más te interesan o te gustan y explica por qué.",ko:"(자유 작문) 관심 있는 활동 4개와 이유를 쓰세요.",
  items:[{q:"Me interesa / me gusta… para…",model:"Me interesan mucho los cursos de cocina española para aprender platos típicos. Me encanta la visita a Granada porque quiero conocer la Alhambra."}]}
]},
{id:"7-x2",num:"2",sec:"¡extra! Práctica",title:"Gastón y su abuelo",page:149,acts:[
 {type:"check",label:"A",audio:"2-09",instr:"Alfred, el abuelo de Gastón, es una persona muy importante para él. Escucha a Gastón y marca las cosas que hacen juntos.",ko:"듣고 함께 하는 활동을 모두 고르세요. (1 레스토랑 식사, 2 볼링, 3 낮잠(해먹), 4 해변, 5 자전거, 6 액션 영화, 7 아이스크림)",
  opts:["1 salir a comer","2 jugar a los bolos","3 dormir la siesta","4 ir a la playa","5 montar en bicicleta","6 ver películas de acción","7 tomar un helado"],
  a:[0,2,3,4,5,6]},
 {type:"open",label:"B",instr:"Completa este enunciado con otras dos actividades que no están representadas en las imágenes.",ko:"(자유 작문) 그림에 없는 활동 2가지를 쓰세요.",
  items:[{q:"A Gastón y a su abuelo les encanta… y también les gusta muchísimo…",model:"A Gastón y a su abuelo les encanta ver el fútbol y también les gusta muchísimo ir a los museos."}]}
]},
{id:"7-x3",num:"3",sec:"¡extra! En comunicación",title:"¡Viva la fiesta!",page:150,acts:[
 {type:"match",label:"A",audio:"2-10",instr:"Los chicos de la clase encuentran en Internet fotos de fiestas famosas de España e Hispanoamérica. Escucha y relaciona cada foto con su fiesta. (1 máscaras blancas y tambores; 2 gente corriendo delante de toros; 3 figuras gigantes de cartón)",ko:"사진과 축제를 연결하세요.",cols:true,
  opts:["Los Carnavales de Uruguay","Los Sanfermines","Las Fallas"],
  items:[{l:"Foto 1",a:0},{l:"Foto 2",a:1},{l:"Foto 3",a:2}]},
 {type:"open",label:"B",instr:"¿A cuál de estas fiestas quieres ir? ¿Por qué?",ko:"(자유 작문)",
  items:[{q:"Quiero ir a… porque…",model:"Quiero ir a Las Fallas porque me gustan las figuras de cartón y los fuegos artificiales."}]}
]},
{id:"7-x4",num:"4",sec:"¡extra! En comunicación",title:"A Nuria le encanta…",page:150,acts:[
 {type:"fill",label:"A",instr:"Nuria es una de las invitadas a la fiesta. Fíjate en las imágenes (le gusta: la playa, los perros, los libros, los museos; no le gusta: la tele, los aviones, los gatos, las discotecas) y completa las oraciones.",ko:"그림을 보고 문장을 완성하세요.",
  items:[
   {t:"A Nuria le encantan ___ (los perros / la playa / …)",a:[["los perros","los libros","los museos","las playas","las playa","la playa"]]},
   {t:"No le gusta ___ (la tele / viajar en avión / …)",a:[["la tele","la televisión","viajar en avión","el avión","la discoteca","las discotecas","ir a discotecas","los gatos"]]},
   {t:"A ella le interesan ___ (los museos / los libros)",a:[["los museos","los libros","los cuadros","la pintura","el arte"]]}
  ]},
 {type:"open",label:"B–C",instr:"En plenaria, comentad si vuestros gustos son como los de Nuria (A mí también me gustan… / A mí sí… / Pues a mí no…). Después contesta a las opiniones de los amigos de Nuria (Pablo, Adela, Rocío, Paco).",ko:"(자유 작문) 친구들의 의견에 답하세요.",
  items:[{q:"Pablo: Me encanta conocer gente de otros países… ¿Y a ti?",model:"A mí también me encanta. / A mí no me interesa mucho."}]}
]},
{id:"7-x5",num:"5",sec:"¡extra! En comunicación",title:"¿Qué hacemos esta tarde?",page:151,acts:[
 {type:"open",label:"A",instr:"Gastón y sus amigos no tienen plan para esta tarde. Pensad en actividades de ocio para Clara (no le gusta el deporte, prefiere actividades culturales, le encanta la música), Alfredo (le gusta mucho el teatro, no le interesan los deportes, le encantan las exposiciones, no le gustan las actividades al aire libre) y Charlie (le encanta bailar, no le gusta leer, le interesa el arte, no le gusta el cine).",ko:"(자유 작문) 세 사람에게 알맞은 오후 활동을 추천하세요.",
  items:[{q:"A Clara le encanta la música… Creemos que puede ir a…",model:"A Clara le encanta la música. Creemos que puede ir a un concierto. A Alfredo le gusta el teatro, puede ir a una exposición. A Charlie le encanta bailar, puede ir a una discoteca."}]},
 {type:"open",label:"B",instr:"Elige a uno de tus compañeros de clase, completa la ficha (nombre, le gusta/-n, prefiere, le interesa/-n, no le gusta/-n) y recomiéndale actividades para hacer esta tarde.",ko:"(말하기·작문) 친구의 취향을 조사하고 활동을 추천하세요.",
  items:[{q:"A mi compañero no le gusta… pero sí le interesa… por eso, le recomiendo…",model:"A mi compañero no le gusta el cine, pero sí le interesa el teatro; por eso, le recomiendo ir a un estreno al Teatro Central."}]}
]}
]};
})();
