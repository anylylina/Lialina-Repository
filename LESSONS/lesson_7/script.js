//return - повертає значення яке можна використувувати в подальшому

//спред оператори - розгортає фунціі ...

//рест оператори коли пережаємо зрначення для функціі
//this - посилання на обьект

//call back функція яка передаєтся як аргумент
//замикання - функція яка всередині себе запамьтовуж якісь значення

//IIFe - самовикликаюча функція

//рекурсія (циклічна дія) - коли функція викликаєтся декілька разів . всередині функціі створюємо іншу

//________________________________________________
//функція callback

// const toUpperCase = (text) => {
//   return text.toUpperCase();
// };

// const stringToArray = (text) => {
//   return text.split("");
// };

// const processText = (text, callback) => {
//   const formattedText = callback(text);
//   console.log("Оброблений текст:", formattedText);
// };

// processText("hello world", stringToArray);
//+++++++++++++++++++++++++++++++++++++++++++++++++++
// const isEven = (num) => {
//   return num % 2 === 0;
// };

// const isOdd = (num) => {
//   return num % 2 === 1;
// };

// const filterData = (data, callback) => {
//   const filterData = data.filter(callback);
//   console.log("Відфільтровані дані:", filterData);
// };

// const dummyArray = [1, 2, 3, 4, 5, 6];
// filterData(dummyArray, isEven);

//____________________-------------------------____
//асинхронні функціі колбек
// const saveUser = (user, callback) => {
//   console.log("Збереження користувача...");

//   setTimeout(() => {
//     console.log(`Користувача ${user.name} збережено.`);
//     callback();
//   }, 5000);
// };

// const notifyUser = () => {
//   console.log("Операція завершена!");
// };

// saveUser({ name: "Paul" }, notifyUser);

//++++++++++++++++++++++++++++++++++++++++++++
//функція запит на сервер

// const fetchData = (url, callback) => {
//   console.log("Завантаження данних...");

//   setTimeout(() => {
//     const data = { id: 1, title: "Learn JavaScript" };
//     console.log("Дані завантажено:", data);
//     callback(data);
//   }, 1500);
// };

// fetchData("https://jfgjhdfjgfh", (data) => {
//   console.log("Обробка отриманих даних:", data.title);
// });

//_____________________________________________
//функціі вищего порядку filter map

// const applyDiscount = (price, discountFunction) => {
//   return discountFunction(price);
// };

// const seasonDiscount = (price) => price * 0.9; // 10% знижка
// const clearanceDiscont = (price) => price * 0.5; // 50% знижка

// const seasonPrice = applyDiscount(1000, seasonDiscount);
// console.log(`Ціна із сезонною знижкою: ${seasonPrice} грн`);

// const clearancePrice = applyDiscount(1000, clearanceDiscont);
// console.log(`Ціна розпродажу ${clearancePrice} грн`);
//__________________________________________________________

// const products = [
//   { name: "Телевізор", InStock: true },
//   { name: "Ноутбук", InStock: false },
//   { name: "Смартфон", InStock: true },
// ];

// const availableProducts = products.filter((product) => product.InStock); //фільтер функція вищого порядку
// console.log(availableProducts);

//_____-____------________---________________---------_--------__---
// методи для массивів (map) - створює новий масив оброблюючи кожен елемент початкового масиву

// const prices = [100, 200, 300];

// const discoutPrices = prices.map((price) => price * 0.9);

// console.log("Ціни зі знижкою:", discoutPrices);

//анонимна функция - це функция без имени
//--------_________________----___-_____-_________-

// const name = () => {
//   //анонімна функція
//   return "";  //повернення значення з функціі
// };

// name();

//______________________________________________

// const numbers = [1, 2, 3, 4, 5];

//numbers.forEach((number, index, array) => {
//   //функція форич повертає не тільки значення має доступ до інтексів до массивів і тд
//   array[index] = number * 2;
// });

// console.log(numbers);

// const prices = [100, 200, 300];

