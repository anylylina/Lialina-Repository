function calcAverage(array) {
  const numerElements = array.filter((item) => typeof item === "number");
  return numerElements.length === 0
    ? 0
    : numerElements.reduce((sum, num) => sum + num, 0) / numerElements.length;
}

const userInput = prompt(
  "Введіть елементи через кому (Наприклад: 10, hello, 20, world, 30):"
);

const inputArray = userInput.split(",").map((item) => {
  const trimmedItem = item.trim();
  return isNaN(trimmedItem) ? trimmedItem : Number(trimmedItem);
});
const result = calcAverage(inputArray);

alert(`Середнє арифметичне числових елементів: ${result}`);
