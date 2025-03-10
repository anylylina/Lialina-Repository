//===============Класи ОП=================
// function Driver(name, car) {
//   this.name = name;
//   this.car = car;
//   this.rides = 0;
// }
// Driver.prototype.completeRide = function () {
//   this.rides++;
//   console.log(`${this.name} виконав поїздку! Загалом: ${this.rides}`);
// };

// const driver1 = new Driver("Максим", "Toyota Prius");
// const driver2 = new Driver("Анна", "Hundai Sonata");

// driver1.completeRide();
// driver2.completeRide();
//________________________________________
// class Driver {
//   constructor(name, car) {
//     this.name = name;
//     this.car = car;
//     this.rides = 0;
//   }

//   completeRide() {
//     this.rides++;
//     console.log(`${this.name} виконав поїздку! Загалом: ${this.rides}`);
//   }
// }

// const driver1 = new Driver("Максим", "Toyota Prius");
// const driver2 = new Driver("Анна", "Hundai Sonata");

// driver1.completeRide();
// driver2.completeRide();

// //+++++++++++++++Успадкування++++++++++++++++++
// class VIPDriver extends Driver {
//   constructor(name, car) {
//     super(name, car);
//     this.rating = 5.0;
//   }

//   receiveRating(score) {
//     this.rating = (this.rating + score) / 2;

//     console.log(
//       `${this.name} отримав нову оцінку. Новий рейтинг: ${this.rating.toFixed(
//         1
//       )}`
//     );
//   }
// }

// const vipDriver = new VIPDriver("Олег", "Tesla Model S");

// vipDriver.completeRide();
// vipDriver.receiveRating(4);
//==================================================

// class Movie {
//   constructor(title, genre, duration, seats) {
//     this.title = title;
//     this.genre = genre;
//     this.duration = duration;
//     this.seats = seats;
//   }

//   render() {
//     const movieCard = document.createElement("div");
//     movieCard.classList.add("movie-card");

//     movieCard.innerHTML = `
//         <h3>${this.title}</h3>
//     <p>Жанр: ${this.genre} </p>
//     <p>Тривалість: ${this.duration} хв.</p>
//     <p>
//       Вільних місць: <span class="seats">${this.seats}</span>
//     </p>
//     <button class="book-btn">Забронювати</button>`;

//     const bookButton = movieCard.querySelector(".book-btn");
//     const seatsElement = movieCard.querySelector(".seats");

//     bookButton.addEventListener("click", () => {
//       if (this.seats > 0) {
//         this.seats--;
//         seatsElement.textContent = this.seats;
//         if (this.seats === 0) {
//           bookButton.disabled = true;
//           bookButton.textContent = "Продано";
//         }
//       }
//     });

//     return movieCard;
//   }
// }

// const movies = [
//   new Movie("Інтерстелар", "Фантастика", 169, 3),
//   new Movie("Темний лицар", "Бойовик", 152, 5),
//   new Movie("Матриця", "Фантастика", 136, 2),
// ];

// const movieListContainer = document.getElementById("movieList");

// movies.forEach((movie) => {
//   movieListContainer.appendChild(movie.render());
// });

//---------------------Спадкування---------------------------------------
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   render() {
//     const userCard = document.createElement("div");
//     userCard.classList.add("user-card");

//     const nameElement = document.createElement("h3");
//     nameElement.textContent = this.name;

//     const emailElement = document.createElement("p");
//     emailElement.textContent = `📩${this.email}`;

//     userCard.appendChild(nameElement);
//     userCard.appendChild(emailElement);

//     return userCard;
//   }
// }

// class Admin extends User {
//   constructor(name, email, permissions) {
//     super(name, email);
//     this.permissions = permissions;
//   }

//   render() {
//     const adminCard = super.render();
//     adminCard.classList.add("admin");

//     const permissionsElement = document.createElement("p");
//     permissionsElement.textContent = `🔑 Права: ${this.permissions.join(", ")}`;

//     adminCard.appendChild(permissionsElement);
//     return adminCard;
//   }
// }

// class Customer extends User {
//   constructor(name, email, balance) {
//     super(name, email);
//     this.balance = balance;
//   }

//   render() {
//     const customerCard = super.render();
//     customerCard.classList.add("customer");

//     const balanceElement = document.createElement("p");
//     balanceElement.textContent = `💵 Баланс: $${this.balance}`;

//     customerCard.appendChild(balanceElement);
//     return customerCard;
//   }
// }

// const users = [
//   new Admin("Олег", "oleg@company.com", [
//     "Редагування",
//     "Виделення",
//     "Додавання",
//   ]),

//   new Customer("Марина", "marina@gmail.com", 250),
//   new Customer("Ігор", "igor@gmail.com", 100),
//   new Admin("Анна", "anna@company.com", ["Редагування", "Перегляд"]),
// ];

// const userListContainer = document.getElementById("userList");

// users.forEach((user) => {
//   userListContainer.appendChild(user.render());
// });
//____________________ФОрма___________________________________----
// class User {
//   #password;

//   constructor(username, password) {
//     this.username = username;
//     this.#password = password;
//   }

//   checkPassword(inputPassword) {
//     return this.#password === inputPassword;
//   }
// }

// const user = new User("admin", "12345");

// const loginBtn = document.getElementById("loginBtn");
// const message = document.getElementById("message");

// loginBtn.addEventListener("click", () => {
//   const usernameInput = document.getElementById("username").value;
//   const passwordInput = document.getElementById("password").value;

//   if (usernameInput === user.username && user.checkPassword(passwordInput)) {
//     message.textContent = "✅Вхід успішний";
//     message.style.color = "green";
//   } else {
//     message.textContent = "❌ Невірний логін або пароль!";
//     message.style.color = "red";
//   }
// });

//________________Статичні методи та властивості__________________________________
// class Example {
//   static staticProperty = "Я статична!";

//   static staticMethod() {
//     return "Це статичний метод!";
//   }
// }

// console.log(Example.staticProperty);
// console.log(Example.staticMethod());

// const instance = new Example();

// console.log(instance.staticProperty);
// console.log(instance.staticMethod);
//=========================================
// class User {
//   static users = [];

//   constructor(username, email) {
//     if (User.isUsenameTaken(username)) {
//       throw new Error(`❌ Імʼя користувача "${username}" вже зайняте!`);
//     }

//     this.username = username;
//     this.email = email;
//     User.users.push(this);
//   }

//   static isUsenameTaken(username) {
//     return User.users.some((user) => user.username === username);
//   }

//   static getAllUsers() {
//     return User.users.map((user) => user.username);
//   }
// }

// try {
//   const user1 = new User("andrii", "andrii@example.com");
//   const user2 = new User("olena", "olena@example.com");
// } catch (error) {
//   console.log(error.message);
// }

// console.log("Зареєстровані користувачі:", User.getAllUsers());
//===============================================================
