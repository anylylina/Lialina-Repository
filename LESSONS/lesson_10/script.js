//Objects and Array
//_____________________________________________________________
//Object
// const store = {
//   name: "MarketStore",
//   locations: "Kiev",
//   products: {
//     apples: 100,
//     bananas: 50,
//     bread: 30,
//   },
// };

// console.log(store.name);
// console.log(store.products.bananas);

// store.products.milk = 20;
// console.log(store.products);

//_____________________________________________________________

//Array
// const orders = ["Латте", "Американо", "Капучіно"];

// console.log(orders[1]);
// orders.push("Еспресо");
// console.log(orders);

// console.log(`Сьогодні замовили ${orders.length} напої`);

// console.log(typeof store);
// console.log(typeof orders);

// console.log(Array.isArray(store));
// console.log(Array.isArray(orders));

//_____________________________________________________________

//_____________________________________________________________
//Object
//Об'єкти є одним із найважливіших концепцій в мові програмування JavaScript. Вони відіграють центральну роль у майже кожному аспекті розробки цією мовою. Якщо ви хочете зрозуміти інші аспекти JavaScript, то розуміння об'єктів є обов'язковим кроком.

// const hero = {
//   name: "Shadow Striker",
//   alias: "Тіньовий удар",
//   powerLevel: 9000,
//   abilities: ["невидимість", "супер швидкість", "телекінез"],
//   city: "Неон-Сіті",
//   active: true,
// };

// console.log(hero.alias);
// console.log(hero["powerLevel"]);

//Object.keys(), Object.values(), Object.entries()
//_____________________________________________________________

// const keys = Object.keys(hero);
// console.log(keys);

// const values = Object.values(hero);
// console.log(values);

// const entries = Object.entries(hero);
// console.log(entries);

//_____________________________________________________________
// const hero = {
//   name: "Shadow Striker",
//   alias: "Тіньовий удар",
//   powerLevel: 9000,
//   abilities: ["невидимість", "супер швидкість", "телекінез"],
//   city: "Неон-Сіті",
//   active: true,
// };

// const newPowers = {
//   suit: "Titanium Armor",
//   powerLevel: 9500,
// };

// // const updatedHero = Object.assign({}, hero, newPowers); //або використовувати спред оператор для обтеднання обьектів показано нижче
// const updatedHero = { ...hero, ...newPowers };

// //глибоке клонування
// console.log(updatedHero);
// console.log(hero);

//_____________________________________________________________

// const deepHero = {
//   name: "Shadow",
//   abilities: {
//     skill: "невидимість",
//     speed: 100,
//   },
// };

// // // const assignClone = Object.assign({}, deepHero);
// // const spreadClone = { ...deepHero }; //поверхневе клонування

// // const JSONClone = JSON.parse(JSON.stringify(deepHero)); //глибоке клонування

// const strCLone = structuredClone(deepHero); //глибоке клонування

// // assignClone.abilities.skill = "телепорт";
// // spreadClone.abilities.speed = 200;

// // JSONClone.abilities.speed = 200;

// strCLone.abilities.speed = 200;

// // console.log(deepHero.abilities.skill);
// console.log(deepHero.abilities.speed);

//_____________________________________________________________

// const hero = {
//   name: "Shadow Striker",
//   alias: "Тіньовий удар",
//   powerLevel: 9000,
//   abilities: ["невидимість", "супер швидкість", "телекінез"],
//   city: "Неон-Сіті",
//   active: true,
// };

// // console.log(hero.hasOwnProperty("abilities")); //чи є в нього така властивість як абілітіс? true
// // console.log(hero.hasOwnProperty("weaknesses")); //false

// console.log("abilities" in hero); //новіший запис
// console.log("weaknesses" in hero);

//_____________________________________________________________
// const user = {
//   username: "alex_dev",
//   fullName: "Alex Smith",
//   userLocation: "Canada",
//   role: "Frontend Developer",
//   experience: 5,
// };

// const { fullName, userLocation, role } = user; //деструкторізація

// console.log(fullName);
// console.log(userLocation);
// console.log(role);
//_____________________________________________________________

// const product = {
//   id: 101,
//   name: "Бездротові навушники",
//   price: 2500,
// };

// const { name: productName, price: productPrice } = product; //за допомою деструкторізаціі можео переіменовувати данні

// console.log(productName);
// console.log(productPrice);

//_____________________________________________________________
// const order = {
//   orderId: 56789,
//   customer: {
//     name: "Alex",
//     phone: "+380972323323",
//   },
//   delivery: {
//     city: "Lviv",
//     address: "Grushevskogo, 10",
//   },
// };

// const {
//   customer: { name, phone },
//   delivery: { city, address },
// } = order;

// console.log(name);
// console.log(phone);
// console.log(city);
// console.log(address);
//_____________________________________________________________
//перебір обьекту через ключ
//_____________________________________________________________
// const settings = {
//   theme: "dark",
//   fontSize: 16,
//   language: "uk",
// };

// // for (const key in settings) {
// //   console.log(`${key}: ${settings[key]}`);
// // } // або через Object.entries

// Object.entries(settings).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

//_____________________________________________________________
//Arrays
//_____________________________________________________________

// const players = ["Артур", "Єва", "Максим", "Олександр"];

// console.log(players[0]);

//метод push - додавання елементу в кінець масиву
// players.push("Софія");
// console.log(players);

// //метод pop- видалення останоього елементу массиву
// players.pop();
// console.log(players);

//метод unshift - додавання елементу на початок массиву
// players.unshift("Ілля");
// console.log(players);

//метод shift - видалення елементу з початку массива
// players.shift();
// console.log(players);

//_____________________________________________________________

//массив обьектів

// const orders = [
//   { customer: "Олена", drink: "Латте", size: "M" },
//   { customer: "Дмитро", drink: "Еспресо", size: "S" },
//   { customer: "Аліна", drink: "Капучіно", size: "L" },
// ];

// console.log(orders[1].drink);
