const toDoForm = document.querySelector(".js-toDoForm"),
    todoInput = toDoForm.querySelector("input"),
    todoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    todoList.appendChild(li);

}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}
function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function toDoListInit(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
    
}

toDoListInit();