window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
window.UNITS[3]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"3-1",num:"1",sec:S,title:"En la casa de Carmen",page:53,acts:[
 {type:"choice",label:"B",instr:"Carmen invita a Kelly a su casa. Lee el texto, observa el plano y contesta a las preguntas.",ko:"본문을 읽고 질문에 맞는 답을 고르세요.",
  items:[
   {q:"1. ¿Con quién vive Carmen?",o:["Con Miguel (su novio)","Con una familia","Sola"],a:0},
   {q:"2. ¿Dónde está Miguel?",o:["En casa","En la universidad","En la cocina"],a:1},
   {q:"3. ¿Cuántos dormitorios hay en el piso?",o:["Uno","Dos","Tres"],a:1},
   {q:"4. ¿Cómo es el salón?",o:["Es muy grande","Es pequeño","Es oscuro"],a:0},
   {q:"5. ¿Qué hay a la izquierda de la entrada?",o:["La cocina","Dos baños","La terraza"],a:1},
   {q:"6. ¿Dónde está la cocina?",o:["A la derecha de la entrada","A la izquierda","Al fondo"],a:0},
   {q:"7. ¿Hay una terraza en la casa de Carmen?",o:["Sí, hay una terraza","No, no hay"],a:0},
   {q:"8. ¿Dónde está la casa de Kelly?",o:["Cerca del centro y de la escuela de español","Lejos del centro","En la universidad"],a:0}
  ]}
]},
{id:"3-2",num:"2",sec:S,title:"Mi barrio",page:54,acts:[
 {type:"choice",label:"A",audio:"1-23",instr:"Kelly habla con Carmen de su barrio en Málaga. Escucha e indica verdadero (V) o falso (F).",ko:"듣고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"1. No hay biblioteca.",o:VF,a:1},{q:"2. Hay un cine cerca.",o:VF,a:1},{q:"3. Hay solo dos bares en su calle.",o:VF,a:1},
   {q:"4. Hay un supermercado.",o:VF,a:0},{q:"5. Hay muchos coches.",o:VF,a:0},{q:"6. Lejos hay un parque.",o:VF,a:1},
   {q:"7. Es un barrio limpio.",o:VF,a:0},{q:"8. Es un lugar peligroso por las noches.",o:VF,a:1}
  ]},
 {type:"open",label:"B",instr:"Piensa en tu barrio y completa la ficha (Hay / No hay).",ko:"(자유 작문) 우리 동네에 있는 것(Hay)과 없는 것(No hay)을 각각 써 보세요.",
  items:[{q:"Hay: …",model:"Hay un supermercado, una biblioteca y un parque."},{q:"No hay: …",model:"No hay discotecas ni cines."}]}
]},
/* ===== OBSERVA Y APRENDE ===== */
{id:"3-3",num:"3",sec:O,title:"Un dormitorio libre",page:55,acts:[
 {type:"match",label:"B",instr:"Fíjate en las palabras subrayadas del anuncio de Carmen y escríbelas junto a su verbo correspondiente (Es / Son — Está).",ko:"광고문의 밑줄 친 표현이 어느 동사(Es/Son 또는 Está)와 함께 쓰였는지 고르세요.",cols:true,
  opts:["Es / Son","Está"],
  items:[{l:"grande",a:0},{l:"tranquila",a:0},{l:"cerca del centro",a:1},{l:"al lado de la parada",a:1},{l:"nuevo",a:0},{l:"moderna",a:0},{l:"cómodo",a:0},{l:"pequeña",a:0},{l:"al sur",a:1},{l:"perfecta",a:0},{l:"caro (no es caro)",a:0},{l:"estupendos (Son estupendos)",a:0}]}
]},
{id:"3-4",num:"4",sec:O,title:"Sobre Málaga",page:55,acts:[
 {type:"choice",label:"A",instr:"Lee este texto sobre la ciudad de Málaga y contesta.",ko:"(이해 확인) 본문(p.55)을 읽고 맞는 답을 고르세요.",
  items:[
   {q:"Málaga está en el norte de España.",o:VF,a:1},
   {q:"Málaga está en Andalucía, en la Costa del Sol.",o:VF,a:0},
   {q:"El clima de Málaga es agradable todo el año.",o:VF,a:0},
   {q:"La calle principal de Málaga es la calle Larios.",o:VF,a:0},
   {q:"Málaga no tiene aeropuerto.",o:VF,a:1}
  ]},
 {type:"match",label:"B",instr:"¿Cuándo usamos SER y ESTAR? Marca la opción correcta.",ko:"다음 용도에는 SER와 ESTAR 중 무엇을 쓸까요?",
  opts:["SER","ESTAR"],
  items:[{l:"Para localizar",a:1},{l:"Para expresar característica",a:0}]},
 {type:"fill",label:"C",instr:"Ahora completa con las formas del verbo ESTAR.",ko:"ESTAR 동사의 현재형을 쓰세요.",cols:true,
  items:[{t:"Yo ___",a:[["estoy"]]},{t:"Tú ___",a:[["estás"]]},{t:"Usted / Él / Ella ___",a:[["está"]]},{t:"Nosotros/-as ___",a:[["estamos"]]},{t:"Vosotros/-as ___",a:[["estáis"]]},{t:"Ustedes / Ellos / Ellas ___",a:[["están"]]}]}
]},
{id:"3-5",num:"5",sec:O,title:"Las mascotas de Carmen y de sus amigos",page:56,acts:[
 {type:"match",label:"A",instr:"Clasifica estas expresiones (de las fotos de los animales) en su lugar correspondiente: ¿Dónde está? / ¿Cómo está?",ko:"사진 속 동물 설명을 위치(¿Dónde está?)와 상태(¿Cómo está?)로 분류하세요.",cols:true,
  opts:["¿Dónde está?","¿Cómo está?"],
  items:[{l:"tumbado",a:1},{l:"en la ventana",a:0},{l:"encima del sofá / sobre el sofá",a:0},{l:"debajo del paraguas",a:0},{l:"dormido",a:1},{l:"alegre",a:1},{l:"triste",a:1},{l:"a la derecha del árbol",a:0},{l:"a la izquierda del árbol",a:0},{l:"sentado",a:1}]},
 {type:"match",label:"B",instr:"Ahora clasifica las palabras del cuadro. Usamos ESTAR para expresar lugar (dónde) o estado (cómo).",ko:"ESTAR와 함께 쓰는 표현을 장소(dónde) / 상태(cómo)로 분류하세요.",cols:true,
  opts:["Lugar: dónde","Estado: cómo"],
  items:[{l:"cerca",a:0},{l:"en la ducha",a:0},{l:"abierto",a:1},{l:"lejos",a:0},{l:"aquí",a:0},{l:"bien",a:1},{l:"en el sur",a:0},{l:"cerrado",a:1},{l:"en Madrid",a:0},{l:"roto",a:1},{l:"frío",a:1},{l:"allí",a:0},{l:"arriba",a:0},{l:"abajo",a:0},{l:"mal",a:1}]}
]},
{id:"3-6",num:"6",sec:O,title:"El despistado de Miguel",page:58,acts:[
 {type:"fill",label:"A",instr:"Miguel tiene muy mala memoria. Lee y completa con ESTAR las notas de Carmen.",ko:"ESTAR의 알맞은 형태를 쓰세요.",
  items:[
   {no:"1",t:"Las llaves ___ en la mesa del salón.",a:[["están"]]},
   {no:"2",t:"(Tú) ___ invitado a una cena el martes.",a:[["estás"]]},
   {no:"3",t:"El fin de semana tú y yo ___ juntos.",a:[["estamos"]]},
   {no:"4",t:"Si (tú) ___ hambriento, hay comida en el congelador.",a:[["estás"]]},
   {no:"5",t:"El gato ___ en la terraza.",a:[["está"]]},
   {no:"6",t:"El ordenador ___ encendido.",a:[["está"]]},
   {no:"7",t:"El perro y yo ___ en casa de mis padres.",a:[["estamos"]]},
   {no:"8",t:"(Yo) ___ fuera hasta el viernes.",a:[["estoy"]]}
  ]},
 {type:"match",label:"B",instr:"Fíjate en estas expresiones de localización. Relaciona cada expresión con su significado.",ko:"위치 표현과 한국어 뜻을 연결하세요.",cols:true,
  opts:["위에 (겉면 위)","밖에","안에","아래에","뒤에","앞에","옆에","맞은편에"],
  items:[{l:"encima de",a:0},{l:"fuera de",a:1},{l:"dentro de / en",a:2},{l:"debajo de",a:3},{l:"detrás de",a:4},{l:"delante de",a:5},{l:"al lado de / junto a",a:6},{l:"enfrente de",a:7}]},
 {type:"fill",label:"C",audio:"1-24",instr:"Carmen deja otras notas a Miguel. Escucha y completa. Las flechas te ayudan: a la derecha / a la izquierda / entre / arriba / abajo.",ko:"듣고 빈칸에 위치 표현을 쓰세요.",
  items:[
   {no:"1",t:"Las patatas están ___ , ___ aceite.",a:[["a la izquierda"],["al lado del","al lado de"]]},
   {no:"2",t:"El café está ___ .",a:[["a la derecha"]]},
   {no:"3",t:"Las toallas están ___ armario del baño.",a:[["dentro del","dentro de"]]},
   {no:"4",t:"El diccionario de inglés está ___ la estantería.",a:[["en"]]},
   {no:"5",t:"La leche está ___ el armario grande de la cocina.",a:[["en","dentro de"]]},
   {no:"6",t:"___ los libros está el dinero.",a:[["entre"]]},
   {no:"7",t:"___ la puerta de entrada está la llave del garaje.",a:[["detrás de"]]},
   {no:"8",t:"Los bolígrafos están ___ los lápices, en la mesa.",a:[["al lado de"]]}
  ]}
]},
{id:"3-7",num:"7",sec:O,title:"¿Ser, Estar o Hay?",page:59,acts:[
 {type:"match",instr:"Lee de nuevo el texto del ejercicio 1 A; después, relaciona cada ejemplo con su uso.",ko:"각 문장의 쓰임을 고르세요.",
  opts:["a) Característica de un objeto","b) Localización: dónde","c) Estado: cómo","d) Existencia de un objeto"],
  items:[{no:"1",l:"Hay muchos muebles.",a:3},{no:"2",l:"El salón es muy grande.",a:0},{no:"3",l:"Hay dos baños.",a:3},{no:"4",l:"La cocina está a la derecha.",a:1},{no:"5",l:"Estoy contenta.",a:2},{no:"6",l:"La cocina normalmente está limpia.",a:2}]}
]},
/* ===== PRÁCTICA ===== */
{id:"3-8",num:"8",sec:P,title:"Un mundo diferente",page:61,acts:[
 {type:"open",label:"A–B",instr:"Kelly es una idealista. Ella imagina un mundo diferente, con gente feliz, una vida tranquila… Escribe sus deseos en el blog y, después, escribe sobre tu mundo ideal.",ko:"(자유 작문) 'En mi mundo ideal no hay… / todo el mundo es…' 형식으로 나의 이상적인 세상을 써 보세요.",
  items:[{q:"En el mundo de Kelly… / En mi mundo ideal…",model:"En mi mundo ideal no hay personas malas, todo el mundo es bueno y simpático. No hay tráfico y la gente está mucho tiempo al aire libre."}]}
]},
{id:"3-9",num:"9",sec:P,title:"Kelly en familia",page:62,acts:[
 {type:"match",label:"A",instr:"Kelly tiene un dormitorio bastante grande y cómodo. Relaciona los objetos que podemos encontrar en un dormitorio con su significado.",ko:"침실 가구·물건 이름과 한국어 뜻을 연결하세요.",cols:true,
  opts:["옷장","서랍장","의자","카펫","그림(액자)","책꽂이(선반)","램프(스탠드)","자명종","협탁","책상","침대"],
  items:[{l:"un armario",a:0},{l:"una cómoda",a:1},{l:"una silla",a:2},{l:"una alfombra",a:3},{l:"un cuadro",a:4},{l:"una estantería",a:5},{l:"una lámpara",a:6},{l:"un despertador",a:7},{l:"una mesita de noche",a:8},{l:"una mesa de estudio",a:9},{l:"una cama",a:10}]},
 {type:"fill",label:"B",instr:"Lee la descripción que hace Kelly de su dormitorio y completa con SER, ESTAR y HAY. (Usa: es / son / está / están / hay)",ko:"침실 묘사를 읽고 ser / estar / hay 중 알맞은 형태를 쓰세요.",
  ctx:"Mi dormitorio en España (1) <b>__</b> grande y cómodo. Cuando entras, enfrente (2) <b>__</b> la ventana, a la derecha (3) <b>__</b> un cuadro, y a la izquierda (4) <b>__</b> dos pósteres. A la izquierda de la puerta (5) <b>__</b> la cama, entre la mesita de noche y el armario de dos puertas. En la mesita (6) <b>__</b> una lámpara y un despertador. Dentro del armario (7) <b>__</b> … un desorden total. (8) <b>__</b> una cómoda y una silla delante de la ventana. La alfombra no (9) <b>__</b> muy bonita. A la derecha de la puerta (10) <b>__</b> la mesa de estudio, delante (11) <b>__</b> la silla y debajo (12) <b>__</b> una papelera. En la mesa (13) <b>__</b> muchas cosas: el ordenador, que (14) <b>__</b> un portátil, discos, papeles… ¡otro desorden! Por último, en la pared de la izquierda (15) <b>__</b> la estantería, (16) <b>__</b> llena de cosas. Los muebles (17) <b>__</b> modernos y la habitación (18) <b>__</b> luminosa.",
  cols:true,
  items:[
   {no:"1",t:"___",a:[["es"]]},{no:"2",t:"___",a:[["está"]]},{no:"3",t:"___",a:[["hay"]]},{no:"4",t:"___",a:[["hay"]]},{no:"5",t:"___",a:[["está"]]},{no:"6",t:"___",a:[["hay"]]},
   {no:"7",t:"___",a:[["hay"]]},{no:"8",t:"___",a:[["hay"]]},{no:"9",t:"___",a:[["es"]]},{no:"10",t:"___",a:[["está"]]},{no:"11",t:"___",a:[["está"]]},{no:"12",t:"___",a:[["hay"]]},
   {no:"13",t:"___",a:[["hay"]]},{no:"14",t:"___",a:[["es"]]},{no:"15",t:"___",a:[["está"]]},{no:"16",t:"___",a:[["está"]]},{no:"17",t:"___",a:[["son"]]},{no:"18",t:"___",a:[["es"]]}
  ]},
 {type:"choice",label:"C",instr:"Lee de nuevo el texto: ¿dónde están los objetos del dormitorio de Kelly?",ko:"(이해 확인) 본문에 따르면 어디에 있나요?",
  items:[
   {q:"La cama está…",o:["entre la mesita de noche y el armario","delante de la ventana","debajo de la mesa"],a:0},
   {q:"La mesa de estudio está…",o:["a la izquierda de la puerta","a la derecha de la puerta","enfrente de la ventana"],a:1},
   {q:"La estantería está…",o:["en la pared de la izquierda","en la pared de la derecha","dentro del armario"],a:0},
   {q:"La papelera está…",o:["encima de la mesa","debajo de la mesa","dentro del armario"],a:1}
  ]}
]},
{id:"3-10",num:"10",sec:P,title:"Familia y amigos de Carmen",page:64,acts:[
 {type:"fill",instr:"Describe a estas personas con los adjetivos que te damos y los verbos SER y ESTAR. ¡Cuidado con el género! Escribe el adjetivo con la forma correcta.",ko:"괄호 안 형용사를 성·수에 맞게 바꿔 쓰세요. (sonriente·mayor·joven은 남녀 공통)",cols:true,
  items:[
   {t:"El hermano está ___ (enfermo)",a:[["enfermo"]]},
   {t:"La hermana está ___ (enfadado)",a:[["enfadada"]]},
   {t:"La madre está ___ (resfriado)",a:[["resfriada"]]},
   {t:"La abuela es ___ (mayor) y está ___ (sentado)",a:[["mayor"],["sentada"]]},
   {t:"El hermano pequeño está ___ (dormido)",a:[["dormido"]]},
   {t:"Los amigos están ___ (enfadado)",a:[["enfadados"]]},
   {t:"Las amigas son ___ (moreno)",a:[["morenas"]]},
   {t:"La madre es ___ (rubio) y ___ (delgado)",a:[["rubia"],["delgada"]]},
   {t:"El abuelo está ___ (cansado) y ___ (aburrido)",a:[["cansado"],["aburrido"]]}
  ]}
]},
{id:"3-11",num:"11",sec:P,title:"¡Bingo!",page:65,acts:[
 {type:"fill",audio:"1-25",instr:"Escucha y marca los números que escuchas. Escribe en cifras los 10 números en el orden en que los oyes.",ko:"들리는 숫자 10개를 순서대로 숫자로 쓰세요. (1000은 1000 또는 1.000)",cols:true,
  items:[["1000","1.000","mil"],["500"],["78"],["50"],["600"],["60"],["110"],["89"],["800"],["1001","1.001"]].map((a,i)=>({no:String(i+1),t:"___",a:[a]}))}
]},
{id:"3-12",num:"12",sec:P,title:"Atención: ¿S, C, Z?",page:65,acts:[
 {type:"fill",audio:"1-26",instr:"Completa las palabras con la letra adecuada (s, c o z). Después escucha y comprueba tus respuestas.",ko:"s / c / z 중 알맞은 글자를 쓰세요. (15·16번은 빈칸이 두 개)",cols:true,
  items:[
   {no:"1",t:"___ illa",a:[["s"]]},{no:"2",t:"___ ielo",a:[["c"]]},{no:"3",t:"___ apato",a:[["z"]]},{no:"4",t:"___ ésped",a:[["c"]]},
   {no:"5",t:"___ umo",a:[["z"]]},{no:"6",t:"___ iete",a:[["s"]]},{no:"7",t:"On ___ e",a:[["c"]]},{no:"8",t:"Ocho ___ ientos",a:[["c"]]},
   {no:"9",t:"___ eleste",a:[["c"]]},{no:"10",t:"___ olo",a:[["s"]]},{no:"11",t:"___ iesta",a:[["s"]]},{no:"12",t:"___ inturón",a:[["c"]]},
   {no:"13",t:"Me ___ ita",a:[["s"]]},{no:"14",t:"Balon ___ esto",a:[["c"]]},{no:"15",t:"___ arago ___ a",a:[["z"],["z"]]},{no:"16",t:"___ erve ___ a",a:[["c"],["z"]]},
   {no:"17",t:"I ___ quierda",a:[["z"]]},{no:"18",t:"___ entado",a:[["s"]]}
  ]}
]},
{id:"3-13",num:"13",sec:P,title:"¿Hay alguien ahí?",page:65,acts:[
 {type:"fill",instr:"Completa los diálogos con algo / nada / alguien / nadie.",ko:"algo(어떤 것) / nada(아무것도) / alguien(누군가) / nadie(아무도) 중 알맞은 말을 쓰세요.",
  items:[
   {no:"1",t:"¿Hay ___ en el armario de Miguel? — Sí, hay muchas cosas.",a:[["algo"]]},
   {no:"2",t:"¿Hay ___ en la silla de la derecha? — Sí, está Carmen.",a:[["alguien"]]},
   {no:"3",t:"¿Qué hay debajo de la mesa? — No hay ___.",a:[["nada"]]},
   {no:"4",t:"¿No hay ___ en el servicio? — No, no hay ___.",a:[["nadie","alguien"],["nadie"]]}
  ]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"3-14",num:"14",sec:C,title:"Kelly pregunta",page:66,acts:[
 {type:"choice",label:"A",instr:"Lee estos diálogos de Kelly con distintas personas y elige la opción correcta.",ko:"각 대화에서 말하는 사람이 어떤 생각을 하는지 고르세요.",
  items:[
   {q:"1. El amigo informa a Kelly de la existencia de algunos objetos (Hay una cama, un armario…).",o:["a) El amigo sabe que Kelly no tiene esa información.","b) El amigo supone que Kelly no tiene esa información."],a:1},
   {q:"2. Kelly pregunta por la ventana («Hay una ventana, ¿no?») y…",o:["a) no sabe si hay una ventana en el dormitorio.","b) supone que hay una ventana."],a:1},
   {q:"3. La señora informa a Kelly de la existencia de un banco («Sí, hay uno a la derecha de la plaza»).",o:["a) La señora sabe que Kelly no tiene esa información.","b) La señora supone que Kelly no sabe dónde hay un banco."],a:0},
   {q:"4. Su amigo Peter la informa de que hay cines en su ciudad y…",o:["a) El amigo supone que Kelly no sabe que en su ciudad hay muchos cines.","b) El amigo sabe que Kelly desconoce que en su ciudad hay muchos cines."],a:0}
  ]},
 {type:"open",label:"B",instr:"En parejas, haced preguntas como en los ejemplos anteriores.",ko:"(말하기) 짝과 Hay 질문을 주고받아 보세요. 예: ¿Hay discotecas en tu barrio? — Sí, hay una.",
  items:[{q:"Escribe 2 preguntas con HAY:",model:"¿Hay discotecas en tu barrio? — Sí, hay una. / ¿Hay una biblioteca cerca de tu casa? — No, no hay ninguna."}]}
]},
{id:"3-15",num:"15",sec:C,title:"Modales y cortesía",page:67,acts:[
 {type:"choice",instr:"Lee esta ficha sobre algunas normas de cortesía en España: verdadero o falso.",ko:"(이해 확인) 스페인의 예절에 관한 글을 읽고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"Los españoles suelen usar «usted» con personas que no conocen.",o:VF,a:0},
   {q:"Con el jefe también usan «usted».",o:VF,a:0},
   {q:"En el autobús, no ofrecen el asiento a una persona mayor.",o:VF,a:1}
  ]},
 {type:"open",instr:"¿Son iguales en tu país? ¿Puedes explicar alguna norma de cortesía de tu país?",ko:"(말하기) 한국의 예절과 비교해 보세요.",
  items:[{q:"Una norma de cortesía de mi país:",model:"En mi país usamos el honorífico con las personas mayores y con el jefe."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"3-x1",num:"1",sec:"¡extra! Contextos",title:"Curiosidades",page:68,acts:[
 {type:"choice",label:"A",instr:"Leed las curiosidades que Carmen le cuenta a Kelly sobre Málaga: verdadero o falso.",ko:"본문을 읽고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"La catedral de Málaga tiene dos torres terminadas.",o:VF,a:1},
   {q:"La Alcazaba es una fortaleza árabe.",o:VF,a:0},
   {q:"La biznaga es una composición de jazmines.",o:VF,a:0},
   {q:"El «café sombra» tiene más leche que café.",o:VF,a:0},
   {q:"El «café solo» lleva leche.",o:VF,a:1}
  ]},
 {type:"open",label:"B–D",instr:"Comentad alguna curiosidad de vuestra ciudad o país (¿Qué es? ¿Por qué es curioso? ¿Qué opinas tú?). Lee sobre «Las doce uvas de la suerte» e imagina la razón de la tradición.",ko:"(말하기·작문) 우리 도시·나라의 흥미로운 점을 소개해 보세요.",
  items:[{q:"¿Qué es? ¿Por qué es curioso? ¿Qué opinas tú?",model:"Es el kimchi. Es curioso porque tiene muchas verduras y se fermenta. Yo creo que es muy rico."}]}
]},
{id:"3-x2",num:"2",sec:"¡extra! Práctica",title:"Así son y así están las cosas",page:70,acts:[
 {type:"match",label:"A",instr:"Relaciona cada palabra con su opuesto.",ko:"각 단어의 반대말을 고르세요.",cols:true,
  opts:["A) feo","B) nuevo","C) estrecho","D) incómodo","E) caro","F) cerrado","G) vacío","H) sucio","I) ocupado","J) ordenado","K) pequeño"],
  items:[{no:"1",l:"grande",a:10},{no:"2",l:"roto",a:1},{no:"3",l:"ancho",a:2},{no:"4",l:"bonito",a:0},{no:"5",l:"barato",a:4},{no:"6",l:"cómodo",a:3},{no:"7",l:"lleno",a:6},{no:"8",l:"libre",a:8},{no:"9",l:"limpio",a:7},{no:"10",l:"abierto",a:5},{no:"11",l:"desordenado",a:9}]},
 {type:"fill",label:"B",instr:"Describe los objetos con las palabras anteriores. Atención a los verbos SER y ESTAR. Elige SER o ESTAR.",ko:"ser 또는 estar의 알맞은 형태를 쓰세요.",cols:true,
  items:[
   {t:"El taxi ___ libre (🚕).",a:[["está"]]},
   {t:"El móvil ___ nuevo.",a:[["es","está"]]},
   {t:"La mesa ___ sucia.",a:[["está"]]},
   {t:"La ventana ___ cerrada.",a:[["está"]]},
   {t:"El coche ___ caro.",a:[["es"]]},
   {t:"La calle ___ ancha.",a:[["es"]]},
   {t:"La silla ___ rota.",a:[["está"]]},
   {t:"La puerta ___ cerrada.",a:[["está"]]},
   {t:"La botella ___ vacía.",a:[["está"]]},
   {t:"El sofá ___ cómodo.",a:[["es"]]}
  ]}
]},
{id:"3-x3",num:"3",sec:"¡extra! En comunicación",title:"Nuestro entorno",page:71,acts:[
 {type:"open",label:"A–B",instr:"En grupo, hablad de vuestra casa. Con el modelo de redacción de la actividad 4 sobre Málaga, escribe sobre tu ciudad o tu país. No olvides utilizar los verbos SER, ESTAR y HAY.",ko:"(자유 작문) 우리 도시/나라를 소개하는 글을 ser, estar, hay를 사용해 써 보세요.",
  items:[{q:"Mi ciudad …",model:"Seúl está en el norte de Corea del Sur. Es una ciudad muy grande y moderna. Hay muchas tiendas, parques y museos. El metro es limpio y rápido."}]}
]}
]};
})();
