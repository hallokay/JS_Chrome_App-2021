const todoForm = document.getElementById("todo_form"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.getElementById("todo_list");

let todoArr = [];
const TODOS_KEY = "todos";

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArr));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  
  // 로컬스토리지에서 지우기
  todoArr = todoArr.filter((a) => a.id != parseInt(li.id));
  // 우리가 클릭한 투두의 아이디와 다른 투두의 아이디를 남겨두고 싶어..
  //  li.id는 string todo.id 숫자parseInt로 숫자로 만들어줘야함
  saveTodo();
}

function showTodo(todo) {
  // console.log(todo);
  const todoLi = document.createElement("li"),
    todoTxt = document.createElement("span"),
    todoBtn = document.createElement("button");

  console.log(todo);
  todoTxt.innerText = todo.text;
  todoBtn.innerText = "❌";
  todoLi.id = todo.id;

  todoLi.appendChild(todoTxt);
  todoLi.appendChild(todoBtn);

  todoList.appendChild(todoLi);

  todoBtn.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArr.push(newTodoObj);
  showTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo) {
  const parsedTodo = JSON.parse(savedTodo);
  todoArr = parsedTodo;
  parsedTodo.forEach(showTodo);
}
