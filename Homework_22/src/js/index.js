import "../styles/style.scss";
import "../images/image1.jpg";
import { formatMessage } from "../js/format";

const app = document.createElement("div");
app.className = "app";

const title = document.createElement("h2");
title.textContent = formatMessage("Welcome!");

app.appendChild(title);

const button = document.createElement("button");
button.textContent = "Click here⬇️";

app.appendChild(button);

document.body.appendChild(app);

button.addEventListener("click", () => {
  console.log("Кнопка була натиснута!");
});

console.log("Сторінка завантажена");
