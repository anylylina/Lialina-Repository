function processArray(array, callback) {
  for (let element of array) {
    const result = callback(element);

    console.log(result);
  }
}

processArray([1, 2, 3, 4], (num) => num * 2);
processArray(["hello", "world"], (str) => str.toUpperCase());
processArray([1, 2, 3, 4], (num) => (num % 2 === 0 ? "Чётное" : "Нечётное"));
processArray([5, 10, 15], (num) => `Число: ${num}`);
