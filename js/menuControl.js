const menu = document.querySelector("nav");

function handleOpenMenu() {
    const menu_state = document.getElementById("menu_state");
    const menu_Sub_state = document.getElementById("menu_Sub_state");
    if(menu_state.checked === false ){
        menu_state.checked = true;
    }else{
        menu_state.checked = false;
    }
}
menu.addEventListener("click",handleOpenMenu)