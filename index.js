// Edit these entries to change each node's text or image. Use image: null for a text-only card.
const stories = [
  {
    title: "Desde los inicios...",
    description:
      "de aquellas conversaciones que teníamos por las noches, aquellas noches mágicas de aquel bonito viaje a Guerrero :'333",
    image: "../assets/images/img_01.jpeg",
  },
  {
    title: "Hasta aquel terrible día...",
    description:
      "dónde estuvimos tan cerca pero a la vez tan lejos de encontrarnos en personita por primera vez:'",
    image: "../assets/images/img_02.jpeg",
  },
  {
    title: "Desde las primeras fotitos...",
    description:
      "que me enviabas y que, junto a tu taaaaaaaaaan bella y hermosa forma de ser, me hacían enamorarme cada vez más y más de ti ><",
    image: "../assets/images/img_03.jpeg",
  },
  {
    title: "Y las primeras llamaditas...",
    description:
      "donde empezamos a pasar cada vez más y más tiempo juntos, día con día, llamada con llamada, risa con risa, tantas alegrías cielito:'3",
    image: "../assets/images/img_04.jpeg",
  },
  {
    title: "Todas y cada una de ellas...",
    description:
      "son tan valiosas para mí, desde las primeras hasta las últimas porque, son este tipo de recuerdos los que me hacen tener taaaaaaaaaaan presente que, es posible a pesar de la distancia, porque, pasar tiempo no es una cuestión meramente física, de estar cerquita presencialmente, porque, cada llamadita me recuerda que también se puede estar cerca desde la distancia:'",
    image: "../assets/images/img_05.jpeg",
  },
  {
    title: "Porque es de esta forma...",
    description:
      "que más hemos podido compartir nuestro tiempo juntos, es de esta forma que realmente nos hemos acercado más cada día, a través de las llamadas, de los mensajes, de pasar el tiempo haciendo lo que nos gusta de manera virtual, a la distancia, pero, sin estar lejos, es irónico, no? Jsjsjsjs:'3, estamos cerca gracias a que encontramos la forma de hacer cosas juntos sin estar presencialmente",
    image: "../assets/images/img_06.jpeg",
  },
  {
    title: "A pesar de que logramos...",
    description:
      "hacer que la distancia no fuera un impedimento, de que logramos dejar a un lado el 'cuándo nos veamos', de que logramos estar cerquita el uno del otro:'",
    image: "../assets/images/img_07.jpeg",
  },
  {
    title: "Y pudimos demostrarnos...",
    description:
      "ese inmenso amor y cariño que nos hemos tenido desde el inicio, que ha sido palpable desde el comienzo de nuestra relación sin necesidad de la cercanía física, de que nos pudimos demostrar cuánto nos amábamos en persona",
    image: "../assets/images/img_08.jpeg",
  },
  {
    title: "Sigue siendo algo temporal...",
    description:
      "el estar cerca en persona, porque, a pesar de que logramos romper esa barrera, no es nuestra normalidad aún, seguimos estando a distancia y seguimos estando en este barquito a pesar de las dificultades, de las barreras y de los problemas, porque juntos navegamos hacia esa realidad en que nunca más estaremos separados de nuevo, no es así mi niña:'''''''3?",
    image: "../assets/images/img_09.jpeg",
  },
  {
    title: "Hoy, mi niña...",
    description:
      "finalmente estamos a nada de volver a vernos y, de verdad que no te imaginas lo emocionado que estoy de saber que te volveré a ver en persona, de saber que una vez más dejaremos de lado esa barrera de la distancia, de saber que te volveré a sentir en mis brazos, de que volveré a tenerte cerca de mí, sentir tu calor y sentir tu inmenso cariño, ese inmenso cariño que me impulsa a seguir mejorando día con día, para ser la mejor versión de mi, para ti. \n\nHoy, en tu cumpleaños mi niña, te quiero recordar lo mucho que amo lo que hemos construido ladrillo a ladrillo con el pasar de los meses, de los añitos ya jsjsjs:'3, te quiero recordar lo mucho que te amo y lo mucho que anhelo seguir contigo hasta el final de nuestros días, hasta que este barquito llegue al puerto de la vida, y quiero que lleguemos juntos en el... \n\nTe amo, mi Azucenita preciosa, te amo como no te lo imaginas:'",
    image: null,
  },
];

