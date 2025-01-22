const inputString = prompt("Введіть рядок:");

const charsToRemoveInput = prompt("Введіть символи для видалення без пробілів");

const charsToRemove = charsToRemoveInput.split("");

function removeChar(str, charsToRemove) {
  const pattern = new RegExp(`[${charsToRemove.join("")}]`, "g");
  return str.replace(pattern, "");
}

const result = removeChar(inputString, charsToRemove);
console.log("Результат:", result);
alert(`Результат: ${result}`);
