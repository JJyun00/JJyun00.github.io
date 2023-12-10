const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

// html파일에서 <img src="img/0.jpg"></img> 하는 것과 같음.
// 아직 document에는 존재하지 X, 자바스크립트에만 존재
const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImage}`

// bgImage를 body 내부에 추가
document.body.appendChild(bgImage)  // body 마지막에 추가됨
// document.body.prepend(bgImage)   // body 맨 위에 추가됨
