// // console.log("Hello main page");

// // //перемінні та let and const
// // // let and const окремі варіанти обявлення змінних

// // let name = "John";
// // let age = 25;
// // age = 30;
// // console.log(age); //let переписує значення

// var firstName = "John"; //застарілий спосіб обявлення перемінних
// //переписує значеня навіть якщо перемінна обявленна в іншій папці дуже небезпечно

// // const city = "New York";
// // city = "los-angeles"; //const значення яке не можна змінити

// //Типи данних

// //number
// let number = 42; //
// //string
// let greeting = "Hello, world"; // будь яка строка
// //boolean
// let isActive = true; // значення логічне true or false
// //null - спеціальне значення що вказує на відсутність значення
// let emptyValue = null; //
// console.log(emptyValue);
// //indefined - значення, що вказує на те, що змінна оголошена , але не має значення
// let notAssigned;
// console.log(notAssigned);
// //object
// let person = { name: "Alice", age: 25 }; //характеризує собою набір (ключ та значення name ключ alice значення )
// //symbol - унікальні та незмінні значення які використовуются як ідентифікатори
// let sym = Symbol("unique");
// console.log("unique", sym); // Symbol(unique) використовуется для надання якихось унікальних значень

// const number = { roundedNumber: 7.6 };

// Math.round(7.6, 1);

// Math.round = roundedNumber;

// console.log(roundedNumber);

// const greet = "Hello, world!";

// const characterCount = greet.length;

// console.log(characterCount);

//LESSON 5 Арифметичні оператори - оператори додавання віднімання множення та ділення

//додає два значення

// const sum = 5 + 3;
// console.log("sum", sum);

// //віднімає друге значення від першого

// const difference = 10 - 6;
// console.log("difference", difference);

// // множить два числа
// let product = 4 * 7;
// console.log("product", product);

// //ділить перше занчення на друге
// const quotient = 20 / 4;
// console.log("quotient", quotient);

// //збільшує значення змінної на 1

// let increment = 5;
// increment++; //або
// increment = increment + 1;
// console.log("increment", increment);

// //зменушує значення змінної на 1

// let decrement = 5;
// decrement--;
// console.log("decrement", decrement);

// //Оператори порівняння

// // Оператори порівняння використовуются для порівняння значень
// //Не строга рівість (==), чи є два значення рівними (без первірки типу)

// 5 == "5"; //true

// // - Строга рівність (===): Перевіряє чи є два значення ріввними з перевірокою типу
// 5 === "5"; //false

// //Нерівність (!==) перевіряє чи не є два значення рівними (без перевірки типу)

// 5 != "5"; //false

// //Строга нерівність (!===) перевіряє чи не є два оператори рівними (з перевіркою типу)

// 5 !== "5"; //true

// //Більше (>) Перевіряє чи є перше значення бульше за друге
// 10 > 5; //true

// // Менше (<) перевіряє чи є перше занчення менще за дурге

// 5 < 10; // true

// // Більше або дорівнює (>=) перевіряє чи є перше значення більше або дорівнюж другому

// 10 >= 10; //true

// //Менше або дорівнює (<=) перевіряє чи є перша значення менше або дорівнюж другому

// 5 <= 10; //true

// //___________________Логічні оператори______________________

// // Логічні оператори використовуются з булевими значеннями (true oe false)

// // - I (&&) - Перевіряє чи є обидва значення істинними

// true && false; //false

// // - АБО - (||) - Перевіряє чи є принаймні одне значення істинним

// true || false; //true
// //_____________________________________________

// let isMember = true;
// let isPremium = false;

// if (isMember && isPremium) {
//   console.log("Преміум член");
// } else {
//   console.log("Стандартний член");
// }

// let a = 5;
// let b = 10;
// let c = 15;

// const isLess = a && b && c;
// const isEqual = a || b || c;

// console.log(isLess);
// console.log(isEqual);

//_________________Керуючі констрцкціі______________________________--

// if (умова) {
//   //код виконуєтся коли умова істина
// } else if (інша_умова) {
//   //код виконуєтся коли інща умова істина
// } else {
//   //код виконуєтья якщо жодна умова не істинна
// }

//___________________----___

// const age = 20;

// if (age < 18) {
//   console.log("Ви занадто молоді для цього сайту");
// } else if (age >= 18 && age <= 65) {
//   console.log("Ласкаво просимо на сайт!");
// } else {
//   console.log("Ви досягли пенсійного віку");
// }
//_______________________________________________--

//switch case

// switch (вираження) {
//   case значення1:
//     //код якщо вираження === значення1
//     break;
//   case значення2:
//     //код якщо вираження === значення2
//     break;
//   default:
//   //код якщо жодне значення не співпало
// }

// const fruit = "banana";

// switch (fruit) {
//   case "banana":
//     console.log("Banan cost 1$");
//     break;
//   case "apple":
//     console.log("apple cost 2$");
//     break;
//   case "grape":
//     console.log("grape cost 3$");
//     break;
//   default:
//     console.log("Empty");
// }

//________________Цикли_-_________________________

// for (початок; умова; крок) {
//   //код що виконуєтся на кожній ітераціі
// }
// for (let i = 0; i <= 5; i++) {
//   console.log("Ітерація номер: " + i);
// }
//_______________________________________________
// let count = 0;

// while (count <= 10) {
//   console.log("Лічильник: " + count);
//   count++;
// }
//_______________________________________________
// let count = 6;

// do {
//   console.log("Лічильник: " + count);
//   count++;
// } while (count < 5);

// function checkAgeCategory(age) {
//   if (age < 13) {
//     console.log("Дитина");
//   } else if (age >= 13 && age <= 19) {
//     console.log("Підліток");
//   } else if (age >= 20 && age <= 59) {
//     console.log("Дорослий");
//   } else if (age >= 60) {
//     console.log("Пенсіонер");
//   }
// }
// console.log(checkAgeCategory(20));

//_____-----------_________________________
//Функціі в JS
// function greet() {
//   console.log("Hello World");
// }

// greet();

//параметри і аргументи які може приймати функція (передаются в круглих дужках під час оголощення функціі)

// function greet(text, name = "Anonymous") {
//   //anonymous -дефолтний параметр
//   console.log(text + " " + name);
// }

// greet("Hello world from");

//____________________________________

//Повернення знчення з функціі
// function sum(a, b = 1) {
//   return a + b;
// }
// let result = sum(5);
// console.log(result);

//_______________________________________
//Анонімні функціі - функція без імені function()-без імені, function sum() - з іменем

// let square = function (x) {
//   return x * x;
// };

// console.log(square(2));

//__________________________________________
//Стрілкові функціі

// let square = function (x) {
//   return x * x;
// };

// console.log(square(2));

// let multiply = (a) => a * a;

// console.log(multiply(5));

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));
// console.log(factorial(3));
