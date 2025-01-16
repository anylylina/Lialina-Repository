const N = parseInt(prompt("Введіть ціле число N:"));

if (isNaN(N) || N <= 0) {
  console.log("Введіь дійсне число, більше 0");
} else {
  console.log(`Всі цілі числа, квадрат яких не перевищує ${N}:`);
}

for (let i = 1; i <= 100; i++) {
  const square = i * i;
  if (square <= N) {
    console.log(`Число: ${i}, його квадрат: ${square}`);
  }
}
