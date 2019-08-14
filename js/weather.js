
const weather = document.querySelector(".js-weather");
const COORDS = "coords";
// 날씨 취득 APIKEY
const API_KEY = "d540de0c3d2dbd20d0fbcb6569e34643";
// 날씨 취득하기 
function getWeather(latitude,longitude){
    // API 호출 패스 
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            // fetch작업이 끝날 때까지 기다림.
            return response.json()
        }).then(function(json){
            // 데이터가 준비되면 데이터 내용 출력
            // 온도 
            const temp = json.main.temp;
            // 로컬 위치 
            const place = json.name;
            // 화면에 날씨,위치 출력 
            weather.innerHTML = `${temp} @ ${place}`
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
// 로컬위치 취득 
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        // latitude: latitude 줄여서 쓸수 있음 
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

// 로컬위치 취득 에러 
function gandleGeoError(){
    console.log("Can`t access geo localtion");
}

// 로컬위치 취득하기 
function askForCoords(){
    // 취득 성공:handleGeoSucces , 취득실패 : gandleGeoError
    navigator.geolocation.getCurrentPosition(handleGeoSucces,gandleGeoError);
}

function loadCoords(){
    // 현재 로컬 위치 취득 
    const loadedCoords = localStorage.getItem(COORDS);
    // 로컬 위치가 비어있다면 로컬위치 취득 
    if (loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
        //get Weather
    }
}
// 초기작업 
function init(){
    loadCoords();
};


init();