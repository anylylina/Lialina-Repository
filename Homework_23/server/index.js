const express = require("express");
const cors = require("cors");
const Todo = require("./models/ToDo");
require("./db");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/api/todos", async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({ text, completed: false });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error("Помилка при створенні завдання:", error);
    res.status(500).json({ error: "Не вдалося створити завдання" });
  }
});

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Не вдалося отримати завдання" });
  }
});

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

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Не вдалося видалити завдання" });
  }
});

app.listen(port, () => {
  console.log(`RESTful API запущено на http://localhost:${port}`);
});
