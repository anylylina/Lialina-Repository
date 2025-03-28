"use strict";

$(document).ready(function () {
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function renderTodos() {
    $("#todo-list").empty();
    todos.forEach(function (todo, index) {
      var todoItem = $("\n                <li class=\"list-group-item\">\n                    <input type=\"checkbox\" class=\"todo-check\" ".concat(todo.completed ? "checked" : "", " data-index=\"").concat(index, "\">\n                    <span class=\"todo-text ").concat(todo.completed ? "completed" : "", "\" data-bs-toggle=\"modal\" data-bs-target=\"#todoModal\" data-index=\"").concat(index, "\">").concat(todo.text, "</span>\n                    <button class=\"btn btn-danger btn-sm delete-btn\" data-index=\"").concat(index, "\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n                </li>\n            "));
      $("#todo-list").append(todoItem);
    });
  }
  $("#todo-form").submit(function (event) {
    event.preventDefault();
    var newTodoText = $("#todo-input").val().trim();
    if (!newTodoText) return;
    todos.push({
      text: newTodoText,
      completed: false
    });
    $("#todo-input").val("");
    saveToLocalStorage();
    renderTodos();
  });
  $("#todo-list").on("click", ".todo-check", function () {
    var index = $(this).data("index");
    todos[index].completed = !todos[index].completed;
    saveToLocalStorage();
    renderTodos();
  });
  $("#todo-list").on("click", ".delete-btn", function () {
    var index = $(this).data("index");
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
  });
  $("#todo-list").on("click", ".todo-text", function () {
    var index = $(this).data("index");
    $("#modal-text").text(todos[index].text);
  });
  renderTodos();
});
