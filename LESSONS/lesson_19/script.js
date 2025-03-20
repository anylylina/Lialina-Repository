//Ajax - концепція роботи з сервером

// const xhr = new XMLHttpRequest(); //вже не викорис=товуєтся

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log("Отримав дані:", JSON.parse(xhr.responseText));
//     } else {
//       console.log("Помилка запиту:", xhr.status);
//     }
//   }
// };

// xhr.send();

//---------------------FETCH API---------------------------------

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Помилка запиту: ${response.status}`);
//     }
//     return response.json();
//   })

//   .then((data) => console.log("Отриманні дані:", data))
//   .catch((error) => console.log(error));

//---------------------ASYNC await---------------------------------
// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     if (!response.ok) throw new Error(`Помилка запиту: ${response.status}`);

//     const user = await response.json();
//     console.log("Інформація про користувача:", user);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();
//--GET POST PUT(Зміна) DELETE--CRUD(create, read, update, delete) --------------------------------------
//GET
// async function getUser(userId) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );
//     if (!response.ok) throw new Error(`Помилка: ${response.status}`);

//     const user = await response.json();
//     console.log("Данні користувача:", user);
//   } catch (error) {
//     console.error("Помилка отримання даних:", error);
//   }
// }

// getUser(3);

//--------------------------------------------------------
