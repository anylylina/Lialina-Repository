let numberStr = prompt("Введіть трьохзначне число");

if (numberStr.length !== 3) {
  console.log("Введіть трьозначне число");
}

const a = Number(numberStr[0]);
const b = Number(numberStr[1]);
const c = Number(numberStr[2]);

if (a === b && b === c) {
  console.log("Усі цифри однакові");
} else if (a === b || a === c || b === c) {
  console.log("Є дві однакові цифри");
} else {
  console.log("Не має однакових цифр");
}
