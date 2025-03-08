// //Інкапсуляція - дозволяє уникинути випадкових змін або злоумисних змін
// class BankAccount {
//   #balance;

//   constructor(owner, initialBalance) {
//     this.owner = owner;
//     this.#balance = initialBalance;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(
//         `Поповнення на ${amount} грн. Новий баланс: ${this.#balance}`
//       );
//     } else {
//       console.log("Сумма має бути більше 0");
//     }
//   }
// }

// const myAccount = new BankAccount("Петро", 1000);
// console.log(myAccount.balance);

// myAccount.deposit(500);
// console.log(myAccount.i);
//--------------------------Успадкування---------------------------------------------------
//Спадкування - це потужний механізм, який дозволяє створювати нові класи на основі існуючих класів. При спадкуванні новий клас успадковує властивості та методи від батьківського класу, що полегшує повторне використання коду та розширення функціональності.
//--------------------------Поліморфізм---------------------------------------------------
// class Food {
//   // constructor {
//   //     this.name = 'food'
//   // }

//   prepare() {
//     console.log("Готуємо їжу");
//   }
// }

// class Pizza extends Food {
//   prepare() {
//     console.log("Розкачуємо тісто, додаємо начинку, випікаємо піцу");
//   }
// }

// class Sushi extends Food {
//   prepare() {
//     console.log("Готуємо рис, додаємо рибу, формужмо суші");
//   }
// }

// class Burger extends Food {
//   prepare() {
//     console.log("Смажимо котлету, збираємо бургер");
//   }
// }

// function cook(food) {
//   food.prepare();
// }

// const myPizza = new Pizza();
// const mySushi = new Sushi();
// const myBurger = new Burger();

// cook(myPizza);
// cook(mySushi);
// cook(myBurger);

//--------------------------Абстракція- спрощення якихось важких речей---------------------------------------------------
// class Vehicle {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   move() {
//     console.log(`${this.name} рухаєтся зі швидкістю ${this.speed} км/год.`);
//   }
// }

// const myVehicle = new Vehicle("Toyota", 120, 50);

// class Car extends Vehicle {
//   constructor(name, speed, fuel) {
//     super(name, speed);
//     this.fuel = fuel;
//   }

//   refuel() {
//     console.log(`${this.name} заправлено ${this.fuel} літрами пального`);
//   }
// }

// class Bike extends Vehicle {
//   constructor(name, speed, type) {
//     super(name, speed);
//     this.type = type;
//   }

//   ringBell() {
//     console.log(`${this.name} дзвонить у дзовник!`);
//   }
// }

// const myCar = new Car("Toyota", 120, 50);
// const myBike = new Bike("Giant", 30, "Гірський");

// myCar.move();
// myCar.refuel();

// myBike.move();
// myBike.ringBell();
