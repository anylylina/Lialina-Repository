import React from "react";
import { formatDate } from "../utils/formatDate";

function TaskList({ tasks, setTasks }) {
  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const toggleCompleted = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks([...updated].sort((a, b) => a.text.localeCompare(b.text)));
  };

  return (
    <ul className="mt-6 space-y-3">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-lg shadow-sm transition ${
            task.completed ? "bg-green-100" : "bg-gray-100"
          }`}>
          <div className="flex-1">
            <span
              className={`block ${
                task.completed ? "line-through text-gray-500" : ""
              }`}>
              {task.text}
            </span>
            <span className="text-xs text-gray-400">
              Створено: {formatDate(task.createdAt)}
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2 sm:mt-0 sm:ml-4">
            <button
              onClick={() => toggleCompleted(index)}
              className={`px-2 py-1 rounded-full text-white text-sm ${
                task.completed
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 hover:bg-green-500"
              }`}
              title="Позначити як виконано">
              ✅
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700 transition text-xl"
              title="Видалити">
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
