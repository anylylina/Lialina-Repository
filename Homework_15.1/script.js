document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".js--form");
  const input = document.querySelector(".js--form__input");
  const todosWrapper = document.querySelector(".js--todos-wrapper");

  let todos = [];
  for (let i = 0; localStorage.getItem(`todo-${i}`); i++) {
    const todo = JSON.parse(localStorage.getItem(`todo-${i}`));
    todos.push(todo);
  }

  function updateLocalStorage() {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("todo-")) {
        localStorage.removeItem(key);
      }
    });

    todos.forEach((todo, index) => {
      localStorage.setItem(`todo-${index}`, JSON.stringify(todo));
    });
  }

  function renderTodos() {
    while (todosWrapper.firstChild) {
      todosWrapper.removeChild(todosWrapper.firstChild);
    }

    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.classList.add("todo-item");
      if (todo.completed) {
        li.classList.add("todo-item--checked");
      }

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => {
        todos[index].completed = checkbox.checked;
        updateLocalStorage();
        renderTodos();
      });

      const span = document.createElement("span");
      span.textContent = todo.text;
      span.classList.add("todo-item__description");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Видалити";
      deleteBtn.classList.add("todo-item__delete");
      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        updateLocalStorage();
        renderTodos();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      todosWrapper.appendChild(li);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTodoText = input.value.trim();
    if (newTodoText === "") return;

    const newTodo = {
      text: newTodoText,
      completed: false,
    };

    todos.push(newTodo);
    input.value = "";
    updateLocalStorage();
    renderTodos();
  });

  renderTodos();
});
