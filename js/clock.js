const clock = document.querySelector("h2#clock")

function getClock() {
    const date       = new Date()
    const Hours      = date.getHours().toString().padStart(2,"0")
    const Minutes    = date.getMinutes().toString().padStart(2,"0")
    const Seconds    = date.getSeconds().toString().padStart(2,"0")
    clock.innerText = `${Hours}:${Minutes}:${Seconds}`
}


// setInterval(실행함수, 실행함수의 주기(ms))          : Interval: 매번 일어나야 하는 무언가
// ex. setInterval(getClock, 1000) -->  1초마다 sayHello함수 실행

// setTimeout(실행함수, 함수 실행 시간)
// ex. setTimeout(getClock, 1000)  -->  1초 뒤 sayHello함수 실행(1번)

// padStart(원하는 길이, 원하는 길이보다 적을 때 맨 앞을 채울 문자)
// padEnd(원하는 길이, 원하는 길이보다 적을 때 맨 뒤를 채울 문자)


getClock()
setInterval(getClock, 1000)