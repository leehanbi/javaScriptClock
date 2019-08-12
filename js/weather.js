
const COORDS = 'coords';
const API_KEY = "";
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        // latitude: latitude 줄여서 쓸수 있음 
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function gandleGeoError(){
    console.log('Can`t access geo localtion ');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,gandleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null){
        askForCoords();
    }else{
        //get Weather
    }
}
function init(){
    loadCoords();
};


init();