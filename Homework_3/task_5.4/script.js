const num = parseInt(prompt("Введіть ціле число!"));

if (num > 1) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime ? `Число ${num} є простим` : `Число ${num} не є простим`);
} else {
  console.log("Число повинно бути більше одного, щоб бути простим.");
}
