const todoForm = document.getElementById("todo_form"),
  todoList = document.getElementById("todo_list");

function handleTodoSubmit(e) {
  e.preventDefault();
}

todoForm.addEventListener("submit", handleTodoSubmit);
