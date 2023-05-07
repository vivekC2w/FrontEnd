const form = document.querySelector("form");
const todoList = document.querySelector(".todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoInput = document.querySelector(".todo-input");
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
        <span>${todoText}<span>
        <button class="complete-btn">&#10003;</button>
        <button class="trash-btn">&#128465;</button>
        `;
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("complete-btn")) {
    const todoItem = target.closest(".todo-item");
    todoItem.classList.toggle("completed");
  } else if (target.classList.contains("trash-btn")) {
    const todoItem = target.closest(".todo-item");
    todoList.removeChild(todoItem);
  }
});
