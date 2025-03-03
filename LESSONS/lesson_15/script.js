//JSON - джава скрипт обджект нотейшн

// .{
//     'name': 'Ivan',
//     'age': 25,
//     'isStudent': false,
//      'skills': ['JavaScript', 'React', 'Node.js']
// }
//_______________________________JSON_________________________________________________
// const jsonStr = '{"name": "Ivan", "age": 25, "isStudent": false}';
// const jsonObj = JSON.parse(jsonStr);

// console.log(jsonObj.name);
// console.log(jsonObj.age);
//________________________________________________________________________________
// const obj = { name: "Ivan", age: 25, isStudent: false };
// const jsonStr = JSON.stringify(obj);

// console.log(jsonStr);
//________________________________________________________________________________
// try {
//   const invalidJson = '{"name": "Ivan", "age": 25, "isStudent": false';
//   const jsonObj = JSON.parse(invalidJson);
// } catch (error) {
//   console.error("Неправельний JSON:", error.message);
// }
//________________________________________________________________________________
// const books = [
//   {
//     title: "Harry Potter and ...",
//     author: "Dj. K. Rouling",
//     year: 1997,
//     genre: "Fentezi",
//   },
//   {
//     title: "1984",
//     author: "Djordj Orvell",
//     year: 1949,
//     genre: "Antiutopi",
//   },
//   {
//     title: "Tin vitru",
//     author: "Karlos",
//     year: 2001,
//     genre: "Detectiv",
//   },
//   {
//     title: "Hungry games",
//     author: "Kollinz",
//     year: 2008,
//     genre: "Fantastika",
//   },
//   {
//     title: "Kobzar",
//     author: "Taras Shevchenko",
//     year: 1840,
//     genre: "Poeziya",
//   },
// ];

// const jsonBooks = JSON.stringify(books, null, 2);

// console.log("JSON-рядок бібліотеки книг:");
// console.log(jsonBooks);

// const parsedBooks = JSON.parse(jsonBooks);

// const modernBooks = parsedBooks.filter((book) => book.year > 2000);

// modernBooks.forEach((book) => {
//   console.log(
//     `${book.title} - ${book.author} (${book.year}), жанр: ${book.genre}`
//   );
// });
//_____________________________Local storage___________________________________________________
//Local storage
// localStorage.setItem("username", "Ivan");
// localStorage.setItem("useremail", "anylylina2018@gmai.com");

// const username = localStorage.getItem("username");
// console.log(`Вітаємо ${username}`);

// localStorage.removeItem("username");
// localStorage.clear();
//________________________________________________________________________________
// const toggleButton = document.getElementById("theme-toggle");
// const body = document.body;

// const savedTheme = localStorage.getItem("theme");

// if (savedTheme) {
//   body.classList.add(savedTheme);
// }

// toggleButton.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");

//   if (body.classList.contains("dark-mode")) {
//     localStorage.setItem("theme", "dark-mode");
//   } else {
//     localStorage.removeItem("theme");
//   }
// });
//________________________Session storage________________________________________________________
//______________Cookies__________________________________________________________________
//маленькі файли кі браузер зберігає для сайту
// document.cookie = "username=John; expires=Fri, 31 Dec 2025 23:59:59";
// document.cookie = "session=abc123; max-age=3600";
