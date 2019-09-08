const toDoForm = document.querySelector(".js-toDoForm"),
  todoInput = toDoForm.querySelector("input"),
  todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDO(event) {
  const delBtn = event.target,
    deleteTagetLi = delBtn.parentNode;
  todoList.removeChild(deleteTagetLi);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(deleteTagetLi.id);
  });

  toDos = cleanToDos;
  saveToDos();
  //localStorage.removeItem(TODOS_LS,);
}

function saveToDos() {
  //JSON.stringify()는 Object의 형태를 String의 형태로 바꿔준다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  deleteBtn.innerHTML = "❌";
  deleteBtn.addEventListener("click", deleteToDO);
  span.innerText = text;
  li.appendChild(deleteBtn);
  li.appendChild(span);
  li.id = newId;
  todoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintToDo(currentValue);
  todoInput.value = "";
}
// get toDoList Function
function loadToDolist(toDo) {
  paintToDo(toDo.text);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(loadToDolist);
  }
}

function toDoListInit() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

toDoListInit();
