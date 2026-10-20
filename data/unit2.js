window.UNITS=window.UNITS||{};
(function(){
/* tm(h,m): formas aceptadas para una hora (24 h y 12 h) */
const tm=(h,m)=>{const mm=String(m).padStart(2,"0");const h12=h>12?h-12:h;const out=[h+":"+mm,h12+":"+mm];if(m===0){out.push(String(h),String(h12));}return out;};
const S="Contextos",O="Observa y aprende",P="Práctica",C="En comunicación";
window.UNITS[2]={exercises:[
/* ===== CONTEXTOS ===== */
{id:"2-1",num:"1",sec:S,title:"Los nuevos amigos",page:33,acts:[
 {type:"match",instr:"Kelly habla con Carmen, una chica de Málaga. Relaciona ambas partes del diálogo.",ko:"질문(1~14)에 알맞은 대답(A~N)을 연결하세요.",
  opts:["A) Con mi novio.","B) Es amable, simpático y guapo.","C) c/ Larios 4, primero A.","D) En la Escuela Oficial de Idiomas.","E) Soy estudiante de inglés.","F) A las nueve.","G) De Málaga.","H) Miguel.","I) Polite en inglés.","J) Tengo diecinueve.","K) El día 19 de noviembre.","L) Me gusta correr y montar en bici.","M) Sí, tengo dos.","N) El 600 000 8115."],
  items:[
   {no:"1",l:"¿Cuál es tu profesión?",a:4},{no:"2",l:"¿Cuántos años tienes?",a:9},{no:"3",l:"¿De dónde eres?",a:6},
   {no:"4",l:"¿Cuál es tu dirección?",a:2},{no:"5",l:"¿Tienes hermanos?",a:12},{no:"6",l:"¿Dónde estudias?",a:3},
   {no:"7",l:"¿Con quién vives?",a:0},{no:"8",l:"¿Cuál es tu deporte favorito?",a:11},{no:"9",l:"¿Cómo se llama tu novio?",a:7},
   {no:"10",l:"¿Cómo es Miguel?",a:1},{no:"11",l:"¿Qué significa «amable»?",a:8},{no:"12",l:"¿Cuándo es tu cumpleaños?",a:10},
   {no:"13",l:"¿A qué hora es tu clase?",a:5},{no:"14",l:"¿Cuál es tu teléfono?",a:13}
  ]}
]},
{id:"2-2",num:"2",sec:S,title:"Miguel, el novio de Carmen",page:33,acts:[
 {type:"fill",audio:"1-14",instr:"Escucha a Miguel hablar sobre sí mismo y contesta.",ko:"미겔의 이야기를 듣고 질문에 답하세요. (짧게 써도 됩니다)",
  items:[
   {t:"1. ¿De dónde es la familia de Miguel? — De ___",a:[["Barcelona"]]},
   {t:"2. ¿Cuántos hermanos tiene? — ___ (número)",a:[["uno","una","1","una hermana","un hermano"]]},
   {t:"3. ¿Quién es María y cómo es? — Es su ___ (parentesco)",a:[["hermana"]]},
   {t:"3b. María es alegre, abierta y muy ___",a:[["cariñosa"]]},
   {t:"4. ¿Cómo es el carácter de Miguel? — Es guapo y muy ___",a:[["divertido"]]},
   {t:"5. ¿A qué se dedica Miguel? — Es estudiante de ___",a:[["periodismo"]]}
  ]}
]},
{id:"2-3",num:"3",sec:S,title:"Sobre ti",page:34,acts:[
 {type:"choice",label:"A",instr:"Esta es Kelly. Lee su presentación y contesta.",ko:"켈리의 자기소개를 읽고 맞는 답을 고르세요.",
  items:[
   {q:"Kelly es de…",o:["California (EE. UU.)","Málaga","Londres"],a:0},
   {q:"Kelly tiene…",o:["19 años","20 años","30 años"],a:1},
   {q:"Kelly estudia…",o:["comercio internacional","periodismo","diseño gráfico"],a:0},
   {q:"En vacaciones viaja a…",o:["San Francisco","San José","Málaga"],a:1},
   {q:"Kelly juega al…",o:["tenis","fútbol","baloncesto"],a:2}
  ]},
 {type:"open",label:"B",instr:"Ahora ya podemos preguntar a Kelly sobre los siguientes aspectos. Fíjate en las preguntas de la actividad 1.",ko:"예시를 참고해 각 항목에 대한 질문을 만들어 보세요.",
  items:[
   {q:"1. La familia: ¿…?",model:"¿Tienes hermanos?"},
   {q:"2. Actividades de fin de semana: ¿…?",model:"¿Qué haces los fines de semana?"},
   {q:"3. Número de teléfono: ¿…?",model:"¿Cuál es tu teléfono?"},
   {q:"4. Comida favorita: ¿…?",model:"¿Cuál es tu comida favorita?"},
   {q:"5. Nombre de su mejor amigo: ¿…?",model:"¿Cómo se llama tu mejor amigo?"},
   {q:"6. Carácter de sus padres: ¿…?",model:"¿Cómo son tus padres?"},
   {q:"7. Lugar de vacaciones: ¿…?",model:"¿Dónde pasas las vacaciones?"},
   {q:"8. Número de horas en la universidad: ¿…?",model:"¿Cuántas horas estás en la universidad?"},
   {q:"9. Intereses: ¿…?",model:"¿Cuáles son tus intereses?"}
  ]},
 {type:"open",label:"C",instr:"¡Ahora tú! Pregunta a tus compañeros de clase sobre aspectos personales.",ko:"(말하기) 짝에게 질문하고 대답을 써 보세요. 예: ¿De dónde es tu familia? — Mi familia es de …",
  items:[{q:"> ¿De dónde es tu familia? < Mi familia es de …",model:"Mi familia es de Seúl."}]}
]},
/* ===== OBSERVA Y APRENDE ===== */
{id:"2-4",num:"4",sec:O,title:"Mi vida",page:35,acts:[
 {type:"match",label:"B",instr:"Ahora señala los verbos del blog de Marie y clasifícalos según su terminación.",ko:"각 동사의 어미(-AR / -ER / -IR)를 고르세요.",cols:true,
  opts:["-AR","-ER","-IR"],
  items:[{l:"estudiar",a:0},{l:"aprender",a:1},{l:"tocar",a:0},{l:"bailar",a:0},{l:"escribir",a:2},{l:"trabajar",a:0},{l:"ver",a:1},{l:"quedar",a:0},{l:"visitar",a:0},{l:"chatear",a:0},{l:"leer",a:1}]}
]},
{id:"2-5",num:"5",sec:O,title:"Un chico interesante",page:36,acts:[
 {type:"fill",label:"B",instr:"Escribe el verbo ESTUDIAR en presente al lado del pronombre personal correspondiente.",ko:"ESTUDIAR의 현재형을 쓰세요.",cols:true,
  items:[{t:"Yo ___",a:[["estudio"]]},{t:"Tú ___",a:[["estudias"]]},{t:"Usted ___",a:[["estudia"]]},{t:"Él / Ella ___",a:[["estudia"]]},{t:"Nosotros/-as ___",a:[["estudiamos"]]},{t:"Vosotros/-as ___",a:[["estudiáis"]]},{t:"Ustedes ___",a:[["estudian"]]},{t:"Ellos / Ellas ___",a:[["estudian"]]}]},
 {type:"fill",label:"C",audio:"1-15",instr:"Ahora escucha a Marie conjugar un verbo en -ER. Escribe la conjugación.",ko:"듣고 -ER 동사(BEBER)의 현재형을 쓰세요.",cols:true,
  items:[{t:"Yo ___",a:[["bebo"]]},{t:"Tú ___",a:[["bebes"]]},{t:"Usted ___",a:[["bebe"]]},{t:"Él / Ella ___",a:[["bebe"]]},{t:"Nosotros/-as ___",a:[["bebemos"]]},{t:"Vosotros/-as ___",a:[["bebéis"]]},{t:"Ustedes ___",a:[["beben"]]},{t:"Ellos / Ellas ___",a:[["beben"]]}]},
 {type:"open",label:"C",instr:"Compara con la conjugación de los verbos en -AR. ¿Qué diferencia observas?",ko:"-AR 동사와 비교해 어떤 차이가 있는지 써 보세요.",
  items:[{q:"Diferencia entre -AR y -ER:",model:"-AR: -o, -as, -a, -amos, -áis, -an · -ER: -o, -es, -e, -emos, -éis, -en. (La vocal «a» cambia a «e»; «yo» es igual: -o.)"}]},
 {type:"fill",label:"D",audio:"1-16",instr:"Los verbos en -ER e -IR son casi iguales. Escucha la conjugación del verbo VIVIR.",ko:"듣고 -IR 동사(VIVIR)의 현재형을 쓰세요.",cols:true,
  items:[{t:"Yo ___",a:[["vivo"]]},{t:"Tú ___",a:[["vives"]]},{t:"Usted ___",a:[["vive"]]},{t:"Él / Ella ___",a:[["vive"]]},{t:"Nosotros/-as ___",a:[["vivimos"]]},{t:"Vosotros/-as ___",a:[["vivís"]]},{t:"Ustedes ___",a:[["viven"]]},{t:"Ellos / Ellas ___",a:[["viven"]]}]},
 {type:"check",label:"D",instr:"¿En qué dos formas se diferencian los verbos en -ER (beber) y en -IR (vivir)?",ko:"-ER과 -IR 동사가 서로 다른 두 가지 인칭을 고르세요.",
  opts:["yo","tú","usted / él / ella","nosotros/-as","vosotros/-as","ustedes / ellos / ellas"],a:[3,4]}
]},
{id:"2-6",num:"6",sec:O,title:"Un verbo, dos verbos…",page:36,acts:[
 {type:"fill",instr:"Jugamos con los verbos en español. Conjuga el verbo indicado en presente. (Diez puntos por cada conjugación correcta, ¡a jugar!)",ko:"괄호 안 동사를 현재형으로 활용해 쓰세요.",cols:true,
  items:[
   {t:"hablar — yo ___",a:[["hablo"]]},{t:"hablar — tú ___",a:[["hablas"]]},{t:"comer — él ___",a:[["come"]]},
   {t:"comer — vosotros ___",a:[["coméis"]]},{t:"vivir — ustedes ___",a:[["viven"]]},{t:"escribir — yo ___",a:[["escribo"]]},
   {t:"escribir — nosotros ___",a:[["escribimos"]]},{t:"viajar — ellas ___",a:[["viajan"]]},{t:"leer — tú ___",a:[["lees"]]},
   {t:"abrir — vosotros ___",a:[["abrís"]]},{t:"aprender — nosotros ___",a:[["aprendemos"]]},{t:"trabajar — usted ___",a:[["trabaja"]]},
   {t:"recibir — yo ___",a:[["recibo"]]},{t:"subir — ellos ___",a:[["suben"]]},{t:"comprar — vosotras ___",a:[["compráis"]]},{t:"ver — nosotros ___",a:[["vemos"]]}
  ]}
]},
{id:"2-7",num:"7",sec:O,title:"El chico ideal de…",page:37,acts:[
 {type:"match",label:"B",instr:"En parejas, completad la tabla con la información del texto: «Mi chico ideal es pelirrojo y bajito. Es delgado. Tiene el pelo corto y rizado. Tiene bigote… ¡Es muy atractivo…!»",ko:"본문에서 'Es…'(이다) 뒤에 오는 것과 'Tiene…'(가지고 있다) 뒤에 오는 것으로 분류하세요.",cols:true,
  opts:["Es…","Tiene…"],
  items:[{l:"pelirrojo",a:0},{l:"bajito",a:0},{l:"delgado",a:0},{l:"atractivo",a:0},{l:"el pelo corto",a:1},{l:"el pelo rizado",a:1},{l:"bigote",a:1}]},
 {type:"fill",label:"Gramática",instr:"TENER expresa posesión. Escribe el presente del verbo TENER.",ko:"TENER 동사의 현재형을 쓰세요.",cols:true,
  items:[{t:"Yo ___",a:[["tengo"]]},{t:"Tú ___",a:[["tienes"]]},{t:"Usted ___",a:[["tiene"]]},{t:"Él / Ella ___",a:[["tiene"]]},{t:"Nosotros/-as ___",a:[["tenemos"]]},{t:"Vosotros/-as ___",a:[["tenéis"]]},{t:"Ustedes ___",a:[["tienen"]]},{t:"Ellos / Ellas ___",a:[["tienen"]]}]},
 {type:"open",label:"C",instr:"Pregunta a tu compañero o compañera cómo es su chico o chica ideal. Después, coméntalo en plenaria.",ko:"(말하기) 이상형을 묘사해 보세요. 예: Es guapo, alto, tiene los ojos verdes…",bank:["Tiene gafas","Tiene el pelo largo","Es atractiva","Es moreno","Es guapa","Es alta","Es fuerte","Tiene los ojos azules","Tiene los ojos marrones","Es pelirrojo","Tiene pecas","Tiene el pelo rizado"],
  items:[{q:"El chico/la chica ideal de … es …",model:"La chica ideal de Pedro es guapa, alta y tiene el pelo largo."}]}
]},
{id:"2-8",num:"8",sec:O,title:"Hablamos con…",page:38,acts:[
 {type:"match",label:"A",instr:"En el foro Mundobook hay otros estudiantes de idiomas. Relaciona las fotos con los mensajes.",ko:"세 사람(Rodolfo, Alberto, Alejandro)의 글을 읽고 각각에 맞는 사진 설명을 고르세요. (Rodolfo는 전화를 많이 합니다 / Alberto는 요리를 잘합니다 / Alejandro는 드럼을 칩니다)",
  opts:["Un chico hablando por teléfono","Un chico cocinando","Un chico tocando la batería"],
  items:[{l:"Rodolfo (Argentina, publicista)",a:0},{l:"Alberto García (Barcelona)",a:1},{l:"Alejandro (Oaxaca, México)",a:2}]},
 {type:"fill",label:"C",audio:"1-17",instr:"Los chicos hablan más de ellos mismos. Escucha lo que dicen y escríbelo.",ko:"듣고 빈칸을 채우세요. (각 사람이 자신을 묘사한 형용사)",
  items:[
   {t:"Rodolfo: Soy un tipo ___ y ___ .",a:[["divertido"],["simpático"]]},
   {t:"Alberto: Soy ___ , organizado y ___ .",a:[["deportista"],["generoso"]]},
   {t:"Alejandro: Soy ___ , pero amable y también un poco ___ .",a:[["serio"],["tímido"]]}
  ]}
]},
{id:"2-9",num:"9",sec:O,title:"Las letras QU y C",page:39,acts:[
 {type:"fill",label:"A",audio:"1-18",instr:"Escucha la pronunciación del sonido [k] y completa todas estas palabras con la letra adecuada (c o qu).",ko:"듣고 빈칸에 c 또는 qu를 쓰세요. (4번과 8번은 빈칸이 두 개)",cols:true,
  items:[
   {no:"1",t:"___ asa",a:[["c"]]},{no:"2",t:"___ eso",a:[["qu"]]},{no:"3",t:"___ osa",a:[["c"]]},
   {no:"4",t:"___ u ___ o",a:[["c"],["c"]]},{no:"5",t:"___ ince",a:[["qu"]]},{no:"6",t:"___ ímica",a:[["qu"]]},
   {no:"7",t:"___ uerpo",a:[["c"]]},{no:"8",t:"___ o ___ o",a:[["c"],["c"]]},{no:"9",t:"___ uarto",a:[["c"]]}
  ]}
]},
/* ===== PRÁCTICA ===== */
{id:"2-10",num:"10",sec:P,title:"¡Qué montón de adjetivos!",page:41,acts:[
 {type:"fill",label:"A",instr:"Kelly y sus compañeros aprenden hoy en clase de español muchos adjetivos. Completa la lista con las terminaciones.",ko:"형용사의 빈칸(어미)을 채우세요. 남성형·여성형 모두 정답으로 인정됩니다.",cols:true,
  items:[
   {no:"1",t:"Abier ___",a:[["to","ta"]]},{no:"2",t:"Intel ___",a:[["igente"]]},{no:"3",t:"Tris ___",a:[["te"]]},{no:"4",t:"Ale ___",a:[["gre"]]},
   {no:"5",t:"Atrac ___",a:[["tivo","tiva"]]},{no:"6",t:"Antip ___",a:[["ático","ática"]]},{no:"7",t:"Alt ___",a:[["o","a"]]},{no:"8",t:"Baj ___",a:[["o","a"]]},
   {no:"9",t:"Fe ___",a:[["o","a"]]},{no:"10",t:"Guap ___",a:[["o","a"]]},{no:"11",t:"Simpá ___",a:[["tico","tica"]]},{no:"12",t:"Aburr ___",a:[["ido","ida"]]}
  ]},
 {type:"match",label:"B",audio:"1-19",instr:"Escucha y comprueba tus respuestas. Clasifica los adjetivos: para aspecto físico o para carácter.",ko:"형용사를 외모(aspecto físico)와 성격(carácter)으로 분류하세요.",cols:true,
  opts:["Para aspecto físico","Para carácter"],
  items:[{l:"abierto",a:1},{l:"inteligente",a:1},{l:"triste",a:1},{l:"alegre",a:1},{l:"atractivo",a:0},{l:"antipático",a:1},{l:"alto",a:0},{l:"bajo",a:0},{l:"feo",a:0},{l:"guapo",a:0},{l:"simpático",a:1},{l:"aburrido",a:1}]},
 {type:"open",label:"C",instr:"Mira las fotos de estas personas y describe su aspecto físico y la primera impresión de su carácter. (Usa «Parece…»)",ko:"(자유 작문) 주변 사람 한 명을 골라 외모와 첫인상을 묘사해 보세요.",
  items:[{q:"Es un chico/una chica … Parece …",model:"Es un chico atractivo, moreno y alto. Parece simpático y alegre."}]}
]},
{id:"2-11",num:"11",sec:P,title:"Noticias método.es",page:42,acts:[
 {type:"fill",instr:"Completa esta entrevista para el periódico digital de la escuela con las palabras interrogativas (Quién / Cómo / Qué / Cuándo / Dónde).",ko:"인터뷰의 빈칸에 알맞은 의문사를 쓰세요. (2번 대답 빈칸은 이름)",
  items:[
   {no:"1",t:"¿___ te llamas?",a:[["cómo"]]},
   {no:"2",t:"< ___ , soy italiana. (¿Alicia o Sabrina?)",a:[["Sabrina","Me llamo Sabrina"]]},
   {no:"3",t:"¿___ vives en Italia? — En Florencia.",a:[["dónde"]]},
   {no:"4",t:"¿___ estudias español? — En la Universidad de Málaga.",a:[["dónde"]]},
   {no:"5",t:"¿___ es tu profesor? — Es profesora. Se llama Alicia Pérez.",a:[["quién"]]},
   {no:"6",t:"¿___ es? — Es muy buena enseñando el español… y muy simpática.",a:[["cómo"]]},
   {no:"7",t:"¿___ son tus compañeros de clase? — Son muy inteligentes y divertidos.",a:[["cómo"]]},
   {no:"8",t:"¿___ haces los fines de semana en Málaga? — El sábado salgo a tomar algo…",a:[["qué"]]},
   {no:"9",t:"¿___ terminas? — A las dos.",a:[["a qué hora","cuándo"]]}
  ]},
 {type:"choice",instr:"¿Quién habla en la entrevista?",ko:"인터뷰 속 인물은 누구일까요?",items:[{q:"La entrevistada es…",o:["Alicia","Sabrina"],a:1}]}
]},
{id:"2-12",num:"12",sec:P,title:"Más cosas de…",page:43,acts:[
 {type:"fill",label:"A",instr:"Completa las oraciones con las palabras que te damos y descubre más cosas sobre nuestra amiga.",ko:"의문사 보기: A qué hora · Dónde · De dónde · De qué · Qué · Cuál · Cómo. 질문의 빈칸에 알맞은 의문사를 쓰세요.",
  bank:["A qué hora","Dónde","De dónde","De qué","Qué","Cuál","Cómo"],
  items:[
   {t:"1. ¿___ color es tu coche? — Es amarillo.",a:[["de qué"]]},
   {t:"2. ¿___ cenas en tu país? — A las siete.",a:[["a qué hora"]]},
   {t:"3. ¿___ es tu familia? — Es de Italia.",a:[["de dónde"]]},
   {t:"4. ¿___ es tu música favorita? — El hip hop.",a:[["cuál"]]},
   {t:"5. ¿Tienes perro? — Sí. ¿___ se llama? — Toby.",a:[["cómo"]]},
   {t:"6. ¿___ raza es? — Es un dálmata.",a:[["qué"]]},
   {t:"7. ¿___ comes hoy? — En casa de mi amiga Marta.",a:[["dónde"]]},
   {t:"8. ¿___ es tu madre? — Muy guapa.",a:[["cómo"]]},
   {t:"9. ¿___ es tu día de la semana favorito? — El sábado.",a:[["cuál"]]},
   {t:"10. ¿___ te gusta más de España? — La luz; cualquier tiempo es bueno para estar en la calle.",a:[["qué"]]}
  ]},
 {type:"open",label:"B",instr:"Ahora con todos estos datos, escribe una descripción de Sabrina.",ko:"(자유 작문) 위 정보를 이용해 사브리나를 소개하는 글을 써 보세요.",
  items:[{q:"Sabrina parece una chica agradable y divertida…",model:"Sabrina es italiana, de Florencia. Su familia es de Italia. Tiene un perro dálmata que se llama Toby. Su coche es amarillo y su música favorita es el hip hop."}]}
]},
{id:"2-13",num:"13",sec:P,title:"Más información sobre tus nuevos amigos",page:43,acts:[
 {type:"open",instr:"Pregunta a tus compañeros combinando un interrogativo y un verbo (¿Qué? ¿Cómo? ¿De quién? ¿Quién? ¿De qué? ¿Cuál? ¿A qué hora? ¿Dónde? ¿Cuándo? ¿De dónde? + comer, leer, escuchar, vivir, estudiar, bailar, correr, desayunar, abrir, terminar, creer, trabajar, ver, tomar, hablar, escribir, cenar, entrar, ser, comprar).",ko:"(말하기) 의문사 + 동사를 조합해 질문을 만들어 보세요.",
  items:[{q:"Escribe dos preguntas:",model:"¿Qué desayunas por la mañana? — Desayuno café y tostadas. / ¿Dónde trabajas? — Trabajo en un hospital."}]}
]},
{id:"2-14",num:"14",sec:P,title:"Hora a hora",page:44,acts:[
 {type:"fill",label:"A",audio:"1-20",instr:"Pepe Prisas es un amigo de la profesora Carmen. Lee y escucha los diálogos y observa cómo se dice la hora en español. ¿Qué hora es en cada diálogo?",ko:"대화를 듣고 시각을 스페인어로 쓰세요. (예: las tres y media)",
  items:[
   {no:"1",t:"Diálogo 1: Son las ___",a:[["doce y media"]]},
   {no:"2",t:"Diálogo 2: Es la ___",a:[["una en punto","una"]]},
   {no:"3",t:"Diálogo 3: Son las ___",a:[["cuatro y cuarto"]]},
   {no:"4",t:"Diálogo 4: Son las ___",a:[["ocho menos veinte"]]},
   {no:"5",t:"Diálogo 5: Son las ___",a:[["diez y diez"]]}
  ]},
 {type:"fill",label:"B",instr:"Ahora escribe las siguientes horas. (Formato: «Son las tres y media», «Es la una y veinte»…)",ko:"디지털 시각을 스페인어 문장으로 쓰세요.",
  items:[
   {t:"a. 15:30 → ___",a:[["son las tres y media","las tres y media","tres y media"]]},
   {t:"b. 19:25 → ___",a:[["son las siete y veinticinco","las siete y veinticinco","siete y veinticinco"]]},
   {t:"c. 21:55 → ___",a:[["son las diez menos cinco","las diez menos cinco","diez menos cinco"]]},
   {t:"d. 17:15 → ___",a:[["son las cinco y cuarto","las cinco y cuarto","cinco y cuarto"]]},
   {t:"e. 19:45 → ___",a:[["son las ocho menos cuarto","las ocho menos cuarto","ocho menos cuarto"]]},
   {t:"f. 13:20 → ___",a:[["es la una y veinte","la una y veinte","una y veinte"]]}
  ]}
]},
{id:"2-15",num:"15",sec:P,title:"¿Qué número es?",page:45,acts:[
 {type:"fill",audio:"1-21",instr:"Subraya los números que escuchas. (Escribe en cifras los 17 números en el orden en que los oyes.)",ko:"들리는 순서대로 숫자 17개를 숫자(예: 3)로 쓰세요.",cols:true,
  items:[3,18,11,20,5,13,16,50,17,30,15,14,21,0,26,40,19].map((n,i)=>({no:String(i+1),t:"___",a:[[String(n)]]}))}
]},
{id:"2-16",num:"16",sec:P,title:"¿Con C o con QU?",page:45,acts:[
 {type:"fill",instr:"Escribe el nombre correspondiente a estas imágenes. Recuerda que esas palabras tienen las letras C o QU.",ko:"그림에 해당하는 단어를 쓰세요. (1 공책 · 2 자동차 · 3 가판대/키오스크 · 4 카메라 · 5 공원 · 6 모기)",cols:true,
  items:[
   {no:"1",t:"📓 → ___",a:[["cuaderno"]]},{no:"2",t:"🚗 → ___",a:[["coche"]]},{no:"3",t:"🏪 (가판대) → ___",a:[["quiosco","kiosco"]]},
   {no:"4",t:"📷 → ___",a:[["cámara","cámara de fotos","cámara fotográfica"]]},{no:"5",t:"🌳⛲ → ___",a:[["parque"]]},{no:"6",t:"🦟 → ___",a:[["mosquito"]]}
  ]}
]},
/* ===== EN COMUNICACIÓN ===== */
{id:"2-17",num:"17",sec:C,title:"Una persona especial",page:46,acts:[
 {type:"open",label:"A",instr:"Cada estudiante tiene que elegir a una persona conocida: un amigo, un familiar. Será alguien especial. Completa esta ficha y describe a esa persona al resto de la clase.",ko:"(자유 작문) 소중한 사람 한 명을 골라 아래 항목을 채워 보세요.",
  items:[
   {q:"¿Quién es? ¿De dónde es? ¿Profesión? ¿Edad?",model:"Es mi madre. Es de Seúl. Es profesora. Tiene 45 años."},
   {q:"Aspecto físico y carácter",model:"Es baja y delgada. Tiene el pelo corto. Es simpática, abierta y muy generosa."},
   {q:"¿Por qué es especial esta persona?",model:"Es especial porque siempre me ayuda."}
  ]}
]},
{id:"2-18",num:"18",sec:C,title:"¿A qué hora…?",page:47,acts:[
 {type:"match",label:"A",instr:"Magnus comenta con sus amigos del Foro latino los horarios en España y Latinoamérica. Lee sus opiniones y relaciona cada país con la hora de la cena.",ko:"본문(Foro latino)을 읽고 나라별 저녁 식사 시간을 연결하세요.",
  opts:["a las 6","a las 8 (o entre las 7 y las 8)","entre las 8 y las 9 (también a las 10)","a las 9 o a las 10 de la noche"],
  items:[{l:"Suecia (Magnus)",a:0},{l:"Argentina (Graciela)",a:2},{l:"Chile (Santiago)",a:1},{l:"España",a:3}]},
 {type:"choice",label:"A",instr:"Lee otra vez el foro y contesta: verdadero o falso.",ko:"맞으면 Verdadero, 틀리면 Falso를 고르세요.",
  items:[
   {q:"En Chile los centros comerciales están abiertos de 9:00 h a 20:00 h.",o:["Verdadero","Falso"],a:0},
   {q:"En Argentina los bancos abren muchas horas.",o:["Verdadero","Falso"],a:1},
   {q:"En Chile el almuerzo es a las dos de la tarde, como en España.",o:["Verdadero","Falso"],a:0},
   {q:"En Colombia y Venezuela el desayuno es entre las siete y las ocho de la mañana.",o:["Verdadero","Falso"],a:0}
  ]},
 {type:"open",label:"B",instr:"Explica a tus compañeros las semejanzas y diferencias con tu país.",ko:"(말하기) 한국과 비교해 써 보세요.",
  items:[{q:"En mi país las tiendas abren de ___ a ___. Los bancos abren a las ___. Nosotros cenamos a las ___.",model:"En mi país las tiendas abren de 10:00 a 22:00. Los bancos abren a las 9. Nosotros cenamos a las 7."}]}
]},
/* ===== ¡EXTRA! ===== */
{id:"2-x1",num:"1",sec:"¡extra! Contextos",title:"Mi gente",page:48,acts:[
 {type:"match",label:"A",instr:"Los chicos de la clase hablan sobre algunas personas importantes en sus vidas. ¿Quién es…?",ko:"각 설명에 해당하는 인물을 고르세요.",cols:true,
  opts:["La madre de Fátima","Charles (compañero de piso de Kelly)","Jessica (amiga de Tom)","El jefe de Pierre"],
  items:[{l:"Es sincera.",a:0},{l:"Es impuntual.",a:1},{l:"Es muy aburrida.",a:2},{l:"Es impaciente.",a:3},{l:"Es desordenado.",a:1},{l:"Es paciente.",a:2},{l:"Es fuerte.",a:0},{l:"A veces es muy nervioso.",a:3}]},
 {type:"open",label:"B–D",instr:"¿Y tú? ¿Cuáles de estas cualidades o defectos tienes? Imagina un día en la vida del jefe antipático de Pierre (y de la madre de Fátima, Jessica y Charles).",ko:"(자유 작문) 자신의 장단점과, 상상 속 하루를 써 보세요.",
  items:[
   {q:"Yo creo que soy …, pero bastante …",model:"Yo creo que soy abierto, pero bastante impuntual."},
   {q:"El jefe antipático de Pierre: «Yo creo que …»",model:"Yo creo que trabaja demasiado y que no desayuna."}
  ]}
]},
{id:"2-x2",num:"2",sec:"¡extra! Práctica",title:"Veinticuatro horas en la vida de Mario",page:49,acts:[
 {type:"fill",label:"B",audio:"1-22",instr:"Escucha a Mario, que explica cómo es un día normal en su vida, y escribe la hora de cada actividad. (Cifras: 7:00, 15:00…)",ko:"마리오의 하루를 듣고 각 활동의 시각을 숫자로 쓰세요. 12시간제/24시간제 모두 인정됩니다. (예: 7:00, 3:00 또는 15:00)",
  items:[
   {t:"Desayuna a las ___",a:[tm(7,0)]},
   {t:"Lleva a su hijo al colegio a las ___",a:[tm(8,0)]},
   {t:"Llega al trabajo a las ___",a:[tm(8,30)]},
   {t:"Toma un café a las ___ (once menos diez)",a:[tm(10,50)]},
   {t:"Come a las ___ (tres)",a:[tm(15,0).concat(tm(15,30))]},
   {t:"Sale del trabajo a las ___ (cinco y cuarto o seis menos cuarto)",a:[tm(17,15).concat(tm(17,45))]},
   {t:"Lleva a su hijo a clase de inglés a las ___ (siete menos veinte)",a:[tm(18,40)]},
   {t:"Llega a casa a las ___ (ocho y veinte)",a:[tm(20,20)]},
   {t:"Cena con su mujer y su hijo a las ___",a:[tm(21,30)]},
   {t:"Ve la televisión a las ___ (sobre las diez)",a:[tm(22,0)]},
   {t:"Lee a las ___ (once)",a:[tm(23,0)]}
  ]}
]},
{id:"2-x3",num:"3",sec:"¡extra! En comunicación",title:"El informe secreto",page:50,acts:[
 {type:"open",instr:"Elige a uno de tus compañeros y pregúntale todo lo que quieras. Después escribe un pequeño informe con todos los datos, incluyendo opiniones sobre su carácter.",ko:"(말하기·작문) 짝에게 질문하고 짧은 보고서를 써 보세요. 예: ¿A qué hora lees el periódico? ¿Cómo tomas el café?",
  items:[{q:"Informe:",model:"Creo que Maggie no es muy romántica porque no ve películas de amor, y es divertida porque baila muy bien y canta mucho en karaokes."}]}
]},
{id:"2-x4",num:"4",sec:"¡extra! En comunicación",title:"¿Es tu diario?",page:51,acts:[
 {type:"open",instr:"Elige a una de las personas de la ficha (tu profesor, un compañero, un amigo, un personaje famoso) y escribe su diario para explicar qué hace a cada hora. Utiliza la imaginación.",ko:"(자유 작문) 한 사람을 골라 상상으로 하루 일과를 써 보세요. 예: Pienso que … a las nueve y media …",
  items:[{q:"Pienso que mi profesor … a las nueve y media …",model:"Pienso que mi profesor desayuna a las siete y trabaja a las nueve y media. A las dos come en casa."}]}
]}
]};
})();
