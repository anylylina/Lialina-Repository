import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      text: newTodo.trim(),
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="mt-8 w-full max-w-xl mx-auto bg-pink-100 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Список ToDo 📋</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="flex-grow border border-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Нова задача..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        />
        <button
          onClick={handleAddTodo}
          className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600">
          Додати
        </button>
      </div>

      <ul className="space-y-3">
        {todos.length === 0 ? (
          <li className="text-gray-500 text-center">Задач поки немає</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-pink-200 p-3 rounded hover:shadow">
              <span className="text-gray-800">{todo.text}</span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700">
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
