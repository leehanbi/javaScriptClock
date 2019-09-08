const exchange = document.querySelector(".js-Exchange");
const JPYKRW = "JPYKRW";
// 100엔당원화
const KRW_100 = 100;

// 날씨 취득하기
function getExchange() {
  // API 호출 패스
  fetch(`https://earthquake.kr:23490/query/${JPYKRW}`)
    .then(function(response) {
      // fetch작업이 끝날 때까지 기다림.
      return response.json();
    })
    .then(function(json) {
      const yen = json.JPYKRW[0];
      const currentKRW = Math.round(yen * KRW_100);
      exchange.innerHTML = `현재 엔화 환율  100엔 : ${currentKRW}원`;
    });
}

function init() {
  getExchange();
}

init();
