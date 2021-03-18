const container = document.querySelector(".container");
const button = document.querySelector(".button-add");

button.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");
  container.append(box);
});
