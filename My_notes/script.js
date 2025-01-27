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

console.log(applyOperation(12, 3, add));
console.log(applyOperation(12, 3, multiply));
console.log(applyOperation(12, 3, subtract));
