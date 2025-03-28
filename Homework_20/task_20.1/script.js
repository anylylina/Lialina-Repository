$(document).ready(function () {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    $("#todo-list").empty();
    todos.forEach((todo, index) => {
      const todoItem = $(`
                <li class="list-group-item">
                    <input type="checkbox" class="todo-check" ${
                      todo.completed ? "checked" : ""
                    } data-index="${index}">
                    <span class="todo-text ${
                      todo.completed ? "completed" : ""
                    }" data-bs-toggle="modal" data-bs-target="#todoModal" data-index="${index}">${
        todo.text
      }</span>
                    <button class="btn btn-danger btn-sm delete-btn" data-index="${index}">Видалити</button>
                </li>
            `);
      $("#todo-list").append(todoItem);
    });
  }

  $("#todo-form").submit(function (event) {
    event.preventDefault();
    const newTodoText = $("#todo-input").val().trim();
    if (!newTodoText) return;

    todos.push({ text: newTodoText, completed: false });
    $("#todo-input").val("");
    saveToLocalStorage();
    renderTodos();
  });

  $("#todo-list").on("click", ".todo-check", function () {
    const index = $(this).data("index");
    todos[index].completed = !todos[index].completed;
    saveToLocalStorage();
    renderTodos();
  });

  $("#todo-list").on("click", ".delete-btn", function () {
    const index = $(this).data("index");
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
  });

  $("#todo-list").on("click", ".todo-text", function () {
    const index = $(this).data("index");
    $("#modal-text").text(todos[index].text);
  });

  renderTodos();
});
