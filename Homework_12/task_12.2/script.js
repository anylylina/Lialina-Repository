const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    alert(`Ви натиснули: ${event.target.textContent}`);
  }
});
