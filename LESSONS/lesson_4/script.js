// alert("Ваш чай готовий! ");
// const isHungry = confirm("Ви голодні?");

// if (isHungry) {
//   alert("Ми замовимо Вам піццу!");
// } else {
//   alert("Ну гаразд залишимо Вас голодними");
// }

//_______________________________________________

// const userName = prompt("Як вас звати?");

// if (userName) {
//   //неявне перетворення типу (if приймає тільки тру або фолс перетворює строку в болин)
//   alert(`Радий знайомству, ${userName}!`);
// } else {
//   alert("Ну гаразд, залишимо це в таємниці. ");
// }

//_______________________________________________

// function makeCoffee() {
//   return "Кава готова!";
// }

// const coffee = makeCoffee();

// console.log(coffee);

// function greet() {
//   console.log("Привіт!");
// }

// const greeting = greet();
// console.log(greeting);

//Перемінні оператори
//___________________________________

// let number = 10;

// number++; //1 унарні операндуми(number)
// number--; //0

// let number = 5;

// number = number + 3; //8

// number += 3;
// console.log(number);

//________________________

// let number = 9;
// //скорочені оператори
// number += 3; //12
// number -= 3; //6
// number *= 3; //27
// number /= 3; //3

// console.log(number);

//____________________________________

// let price = 100; //ціна одного товару
// const quantity = 3; // кількість товарів

// if (quantity > 2) {
//   price *= 0.8; //застосовуємо знижку 20% множимо на 0.8
// }

// const totalPrice = price * quantity; //загальна ціна
// console.log(`Загальна вартість: ${totalPrice}`);

//_______________________________________________
//арифметичні оператори (додавання віднімання множення та ділення та остача від ділення)

// const number = 10 % 3; //1 (трійка вміщаєтся в 10 лише 3 рази тому остача 1)
// // console.log(number);

// const number = 8; //(якщо число парне то залишок буде 0, якщо не парне тозалишок буде 1)

// if (number % 2 === 0) {
//   console.log(`${number} - парне число`);
// } else {
//   console.log(`${number} - непарне число`);
// }

//________________________________________________

// const number = 15;
// const divisor = 5;

// console.log(number % divisor); // дивимось яка остача після ділення

// if (number % divisor === 0) {
//   console.log(`${number} кратне ${divisor}`);
// } else {
//   console.log(`${number} не кратне ${divisor}`);
// }

//__________________________________________________
// пріорітетність операторів

// const result = 10 + 2 * 3; //16 працює як в математиці
// console.log(result);

// const result = (10 + 2) * 3; //36 працює як в математиці
// console.log(result);

// const age = 18;

// if (age < 18) {
//   console.log("Ви ще підліток.");
// } else if (age === 18) {
//   console.log("Вам саме 18!");
// } else {
//   console.log("Ви вже дорослий.");
// }
// //--------------------------------------------
// const fruit = "banana";

// if (fruit === "apple") {
//   console.log("apple");
// } else if (fruit === "chery") {
//   console.log("chery");
// } else {
//   console.log("inknown fruit");
// }

//_______________________________________________
//_____---__----________
//пріорітети порівняємо з оператора більше або менше

// const result = 5 + 10 > 12;
// console.log(result); //true

// const result = 5 + (10 > 12); // + false
// console.log(result); //5

// null, undefined, false , 0, пуста строка - можуть перетворватись в булиан

//явне і не явне перетворення (вгорі неявне)(зниуз явне , ми самі зробили булиан)

// const greet = "";

// Boolean(greet);

// console.log(Boolean(greet));
//______________________________________________

//БІнарні оператори(логічні оператори)

//ЛОГІЧНЕ І &&

// let age = 20;
// let hasPermission = true;

// if (age > 18) {
//   console.log("Доступ дозволено!");
// } else {
//   console.log("Доступ заборонено.");
// }

// let age = 20;
// let hasPermission = true;
// const isChinese = false;

// if (age > 18 && hasPermission && isChinese) {
//   console.log("Доступ дозволено!");
// } else {
//   console.log("Доступ заборонено.");
// }

//ЛОГІЧНЕ АБО

// let isWeekend = false;
// let hasDayOff = true;
// let hasDayOff2 = false;

// if (isWeekend || hasDayOff || hasDayOff2) {
//   console.log("Можете відпочити");
// } else {
//   console.log("Потрібно працювати");
// }
// якщо хоча б умова задовільнює то все буде тру , якщо всі умови фолс то все буде фолс

// let isOnline = true;

// if (!isOnline) {
//   console.log("Користувач онлайн");
// } else {
//   console.log("Користувач оффлайн");
// }

//оператор не! повертає наще значення на протилежне

//_______________________________
//Логічне злиття
// Оператор "||" неявно перетворює все на Boolean - 0, "" , undef, null and false

// const value = 0;

// console.log(value || "Default"); //

// const userName = prompt("Веддіть ваше імя:");
// console.log(userName || "Guest"); // щоб бачити не імя а бачити наступне значення

//Оператор "??" - логічне злиття (nulish coalescing) тільки перетворює undefined та null

// const value = 0;
// console.log(value ?? "Default"); //undefind , null

//_______________________________________

// тернарний оператор

// let age = 20;

// if (age >= 18) {
//   console.log("Ви повнолітній");
// } else {
//   console.log("Ви не повнолітній");
// }

// let age = 20;
// console.log(age > 18 ? "Ви повнолітній" : "Ви не повнолітній");
// єдиний тернарний оператор , який працює з трьома операндами(умова, значення якщо істина і значення якщо не істина)

//________________________________

//SWICH CASE

// let dish = "піца";
// let message;

// switch (dish) {
//   case "піца":
//     message = "Ваша піца буде готова через 20 хвилин";
//     break;
//   case "паста":
//     message = "Паста буде готова через 15 хвилин";
//     break;
//   case "салат":
//     message = "Салат буде готовий за 5 хвилин";
//     break;
//   default:
//     message = "Такої страви не має в меню";
// }
// console.log(message);

// let month = "January";
// let season;

// switch (month) {
//   case "December":
//   case "January":
//   case "February":
//     season = "Winter";
//     break;

//   case "Marth":
//   case "April":
//   case "May":
//     season = "Spring";
//     break;

//   case "June":
//   case "July":
//   case "August":
//     season = "Summer";
//     break;

//   case "September":
//   case "October":
//   case "November":
//     season = "Autumn";
//     break;
//   default:
//     season = "inknown month";
// }

// console.log(season);

//порівняння між if/else and swich case
//______________________________________

//if/else
// let day = "monday";
// if (day === "monday" || day === "thuesday") {
//   message = "workday";
// } else if (day === "suturday") {
//   message = "freeday";
// } else {
//   message = "inknown day";
// }
// console.log(message);

//switchcase

// let day = "sunday";
// let message;

// switch (day) {
//   case "monday":
//   case "tuesday":
//     message = "Work day";
//     break;
//   case "sunday":
//     message = "Day off";
//     break;
//   default:
//     message = "inknown day";
// }
// console.log(message);
//________________________________________
