const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function clickLoginSubmit(event) {              // 로그인 버튼 클릭 시
    event.preventDefault()   // 브라우저가 기본 동작을 실행하지 못하게 막아주는 함수. submit의 경우 발생하면 기본으로 브라우저가 새로고침 되는데 그걸 막음
    loginForm.classList.add(HIDDEN_CLASSNAME)   // 로그인폼 숨기기
    const userName = loginInput.value           // 유저 이름 변수 저장
    localStorage.setItem(USERNAME_KEY, userName)  // 로컬저장소에 유저 이름 저장
    paintGreetings(userName)
}

function paintGreetings(username) {
    greeting.innerText = `✔ ${username}'s To Do List`    // 유저 이름 h1에 저장
    greeting.classList.remove(HIDDEN_CLASSNAME) // 유저 이름 보여주기
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    // 로그인폼 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", clickLoginSubmit)  // 함수에 "()"를 입력하지 않아도 event object를 argument로 줌
} else {
    // hello 보여주기
    paintGreetings(savedUsername)
}