const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")   // == document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos(){
    // localStorage는 only 텍스트로만 저장됨
    // 따라서 배열(toDos)은 array 형태로 저장되지 않음
    // 따라서 해결법 --->
    // JSON.stringify() 는 변수 뭐든 string 형태로 바꿔줌.
    // JSON.stringify()로 array처럼 생긴 string으로 바꾸어 localStorage에 저장
    // 화면에 불러올 때는 문자열을 JSON으로 바꿔주는 json.parse() 사용하여 array로 꺼냄
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove()                                                     // 화면에서 삭제
    toDos = toDos.filter((toDo) => toDo.Id !== parseInt(li.id))     // db에서 삭제
    saveToDos()
}

function paintToDo(newTodo){
    const li = document.createElement("li")
    li.id = newTodo.Id
    const span = document.createElement("span")
    span.innerText = newTodo.Text
    const button = document.createElement("button")
    button.innerText = "✅"
    button.addEventListener("click", deleteToDo)
    li.appendChild(button)
    li.appendChild(span)    // span을 li 내부로 넣어주기
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {       // 구분을 위한 랜덤한 key값을 주기 위해 obj로 저장
        Id: Date.now(),
        Text: newTodo
    }
    toDos.push(newTodoObj)     // 1. 먼저 배열에 저장
    paintToDo(newTodoObj)      // 2. 화면에 그려줌
    saveToDos()                // 3. localstorage에 투두리스트 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach((item) => {
        paintToDo(item)
    });
}