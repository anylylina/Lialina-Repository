//Колекція - цк я к таблиця у звияайній базі.*Наприклад таблиця користувачів)
//Документ - це як обект у джава скриптю наприклад: (обект)

// const fs = require("fs/promises");

// const readMyFile = async () => {
//   try {
//     const data = await fs.readFile("file.txt", "utf8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// readMyFile();

// const fetchUsers = async () => {
//   try {
//     const response = await fetch("http://localhost:3001/users");
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchUsers();

// const createUser = async (newUser) => {
//   try {
//     const response = await fetch("http://localhost:3001/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newUser),
//     });

//     const data = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// createUser({ name: "Paul", hobby: "Volleyball" });

const createUser = async (newUser) => {
  try {
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
  } catch (error) {
    console.log(error);
  }
};

createUser({ name: "Anna", email: "anna@example.com", age: 26 });
