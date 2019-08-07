const title = document.querySelector("#title");
const BASECOLOR = "#34495e";
const OUTHERCOLOR = "#7f8c8d";


function init(){
    title.style.color = "BASECOLOR";
    title.addEventListener("click",handleClick);
}

init();