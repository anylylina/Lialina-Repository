const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/todo_db")
  .then(() => console.log("Підключено до MongoDB"))
  .catch((error) => console.error("Помилка підключення до MongoDB:", error));
