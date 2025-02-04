// //рекурсія
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1; // базовый выпадок
//   }

//   return n * factorial(n - 1); //рекрусивный крок
// }

// console.log(factorial(5));

// const getFActorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1; // базовий випадок
//   }

//   return n * getFActorial(n - 1); // рекрусивний крок
// };

//знаходження суммы елементів массиву

// const expenses = [1200, 800, 300, 150, 50];

// function sumArray(arr) {
//   if (arr.length === 0) {
//     return 0; //базовий випадок
//   }
//   return arr[0] + sumArray(arr.slice(1)); //рекрусивний крок
// }

// console.log(sumArray(expenses));

const fileSystem = {
  name: "root",
  files: ["files.txt", "fole2.txt"],
  folders: [
    {
      name: "folder1",
      files: ["files3.txt"],
      folders: [],
    },
    {
      name: "folder2",
      files: [],
      folders: [
        {
          name: "subfolder1",
          files: ["files4.txt"],
          folders: [],
        },
      ],
    },
  ],
};

function getAllFiles(folder) {
  let allFiles = [...folder.files];

  for (const subfolder of folder.folders) {
    //базовий випадок
    allFiles = [...allFiles, ...getAllFiles(subfolder)]; // рекрусивний випадок
  }
  return allFiles;
}
console.log(getAllFiles(fileSystem));
