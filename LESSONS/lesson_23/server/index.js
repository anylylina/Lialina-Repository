// const express = require("express");

// const app = express();
// const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Привіт! Це наш express-сервер");
// });

// app.get("/hello/:name", (req, res) => {
//   const name = req.params.name;
//   res.send(`Привіт, ${name}!`);
// });

// app.listen(port, () => {
//   console.log(`Сервер запущено на http://localhost:${port}`);
// });

const express = require("express");
const cors = require("cors");
const User = require("./models/user");
require("./db");

const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));
const port = 3001;

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    console.log("Прийнято запит:", req.body);
    const { name, email, age } = req.body;

    const newUser = new User({ name, email, age });

    const savedUser = await newUser.save();

    console.log("Збережено користувача:", savedUser);

    res.status(201).json({
      message: "Користувача збережено у базу даних",
      user: savedUser,
    });
  } catch (error) {
    console.error("Помилка при створенні користувача:", error);
    res.status(500).json({ error: "Щось пішло не так" });
  }
});

app.listen(port, () => {
  console.log(`RESTful API запущено на http://localhost:${port}`);
});

// //Get
// app.get("/users", (req, res) => {
//   res.json({ message: "Отримано список користувачів" });
//   //get all users from database
// });

// //GET by ID
// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   res.json({ message: `Отримано користувача з ID ${id}` });
//   //Get all users by Id from database
// });

// //Post
// app.post("/users", (req, res) => {
//   const user = req.body;
//   res.json({ message: "Створено нового користувача", user });
//   //Save user to database
// });

// //PUT
// app.put("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const data = req.body;
//   res.json({
//     message: `Користувача з ID ${id} оновлено`,
//     data,
//   });
//   //Update user in database
// });

// //DELETE
// app.delete("/users/:id", (req, res) => {
//   const id = req.params.id;
//   res.json({ message: `Користувача з ID ${id} видалено` });
//   //Delete user from database
// });