// const discoutPrices = prices.map((price, index, array) => index * 0.9);

// console.log("Ціни зі знижкою:", discoutPrices);
//----------------------------------------------------------------------
//map - повертаэ новый массив_________________________________________
//forEach - не повертає нічого, і використовуєься для дій над елементом
//_______________________________________________________________________

//filter -ствоює новий массив включаючи лише ті елементи які відповідають заданій умові також повертає нове значення
//_______________________________________________________________________

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log("Парні числа:", evenNumbers);

//___________________________________________________________________
// const users = [
//   { id: 1, name: "Олексій", isActive: true },
//   { id: 2, name: "Наталья", isActive: false },
//   { id: 3, name: "Іван", isActive: true },
//   { id: 4, name: "Марія", isActive: false },
// ];

// const activeUsers = users.filter((user) => user.isActive); //утворилось неявне перетворення типів

// console.log("Активні користувачі:", activeUsers);

//________________________________________________________________
// const isSame = (num1, num2) => {
//   if (num1 === num2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isSame(2, 2));
//_________________________________________________

// const isSame = (num1, num2) => num1 === num2;

// console.log(isSame(3, 2));

//_________________________________________________
//метод REDUCE - обчислює значення шляхом застосування функціі для кожного елементу массиву(він це робить накопичуючим чином)тобто на кожній ітераціі значення буде залежати частково від попереднього
//______________________________________reduce змінює массив в будь що___________
// const expences = [100, 200, 300];

// const totalNum = expences.reduce((sum, expence) => sum + expence, 0); //reduce приймає функцію і якесь дефолтне щначення

// console.log(totalNum);
//_________________________________________________
// const orders = [
//   { orderId: 1, product: "apple", quantity: 3, pricePerUnit: 10 },
//   { orderId: 2, product: "banana", quantity: 2, pricePerUnit: 15 },
//   { orderId: 4, product: "orange", quantity: 5, pricePerUnit: 20 },
// ];

// const summaryDefault = {
//   totalAmount: 0,
//   products: {},
// };

// const summary = orders.reduce((accumulator, order) => {
//   accumulator.totalAmount += order.quantity * order.pricePerUnit;

//   accumulator.products[order.product] = order.quantity;

//   return accumulator;
// }, summaryDefault);

// console.log(summary);
//_____________________________________
//Функціі вищого порядку
//Підсумок map, filter,forEach, reduce (angl-перетворювати)
//_____________________________________
//_____________________________________
//Чисті функціі в JavaScript
//_____________________________________

// function convertToCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// console.log(convertToCelsius(32));
// console.log(convertToCelsius(212));
// console.log(convertToCelsius(32));

//_____________________________________

// function capitalizeWords(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// const original = "hello world";
// const formatted = capitalizeWords(original);

// console.log(formatted);
// console.log(original); // Чиста функція не змінює оригінал, вона змінює тільки те що в неі попало
// чиста функція не має залежати від глобальних змін данних

//_____________________________________
// function calculateRectangleArea(lenght, width) {
//   return lenght * width;
// }

// console.log(calculateRectangleArea(5, 10));

//__________ніщо зовнішнє ніяк не має повпливати на чисту функцію___________________________

// const unit = "cm²";

// function calculateRectangleArea(lenght, width) {
//   const area = lenght * width;

//   return `${area} ${unit}`;
// }

// console.log(calculateRectangleArea(5, 10));

//___________чиста функція не залежить від порядку виконнання__________________________

// function calculateRectangleArea(lenght, width) {
//   return lenght * width;
// }

// console.log(calculateRectangleArea(10, 5));

//_____________________________________

// function isMultiple(a, b) {
//   return a % b === 0 || b % a === 0; //остача від ділення дорівнює нулю чи є два числа кратними
// }

// console.log(isMultiple(2, 4));
// console.log(isMultiple(3, 6));

//______________Легка тестованість_______________________

// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(1));

//_____________________________________
