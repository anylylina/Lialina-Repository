function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

console.log(applyOperation(12, 3, (x, y) => x + y));
console.log(
  applyOperation(1, 3, (x, y) => {
    return x * y;
  })
);
console.log(applyOperation(12, 3, subtract));

//________________________________________________

// function counter() {
//   let count = 0;
//   return function () {
//     count = count + 1;
//     return count;
//   };
// }

// const sum = counter();

// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());
