const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/db";

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Помилка підключення до MongoDB:"));
db.once("open", () => {
  console.log("Підключено до MongoDB");
});

module.exports = db;