const list = document.querySelector("#milestones");
const dialog = document.querySelector("#story-dialog");
const imageWrap = document.querySelector("#story-image-wrap");
const image = document.querySelector("#dialog-image");
const title = document.querySelector("#dialog-title");
const description = document.querySelector("#dialog-description");
const closeButton = dialog.querySelector(".close-button");
let previousTrigger = null;
// Each node has independent coordinates so the route can zigzag, cross the page, and turn back.
const nodePositions = [
  { x: 10, y: 1 }, //1
  { x: 82, y: 22 }, //2
  { x: 29, y: 30 }, //3
  { x: 68, y: 63 }, //4
  { x: 11, y: 35 }, //5
  { x: 8, y: 61 }, //6
  { x: 54, y: 75 }, //7
  { x: 90, y: 60 }, //8
  { x: 75, y: 85 }, //9
  { x: 50, y: 95 }, //10
];

const journeySvg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg",
);
journeySvg.classList.add("journey-path");
journeySvg.setAttribute("aria-hidden", "true");
journeySvg.setAttribute("preserveAspectRatio", "none");
const journeyLine = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path",
);
journeySvg.append(journeyLine);
list.append(journeySvg);

stories.forEach((story, index) => {
  const item = document.createElement("li");
  item.className = "milestone";
  const position = nodePositions[index % nodePositions.length];
  item.style.setProperty("--node-position", `${position.x}%`);
  item.style.setProperty("--node-y", `${position.y}%`);
  const button = document.createElement("button");
  button.className = "milestone-button";
  button.type = "button";
  button.textContent = String(index + 1).padStart(2, "0");
  button.setAttribute(
    "aria-label",
    `Abrir tarjeta ${index + 1}: ${story.title}`,
  );
  item.append(button);
  list.append(item);

  button.addEventListener("click", () => {
    previousTrigger = button;
    title.textContent = story.title;
    description.textContent = story.description;
    const hasImage = Boolean(story.image);
    imageWrap.hidden = !hasImage;
    dialog.classList.toggle("no-image", !hasImage);
    if (hasImage) {
      image.src = story.image;
      image.alt = story.imageAlt || story.title;
    } else {
      image.removeAttribute("src");
      image.alt = "";
    }
    dialog.showModal();
    closeButton.focus();
  });
});

function drawJourney() {
  const bounds = list.getBoundingClientRect();
  const width = list.clientWidth;
  const height = list.clientHeight;
  journeySvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  journeySvg.setAttribute("width", width);
  journeySvg.setAttribute("height", height);

  const points = [...list.querySelectorAll(".milestone-button")].map((node) => {
    const rect = node.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - bounds.left,
      y: rect.top + rect.height / 2 - bounds.top,
    };
  });

  const path = points.slice(1).reduce(
    (result, point, index) => {
      const previous = points[index];
      const direction = index % 2 === 0 ? 1 : -1;
      const bend = Math.min(92, width * 0.34) * direction;
      const deltaY = point.y - previous.y;
      return `${result} C ${previous.x + bend} ${previous.y + deltaY / 3}, ${point.x + bend} ${point.y - deltaY / 3}, ${point.x} ${point.y}`;
    },
    points.length ? `M ${points[0].x} ${points[0].y}` : "",
  );

  journeyLine.setAttribute("d", path);
}

drawJourney();
window.addEventListener("resize", drawJourney);
if ("ResizeObserver" in window) {
  new ResizeObserver(drawJourney).observe(list);
}
document.fonts?.ready.then(drawJourney);

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => previousTrigger?.focus());
