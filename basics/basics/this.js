function randomColor (){
    const r = Math.floor(Math.random() * 255 +1);
    const g = Math.floor(Math.random() * 255 +1);
    const b = Math.floor(Math.random() * 255 +1);
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

for(let button of buttons){
    button.addEventListener("click", function (){
        this.style.backgroundColor = randomColor();
        this.style.color = randomColor();
    });
}

//위 함수가 중복되서 쓰이니까 colorRize 라는 함수를 만들어서 그 함수 코드를 넣으면 간단함.

for(let h1 of h1s){
    h1.addEventListener("click", colorRize)
}

function colorRize (){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}