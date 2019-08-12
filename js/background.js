const body = document.querySelector("body");
const IMG_NUMBER =9;

function paintImage(imageNumber){
    const image = new Image();
    image.src= `images/${imageNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandomNumber(){
    const number = Math.floor(Math.random()*IMG_NUMBER);;
    return number;
}

function init(){
    const randomNumber = genRandomNumber();
    paintImage(randomNumber);
}

init();