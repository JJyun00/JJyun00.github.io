const API_KEY = "2670582e1a5dbbfc1553604a3101d4b8"

function onGeoOK(positon){
    const lat = positon.coords.latitude     // 경도
    const lon = positon.coords.longitude    // 위도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)                          // fetch로 url 요청 (chrome 개발자도구 network의 wifi에서 확인)
    .then(response => response.json())  // 그 후(then) resposne의 json 얻기
    .then(data => {                     // 내용 추출 후 data 얻기
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)   // 위치 받기