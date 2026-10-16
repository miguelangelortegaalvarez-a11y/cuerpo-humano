// «Pizza Friday!» — primer cuento en inglés (16-oct-2026). PRIVADO: dibujos de la familia de verdad, fuera de git.
// Posiciones en % de la escena. Personajes: x,y = los pies. Pizza: x,y = el centro. Zonas: x,y = esquina de arriba a la izquierda.
// Voces: voz/<página>-<paso>.en.m4a (Lily, ElevenLabs, velocidad 0,9) y .es.m4a (Sara); palabras sueltas: voz/palabra-<palabra>.en.m4a
window.CUENTO = {
  titulo: 'Pizza Friday!',
  voz: true,
  fondos: { salon: 'fondos/salon.jpg', cocina: 'fondos/cocina.jpg', horno: 'fondos/horno.jpg' },
  // [imagen, escala respecto a la postura de pie, cuánto sube del suelo]
  dibujos: {
    'papa-de-pie': ['personajes/papa-de-pie.webp', 1],
    'papa-sentado': ['personajes/papa-sentado.webp', 0.96],
    'mama-de-pie': ['personajes/mama-de-pie.webp', 1],
    'mama-sentada': ['personajes/mama-sentada.webp', 0.95],
    'mario-de-pie': ['personajes/mario-de-pie.webp', 1],
    'mario-salta': ['personajes/mario-salta.webp', 0.96, 5],
    'mario-sentado': ['personajes/mario-sentado.webp', 0.93],
    'kenzo-contento': ['personajes/kenzo-contento.webp', 1],
    'kenzo-pena': ['personajes/kenzo-pena.webp', 1],
    'kenzo-dormido': ['personajes/kenzo-dormido.webp', 0.48],
  },
  // h = alto de pie (% de la escena) y la palabra que sale al tocarlos [inglés, español]
  personajes: {
    papa: { h: 72, palabra: ['Daddy', 'Papá'] },
    mama: { h: 69, palabra: ['Mummy', 'Mamá'] },
    mario: { h: 50, palabra: ['Me!', '¡Yo!'] },
    kenzo: { h: 25, palabra: ['Dog', 'Perro'] },
  },
  // Palabras del texto en inglés: al tocarlas, Lily dice la palabra y Sara la traducción (voz/palabra-<clave>.en/.es.m4a)
  diccionario: {
    its: 'es', friday: 'viernes', pizza: 'pizza', and: 'y', movie: 'peli', day: 'día', yay: '¡bien!',
    lets: 'vamos a', make: 'hacer', a: 'un, una', pumpkin: 'calabaza', tomato: 'tomate', cheese: 'queso',
    two: 'dos', eyes: 'ojos', big: 'grande', smile: 'sonrisa', boo: '¡bu!', into: 'dentro de', the: 'el, la',
    oven: 'horno', tick: 'tic', tock: 'tac', ding: '¡ding!', yummy: '¡qué rico!', kenzo: 'Kenzo', wants: 'quiere',
    too: 'también', woof: '¡guau!', no: 'no', ha: 'ja', time: 'hora', lights: 'luces', off: 'apagadas',
    coco: 'Coco', daddy: 'papá', mummy: 'mamá', me: 'yo', i: 'yo', love: 'quiero', my: 'mi', family: 'familia',
    shhh: '¡chsss!', is: 'está', sleeping: 'durmiendo',
    where: 'dónde', dog: 'perro', tv: 'tele', yes: 'sí', well: 'bien', done: 'hecho', great: 'genial', job: 'trabajo',
    super: '¡súper!', try: 'intenta', again: 'otra vez', play: 'jugar', byebye: 'adiós',
    it: 'eso', find: 'encuentra', pairs: 'parejas', hungry: 'con hambre', an: 'un, una',
    bone: 'hueso', ball: 'pelota', apple: 'manzana', banana: 'plátano', carrot: 'zanahoria',
  },
  // Frases que comparten los juegos (audios juego-intro, juego-bien-N, juego-otra, juego-fin)
  frasesJuego: {
    menu: { di: "Let's play!", es: '¡Vamos a jugar!' },
    bien: [
      { di: 'Yes! Well done!', es: '¡Sí! ¡Muy bien!' },
      { di: 'Great job!', es: '¡Buen trabajo!' },
      { di: 'Super!', es: '¡Súper!' },
    ],
    otraVez: { di: 'Try again!', es: '¡Prueba otra vez!' },
    fin: { di: 'Yay! Well done! Bye-bye!', es: '¡Bieeen! ¡Muy bien! ¡Adiós!' },
  },
  // Lo que pide Kenzo (recortado de la hoja de objetos de Gemini: objetos/hoja-comida.jpg)
  comida: {
    bone: { img: 'objetos/hueso.webp', palabra: ['Bone', 'Hueso'] },
    ball: { img: 'objetos/pelota.webp', palabra: ['Ball', 'Pelota'] },
    apple: { img: 'objetos/manzana.webp', palabra: ['Apple', 'Manzana'] },
    banana: { img: 'objetos/platano.webp', palabra: ['Banana', 'Plátano'] },
    carrot: { img: 'objetos/zanahoria.webp', palabra: ['Carrot', 'Zanahoria'] },
  },
  // Tarjetas del mini-juego: un dibujo, una foto recortada de un fondo o la pizza
  cartas: {
    pizza: { pizza: true, palabra: ['Pizza', 'Pizza'] },
    dog: { dibujo: 'kenzo-contento', palabra: ['Dog', 'Perro'] },
    daddy: { dibujo: 'papa-de-pie', palabra: ['Daddy', 'Papá'] },
    mummy: { dibujo: 'mama-de-pie', palabra: ['Mummy', 'Mamá'] },
    oven: { foto: 'cartas/horno.jpg', palabra: ['Oven', 'Horno'] },
    tv: { foto: 'cartas/tele.jpg', palabra: ['TV', 'Tele'] },
    sofa: { foto: 'cartas/sofa.jpg', palabra: ['Sofa', 'Sofá'] },
  },
  // Cosas del fondo que dicen su nombre al tocarlas, en todas las páginas con ese fondo (x,y = esquina de arriba a la izquierda)
  zonas: {
    cocina: [
      { id: 'nevera', tipo: 'zona', x: 15, y: 19, w: 7, h: 77, palabra: ['Fridge', 'Nevera'] },
      { id: 'juguetes', tipo: 'zona', x: 37, y: 20, w: 12, h: 14, palabra: ['Toys', 'Juguetes'] },
      { id: 'ventana', tipo: 'zona', x: 69, y: 21, w: 10, h: 25, palabra: ['Window', 'Ventana'] },
      { id: 'grifo', tipo: 'zona', x: 73, y: 46, w: 5, h: 10, palabra: ['Tap', 'Grifo'] },
      { id: 'armario', tipo: 'zona', x: 37, y: 56, w: 42, h: 28, palabra: ['Cupboard', 'Armario'] },
      { id: 'suelo', tipo: 'zona', x: 15, y: 84, w: 65, h: 16, palabra: ['Floor', 'Suelo'] },
    ],
    horno: [
      { id: 'microondas', tipo: 'zona', x: 34, y: 0, w: 33, h: 17, palabra: ['Microwave', 'Microondas'] },
      { id: 'nevera', tipo: 'zona', x: 0, y: 0, w: 29, h: 100, palabra: ['Fridge', 'Nevera'] },
      { id: 'armario', tipo: 'zona', x: 72, y: 0, w: 24, h: 70, palabra: ['Cupboard', 'Armario'] },
    ],
    salon: [
      { id: 'ventana', tipo: 'zona', x: 30, y: 12, w: 35, h: 31, palabra: ['Window', 'Ventana'] },
      { id: 'ventana2', tipo: 'zona', x: 89.6, y: 19, w: 10.4, h: 24, palabra: ['Window', 'Ventana'] },
      { id: 'cortinas', tipo: 'zona', x: 89, y: 8, w: 11, h: 11, palabra: ['Curtains', 'Cortinas'] },
      { id: 'lampara', tipo: 'zona', x: 68, y: 0, w: 13, h: 15, palabra: ['Lamp', 'Lámpara'] },
      { id: 'silla', tipo: 'zona', x: 24, y: 52, w: 6.2, h: 18.5, palabra: ['Chair', 'Silla'] },
      { id: 'butaca', tipo: 'zona', x: 0, y: 66, w: 30, h: 34, palabra: ['Armchair', 'Butaca'] },
      { id: 'sofa', tipo: 'zona', x: 59, y: 48, w: 41, h: 30, palabra: ['Sofa', 'Sofá'] },
    ],
  },
  paginas: [
    { // 1 · Es viernes
      fondo: 'salon',
      actores: [
        { id: 'tele', tipo: 'zona', x: 9.5, y: 32, w: 10.5, h: 27, palabra: ['TV', 'Tele'] },
        { id: 'papa', dibujo: 'papa-de-pie', x: 35, y: 84, h: 62 },   // de pie en el suelo, delante de la estantería
        { id: 'mama', dibujo: 'mama-de-pie', x: 64, y: 84, h: 62 },   // en el suelo, entre la mesa y el sofá
        { id: 'kenzo', dibujo: 'kenzo-contento', x: 71, y: 99 },
        { id: 'mario', dibujo: 'mario-de-pie', x: 47, y: 98 },
      ],
      pasos: [
        { hace: ['pose mario mario-salta', 'bota mario'], di: "It's Friday!", es: '¡Es viernes!' },
        { hace: 'pose mario mario-de-pie', di: 'Pizza and movie day!', es: '¡Día de pizza y peli!' },
        { hace: ['pose mario mario-salta', 'bota mario', 'bota kenzo'], di: 'Yay!', es: '¡Bieeen!' },
        { hace: 'pose mario mario-de-pie' },
      ],
    },
    { // 2 · Hacemos la pizza de calabaza
      fondo: 'cocina',
      actores: [
        { id: 'papa', dibujo: 'papa-de-pie', x: 25, y: 95, h: 55 },   // dentro del arco, pisando el suelo
        { id: 'mama', dibujo: 'mama-de-pie', x: 71, y: 95, h: 53 },
        { id: 'pizza', tipo: 'pizza', x: 45, y: 73, w: 17, aplastar: 0.62, palabra: ['Pizza', 'Pizza'] },   // por encima del texto
        { id: 'mario', dibujo: 'mario-de-pie', x: 61, y: 97, h: 38 },
      ],
      pasos: [
        { di: "Let's make a pumpkin pizza!", es: '¡Vamos a hacer una pizza con cara de calabaza!' },
        { toca: 'pizza', hace: ['pon pizza tomate', 'suena pop'], di: 'Tomato!', es: '¡Tomate!' },
        { toca: 'pizza', hace: ['pon pizza queso', 'suena pop'], di: 'Cheese!', es: '¡Queso!' },
        { toca: 'pizza', hace: ['pon pizza ojos', 'suena pop'], di: 'Two eyes!', es: '¡Dos ojos!' },
        { toca: 'pizza', hace: ['pon pizza sonrisa', 'suena pop'], di: 'A big smile!', es: '¡Una sonrisa enorme!' },
        { hace: ['bota pizza', 'pose mario mario-salta', 'bota mario'], di: 'Boo!', es: '¡Buuu!' },
        { hace: 'pose mario mario-de-pie' },
      ],
    },
    { // 3 · Al horno
      fondo: 'horno',
      actores: [
        { id: 'horno', tipo: 'zona', x: 30.5, y: 23, w: 40.5, h: 67, palabra: ['Oven', 'Horno'] },
        { id: 'pizza', tipo: 'pizza', x: 50, y: 80, w: 18, aplastar: 0.62, estado: ['tomate', 'queso', 'ojos', 'sonrisa'],
          destinos: { horno: { x: 51.6, y: 60, w: 20, aplastar: 0.3 } } },
        { id: 'luzHorno', tipo: 'luz', x: 37.7, y: 46.3, w: 27.9, h: 33.7 },
        { id: 'mario', dibujo: 'mario-de-pie', x: 83, y: 104, h: 62 },
      ],
      pasos: [
        { di: 'Into the oven!', es: '¡Al horno!' },
        { toca: 'horno', hace: ['mueve pizza horno', 'enciende luzHorno'], pausa: 400 },
        { hace: 'suena tictac', di: 'Tick, tock… tick, tock…', es: 'Tic, tac… tic, tac…' },
        { hace: ['suena ding', 'destello luzHorno', 'pon pizza horneada'], di: 'Ding!', es: '¡Ding!' },
        { hace: ['pose mario mario-salta', 'bota mario'], di: 'Yummy!', es: '¡Qué rico!' },
        { hace: 'pose mario mario-de-pie' },
      ],
    },
    { // 4 · Kenzo también quiere pizza
      fondo: 'cocina',
      actores: [
        { id: 'papa', dibujo: 'papa-de-pie', x: 24, y: 95, h: 55 },   // dentro del arco, pisando el suelo
        { id: 'mama', dibujo: 'mama-de-pie', x: 72, y: 95, h: 53 },
        { id: 'pizza', tipo: 'pizza', x: 49, y: 73, w: 17, aplastar: 0.62, palabra: ['Pizza', 'Pizza'],
          estado: ['tomate', 'queso', 'ojos', 'sonrisa', 'horneada', 'humo'] },
        { id: 'kenzo', dibujo: 'kenzo-pena', x: 62, y: 97, h: 19 },
        { id: 'mario', dibujo: 'mario-de-pie', x: 34, y: 98, h: 38 },
      ],
      pasos: [
        { hace: 'bota kenzo', di: 'Kenzo wants pizza too!', es: '¡Kenzo también quiere pizza!' },
        { toca: 'kenzo', hace: ['pose kenzo kenzo-contento', 'bota kenzo'], di: 'Woof! Woof!', es: '¡Guau! ¡Guau!' },
        { hace: 'pose kenzo kenzo-pena', di: 'No, Kenzo, no!', es: '¡No, Kenzo, no!' },
        { hace: ['bota mario', 'bota papa', 'bota mama'], di: 'Ha, ha, ha!', es: '¡Ja, ja, ja!' },
      ],
    },
    { // 5 · A ver la peli
      fondo: 'salon',
      actores: [
        { id: 'tele', tipo: 'tele', esquinas: [[10.87, 34.24], [18.71, 33.98], [19.19, 51.63], [11.08, 56.64]], imagen: 'tele/coco.jpg', palabra: ['TV', 'Tele'] },   // esquinas de la pantalla: arriba-izq, arriba-der, abajo-der, abajo-izq
        { id: 'interruptor', tipo: 'interruptor', x: 25.4, y: 39, w: 3, palabra: ['Light', 'Luz'] },
        { id: 'papa', dibujo: 'papa-sentado', x: 66, y: 76, h: 46 },
        { id: 'mama', dibujo: 'mama-sentada', x: 80, y: 85, h: 43 },
        { id: 'mario', dibujo: 'mario-sentado', x: 72, y: 82, h: 33 },
        { id: 'pizza', tipo: 'pizza', x: 51, y: 70, w: 11, aplastar: 0.45, estado: ['tomate', 'queso', 'ojos', 'sonrisa', 'horneada'] },
        { id: 'kenzo', dibujo: 'kenzo-contento', x: 40, y: 97 },
      ],
      pasos: [
        { di: 'Movie time!', es: '¡Hora de la peli!' },
        { toca: 'interruptor', hace: ['apaga interruptor', 'suena clic', 'oscuro'], di: 'Lights off!', es: '¡Apagamos la luz!' },
        { hace: 'enciende tele', pausa: 500, di: "It's Coco!", es: '¡Es Coco!' },
        { hace: ['bota mario', 'bota kenzo'], di: 'Yay!', es: '¡Bieeen!' },
      ],
    },
    { // 6 · Mi familia
      fondo: 'salon',
      oscuro: true,
      actores: [
        { id: 'tele', tipo: 'tele', esquinas: [[10.87, 34.24], [18.71, 33.98], [19.19, 51.63], [11.08, 56.64]], imagen: 'tele/coco.jpg', encendida: true, palabra: ['TV', 'Tele'] },
        { id: 'interruptor', tipo: 'interruptor', x: 25.4, y: 39, w: 3, apagado: true, palabra: ['Light', 'Luz'] },
        { id: 'papa', dibujo: 'papa-sentado', x: 66, y: 76, h: 46 },
        { id: 'mama', dibujo: 'mama-sentada', x: 80, y: 85, h: 43 },
        { id: 'mario', dibujo: 'mario-sentado', x: 72, y: 82, h: 33 },
        { id: 'kenzo', dibujo: 'kenzo-dormido', x: 31, y: 85 },
      ],
      pasos: [
        { hace: 'zzz kenzo' },
        { hace: 'bota papa', di: 'Daddy…', es: 'Papá…' },
        { hace: 'bota mama', di: 'Mummy…', es: 'Mamá…' },
        { hace: 'bota kenzo', di: 'Kenzo…', es: 'Kenzo…' },
        { hace: 'bota mario', di: '…and me!', es: '…¡y yo!' },
        { di: 'I love my family!', es: '¡Quiero mucho a mi familia!' },
        { di: 'Shhh… Kenzo is sleeping.', es: 'Chsss… Kenzo está durmiendo.' },
      ],
    },
    { // 7 · Menú de juegos (también se llega desde el botón de las cartas de la portada)
      id: 'menu', fondo: 'salon', actores: [],
      menu: ['donde', 'parejas', 'kenzo'],
    },
    { // 8 · «Where is…?»: la voz pregunta y Mario toca la tarjeta buena
      id: 'donde', vuelve: 'menu', fondo: 'salon', actores: [],
      juego: {
        intro: { di: 'Where is it?', es: '¿Dónde está?' },
        rondas: [
          { carta: 'pizza', di: 'Where is the pizza?', es: '¿Dónde está la pizza?' },
          { carta: 'dog', di: 'Where is the dog?', es: '¿Dónde está el perro?' },
          { carta: 'daddy', di: 'Where is Daddy?', es: '¿Dónde está papá?' },
          { carta: 'oven', di: 'Where is the oven?', es: '¿Dónde está el horno?' },
          { carta: 'mummy', di: 'Where is Mummy?', es: '¿Dónde está mamá?' },
          { carta: 'tv', di: 'Where is the TV?', es: '¿Dónde está la tele?' },
        ],
      },
    },
    { // 9 · Parejas (memory): 4 parejas al azar de las tarjetas
      id: 'parejas', vuelve: 'menu', fondo: 'cocina', actores: [],
      parejas: { cuantas: 4, intro: { di: 'Find the pairs!', es: '¡Encuentra las parejas!' } },
    },
    { // 10 · «Kenzo is hungry!»: Kenzo pide algo y Mario se lo da
      id: 'kenzo', vuelve: 'menu', fondo: 'cocina', actores: [],
      kenzo: {
        intro: { di: 'Kenzo is hungry!', es: '¡Kenzo tiene hambre!' },
        rondas: [
          { carta: 'bone', di: 'Kenzo wants the bone!', es: '¡Kenzo quiere el hueso!' },
          { carta: 'apple', di: 'Kenzo wants an apple!', es: '¡Kenzo quiere una manzana!' },
          { carta: 'ball', di: 'Kenzo wants the ball!', es: '¡Kenzo quiere la pelota!', premio: 'guau' },
          { carta: 'carrot', di: 'Kenzo wants a carrot!', es: '¡Kenzo quiere una zanahoria!' },
          { carta: 'banana', di: 'Kenzo wants a banana!', es: '¡Kenzo quiere un plátano!' },
        ],
        rico: { di: 'Yummy!', es: '¡Qué rico!' },
        guau: { di: 'Woof! Woof!', es: '¡Guau! ¡Guau!' },
      },
    },
  ],
};
