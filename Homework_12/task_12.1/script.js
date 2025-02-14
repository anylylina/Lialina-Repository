let userLink = "";

const btnPrompt = document.getElementById("btn-prompt");
const btnLink = document.getElementById("btn-link");

btnPrompt.addEventListener("click", setLink);
btnLink.addEventListener("click", goToLink);

function setLink() {
  let inputLink = prompt("Введіть посилання (URL):");

  if (inputLink && isValidURL(inputLink)) {
    userLink = inputLink;
    alert("Посилання збережене!");
  } else {
    alert("Посилання некороктне! Спробуйте ще раз.");
  }
}

function goToLink() {
  if (userLink) {
    window.location.href = userLink;
  } else {
    alert("Спочатку введіть посилання!");
  }
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}
