const body = document.querySelector("body")
// 배경화면 랜덤 수
const IMG_NUMBER = 9

// 배경화면 뽑기
function paintImage(imageNumber) {
  const image = new Image()

  image.src = `images/${imageNumber + 1}.jpg`
  image.classList.add("bgImage")
  body.prepend(image)
}

// 배경화면 랜덤 넘버 뽑기
function genRandomNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER)
  return number
}

// 초기 작업
function init() {
  // 랜덤 수 취득
  const randomNumber = genRandomNumber()
  // 배경화면 뽑기
  paintImage(randomNumber)
}

init()
