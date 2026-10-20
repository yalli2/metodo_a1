window.UNITS=window.UNITS||{};
(function(){
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
const VF=["Verdadero","Falso"];
const row8=(verb,f)=>({t:`${verb}: yo ___ · tú ___ · usted ___ · él/ella ___ · nosotros ___ · vosotros ___ · ustedes ___ · ellos ___`,a:f.map(x=>[x])});
window.UNITS[5]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"5-1",num:"1",sec:S,title:"No hay nada en la nevera",page:93,acts:[
 {type:"choice",label:"A",instr:"La profesora Laura hace la compra en el mercado, en el puesto de frutas y verduras. Lee el diálogo y contesta.",ko:"본문(p.93)을 읽고 맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"Laura quiere una lechuga grande y un kilo de tomates.",o:VF,a:0},
   {q:"Laura quiere los tomates muy maduros.",o:VF,a:1},
   {q:"El frutero tiene kiwis.",o:VF,a:1},
   {q:"Las fresas están a tres euros el kilo.",o:VF,a:0},
   {q:"Laura compra un kilo de fresas.",o:VF,a:1},
   {q:"Laura paga 12,40 €.",o:VF,a:0}
  ]},
 {type:"match",label:"B",instr:"Fíjate en el diálogo anterior y clasifica las frases y palabras del texto.",ko:"대화 속 표현을 알맞은 칸에 분류하세요.",cols:true,
  opts:["Saludos","Preguntas del dependiente","Preguntar por el precio","Despedidas","Verduras","Frutas"],
  items:[
   {l:"Hola, buenos días",a:0},{l:"¿Qué deseas?",a:1},{l:"¿Quieres algo más?",a:1},{l:"¿A cuánto están las fresas?",a:2},{l:"¿Cuánto es todo?",a:2},
   {l:"Gracias y adiós",a:3},{l:"Hasta mañana",a:3},{l:"la lechuga",a:4},{l:"las zanahorias",a:4},{l:"las cebollas",a:4},{l:"las manzanas",a:5},{l:"los melocotones",a:5},{l:"los plátanos",a:5}
  ]}
]},
{id:"5-2",num:"2",sec:S,title:"Saber comer",page:94,acts:[
 {type:"choice",label:"A",instr:"Laura presenta en clase un texto con recomendaciones para una dieta sana. Léelo con atención y contesta.",ko:"'Dieta sana' 본문을 읽고 O/X로 답하세요.",
  items:[
   {q:"El desayuno es la comida más importante del día.",o:VF,a:0},
   {q:"La dieta mediterránea usa mucho aceite de oliva.",o:VF,a:0},
   {q:"Es importante beber dos litros de agua al día.",o:VF,a:0},
   {q:"Es aconsejable hacer cuatro comidas al día: desayuno, almuerzo, merienda y cena.",o:VF,a:1},
   {q:"Es necesario comer más alimentos de origen animal y menos de origen vegetal.",o:VF,a:1},
   {q:"Es recomendable comer despacio y masticar bien.",o:VF,a:0}
  ]},
 {type:"open",label:"B",instr:"Ahora, habla sobre las recomendaciones anteriores. ¿Cuáles haces y cuáles no?",ko:"(자유 작문) 위 권고 중 지키는 것과 아닌 것을 써 보세요.",
  items:[{q:"Yo (no) … porque …",model:"Yo no bebo dos litros de agua cada día, bebo menos, pero desayuno leche con cereales y algo de fruta."}]}
]},
{id:"5-3",num:"3",sec:O,title:"¡Cuánta comida!",page:95,acts:[
 {type:"fill",label:"A",audio:"1-33",instr:"Abrimos la nevera de Laura y nos encontramos con mucha verdura y fruta… Trata de identificar cada alimento (🍅🥬🥔🥕🫑🍏🧅🍊🍉🍈🍓🍌). Después, escucha y completa.",ko:"그림(이모지) 순서대로 단어를 쓰세요. 첫 글자 힌트: T, L, P, Z, P, M, C, N, S, M, F, P",
  items:[
   {no:"1",t:"🍅 T___",a:[["tomates","tomate"]]},{no:"2",t:"🥬 L___",a:[["lechuga"]]},{no:"3",t:"🥔 P___",a:[["patatas","patata"]]},
   {no:"4",t:"🥕 Z___",a:[["zanahorias","zanahoria"]]},{no:"5",t:"🫑 P___",a:[["pimientos","pimiento"]]},{no:"6",t:"🍏 M___",a:[["manzanas","manzana"]]},
   {no:"7",t:"🧅 C___",a:[["cebollas","cebolla"]]},{no:"8",t:"🍊 N___",a:[["naranjas","naranja"]]},{no:"9",t:"🍉 S___",a:[["sandía"]]},
   {no:"10",t:"🍈 M___",a:[["melón"]]},{no:"11",t:"🍓 F___",a:[["fresas","fresa"]]},{no:"12",t:"🍌 P___",a:[["plátanos","plátano"]]}
  ]},
 {type:"fill",label:"B",instr:"Leed estas pistas sobre frutas y verduras de la actividad anterior y adivinad cuáles son.",ko:"힌트를 읽고 알맞은 과일/채소를 쓰세요. (관사 포함 문장)",
  items:[
   {no:"1",t:"Se suele usar para hacer zumo y es redonda. → Es la ___",a:[["naranja"]]},
   {no:"2",t:"Los hay rojos, verdes y amarillos. → Son los ___",a:[["pimientos"]]},
   {no:"3",t:"Comemos esta fruta también con nata. → Es la ___",a:[["fresa"]]},
   {no:"4",t:"Es amarillo y su nombre tiene siete letras. → Es el ___",a:[["plátano"]]}
  ]},
 {type:"open",label:"C",instr:"Elige otras frutas y verduras que tú conoces, y juega con tus compañeros como en el ejercicio anterior.",ko:"(말하기) 다른 과일·채소로 수수께끼를 만들어 보세요.",
  items:[{q:"Pista:",model:"Es verde y se come en ensalada. Es la lechuga."}]}
]},
{id:"5-4",num:"4",sec:O,title:"La ensalada, con aceite y vinagre",page:96,acts:[
 {type:"match",label:"B",instr:"En clase, Laura y los estudiantes hablan sobre sus preferencias en la comida. Fíjate en las palabras en negrita: ¿a qué términos del texto corresponden?",ko:"각 대명사(la/lo/las/los)가 가리키는 말을 고르세요.",cols:true,
  opts:["la ensalada","el café","las zanahorias","los tomates"],
  items:[{l:"Diálogo 1 → la",a:0},{l:"Diálogo 2 → lo",a:1},{l:"Diálogo 3 → las",a:2},{l:"Diálogo 4 → los",a:3}]},
 {type:"fill",label:"C",instr:"Ahora completa la tabla con los pronombres de Objeto Directo.",ko:"직접목적어 대명사 표를 완성하세요.",
  items:[
   {t:"Masculino singular: ___",a:[["lo"]]},{t:"Masculino plural: ___",a:[["los"]]},
   {t:"Femenino singular: ___",a:[["la"]]},{t:"Femenino plural: ___",a:[["las"]]}
  ]}
]},
{id:"5-4d",num:"4",sec:O,title:"Pronombres de objeto directo (D)",page:97,acts:[
 {type:"open",label:"D",instr:"Lee los dos diálogos y trata de descubrir la diferencia entre los dos. En el segundo diálogo tenemos la preposición A, ¿por qué?",ko:"(말하기) 두 번째 대화에서 전치사 a가 쓰인 이유를 설명해 보세요.",
  items:[{q:"¿Por qué «a»?",model:"Porque el objeto directo es una persona (a tu familia, a tus amigos). Con personas usamos la preposición «a»; con cosas no (el autobús, los deberes)."}]},
 {type:"fill",instr:"Sustituye con el pronombre adecuado (modelo: ¿Coges el autobús? → Lo cojo).",ko:"대명사 lo/la/los/las를 쓰세요.",
  items:[
   {t:"¿Haces los deberes? — Sí, ___ hago siempre.",a:[["los"]]},
   {t:"¿Llamas a tu familia? — Sí, ___ llamo mucho.",a:[["la"]]},
   {t:"¿Ves a tus amigos? — Sí, ___ veo los fines de semana.",a:[["los"]]},
   {t:"¿Coges el autobús? — Sí, ___ cojo cuando estoy cansado.",a:[["lo"]]}
  ]}
]},
{id:"5-5",num:"5",sec:O,title:"¿Qué pedimos de tapa?",page:97,acts:[
 {type:"choice",label:"A",instr:"Laura y sus amigos Ramón y Claudia están en un bar de tapas. Lee el diálogo y contesta.",ko:"대화를 읽고 O/X로 답하세요.",
  items:[
   {q:"Ramón conoce el bar y dice que no es caro.",o:VF,a:0},
   {q:"Claudia prefiere la ensaladilla rusa y no quiere nada más.",o:VF,a:0},
   {q:"Ramón pide un pincho de tortilla y boquerones en vinagre.",o:VF,a:0},
   {q:"La cerveza cuesta tres euros.",o:VF,a:1},
   {q:"Laura toma un café.",o:VF,a:1},
   {q:"Laura dice que quiere volver a este bar.",o:VF,a:0}
  ]}
]},
{id:"5-5b",num:"5",sec:O,title:"Verbos irregulares: e>ie, e>i, o>ue",page:98,acts:[
 {type:"fill",label:"B",instr:"Todos los verbos en negrita del texto anterior son irregulares porque las vocales cambian. Completa la conjugación modelo.",ko:"활용을 완성하세요. (yo · tú · usted · él/ella · nosotros · vosotros · ustedes · ellos)",
  items:[
   row8("pensar (e>ie)",["pienso","piensas","piensa","piensa","pensamos","pensáis","piensan","piensan"]),
   row8("pedir (e>i)",["pido","pides","pide","pide","pedimos","pedís","piden","piden"]),
   row8("volver (o>ue)",["vuelvo","vuelves","vuelve","vuelve","volvemos","volvéis","vuelven","vuelven"])
  ]},
 {type:"fill",label:"C",instr:"Escribe las formas de los verbos irregulares del texto A (yo).",ko:"본문 A의 불규칙 동사를 yo 형태로 쓰세요.",
  items:[
   {t:"e>ie: preferir → yo ___",a:[["prefiero"]]},{t:"e>ie: querer → yo ___",a:[["quiero"]]},{t:"e>ie: empezar → yo ___",a:[["empiezo"]]},
   {t:"e>i: pedir → yo ___",a:[["pido"]]},{t:"e>i: elegir → yo ___",a:[["elijo"]]},
   {t:"o>ue: recordar → yo ___",a:[["recuerdo"]]},{t:"o>ue: poder → yo ___",a:[["puedo"]]},{t:"o>ue: dormir → yo ___",a:[["duermo"]]},{t:"o>ue: costar → la cerveza ___ un euro",a:[["cuesta"]]}
  ]},
 {type:"choice",label:"D",instr:"Estos cambios (e>ie, e>i, o>ue), ¿ocurren en todas las conjugaciones (-AR, -ER, -IR)? Observa los verbos de cada grupo y busca la solución.",ko:"이 변화는 어떤 활용형에서 일어날까요?",
  items:[{q:"Cambian en…",o:["todas las personas","todas menos nosotros y vosotros","solo en yo"],a:1}]},
 {type:"fill",label:"E",instr:"Los amigos de Laura cuentan algo más de sus vidas. Completa con el verbo del cuadro.",ko:"알맞은 동사를 넣으세요.",
  bank:["dormir","empezar","volver"],
  items:[
   {t:"Ramón: Yo ___ 12 horas cada día…",a:[["duermo"]]},
   {t:"Claudia: ___ a trabajar a las 7:00…",a:[["empiezo"]]},
   {t:"Laura: ___ a mi casa de la escuela a las 14:00…",a:[["vuelvo"]]}
  ]},
 {type:"open",label:"F",instr:"¿Y vosotros? Pregunta a los compañeros utilizando estos verbos: dormir (hora), recordar (una historia), volver (a tu casa), empezar (clases), elegir (bebida), pedir (un deseo).",ko:"(말하기) 짝에게 질문하고 대답해 보세요.",
  items:[{q:"¿A qué hora duermes la siesta?",model:"Yo no duermo la siesta. / Duermo la siesta a las tres."}]}
]},
{id:"5-gram",num:"+",sec:O,title:"Gramática y léxico",page:99,acts:[
 {type:"fill",instr:"Completa con la forma adecuada del presente.",ko:"현재형을 쓰세요.",cols:true,
  items:[
   {t:"querer — nosotros ___",a:[["queremos"]]},{t:"querer — ellos ___",a:[["quieren"]]},
   {t:"vestir — yo ___",a:[["visto"]]},{t:"vestir — vosotros ___",a:[["vestís"]]},
   {t:"dormir — tú ___",a:[["duermes"]]},{t:"dormir — nosotros ___",a:[["dormimos"]]},
   {t:"proteger — yo ___",a:[["protejo"]]},{t:"coger — yo ___",a:[["cojo"]]},{t:"dirigir — yo ___",a:[["dirijo"]]}
  ]},
 {type:"fill",instr:"SABER o CONOCER: completa.",ko:"saber 또는 conocer를 알맞게 활용하세요.",
  items:[
   {t:"No ___ hablar bien español. (saber, yo)",a:[["sé"]]},
   {t:"Mis amigos ___ muchos países de Europa. (conocer)",a:[["conocen"]]},
   {t:"¿___ dónde está Marta? (saber, tú)",a:[["sabes"]]},
   {t:"¿___ a Kelly? (conocer, vosotros)",a:[["conocéis"]]}
  ]},
 {type:"match",instr:"Las comidas del día: relaciona.",ko:"식사 이름과 알맞은 설명을 연결하세요.",cols:true,
  opts:["el desayuno","la comida / el almuerzo","la merienda","la cena"],
  items:[{l:"por la mañana",a:0},{l:"al mediodía",a:1},{l:"por la tarde",a:2},{l:"por la noche",a:3}]}
]},
/* ===== PRÁCTICA ===== */
{id:"5-6",num:"6",sec:P,title:"Una nueva estudiante",page:100,acts:[
 {type:"fill",label:"A",instr:"Nanako es una nueva alumna de nuestro curso. Completa este texto de presentación con el verbo en la forma correcta del presente.",ko:"괄호 속 동사를 현재형으로 쓰세요.",
  items:[
   {no:"1",t:"(Querer, yo) ___ estudiar español porque vivir en España es mi sueño.",a:[["quiero"]]},
   {no:"2",t:"Además, (pensar, yo) ___ que los españoles son muy simpáticos…",a:[["pienso"]]},
   {no:"3",t:"…todavía no (entender, yo) ___ muy bien a la gente si habla muy rápido.",a:[["entiendo"]]},
   {no:"4",t:"(Dormir, yo) ___ hasta muy tarde, cuando (poder, yo) ___ …",a:[["duermo"],["puedo"]]},
   {no:"5",t:"…y (preferir, yo) ___ estar de vacaciones y no trabajar mucho.",a:[["prefiero"]]},
   {no:"6",t:"Mis amigos (decir) ___ que soy muy simpática y que (sonreír, yo) ___ todo el tiempo.",a:[["dicen"],["sonrío"]]},
   {no:"7",t:"Odio comprar ropa. (Preferir, yo) ___ los videojuegos.",a:[["prefiero"]]},
   {no:"8",t:"(Volver, yo) ___ a Japón después de este curso, a finales de mayo.",a:[["vuelvo"]]}
  ]},
 {type:"open",label:"B",instr:"Observa la habitación de Nanako, ¿qué otras actividades crees que hace en su tiempo libre? (Hay un portátil, una raqueta, una bici y música…)",ko:"(자유 작문) 나나코가 여가 시간에 할 법한 활동 3가지를 쓰세요.",
  items:[{q:"1. / 2. / 3.",model:"Creo que juega al tenis, monta en bici y escucha música."}]},
 {type:"open",label:"C",instr:"Ahora utiliza tres adjetivos para describir a Nanako y explica tus razones.",ko:"(자유 작문) 형용사 3개로 나나코를 묘사하고 이유를 쓰세요.",
  items:[{q:"Nanako es deportista porque…",model:"Nanako es deportista porque tiene una raqueta y una bici. Pienso que es simpática porque sonríe todo el tiempo."}]},
 {type:"open",label:"D",instr:"Habla con tu compañero y explica en qué es diferente a nuestra nueva amiga Nanako.",ko:"(말하기) 나나코와 다른 점을 말해 보세요.",
  items:[{q:"Mi compañero … no quiere … Prefiere …",model:"Mi compañero Magnus no quiere vivir en España. Prefiere vivir en Suecia."}]}
]},
{id:"5-7",num:"7",sec:P,title:"¿Una cena japonesa?",page:101,acts:[
 {type:"fill",label:"A",audio:"1-34",instr:"Nanako invita a cenar a tres de sus nuevos amigos. Escucha y completa la información sobre ellos.",ko:"듣고 빈칸을 채우세요. (Luis / Candela / Brandon)",
  items:[
   {t:"Luis ___ de Colombia. ___ a su país en septiembre. ___ vivir allí. En el futuro, ___ formar una familia. Para cenar ___ pasta o ___ . Odia el ___ .",a:[["es"],["vuelve"],["prefiere"],["quiere"],["prefiere"],["carne"],["pescado"]]},
   {t:"Candela ___ de Cuba. ___ al balonmano cuando no estudia. No ___ mucho porque sus clases de economía ___ temprano, a las ocho. En España ___ a las tres. Por la noche no ___ mucho, solo un ___ y alguna ___ .",a:[["es"],["juega"],["duerme"],["empiezan"],["almuerza"],["cena"],["yogur"],["fruta"]]},
   {t:"Brandon ___ de Estados Unidos. Su novia y él ___ a Washington en agosto. ___ vivir en España. El piso donde viven ___ más barato que en su país. Jane, su novia, ___ con ser una famosa escritora. ___ la comida española, sobre todo, la paella.",a:[["es"],["vuelven"],["quieren"],["cuesta"],["sueña"],["prefieren"]]}
  ]},
 {type:"check",label:"B",instr:"Nanako y Sergio preparan para la cena una paella. ¿Sabes qué ingredientes lleva? Márcalos en la lista de la compra (la sal ya está marcada).",ko:"빠에야에 들어가는 재료를 모두 고르세요. (교재 정답 없음 — 일반적인 발렌시아식 빠에야 기준)",
  opts:["patatas","pollo","tomate","pepino","pimiento","cebolla","arroz","marisco","garbanzos","guisantes","champiñones","salchichas","salami","queso","vinagre","aceite","sal"],
  a:[1,2,4,5,6,7,9,15,16]}
]},
{id:"5-8",num:"8",sec:P,title:"¡Qué rara es Nanako!",page:102,acts:[
 {type:"match",label:"A",instr:"Nanako tiene algunas costumbres curiosas en su vida cotidiana. Fíjate en los pronombres en negrita. ¿A qué se refieren?",ko:"대명사가 가리키는 대상을 연결하세요.",cols:true,
  opts:["la ensalada","el tomate","el móvil","las películas de terror","el café"],
  items:[{l:"…pero no la preparo con tomate.",a:0},{l:"Lo odio. (con tomate)",a:1},{l:"La hago con lechuga, maíz…",a:0},{l:"Lo llevo a todas partes.",a:2},{l:"Si no lo tengo, ¡me muero!",a:2},{l:"Si las veo, no duermo en toda la noche.",a:3},{l:"Lo bebo en vaso de cristal.",a:4},{l:"Nunca lo tomo en taza.",a:4}]},
 {type:"open",label:"B",instr:"¿Y tú? ¿Tienes costumbres similares o diferentes a Nanako? Escribe tus preferencias utilizando los pronombres.",ko:"(자유 작문) 대명사를 사용해 자신의 습관을 쓰세요.",
  items:[{q:"¿Cómo tomas el café? ¿Y la ensalada?",model:"Lo tomo con mucha azúcar. La preparo con pepino, cebolla, tomate…"}]},
 {type:"fill",label:"C",instr:"Ahora pregunta a tu compañero cómo prepara/toma algo. Completa con el pronombre.",ko:"대명사를 넣으세요. (예: ¿Cómo preparas el pescado? → Lo preparo a la plancha y con limón.)",
  items:[
   {t:"¿Cómo tomas el café? — ___ tomo solo.",a:[["lo"]]},
   {t:"¿Cómo bebes la leche? — ___ bebo templada.",a:[["la"]]},
   {t:"¿Cómo comes los caramelos? — ___ como sin azúcar.",a:[["los"]]},
   {t:"¿Cómo tomas las zanahorias? — ___ tomo en ensalada.",a:[["las"]]}
  ]}
]},
{id:"5-9",num:"9",sec:P,title:"Comer, comer…",page:103,acts:[
 {type:"check",label:"A",audio:"1-35",instr:"Sergio, el novio de Nanako, come muchísimo. Lee el texto, escucha la audición y marca lo que Sergio come o prepara.",ko:"세르히오가 먹는 음식을 모두 고르세요.",
  opts:["manzanas","naranjas","peras","uvas","plátanos","ternera","pollo","cerdo","merluza","atún","salmón","sardinas","judías","lentejas","garbanzos","gambas","mejillones","jamón serrano","aceite de oliva","pan","chocolate","arroz","queso","huevos"],
  a:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},
 {type:"open",label:"B",instr:"Y vosotros, ¿coméis mucho? En parejas, hablad sobre vuestra dieta.",ko:"(말하기·작문) 자신의 식습관을 써 보세요.",
  items:[{q:"Por la noche como… / Prefiero… / Nunca desayuno…",model:"Por la noche como queso, jamón y fruta. Nunca desayuno café, solo leche con cereales."}]}
]},
{id:"5-10",num:"10",sec:P,title:"Un café con…",page:104,acts:[
 {type:"practice",label:"A",audio:"1-36",instr:"Nanako y Sergio van a tomar un café con Juan Diego. Escucha y lee su conversación (sin respuestas).",ko:"듣기 연습입니다. 대화를 들으며 따라 읽어 보세요."},
 {type:"fill",label:"B",instr:"Fíjate en la actividad A y completa la tabla ¿SABER o CONOCER?",ko:"saber 또는 conocer를 쓰세요.",
  items:[
   {no:"1",t:"SABER + infinitivo: Sabe preparar un mate…  (ejemplo)  ___",a:[["saber"]]},
   {no:"2",t:"___ + interrogativo (quién, cuál, cómo, por qué, dónde…): No sé quién es Juan Diego.",a:[["saber"]]},
   {no:"3",t:"___ + persona: ¿No conoces a Juan Diego?",a:[["conocer"]]},
   {no:"4",t:"___ + lugar: Conozco Ibiza.",a:[["conocer"]]}
  ]},
 {type:"fill",label:"C",instr:"Completa con saber o conocer en la forma correcta.",ko:"saber / conocer를 활용하세요.",
  items:[
   {t:"Yo no ___ cocinar paella.",a:[["sé"]]},
   {t:"¿___ (tú) a Nanako?",a:[["conoces"]]},
   {t:"Ellos no ___ dónde está el Café del Puerto.",a:[["saben"]]},
   {t:"Nosotros ___ Madrid muy bien.",a:[["conocemos"]]}
  ]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"5-11",num:"11",sec:C,title:"Una cena romántica",page:105,acts:[
 {type:"match",label:"A",instr:"Sergio quiere preparar una cena romántica para Nanako. ¿En qué tienda puede comprar cada producto? (el primer ejemplo: fresas → mercado)",ko:"각 물건을 살 수 있는 가게를 연결하세요.",cols:true,
  opts:["tienda de ropa","carnicería","joyería","perfumería","frutería","pescadería","papelería","floristería","mercado"],
  items:[{l:"fresas",a:4},{l:"rosas",a:7},{l:"un perfume",a:3},{l:"papel de regalo",a:6},{l:"una chaqueta nueva",a:0},{l:"carne",a:1},{l:"unos pendientes",a:2}]},
 {type:"open",label:"B",instr:"¿Sabéis más nombres de tiendas en español? Explicad qué podemos comprar en ellas.",ko:"(말하기) 다른 가게 이름과 살 수 있는 물건을 써 보세요.",
  items:[{q:"En una … podemos comprar …",model:"En una panadería podemos comprar pan. En una pastelería podemos comprar pasteles. En una librería podemos comprar libros."}]}
]},
{id:"5-12",num:"12",sec:C,title:"Tú vendes y yo compro",page:106,acts:[
 {type:"open",instr:"Vamos juntos a Mercabarato. Tú eres el vendedor y tu compañero, el cliente. Preparad el diálogo (saludos / productos / precio / despedida) y representadlo. Usa: medio kilo de…, cien gramos de…, un cuarto de…, un litro de…, un poco de…",ko:"(역할극 작문) 손님–점원 대화를 써 보세요.",
  items:[{q:"Escribe el diálogo:",model:"— ¡Hola, buenos días! — ¡Buenos días! — Quiero un kilo de plátanos. — Mire, los que tengo están muy verdes. — Pues deme solo medio kilo. ¿Cuánto es? — Son dos euros. — Aquí tiene. Gracias, adiós."}]}
]},
{id:"5-13",num:"13",sec:C,title:"¡A comer!",page:107,acts:[
 {type:"choice",label:"A",instr:"Nanako encuentra en esta página web algunos datos interesantes sobre la comida y la bebida en el mundo hispano. Lee y contesta.",ko:"본문을 읽고 O/X로 답하세요.",
  items:[
   {q:"Muchos españoles desayunan pan con aceite y tomate.",o:VF,a:0},
   {q:"En España la gente toma un aperitivo antes de la cena.",o:VF,a:1},
   {q:"El mate es una bebida popular en Argentina y Uruguay.",o:VF,a:0},
   {q:"Los cubanos comen poco arroz y poca carne de cerdo.",o:VF,a:1},
   {q:"El cóctel Margarita es de origen español.",o:VF,a:1},
   {q:"El Margarita lleva tequila y zumo de limón.",o:VF,a:0}
  ]},
 {type:"open",label:"B",instr:"Comenta con tus compañeros algún producto típico, plato famoso o bebida favorita de tu país.",ko:"(말하기) 자국의 대표 음식을 소개해 보세요.",
  items:[{q:"En mi país…",model:"En mi país el producto típico es el kimchi. Lo comemos con arroz en todas las comidas."}]}
]},
{id:"5-14",num:"14",sec:C,title:"En la terraza de un bar",page:107,acts:[
 {type:"open",instr:"Nanako recibe esta «foto» de su amiga Candela. Mira la imagen (tres chicas en una terraza) y contesta: ¿Dónde crees que están? ¿Qué hacen? ¿Qué comen? ¿Quiénes son? ¿Qué relación hay entre ellas? ¿Qué beben? ¿De dónde crees que son?",ko:"(자유 작문) 그림을 보고 질문에 답하며 상상해서 설명하세요.",
  items:[{q:"Describe la imagen:",model:"Creo que están en una terraza en España. Son tres amigas. Beben cerveza y comen aceitunas y tapas. Es un día especial porque celebran algo."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"5-x1",num:"1",sec:"¡extra! Contextos",title:"Nuestros secretos",page:108,acts:[
 {type:"match",label:"A",instr:"Nanako sabe muchos «pequeños» secretos de algunos de sus amigos. Lee estos enunciados y descúbrelos: ¿quién es?",ko:"비밀의 주인공을 연결하세요.",cols:true,
  opts:["Reinaldo y José","Eva","Natalie y yo","Claudia","Anabel y su novio","Kenzo","Angelo","Lauren","Christine y yo","Rachel y Jeremy"],
  items:[{l:"Quieren hablar inglés perfectamente.",a:0},{l:"Prefiere salir con chicos muy altos.",a:1},{l:"Preferimos la música clásica.",a:2},{l:"Quiere tocar la guitarra eléctrica.",a:3},{l:"Desean tener perro pero no pueden (casa pequeña).",a:4},{l:"Celebra su boda en Japón.",a:5},{l:"No puede dormir con la luz apagada.",a:6},{l:"No puede comer chocolate; es alérgica.",a:7},{l:"Preferimos el vino blanco.",a:8},{l:"Desean vivir juntos.",a:9}]},
 {type:"open",label:"B",instr:"Explica tus «pequeños secretos» al resto de la clase.",ko:"(자유 작문) 자신의 작은 비밀을 써 보세요.",
  items:[{q:"No puedo… / Deseo… / No quiero… / Prefiero…",model:"No puedo conducir. No tengo carné. Deseo viajar por todo el mundo, es mi sueño."}]}
]},
{id:"5-x2",num:"2",sec:"¡extra! Contextos",title:"Sergio, el soñador",page:109,acts:[
 {type:"check",label:"A",audio:"1-37",instr:"Sergio tiene muchos sueños y deseos para el futuro. Escúchalo y marca los enunciados correctos.",ko:"듣고 맞는 문장을 모두 고르세요.",
  opts:["Desea vivir muchos años.","Prefiere vivir en una gran ciudad.","Quiere una casa pequeña y tranquila.","Quiere tener muchos hijos.","Desea visitar el país de su novia.","Prefiere su coche de segunda mano a uno nuevo."],
  a:[0,2,3,4]},
 {type:"open",label:"B",instr:"Habla con uno de tus compañeros y escribe la lista de sus deseos. Utiliza los verbos QUERER, DESEAR y PREFERIR.",ko:"(말하기·작문) 친구의 소망 목록을 써 보세요.",
  items:[{q:"Peter desea… / quiere… / prefiere…",model:"Peter desea viajar por Asia. Quiere tener un perro. Prefiere vivir en una ciudad pequeña."}]}
]},
{id:"5-x3",num:"3",sec:"¡extra! Práctica",title:"¿Lo sabes?",page:110,acts:[
 {type:"fill",label:"A",audio:"1-38",instr:"Escucha a Nanako y a sus amigos, y completa con los pronombres de objeto directo LO, LA, LOS, LAS. ¿De qué hablan?",ko:"듣고 대명사를 쓰고, 무엇에 대한 이야기인지 쓰세요.",
  items:[
   {no:"1",t:"___ usamos para comprar comida, ropa o un coche. Hay gente que no ___ tiene. Yo ___ tengo en el banco… ES: ___",a:[["lo"],["lo"],["lo"],["el dinero","dinero"]]},
   {no:"2",t:"En España ___ tiene casi todo el mundo. Yo ___ uso para saber dónde están mis amigos. ___ llevo siempre conmigo. Ahora ___ tengo en la chaqueta. ___ podemos comprar de muchos colores diferentes… ES: ___",a:[["lo"],["lo"],["lo"],["lo"],["lo"],["el móvil","móvil","el teléfono","teléfono"]]},
   {no:"3",t:"Yo ___ veo por la noche, mientras ceno en el salón. Mi madre ___ pone en la cocina. Cuando estudio no ___ enciendo. Creo que mucha gente ___ ve demasiadas horas… ES: ___",a:[["la"],["la"],["la"],["la"],["la tele","tele","la televisión","televisión"]]}
  ]},
 {type:"open",label:"B",instr:"Ahora, podéis hacer lo mismo con el vocabulario que ya sabéis: objetos de la clase, partes de la casa, muebles…",ko:"(말하기) 같은 방식으로 수수께끼를 만들어 보세요.",
  items:[{q:"Escribe una adivinanza con LO/LA/LOS/LAS:",model:"La uso para escribir en la pizarra. La tiene el profesor. ¿Qué es? — La tiza."}]}
]},
{id:"5-x4",num:"4",sec:"¡extra! Práctica",title:"¿Qué sabes hacer?",page:110,acts:[
 {type:"open",instr:"Juan Diego sabe preparar un mate buenísimo… ¿Y tú? ¿Cuáles de estas cosas sabes hacer bien? (bailar, cocinar, montar en bici, leer la mano, tocar la guitarra, jugar a las cartas, limpiar los cristales, nadar, escribir poemas, conducir, cantar, jugar al fútbol)",ko:"(자유 작문) 할 줄 아는 것을 saber + 동사원형으로 쓰세요.",
  items:[{q:"Sé… / No sé…",model:"Sé bailar y cocinar. No sé tocar la guitarra ni conducir."}]}
]},
{id:"5-x5",num:"5",sec:"¡extra! En comunicación",title:"Otras tiendas",page:111,acts:[
 {type:"choice",label:"A",instr:"Nanako descubre que en España existen algunas tiendas especiales. Lee los dos textos y contesta.",ko:"본문을 읽고 O/X로 답하세요.",
  items:[
   {q:"En las tiendas «Todo a un euro» puedes comprar cuadernos, bolígrafos y objetos de decoración.",o:VF,a:0},
   {q:"En estas tiendas nunca venden ropa ni zapatos.",o:VF,a:1},
   {q:"Los ultramarinos son tiendas de alimentación.",o:VF,a:0},
   {q:"Los ultramarinos suelen estar en los barrios de las grandes ciudades.",o:VF,a:0},
   {q:"Los ultramarinos abren siempre los domingos.",o:VF,a:1}
  ]},
 {type:"open",label:"B",instr:"¿Existen tiendas similares en tu país? ¿Hay algún establecimiento original, diferente o curioso? Explícaselo al resto de tus compañeros.",ko:"(말하기) 자국의 독특한 가게를 소개해 보세요.",
  items:[{q:"En mi país hay tiendas donde venden…",model:"En mi país hay tiendas de veinticuatro horas donde venden comida, bebidas y de todo."}]}
]}
]};
})();
