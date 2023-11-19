const container = document.createElement("div");
const input = document.createElement("input");

function divCasting(input) {
  input.classList = "input-text";
  input.style.background = "yellow";
  input.placeholder = "Нажми на меня";

  document.body.appendChild(input);
}

divCasting(input);

input.addEventListener("focus", () => {
  document.body.appendChild(container);
  container.id = "#div";
  container.style.display = "inline-block";
  container.textContent = "Hello, my name Div :)";
  container.style.background = "green";
  container.style.marginLeft = "10px";
});

input.addEventListener("blur", () => {
  document.body.removeChild(container);
});
