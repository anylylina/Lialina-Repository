$(document).ready(() => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const renderTodos = () => {
    $("#todo-list").empty();

    $("#todo-list").append(
      todos
        .map(
          ({ text, completed }, index) => `
            <li class="list-group-item">
                <input type="checkbox" class="todo-check" 
                  ${completed ? "checked" : ""} 
                  data-index="${index}">
                <span class="todo-text ${completed ? "completed" : ""}" 
                  data-bs-toggle="modal" data-bs-target="#todoModal" 
                  data-index="${index}">
                  ${text}
                </span>
                <button class="btn btn-danger btn-sm delete-btn" 
                  data-index="${index}">Видалити</button>
            </li>`
        )
        .join("")
    );
  };

  $("#todo-form").submit((event) => {
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
    todos[index] = { ...todos[index], completed: !todos[index].completed };
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
    const { text } = todos[$(this).data("index")];
    $("#modal-text").text(text);
  });

  renderTodos();
});
