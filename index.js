const d = document;
const cardIndex = [
  {
    img: "./img/colita_cuadril.webp",
    h2: "Piezas enteras",
  },
  {
    img: "./img/bife_ancho.webp",
    h2: "Cortes sin hueso",
  },
  {
    img: "./img/chinchu.webp",
    h2: "Achuras",
  },
  {
    img: "./img/provo1.webp",
    h2: "Queso para parrilla",
  },
  {
    img: "./img/salchicha.webp",
    h2: "Salchicha parrillera",
  },
  {
    img: "./img/tomahowk.webp",
    h2: "Ojo de bife con hueso",
  },
];

const navSlide = (panelBtn, panel) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn}`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
  });
};

d.addEventListener("DOMContentLoaded", (e) => {
  navSlide(".btn-panel", ".panel");
});

function renderizarCards() {
  const $CARD_CONTAINER = d.querySelector(".card-container");
  cardIndex.forEach((card) => {
    let $link = d.createElement("a");
    let $card = d.createElement("div");
    let $img = d.createElement("img");
    let $cardText = d.createElement("div");
    let $h2 = d.createElement("h2");

    $link.classList.add("card");
    $cardText.classList.add("card-text");
    $img.src = card.img;
    $h2.textContent = card.h2;
    $link.href = "./pages/productos.html";

    console.log($link);

    $card.appendChild($img);
    $card.appendChild($cardText);
    $cardText.appendChild($h2);
    $link.appendChild($card);
    $CARD_CONTAINER.appendChild($link);
  });
}

renderizarCards();
