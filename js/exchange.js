const exchange = document.querySelector(".js-Exchange")
const JPYKRW = "JPYKRW"
const KRWJPY = "KRWJPY"
const KRW = 100

// 날씨 취득하기
function getWeather(latitude, longitude) {
    // API 호출 패스
    fetch(
        `https://earthquake.kr:23490/query/${JPYKRW},${KRWJPY}`
    )
        .then(function (response) {
            // fetch작업이 끝날 때까지 기다림.
            return response.json()
        })
        .then(function (json) {
            const yen = json.JPYKRW[0]
            const currntYen = Math.round(yen * KRW);

            exchange.innerHTML = `현재 엔화 환율 :100엔 : ${currntYen}원`
        })
}
function init() {
    getWeather()
}

init()
