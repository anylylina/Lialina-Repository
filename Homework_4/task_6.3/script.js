function removeElements(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

const array = [1, 3, 4, 6, 2, 5, 7];
removeElements(array, 4);

console.log(array);
