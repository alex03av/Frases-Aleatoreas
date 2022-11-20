let frases = document.querySelector("#text");
let autor = document.querySelector("#author");
let boton = document.querySelector("#new-quote");
let colorFondo = document.querySelector(".cuerpo");
let contenedor = document.querySelector(".bckg");
let redes = document.querySelector(".redes");
let twitter = document.getElementById("tweet-quote");
let tmbler = document.getElementById("tmbler");

const list = {
  frases: [
    [
      "Si es bueno vivir, todavía es mejor soñar, y lo mejor de todo, despertar.",
      "Antonio Machado",
    ],
    [
      "La mayor declaración de amor es la que no se hace, el hombre que siente mucho, habla poco.",
      "Platón",
    ],
    [
      " Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida.",
      "Lao Tsé",
    ],
    [
      "Vale más actuar exponiéndose a arrepentirse de ello, que arrepentirse de no haber hecho nada.",
      "Giovanni Boccaccio",
    ],
    [
      "Ningún hombre es lo bastante bueno para gobernar a otros sin su consentimiento.",
      "Abraham Lincoln",
    ],
    [
      " Todo lo que se come sin necesidad se roba al estómago de los pobres. ",
      "Mahatma Gandhi",
    ],
    [
      "Vivir sola es como estar en una fiesta donde nadie te hace caso.",
      "Marilyn Monroe",
    ],
    [
      "El humano es el carruaje; el yo, el hombre que lo conduce, el pensamiento son las riendas, y los sentimientos, los caballos.",
      "Platón",
    ],
    [
      "Estar preparado es importante, saber esperarlo es aún más, pero aprovechar el momento adecuado es la clave de la vida.",
      "Arthur Schnitzler",
    ],
    [
      "No estoy tan enamorado de mis propias opiniones que ignore lo que los demás puedan pensar acerca de ellas ",
      "Copérnico.",
    ],
    [
      "El sabio no dice nunca todo lo que piensa, pero siempre piensa todo lo que dice Con los años, uno aprende cómo debe comportarse con los demás.",
      "Aristóteles",
    ],
    [
      " Hay dos cosas que son infinitas: el universo y la estupidez humana, de la primera no estoy muy seguro.",
      "Albert Einstein",
    ],
    [
      "El nacimiento y la muerte no son dos estados distintos, sino dos aspectos del mismo estado Una gran reflexión de este gran personaje.",
      "Mahatma Gandhi)",
    ],
    [
      " Lo peor que hacen los malos es obligarnos a dudar de los buenos Siempre es mejor ser honrado aunque a veces podamos creer lo contrario.",
      "Jacinto Benavente",
    ],
    ["No hay caminos para la paz, la paz es el camino.", "Mahatma Gandhi"],
    [" Haz el amor y no la guerra.", "John Lennon"],
    [
      "Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse.",
      "",
    ],
    ["Aprende a vivir y sabrás morir bien.", "Confucio"],
    [
      "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad Siempre habrá gente mala, pero no podemos dejar que triunfen.",
      "Albert Einstein",
    ],
    [
      "No estoy tan enamorado de mis propias opiniones que ignore lo que los demás puedan pensar acerca de ellas.",
      "Copérnico",
    ],
    [
      "Vale más actuar exponiéndose a arrepentirse de ello, que arrepentirse de no haber hecho nada, De lo único que podemos arrepentirnos es de no haber hecho algo que deseábamos hacer.",
      "Giovanni Boccaccio",
    ],
    [
      "Lo que importa verdaderamente en la vida no son los objetivos que nos marcamos, sino los caminos que seguimos para lograrlo.",
      "Peter Bamm",
    ],
    [
      "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera. ",
      "Albert Einstein",
    ],
  ],
};

const clases = {
  estilos: [
    ["colorFondo1", "cartel1"],

    ["colorFondo3", "cartel3"],
    ["colorFondo4", "cartel4"],
    ["colorFondo5", "cartel5"],
    ["colorFondo6", "cartel6"],
    ["colorFondo7", "cartel7"],
    ["colorFondo8", "cartel8"],
    ["colorFondo9", "cartel9"],
    ["colorFondo10", "cartel10"],
    ["colorFondo11", "cartel11"],
    ["colorFondo12", "cartel12"],
    ["colorFondo13", "cartel13"],
    ["colorFondo14", "cartel14"],
    ["colorFondo15", "cartel15"],
    ["colorFondo16", "cartel16"],
    ["colorFondo17", "cartel17"],
    ["colorFondo18", "cartel18"],
    ["colorFondo19", "cartel19"],
    ["colorFondo20", "cartel20"],
    ["colorFondo21", "cartel21"],
    ["colorFondo22", "cartel22"],
    ["colorFondo23", "cartel23"],
    ["colorFondo24", "cartel24"],
    ["colorFondo25", "cartel25"],
  ],
};

let min = clases.estilos.length; //cantidad de colores
let max = list.frases.length; //cantidad de frases
let contador = Math.floor(Math.random() * max);

boton.addEventListener("click", () => {
  let contadorDos = Math.floor(Math.random() * max);
  fraseALetoria(contadorDos);
});

fraseALetoria = (valor) => {
  let reflexion = list.frases[valor][0];
  let tributo = list.frases[valor][1];
  frases.innerHTML = reflexion;
  autor.innerHTML = tributo;

  publicar(reflexion, tributo);
  publicart(reflexion, tributo);
};

boton.addEventListener(
  "click",
  (colorAleatorio = (n) => {
    n = Math.floor(Math.random() * min);
    let fondo = clases.estilos[n][0];
    let cartel = clases.estilos[n][1];
    colorFondo.className = "";
    colorFondo.classList.add(fondo);
    contenedor.className = "";
    contenedor.classList.add(cartel);
    boton.className = "";
    boton.classList.add(fondo);
  })
);

publicar = (pensamiento, autor) => {
  autor2 = " Autor: " + autor;
  let enlaces = "https://twitter.com/intent/tweet?text=";
  let twitt = enlaces.concat(encodeURIComponent(pensamiento));
  let twiteando = twitt.concat(encodeURIComponent(autor2));
  console.log(twiteando);
  twitter.setAttribute("href", twiteando);
};

publicart = (pensamiento, autor) => {
  autor = "Auntor: " + autor;
  let enlaces =
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes";
  let finalEnlace =
    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
  let tableando = enlaces.concat(encodeURIComponent(pensamiento));
  let publicando = tableando.concat(encodeURIComponent(autor));

  publicando += finalEnlace;
  tmbler.setAttribute("href", publicando);
};

fraseALetoria(contador);
colorAleatorio();
