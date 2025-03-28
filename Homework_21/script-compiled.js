"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
$(document).ready(function () {
  var todos = JSON.parse(localStorage.getItem("todos")) || [];
  var saveToLocalStorage = function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  var renderTodos = function renderTodos() {
    $("#todo-list").empty();
    $("#todo-list").append(todos.map(function (_ref, index) {
      var text = _ref.text,
        completed = _ref.completed;
      return "\n            <li class=\"list-group-item\">\n                <input type=\"checkbox\" class=\"todo-check\" \n                  ".concat(completed ? "checked" : "", " \n                  data-index=\"").concat(index, "\">\n                <span class=\"todo-text ").concat(completed ? "completed" : "", "\" \n                  data-bs-toggle=\"modal\" data-bs-target=\"#todoModal\" \n                  data-index=\"").concat(index, "\">\n                  ").concat(text, "\n                </span>\n                <button class=\"btn btn-danger btn-sm delete-btn\" \n                  data-index=\"").concat(index, "\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n            </li>");
    }).join(""));
  };
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
    todos[index] = _objectSpread(_objectSpread({}, todos[index]), {}, {
      completed: !todos[index].completed
    });
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
    var text = todos[$(this).data("index")].text;
    $("#modal-text").text(text);
  });
  renderTodos();
});
