const toDoForm = document.querySelector(".js-toDoForm"),
    todoInput = toDoForm.querySelector("input"),
    todoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const toDos = [];
function saveToDos(){
    //JSON.stringify()는 Object의 형태를 String의 형태로 바꿔준다. 
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function paintToDo(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    deleteBtn.innerHTML = "❌";
    span.innerText = text;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const toDoObj ={
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            console.log(toDo.text);
        });
    }
}

function toDoListInit(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
    
}

toDoListInit();