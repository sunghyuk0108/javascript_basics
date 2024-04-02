const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const body = document.querySelector("body");

function randomColor (){
    const r = Math.floor(Math.random() * 255 +1);
    const g = Math.floor(Math.random() * 255 +1);
    const b = Math.floor(Math.random() * 255 +1);
    if(r+g+b<=150){
        return `rgb(${255}, ${255}, ${255})`
    } else{
        return `rgb(${r}, ${g}, ${b})`
    }
}

function tenColor(){
    const colors = ["blue", "red", "yellow"];
    return `${colors[Math.floor(Math.random() * colors.length)]}`
}
//위 처럼 색상을 지정할거면 변수의 .length를 활용해서 출력하는게 나을듯 그럼 0, 1, 2 가 랜덤하게 출력될 테니까

// 함수를 변수로 지정해서 그 값을 아래 body, h1에 넣으면 좋을듯
button.addEventListener("click", function(){
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    h1.innerHTML = newColor;
});
