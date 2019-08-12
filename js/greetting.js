const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS ="currentUser",
    SHOWING_CN ="showing";

// 이름을 로컬 스토리지에 저장함 .s
function saveName(text){
    localStorage.setItem(USER_LS, text);
}
// 서브밋 이벤트 통제 
function handleSubmit(event){
    // 새로고침 이벤트 디폴트 
    event.preventDefault();
    // 네임창 입력값 받기 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    console.log(form.classList);
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;

}
// 이름 불러오기 
function loadName(){
    // 로컬스토리지에서 사용자 입력 이름 받기 
    const currentUser = localStorage.getItem(USER_LS);
    // 없으면 이름 물어보기 
    if(currentUser === null){
        askForName();
    }else{
    // 있으면 로컬스토리지 이름 받아서 뿌리기 
        paintGreeting(currentUser);
    }
}
// 화면 초기작업 
function init(){
    //이름 불러오기 
    loadName();

}

init();