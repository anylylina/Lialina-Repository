const API_URL = "http://localhost:5000/api/todos";

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Завантажити всі завдання при завантаженні сторінки
document.addEventListener("DOMContentLoaded", loadTodos);

async function loadTodos() {
  try {
    const res = await fetch(API_URL);
    const todos = await res.json();

    todoList.innerHTML = ""; // Очистити список

    todos.forEach((todo) => {
      const li = createTodoElement(todo);
      todoList.appendChild(li);
    });
  } catch (error) {
    console.error("Помилка при завантаженні TODOs:", error);
  }
}

function createTodoElement(todo) {
  const li = document.createElement("li");
  li.textContent = todo.title;
  li.dataset.id = todo._id;

  if (todo.completed) {
    li.style.textDecoration = "line-through";
  }

  // Позначити як виконане
  li.addEventListener("click", async () => {
    await fetch(`${API_URL}/${todo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    loadTodos();
  });

  // Кнопка видалення
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", async (e) => {
    e.stopPropagation(); // Щоб не викликалось оновлення при кліку
    await fetch(`${API_URL}/${todo._id}`, {
      method: "DELETE",
    });
    loadTodos();
  });

  li.appendChild(deleteBtn);
  return li;
}

// Додати нове завдання
todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = todoInput.value.trim();
  if (!title) return;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  todoInput.value = "";
  loadTodos();
});
