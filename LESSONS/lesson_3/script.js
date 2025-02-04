// let year = 2025;
// let sum = 2 + 5;
// console.log(year);
// console.log(sum);

// const year = 2025;
// console.log(2025);

// year = 2024;
// console.log(year); //error

// if (1 + 2 === 3) {
//   var year = 2021;
// }
// console.log(year);

// // hoisting;
// console.log(age);
// var age = 30;
// console.log(age);

// let fruit = "apple";
// var fruit = "apple2";

// const number = 5; //number
// console.log(typeof digit);

// const stroke = "happy new year"; //string
// console.log(typeof stroke);

// const nulish = null;
// console.log(typeof nulish);

// const bool = true; //boolean
// console.log(typeof bool);

// const undef = undefined; //undefined
// console.log(typeof undef);

// // const bigInteger = console.log(typeof); //bigint

// const symb = Symbol("uniqID"); //Symbol
// console.log(typeof symb);

// //not premetive

// const obj = {
//   name: "Paul",
//   year: 2024,
// };

// console.log(obj.name);

// const array = ["apple", "banana", "grape"];
// console.log(array);

// function gretting() {
//   return "hello";
// } //function
// console.log(typeof gretting);

// const fruit = "banana";
// const truit2 = fruit;

// console.log(truit2);

// const obj = {
//   name: "Paul",
//   year: 2024,
//   array: [],
// }; //object

// const obj2 = obj; //NOT REAL COPY

// obj2.name = "Andrew";

// console.log("obj", obj);
// console.log("obj2", obj2);

// const car = {
//   color: "red",
//   model: "Tesla",

//   drive: function () {
//     console.log("The car is driving");
//   },
// };

// car.drive();

// const fruit = ["apple", "banana"];
// fruit.push("cherry");
// console.log(fruit);

// const num = 30;
// console.log(num);

// const stringNum = num.toString();
// console.log(stringNum);

//binary

// const sum = 3 + 5;

// //return number from string

// const str = "42";
// Number(str) + //42
//   str; //42

// const num = 10 - 10; //10

// const isiOnline = true;
// !isiOnline; //false

// const gretting = "hello";
// console.log(!!gretting);

// let a = 5;
// let b = ++a; //6

// console.log(a);
// console.log(b);

// let number = 42;
// let string = "The answer is " + number;
// console.log(string);

// if (number == "42") {
//   console.log("same");
// }

// //

// let value = null;
// if (value) {
//   console.log("Happy");
// }

// let x = 5;
// let y = 10;
// console.log(y > x);

// console.log(x >= y);

// const personObj = {
//   name: "Andrew",
// };
// console.log("name" in personObj);

// const age = 25;
// const friendAge = 30;

// if (age < friendAge) {
//   console.log("i am older");
// }

// const scores = [10, 8, 5, 6, 9];
// const goodScores = scores.filter((scrore) => scrore > 8);

// console.log(goodScores);

const name = "Олексій";
const age = 30;
// const message = "Привіт мене звати " + name + ", і мені " + age + " років.";

// Шаблонні строки

const message = `привіт мене звати ${name}, і мені ${age} років`;
console.log(message);

const verse = `
Реве та стогне дніпр широкий,
сердитий вітер завива.
Додолу верби гне високі.
Горами хвилі підійма`;
console.log(verse);
