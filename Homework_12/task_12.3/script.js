document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = taskText;
    deleteBtn.textContent = "Видалити";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
});
