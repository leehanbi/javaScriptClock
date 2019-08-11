const toDoForm = document.querySelector(".js-toDoForm"),
    todoInput = toDoForm.querySelector("input"),
    todoList = document.querySelector("js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    console.log(text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
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