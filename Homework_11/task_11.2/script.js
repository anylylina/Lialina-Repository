const textElement = document.getElementById("text");
const button = document.getElementById("color-toggle-btn");

let isColored = false;

button.addEventListener("click", function () {
  if (isColored) {
    textElement.style.color = "black";
  } else {
    textElement.style.color = "red";
  }

  isColored = !isColored;
});
