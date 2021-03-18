const container = document.querySelector(".container");
const button = document.querySelector(".button-add");

button.addEventListener("click", () => {
  const box = document.createElement("div");
  box.classList.add("box");
  container.append(box);

  const colorInput = document.createElement("input");
  box.append(colorInput);

  colorInput.type = "color"; // without this the default is text input
  box.append(colorInput);

  colorInput.addEventListener("input", () => {
    box.style.backgroundColor = colorInput.value;
  });
});
