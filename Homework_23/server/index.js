const express = require("express");
const cors = require("cors");
const Todo = require("./models/ToDo");
require("./db");

const app = express();
const port = 5000;

// Дозволяємо доступ з фронтенду
app.use(cors({ origin: "http://127.0.0.1:5500" }));
app.use(express.json());

// Створити нове завдання
app.post("/api/todos", async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({ title, completed: false });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error("Помилка при створенні завдання:", error);
    res.status(500).json({ error: "Не вдалося створити завдання" });
  }
});

// Отримати всі завдання
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати завдання" });
  }
});

// Оновити завдання (виконано / не виконано)
app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося оновити завдання" });
  }
});

// Видалити завдання
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Не вдалося видалити завдання" });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`RESTful API запущено на http://localhost:${port}`);
});
