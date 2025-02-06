const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Оригінальний масив:", numbers);
console.log("Новий массив:", newNumbers);

//_____________________________________________

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.filter((num) => num % 2 === 0);

console.log("Оригінальний масив:", arr);
console.log("Новий массив:", newArr);
