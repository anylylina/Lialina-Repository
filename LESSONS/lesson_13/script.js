// const form = document.getElementById("registrationForm");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// const username = document.getElementById("username").value.trim();
// const email = document.getElementById("email").value.trim();
// const password = document.getElementById("current-password").value;

// if (username === "" || email === "" || password === "") {
//   document.getElementById("errorMassege").textContent =
//     "Будь ласка, заповніть усі поля!";
// }

// console.log(`Користувач ${username} успішно зареєстрований!`);

//________________________________________________________________________

// const form = document.getElementById("surveyForm");
// const message = document.getElementById("surveyMessage");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const age = document.getElementById("age").value;

//   const preferences = Array.from(
//     document.querySelectorAll("input[name='preferences']:checked") //для декількох checkboxiv
//   );

//   const preferencesList = preferences.map((el) => el.value).join(", ");

//   if (!age) {
//     message.textContent = "Будь ласка, оберіть ваш вік!";
//     return;
//   }

//   console.log(`Вік: ${age}, Вподобання: ${preferencesList || "немає"}`);
// });

//________________________________АБО-щоб вивести один checkbox________________________________________

// const form = document.getElementById("surveyForm");
// const message = document.getElementById("surveyMessage");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const age = document.getElementById("age").value;

//   //   const preferences = Array.from(

//   //   );

//   const news = document.getElementById("news");

//   //   const preferencesList = preferences.map((el) => el.value).join(", ");

//   if (!age) {
//     message.textContent = "Будь ласка, оберіть ваш вік!";
//     return;
//   }

//   console.log(`Вік: ${age} Вподобання: ${news.value || "немає"}`);
// });

//_____________________________________________________________________________________________________-

// const emailInput = document.getElementById("email");
// const errorMessage = document.getElementById("error-message");

// emailInput.addEventListener("input", () => {
//   if (emailInput.value.includes("@")) {
//     errorMessage.textContent = "";
//   } else {
//     errorMessage.textContent = 'Email повинен містити "@"!';
//   }
// });
//________________________________________________________________________________________

// document
//   .getElementById("emailForm")
//   .addEventListener("submit", function (event) {
//     const errorMessage = document.getElementById("error-message");
//     const emailValue = document.getElementById("email").value.trim();

//     if (!emailValue || !emailValue.includes("@")) {
//       event.preventDefault();
//       errorMessage.textContent = "Будь ласка, введіть коретний Email!";
//     } else {
//       errorMessage.textContent = "";
//     }
//   });
//________________________________________________________________________________________

// const genderSelect = document.getElementById("gender");
// const output = document.getElementById("output");

// genderSelect.addEventListener("change", () => {
//   output.textContent = "Ви обрали: " + genderSelect.value;
// });

//________________________________________________________________________________________

// const usernameInput = document.getElementById("username");

// usernameInput.addEventListener("focus", function () {
//   usernameInput.style.backgroundColor = "lightblue";
// });

// usernameInput /
//   addEventListener("blur", function () {
//     usernameInput.style.backgroundColor = "";
//   });
//______Робота з данними форми JS_________________________

// function getText() {
//   const inputText = document.getElementById("username").value;
//   document.getElementById("output").textContent = "Введено імʼя: " + inputText;
// }

//________________________________________________________________________________________
// function checkStatus() {
//   const checkbox = document.getElementById("agree").checked;
//   document.getElementById("status").textContent = checkbox
//     ? "Ви погодились"
//     : "Ви не погодились";
// }

//________________ONCLICK________________________________________________________________________

// const getCity = () => {
//   const selectValue = document.getElementById("city").value;

//   document.getElementById("city-output").textContent =
//     "Вибране місто: " + selectValue;
// };

//__________________RESET______________________________________________________________________

// document.getElementById("resetForm").addEventListener("reset", function () {
//   document.getElementById("resetMessage").textContent = "Форма очищена";
// });

//____________________Конструктор FORM DATA_________________________________________

// const form = document.getElementById("myForm");
// const formData = new FormData(form);

// const username = formData.get("username");
// console.log(username);

// const selecedOption = formData.detAll("hobbies");
// console.log(selectedOptions);

// formData.append("user_id", 123);
// formData.set("username", "new_user");

// fetch("httpd://exsample.com/api", {
//   method: "POST",
//   body: formData,
// });

//________________________________________________________________________________________

// document.getElementById("userForm").addEventListener("submit", (event) => {
//   event.preventDefault();

//   const form = document.getElementById("userForm");
//   const formData = new FormData(form);

//   for (const pair of formData.entries()) {
//     console.log(`${pair[0]}: ${pair[1]}`);
//   }

//   fetch("https://exsample.com/api/register", {
//     method: "POST",
//     body: formData,
//   }).then((response) => console.log(response));
// });

//___________________РЕГУЛЯРНІ ВИРАЗИ__________________________________________

// const regex = /Hello/; //Літерали

//або

// const regex = new RegExp("Hello");
//Пошук тексту чи є текст у рядку

//___________________РЕГУЛЯРНІ ВИРАЗИ__________________________________________

// const regex = /Hello/;
// // const text = "Hello, world!";

// console.log(regex.test("Hello, world!"));
// console.log(regex.test("Привіт"));

//________________________________________________________________________________________
// const regex = /\d{3}-?\d{3}-\d{4}/;
// const text = "Мій номер: 123-456-7890";

// console.log(text.match(regex));

//________________________________________________________________________________________
// const text = "Мене звати Олексій";
// const regex = /Олексій/;

// console.log(text.replace(regex, "Сергій"));
// console.log(text.replaceAll(" ", ""));

//________________________________________________________________________________________
// const text = "Hello world";
// const index = text.search(/world/);

// console.log(index);
//________________________________________________________________________________________
// const text = "Hello world";

// console.log(text.search(/WORLD/));
// console.log(text.search(/WORLD/i));

//________________________________________________________________________________________
// const phoneRegex = /^\d{3}-?\d{3}-\d{4}$/; //d - це номер телефону(число)

// console.log(phoneRegex.test("123-456-7890"));
// console.log(phoneRegex.test("12345"));

//________________________________________________________________________________________
// const text = "Я маю 3 яблука і 20 груш";
// console.log(text.match(/\d+/g)); // g - пошук глобально

//___________________Перевірка на email_____________________________________________________________________

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// console.log(emailRegex.test("test@gmail.com"));
// console.log(emailRegex.test("wrongemail@com"));
//________________________________________________________________________________________
//test - перевіряє чи взагалі текст валідний нашому виразу
//match - знаходить усі відповідності
//replace - коли треба замінити шось поміняти формат
//search - шукає саме індекс з якого починаєтся
//i - шукає відповідності незалежно від регістру
// g - глобальний пошук (він шукає абсолютно всі відповідності)
//gm -global multyline ( шукає всі відповідності навіть на других рядках)
//________________________________________________________________________________________
