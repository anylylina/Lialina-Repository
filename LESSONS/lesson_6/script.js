// meeting("19:00"); // hoisting (виклик функции до іі обявлення)

// //declaration
// function meeting(time) {
//   console.log(`Зустрінемось о ${time}.`);
// }

//expression

// const meeting = function (time) { //обьявлення перемінноіі і присвоєння йому функціі
//   console.log(`Зустрінемось о ${time}.`);
// };
// meeting("19:00");

//різниця між цими двума (у декларейшн доступ завдяки підняттю (hoisting) а ехпрешн ише після створення)

//базовий синтаксис виклику функции

// function sayHello(name) {
//   console.log(`Привіт, ${name}!`);
// }

// sayHello("Олег"); //повернення значення функціі далі(функция лише виконує якусь дію але вона нам нічого не повертає)
// function calulateArea(width, height) {
//   return width * height;
// }

// let area = calulateArea(5, 10);
// console.log(area); //функція щось приймає , робить кусь дію а потім іі повертає

// function userLogin() {
//   let user = "Anna";
//   console.log(`Користувач ${user} увійшов`);
// }
// userLogin();
// console.log(user);

//псевдомассив arguments

// function sumAll() {
//   let sum = 0;

//   for (let value of arguments) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(sumAll(1, 2, 3, 4));

// спред оператор

// const fruits = ["яблуко", "банан"];
// const berries = ["полуниця", "чорниця"];

// // const allFruits = fruits.concat(berries);
// const allFruits = [...fruits, ...berries];

// console.log(allFruits);

// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];

// copiedArray.push(4);
// console.log("originalArray", originalArray);
// console.log("copiedArray", copiedArray);

// const obj = {
//   name: "Alex",
//   age: 30,
// };

// const obj2 = {
//   ...obj,
// };

// obj2.age = 20;
// console.log(obj);
// console.log(obj2);

// function makePizza(base, souce, ...toppings) {
//   console.log(`Основа: ${base}`);
//   console.log(`соус: ${souce}`);
//   console.log(
//     `Додатки: ${toppings.length > 0 ? toppings.join(", ") : "Без додатків"}`
//   );

//   return `Ваша піцца готова!`;
// }

// makePizza("тонке тісто", "томатний", "сир", "перець");

// const calculate = function (a, b, operator) {
//   if (operator === "+") return a + b;
//   if (operator === "-") return a - b;
//   if (operator === "*") return a * b;
//   if (operator === "/") return a / b;
//   return "Невідомий оператор";
// };

// console.log(calculate(4, 6, "+"));
// console.log(calculate(4, 6, "-"));
// console.log(calculate(4, 6, "*"));
// console.log(calculate(4, 6, "/")); //фунція expresion

// const numbers = [1, 2, 3, 4, 5];

// // function squeredNumbers(num) {
// //   return num ** 2;
// // } // приклад

// const squeredNumbers = numbers.map(function (num) {
//   return num ** 2;
// });

// console.log(squeredNumbers);

//стрілкова функція
// const numbers = [1, 2, 3, 4, 5];

// const squeredNumbers = numbers.map((num) => num ** 2);

// console.log(squeredNumbers);

//_____________________________________________

//Анонімні функціі

// setTimeout(function () {
//   console.log("Ця функція викликаєтся через 2 секунди");
// }, 3000);

//стрілкова функція
// const calculateDiscount = (price, discount) => {
//   return price - (price * discount) / 100;
// };

// console.log(calculateDiscount(100, 20));

// const arrowFunction = (...args) => { //рест оператой який розгортає всі параметри які приходять у цю функцію
//   console.log(args);
// };

// console.log(arrowFunction(1, 2, 3));

//у випадку стрілочноі функця стілка відіграє роль ретюрн

// const hasComa = charsToRemoveInput.includes(",");

const year = 2025;
2025;
