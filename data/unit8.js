window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
window.UNITS[8]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"8-1",num:"1",sec:S,title:"Todos estamos enfermos",page:153,acts:[
 {type:"choice",label:"A",audio:"2-11",instr:"Hoy nuestra clase parece un hospital porque la profesora y dos estudiantes están enfermos. Escucha los diálogos y elige la opción correcta.",ko:"듣고 알맞은 표현을 고르세요.",
  items:[
   {q:"Diálogo 1: Tienes … cara.",o:["buena","mala"],a:1},
   {q:"Diálogo 1: Estoy muy …",o:["cansada","activa"],a:0},
   {q:"Diálogo 1: Me duele mucho …",o:["la cabeza","los pies"],a:0},
   {q:"Diálogo 1: … ir esta tarde (al médico).",o:["Tengo que","Debo"],a:0},
   {q:"Diálogo 2: ¿Qué te …?",o:["pasa","pasas"],a:0},
   {q:"Diálogo 2: No me encuentro …",o:["bien","mal"],a:1},
   {q:"Diálogo 2: Me duele mucho …",o:["el estómago","las piernas"],a:0},
   {q:"Diálogo 2: … ir al hospital ahora mismo.",o:["Tienes que","Debes"],a:1}
  ]},
 {type:"open",label:"B",instr:"¿Sabes qué les pasa a estos estudiantes (Sophie, Peter, Laura, Dimitri, Claudia)? Comenta las respuestas con tus compañeros.",ko:"(말하기·작문) 사진 속 학생들이 어디가 아픈지 추측해 쓰세요.",
  items:[{q:"Creo que algunos estudiantes no se encuentran bien, son S… y … porque…",model:"Creo que Sophie y Claudia no se encuentran bien. Sophie tiene dolor de cabeza y Claudia tiene dolor de estómago. Dimitri tiene dolor de espalda."}]},
 {type:"open",label:"C",instr:"François no viene a clase porque también está enfermo. Ayúdalo: escribe frases para PREGUNTAR POR LA SALUD, HABLAR DE ENFERMEDADES y HACER RECOMENDACIONES (puedes buscarlas en los diálogos anteriores).",ko:"(자유 작문) 건강 묻기 / 증상 말하기 / 조언하기 표현을 각각 쓰세요.",
  items:[{q:"Preguntar / Hablar / Recomendar:",model:"Preguntar por la salud: ¿Estás bien? ¿Qué te pasa? — Hablar de enfermedades: Me duele la cabeza. Tengo fiebre. — Hacer recomendaciones: Debes ir al médico. Tienes que descansar."}]}
]},
{id:"8-2",num:"2",sec:S,title:"Nuevas adicciones, nuevas enfermedades",page:154,acts:[
 {type:"match",label:"A",instr:"François encuentra en una revista digital un artículo sobre nuevas adicciones. Léelo y relaciona cada afirmación con la adicción correspondiente.",ko:"어떤 중독에 대한 설명인지 연결하세요.",cols:true,
  opts:["Adicción al trabajo","Adicción a Internet","Adicción a las compras","Adicción al móvil"],
  items:[{l:"Convierten la oficina en su casa y no descansan en vacaciones.",a:0},{l:"Pasan horas delante de la pantalla y chatean.",a:1},{l:"No pueden pasar por una tienda sin comprar.",a:2},{l:"Una de cada mil personas puede ser adicta.",a:3},{l:"Algunos tienen dos y hasta tres contratos con diferentes compañías.",a:3},{l:"Prefieren pasar su tiempo libre con el ordenador.",a:1},{l:"Consideran que dormir o divertirse es una pérdida de tiempo.",a:0},{l:"Compran cosas que no necesitan.",a:2}]},
 {type:"match",label:"B",instr:"La revista también da algunos consejos. ¿A qué adicción corresponde cada consejo? (Respuesta propuesta)",ko:"조언이 어떤 중독에 맞는지 연결하세요. (교재 정답 없음 — 자체 답안)",cols:true,
  opts:["Adicción al trabajo","Adicción a Internet","Adicción a las compras","Adicción al móvil"],
  items:[{no:"1",l:"Debes hacer una lista y escribir las cosas que realmente necesitas comprar.",a:2},{no:"2",l:"Debes hacer alguna actividad física o algún deporte para no estar mucho tiempo delante de la pantalla.",a:1},{no:"3",l:"Debes pensar cuánto tiempo te pasas hablando por teléfono y si todas las llamadas son tan importantes.",a:3},{no:"4",l:"Tienes que decidir una cantidad de dinero fija para gastos al mes.",a:2},{no:"5",l:"No debes pasar tiempo extra en tu lugar de trabajo.",a:0},{no:"6",l:"Tienes que potenciar las amistades fuera de la Red.",a:1}]},
 {type:"open",label:"C–E",instr:"Proponed otras recomendaciones para estas nuevas adicciones. ¿Tenéis alguna «adicción divertida» (cine, chocolate, fútbol…)? Comentadlo.",ko:"(자유 작문) 다른 조언과 나의 '재미있는 중독'을 써 보세요.",
  items:[{q:"Soy adicto/a a… Debes / Tienes que / Hay que…",model:"Soy adicta al chocolate. Sé que engorda, pero no me importa. Debes comer menos dulces y tienes que hacer más deporte."}]}
]},
/* ===== OBSERVA Y APRENDE ===== */
{id:"8-3",num:"3",sec:O,title:"Me duele todo el cuerpo",page:156,acts:[
 {type:"match",label:"B",audio:"2-12",instr:"Pedro llama por teléfono a François para ver cómo está. Escucha y lee su conversación. Busca las palabras y clasifícalas: partes del cuerpo / síntomas y enfermedades / medicinas.",ko:"대화 속 단어를 분류하세요.",cols:true,
  opts:["Partes del cuerpo","Síntomas y enfermedades","Medicinas"],
  items:[{l:"la cabeza",a:0},{l:"la garganta",a:0},{l:"el estómago",a:0},{l:"tener fiebre",a:1},{l:"estar mareado",a:1},{l:"la gripe",a:1},{l:"las pastillas",a:2},{l:"el jarabe",a:2}]},
 {type:"fill",label:"C",instr:"En el diálogo también aparecen los verbos PASAR y DOLER. Completa la conjugación del verbo DOLER (pronombres).",ko:"doler의 대명사를 쓰세요.",
  items:[
   {t:"(A mí) ___ · (A ti) ___ · (A usted) ___ · (A él / ella) ___",a:[["me"],["te"],["le"],["le"]]},
   {t:"(A nosotros) ___ · (A vosotros) ___ · (A ustedes) ___ · (A ellos / ellas) ___",a:[["nos"],["os"],["les"],["les"]]},
   {t:"___ la cabeza (singular) / ___ los brazos (plural)  [duele / duelen]",a:[["duele"],["duelen"]]}
  ]}
]},
{id:"8-3d",num:"3",sec:O,title:"Recomendaciones personales e impersonales",page:157,acts:[
 {type:"check",label:"D",instr:"En la actividad A, François le cuenta a Pedro las recomendaciones del doctor. ¿Qué expresiones usa?",ko:"의사의 권고를 전할 때 쓴 표현을 모두 고르세요.",
  opts:["Volver a + infinitivo","Querer + infinitivo","Tener que + infinitivo","Hay que + infinitivo","Deber + infinitivo"],a:[2,4]},
 {type:"match",label:"F",instr:"Ahora piensa para qué tipo de recomendaciones usamos cada expresión: personal (para una persona) o impersonal (para todo el mundo en general).",ko:"개인적 권고 / 일반적 권고로 분류하세요.",cols:true,
  opts:["Recomendación personal","Recomendación impersonal"],
  items:[{l:"Tienes que descansar.",a:0},{l:"Debes dormir más.",a:0},{l:"Hay que intentar ser feliz.",a:1},{l:"Hay que leer más.",a:1},{l:"No hay que contaminar la Naturaleza.",a:1},{l:"Debemos colaborar con algunas ONG.",a:0}]}
]},
{id:"8-4",num:"4",sec:O,title:"Vamos a tu casa y llevamos…",page:158,acts:[
 {type:"match",label:"A",instr:"Algunos chicos de la clase van a visitar a François. Lee los diálogos y relaciona los diálogos con los dibujos (A: visita en persona; B: llamada de teléfono).",ko:"대화와 그림을 연결하세요.",cols:true,
  opts:["Dibujo A (visita)","Dibujo B (llamada)"],
  items:[{l:"Diálogo 1 (¡Hola, François! ¿Qué tal? … Te llamo porque esta tarde vamos a ir a verte…)",a:1},{l:"Diálogo 2 (¡Qué alegría! … Venimos para ver cómo está el chico más simpático… te traemos un regalito)",a:0}]},
 {type:"fill",label:"B",instr:"Fíjate ahora en los dibujos y completa el texto con los verbos señalados en los diálogos anteriores (ir, venir, traer, llevar).",ko:"ir / venir / traer / llevar를 알맞게 쓰세요.",
  items:[
   {t:"1.ª escena: Una mañana de domingo Jaime va a casa de Lucía y le ___ un ramo de flores.",a:[["lleva"]]},
   {t:"2.ª escena: Jaime: Hola, Lucía, ___ a visitarte.",a:[["vengo"]]},
   {t:"Lucía: Y por qué me ___ flores? Odio las flores. Soy alérgica.",a:[["traes"]]}
  ]},
 {type:"fill",label:"C",instr:"Completa el esquema: ir / llevar → hacia fuera, donde estoy después (___ ); venir / traer → hacia dentro, donde estoy ahora (___ ). Usa allí o aquí.",ko:"allí / aquí를 쓰세요.",
  items:[
   {t:"IR / LLEVAR → ___ (donde estoy después)",a:[["allí"]]},
   {t:"VENIR / TRAER → ___ (donde estoy ahora)",a:[["aquí"]]}
  ]}
]},
{id:"8-gram",num:"+",sec:O,title:"Gramática y léxico",page:159,acts:[
 {type:"fill",instr:"Completa con el verbo adecuado: ir / llevar / venir / traer.",ko:"ir / llevar / venir / traer를 활용하세요.",
  items:[
   {t:"Esta noche ___ a tu casa y te ___ el libro. (yo)",a:[["voy"],["llevo"]]},
   {t:"Magnus ___ a la fiesta del viernes y ___ el postre.",a:[["viene"],["trae"]]},
   {t:"¿ ___ (tú) a casa de Ana? ¿Le ___ un regalo?",a:[["vas"],["llevas"]]}
  ]},
 {type:"choice",instr:"Elige: deber / tener que / hay que.",ko:"알맞은 표현을 고르세요.",
  items:[
   {q:"Recomendación suave (Debes dormir más):",o:["Deber + infinitivo","Tener que + infinitivo","Hay que + infinitivo"],a:0},
   {q:"Obligación personal impuesta (Juan, tienes que llamar a tu hermano):",o:["Deber + infinitivo","Tener que + infinitivo","Hay que + infinitivo"],a:1},
   {q:"Obligación impersonal, general (Hay que cuidar el medio ambiente):",o:["Deber + infinitivo","Tener que + infinitivo","Hay que + infinitivo"],a:2}
  ]},
 {type:"fill",instr:"Tener + sustantivo: completa con frío, calor, sed, sueño, hambre, suerte, tos.",ko:"단어를 쓰세요.",bank:["frío","calor","sed","sueño","hambre","suerte","tos"],
  items:[
   {t:"En verano tengo mucho ___ . Quiero un helado.",a:[["calor"]]},
   {t:"Tengo ___ : quiero beber agua.",a:[["sed"]]},
   {t:"Son las doce de la noche y tengo ___ .",a:[["sueño"]]},
   {t:"No he comido nada, tengo mucha ___ .",a:[["hambre"]]}
  ]}
]},
/* ===== PRÁCTICA ===== */
{id:"8-5",num:"5",sec:P,title:"¿Qué le pasa a François?",page:160,acts:[
 {type:"check",label:"A",instr:"François no se encuentra bien. ¿Recuerdas qué le pasa? Relaciona las fotos con sus problemas físicos (diálogo 3 A): fiebre, dolor de cabeza, de garganta y de estómago. Marca las fotos. (1 Sara: dolor de cabeza · 2 Manuel: garganta · 3 María: fiebre · 4 Alice: estómago · 5 Felipe: tos · 6 Anne: alergia · 7 Miguel: muelas)",ko:"프랑수아의 증상에 해당하는 사진 번호를 모두 고르세요.",
  opts:["1 Sara","2 Manuel","3 María","4 Alice","5 Felipe","6 Anne","7 Miguel"],a:[0,1,2,3]},
 {type:"open",label:"B",instr:"Ahora explica el resto de las imágenes (Felipe, Anne, Miguel) con las expresiones: tener resaca, fiebre, gripe, tos, alergia; tener dolor de…; le duele/duelen…; estar resfriado, cansado, enfermo, mareado.",ko:"(자유 작문) 나머지 사진을 표현을 사용해 설명하세요.",
  items:[{q:"Felipe… Anne… Miguel…",model:"Felipe tiene tos. Anne tiene alergia y está resfriada. A Miguel le duelen las muelas."}]},
 {type:"match",label:"C",instr:"Lee estas oraciones y relaciónalas con las expresiones del ejercicio B. (Respuesta propuesta)",ko:"문장과 알맞은 표현을 연결하세요. (자체 답안)",cols:true,
  opts:["tener resaca","tener gripe","le duelen las muelas","tener fiebre","marearse","tener alergia","estar resfriado"],
  items:[{no:"1",l:"Suele pasar después de beber mucho alcohol.",a:0},{no:"2",l:"Te duele todo el cuerpo y tienes fiebre.",a:1},{no:"3",l:"Les pasa a los niños cuando comen muchas golosinas.",a:2},{no:"4",l:"Es un síntoma de alguna infección.",a:3},{no:"5",l:"A algunas personas les pasa en el coche, en el autobús, en el avión…",a:4},{no:"6",l:"Cuando llega la primavera, las flores…",a:5},{no:"7",l:"Cuando llega el invierno, con los cambios de temperatura…",a:6}]},
 {type:"match",label:"D",instr:"¿Qué necesitamos en las situaciones siguientes? Elige uno de estos remedios.",ko:"알맞은 처방을 연결하세요.",cols:true,
  opts:["un jarabe","una tirita","una pastilla","un antibiótico"],
  items:[{no:"1",l:"Me duele la cabeza.",a:2},{no:"2",l:"Tengo infección de garganta.",a:3},{no:"3",l:"Tengo una herida en el dedo.",a:1},{no:"4",l:"Tengo tos.",a:0}]},
 {type:"match",label:"E",instr:"Ahora fíjate en este diálogo entre un médico y su paciente; organiza sus partes y ordénalo (1.º–12.º).",ko:"대화 순서를 맞추세요.",cols:true,
  opts:["1.º","2.º","3.º","4.º","5.º","6.º","7.º","8.º","9.º","10.º","11.º","12.º"],
  items:[
   {l:"Paciente: Hola, buenas tardes.",a:0},{l:"Médico: Buenas tardes, ¿qué le pasa?",a:1},{l:"Paciente: No me encuentro bien, me siento sin fuerzas.",a:2},
   {l:"Médico: ¿Le duele algo?",a:3},{l:"Paciente: Me duelen mucho la cabeza y la espalda.",a:4},{l:"Médico: ¿Tiene alguna preocupación? ¿Trabaja más de lo normal?",a:5},
   {l:"Paciente: Últimamente trabajo más de ocho horas al día y no duermo bien.",a:6},{l:"Médico: Creo que su problema es el estrés. Aquí tiene esta receta…",a:7},
   {l:"Paciente: ¿Cuánto tiempo?",a:8},{l:"Médico: Dos semanas, y después le espero para ver cómo se encuentra.",a:9},
   {l:"Paciente: Muy bien, gracias por todo. Adiós.",a:10},{l:"Médico: Adiós, buenas tardes.",a:11}]}
]},
{id:"8-6",num:"6",sec:P,title:"¿Cómo es tu cuerpo?",page:162,acts:[
 {type:"fill",instr:"Fíjate en las palabras de la tabla. Antes escribe el artículo (el / la) junto a cada palabra.",ko:"el / la를 쓰세요.",cols:true,
  items:[
   {t:"___ cabeza",a:[["la"]]},{t:"___ cara",a:[["la"]]},{t:"___ ojo",a:[["el"]]},{t:"___ frente",a:[["la"]]},{t:"___ pelo",a:[["el"]]},
   {t:"___ nariz",a:[["la"]]},{t:"___ boca",a:[["la"]]},{t:"___ oreja",a:[["la"]]},{t:"___ cuello",a:[["el"]]},{t:"___ hombro",a:[["el"]]},
   {t:"___ brazo",a:[["el"]]},{t:"___ mano",a:[["la"]]},{t:"___ codo",a:[["el"]]},{t:"___ espalda",a:[["la"]]},{t:"___ pierna",a:[["la"]]},
   {t:"___ rodilla",a:[["la"]]},{t:"___ pie",a:[["el"]]},{t:"___ dedo",a:[["el"]]},{t:"___ tobillo",a:[["el"]]},{t:"___ tripa",a:[["la"]]},
   {t:"___ diente",a:[["el"]]},{t:"___ labio",a:[["el"]]}
  ]}
]},
{id:"8-7",num:"7",sec:P,title:"«Un cuerpo 10»",page:163,acts:[
 {type:"match",label:"A",instr:"François encuentra en una página web una divertida encuesta. Lee los resultados y relaciona cada parte del cuerpo con la persona famosa.",ko:"신체 부위와 유명인을 연결하세요.",cols:true,
  opts:["George Clooney","Cristiano Ronaldo","Antonio Banderas","Woody Allen","Mick Jagger","Madonna","Cameron Diaz","Penélope Cruz","Glenn Close","Whoopi Goldberg"],
  items:[{l:"los ojos (hombre)",a:0},{l:"las piernas",a:1},{l:"el pelo (hombre)",a:2},{l:"la nariz (hombre)",a:3},{l:"la lengua",a:4},{l:"las manos",a:5},{l:"los ojos (mujer)",a:6},{l:"el pelo (mujer)",a:7},{l:"la nariz (mujer)",a:8},{l:"los labios",a:9}]},
 {type:"open",label:"B",instr:"Ahora vamos a elegir nuestros «cuerpos 10». Podéis pensar en personas famosas o en compañeros de clase.",ko:"(자유 작문) 나의 '10점 몸' 3가지를 쓰세요.",
  items:[{q:"Los ojos de… El pelo de…",model:"Los ojos de Claire. El pelo de Magnus. La sonrisa de Alejandro Sanz."}]},
 {type:"open",label:"C",instr:"Ayuda a François a descubrir cuál es la palabra intrusa de cada serie y por qué. (1. brazo, mano, codo, hombro, dedo → mano: es femenina y las otras masculinas.) 2. nariz, cara, frente, ojo, boca · 3. pie, brazo, espalda, tobillo, hombro · 4. dientes, boca, labios, muelas, dedo · 5. oreja, ojo, tripa, labio, lengua · 6. pie, mano, ojo, oreja, diente",ko:"(자유 작문) 각 줄에서 다른 하나와 이유를 쓰세요.",
  items:[{q:"Palabra intrusa y por qué:",model:"2. ojo (masculino, las otras femeninas). 3. espalda (femenina, las otras masculinas). 4. dedo (no es de la boca). 5. tripa (no es de la cabeza). 6. pie o mano (no son de la cabeza)."}]}
]},
{id:"8-8",num:"8",sec:P,title:"Y a Bea, ¿qué le pasa?",page:164,acts:[
 {type:"check",label:"A",audio:"2-13",instr:"Después de la fiesta, Bea habla por teléfono con Gastón. Escucha la conversación y señala qué imágenes reflejan lo que le pasa.",ko:"듣고 베아에게 해당하는 그림을 모두 고르세요.",
  opts:["Tener calor","Tener frío","Tener hambre","Tener sed","Tener sueño","Tener resaca","Tener prisa","No tener ganas de","Tener suerte"],a:[1,5,7]},
 {type:"fill",label:"B",instr:"Completa con las expresiones anteriores (tener calor / frío / hambre / sed / sueño / prisa / suerte / resaca / no tener ganas de).",ko:"알맞은 표현을 쓰세요. (yo = 나)",
  items:[
   {no:"1",t:"> ¿Podemos hablar ahora? < No, lo siento, ahora no, es que (yo) ___ . Es muy tarde.",a:[["tengo prisa","tengo sueño"]]},
   {no:"2",t:"> Mañana no hay clase, es fiesta en mi ciudad. < ¡(Yo) ___ !",a:[["tengo suerte"]]},
   {no:"3",t:"> ¿Por qué abres la ventana? < ¡(Yo) ___ !",a:[["tengo calor"]]},
   {no:"4",t:"> ¿Quieres comer algo? < No, gracias, (yo) no ___ .",a:[["tengo hambre"]]},
   {no:"5",t:"> ¿Vamos al cine esta noche? < Es que estoy cansada y (yo) ___ salir.",a:[["no tengo ganas de"]]},
   {no:"6",t:"> No me apetece comer nada, solo (yo) ___ . < ¿Quieres un refresco o agua?",a:[["tengo sed"]]}
  ]}
]},
{id:"8-9",num:"9",sec:P,title:"El viaje de Bea y Gastón",page:165,acts:[
 {type:"open",instr:"Bea imagina un viaje con Gastón a Tenerife. ¿Qué tienen que hacer? Forma frases con los elementos de las tres columnas: (preparar, ir a, comprar, hacer, buscar, sacar, reservar, llamar, conseguir) + (una buena oferta, una agencia de viajes, las maletas, un mapa de la isla, a sus familiares, crema solar, la reserva, un hotel, los billetes, dinero del banco).",ko:"(자유 작문) Tienen que + 동사원형 문장을 5개 이상 쓰세요.",
  items:[{q:"Tienen que…",model:"Tienen que ir a una agencia de viajes. Tienen que buscar una buena oferta. Tienen que reservar un hotel. Tienen que comprar los billetes y crema solar. Tienen que sacar dinero del banco."}]}
]},
{id:"8-10",num:"10",sec:P,title:"Chicos, ¿qué tengo que decir?",page:165,acts:[
 {type:"choice",instr:"La profesora de español envía a Bea un correo con ejercicios extras (tener que + infinitivo y hay que + infinitivo). Ayúdala a elegir la posibilidad correcta.",ko:"tienes que / tengo que / hay que 중 알맞은 것을 고르세요.",
  items:[
   {q:"1. … ir a comprar pan. ¿Vas tú o voy yo?",o:["Tienes que","Hay que"],a:1},
   {q:"2. Por favor, … venir conmigo al cine. Tengo muchas ganas.",o:["tienes que","hay que"],a:0},
   {q:"3. > Por las lluvias las carreteras son más peligrosas. < Claro, por eso … conducir con mucho cuidado.",o:["tienes que","hay que"],a:1},
   {q:"4. Tengo el calentador del agua roto. … llamar al fontanero.",o:["Tengo que","Hay que"],a:0},
   {q:"5. > Estás muy delgado, … comer más.",o:["tienes que","hay que"],a:0},
   {q:"6. Hoy … fregar los platos tú, es tu turno.",o:["tienes que","hay que"],a:0},
   {q:"7. Para hacer un viaje … reservar un hotel antes.",o:["tienes que","hay que"],a:1},
   {q:"8. La comida está preparada, ahora … poner la mesa.",o:["tienes que","hay que"],a:1},
   {q:"9. Yo creo que … ayudar siempre a los amigos.",o:["tienes que","hay que"],a:1},
   {q:"10. Si quieres hacer bien una paella, … preguntar a mi madre.",o:["tienes que","hay que"],a:0}
  ]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"8-11",num:"11",sec:C,title:"¿Soy adicto a Internet?",page:166,acts:[
 {type:"open",label:"A",instr:"Marie está aburrida de estar en cama y hace este test de Internet (15 preguntas: ordenador conectado todo el día, foros, blog, ojos rojos, chatear, más de tres horas delante del ordenador…). Hacedlo también vosotros y comprobad quién marca más casillas.",ko:"(자유 작문) 테스트를 해 보고 결과를 써 보세요.",
  items:[{q:"Marco … casillas. Soy / No soy adicto/a porque…",model:"Marco 5 casillas. No soy adicto a Internet porque no chateo con frecuencia y salgo los fines de semana."}]},
 {type:"open",label:"B",instr:"¿Quiénes son adictos a Internet? En plenaria vamos a intentar ayudarlos. ¿Qué tienen que hacer o qué deben hacer?",ko:"(자유 작문) 중독된 사람에게 조언하세요. (tener que / deber / hay que)",
  items:[{q:"Tenéis que… / Debéis…",model:"Tenéis que salir todos los fines de semana y no debéis pasar más de una hora conectados a Internet. Debéis hablar personalmente con vuestros amigos y chatear poco."}]}
]},
{id:"8-12",num:"12",sec:C,title:"Jóvenes adictos al móvil",page:167,acts:[
 {type:"choice",label:"A",audio:"2-14",instr:"Escucha la información sobre los problemas de los jóvenes con el uso del móvil y señala si las afirmaciones son verdaderas o falsas.",ko:"듣고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"1. Más del 50 % de los jóvenes son adictos al móvil.",o:VF,a:1},
   {q:"2. El 40 % de los jóvenes usa el móvil más de cuatro horas al día.",o:VF,a:0},
   {q:"3. Usan el móvil especialmente para hablar.",o:VF,a:1},
   {q:"4. Estos jóvenes saben que usan el móvil más de lo normal.",o:VF,a:1},
   {q:"5. Esta adicción suele tener efectos en sus relaciones personales.",o:VF,a:0},
   {q:"6. No suelen olvidarse de hacer sus obligaciones.",o:VF,a:1},
   {q:"7. Esta enfermedad tiene efectos físicos y psicológicos.",o:VF,a:1},
   {q:"8. Es fácil ver si un joven tiene esta enfermedad.",o:VF,a:1}
  ]},
 {type:"open",label:"B",instr:"En grupo elaborad un test para averiguar si el móvil es tan importante en vuestra vida. Después, en grupo y por turnos, asociad las palabras INTERNET y MÓVIL con otras.",ko:"(자유 작문) 테스트 문항 3개와 연상 단어를 쓰세요.",
  items:[{q:"¿Llevas el móvil a todas partes? …",model:"1. ¿Llevas el móvil siempre contigo? 2. ¿Miras el móvil más de diez veces al día? 3. ¿Te pones nervioso si no lo tienes? — Internet: chatear, correo, foros, redes. Móvil: llamar, mensajes, fotos, juegos."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"8-x1",num:"1",sec:"¡extra! Contextos",title:"Cita con el médico",page:168,acts:[
 {type:"match",label:"A–B",audio:"2-15",instr:"Bea decide llamar al centro de salud para pedir una cita. Ordena el diálogo (escucha para comprobar).",ko:"대화 순서를 맞추세요.",cols:true,
  opts:["1.º","2.º","3.º","4.º","5.º","6.º","7.º"],
  items:[
   {l:"Buenos días, Centro de Salud Vallesol. ¿En qué puedo ayudarle?",a:0},
   {l:"Hola, buenos días. Quiero una cita para mañana, si es posible, con el doctor García, por favor… No me encuentro muy bien…",a:1},
   {l:"¿Qué le pasa?",a:2},
   {l:"Estoy mareada y me duele mucho la cabeza…",a:3},
   {l:"De acuerdo, mañana a las doce y media… ¿Le parece bien?",a:4},
   {l:"Perfecto, muchas gracias.",a:5},
   {l:"De nada, hasta mañana.",a:6}]},
 {type:"fill",label:"C–D",audio:"2-16",instr:"Bea tiene que ir al centro de salud para llevar los resultados del especialista. Completa con IR / VENIR / TRAER / LLEVAR (después escucha y comprueba).",ko:"ir / venir / traer / llevar를 활용하세요.",
  items:[
   {t:"Al salir de casa: Adiós, ___ al centro de salud a ___ las radiografías al médico.",a:[["voy"],["llevar"]]},
   {t:"En el centro de salud: Buenos días, ___ a la consulta del doctor.",a:[["vengo"]]},
   {t:"¿ ___ la tarjeta médica? — Sí, aquí la tengo.",a:[["trae","traes"]]},
   {t:"En la consulta: Buenos días, doctor, ___ las radiografías del especialista.",a:[["traigo"]]},
   {t:"Buenos días, ¿ ___ también el informe médico? — Sí, aquí tiene.",a:[["trae","traes"]]}
  ]}
]},
{id:"8-x2",num:"2",sec:"¡extra! Práctica",title:"Todos somos médicos",page:169,acts:[
 {type:"open",instr:"Uno de vosotros es el doctor y el otro el paciente. Preparad un pequeño diálogo en la consulta del médico (Paciente: saludo, explicas qué te pasa, pides una receta, despedida. Doctor: saludo, preguntas qué le pasa, recomiendas un tratamiento, recetas medicinas, despedida).",ko:"(역할극 작문) 진료 대화를 써 보세요.",
  items:[{q:"Escribe el diálogo:",model:"— Buenos días, ¿qué le pasa? — Me duele la garganta y tengo fiebre. — Debe descansar y tomar un antibiótico. Aquí tiene la receta. — Muchas gracias, adiós."}]}
]},
{id:"8-x3",num:"3",sec:"¡extra! En comunicación",title:"Por la salud de los otros",page:170,acts:[
 {type:"open",label:"A–B",instr:"Lee los titulares sobre la solidaridad de los españoles (España es el país número uno en donación de órganos; España está entre los primeros países del mundo en donación de sangre). ¿Pensáis que España es un país solidario? ¿Por qué? ¿Y vuestro país?",ko:"(자유 작문) 스페인이 연대적인 나라인지, 자국은 어떤지 쓰세요.",
  items:[{q:"Yo creo que… porque…",model:"Yo creo que España es un país solidario porque muchas personas donan sangre y órganos. Mi país también es muy solidario."}]},
 {type:"open",label:"C",instr:"En gran grupo comentamos recomendaciones para ser más solidarios (con los países del Tercer Mundo, con nuestras ciudades, con los animales, con los inmigrantes). Utiliza: Tener que… Deber… Hay que…",ko:"(자유 작문) 상황별로 2문장씩 쓰세요.",
  items:[{q:"Con los animales / ciudades / inmigrantes…",model:"Hay que ayudar a los países pobres. Tenemos que reciclar la basura. Debemos adoptar animales abandonados. No hay que discriminar a los inmigrantes."}]}
]}
]};
})();
