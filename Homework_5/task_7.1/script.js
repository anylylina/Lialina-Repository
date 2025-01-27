function createSum() {
  let totalSum = 0;
  return function (num) {
    totalSum += num;
    return totalSum;
  };
}

const sum = createSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
