let button = document.querySelector(".button-add");
let container = document.querySelector(".container");

const elementsToRender = [
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
];

button.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    const item = document.createElement("div");
    item.classList.add(elementsToRender[i].className);
    item.style.backgroundColor = elementsToRender[i].backgroundColor;
    container.append(item);
  }
});
