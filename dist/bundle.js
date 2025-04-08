(() => {
  "use strict";
  const e = document.createElement("div");
  e.className = "app";
  const t = document.createElement("h2");
  (t.textContent = ` ${"Welcome!".toUpperCase()} `), e.appendChild(t);
  const n = document.createElement("button");
  (n.textContent = "Click here⬇️"),
    e.appendChild(n),
    document.body.appendChild(e),
    n.addEventListener("click", () => {
      console.log("Кнопка була натиснута!");
    }),
    console.log("Сторінка завантажена");
})();
