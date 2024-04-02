const p1 = {
    score : 0,
    button : document.querySelector("#p1button"),
    display : document.querySelector("#p1display")
}

const p2 = {
    score : 0,
    button : document.querySelector("#p2button"),
    display : document.querySelector("#p2display")
}

const scoreMain = document.querySelector("#scoreMain");

const reset = document.querySelector("#reset");
const playto = document.querySelector("#playto");

let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponents) {
    if(!isGameOver){
        player.score +=1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.style.color = "lightgreen";
            opponents.display.style.color = "red";
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", function(){
    updateScores(p1, p2);
});

p2.button.addEventListener("click", function(){
    updateScores(p2, p1);
});

playto.addEventListener("change", function(){
    winningScore = parseInt(this.value);
    resetScore();
});

//parseInt 메서드는 타입 문자열을 숫자로 바꿔줌.

reset.addEventListener("click", resetScore);

function resetScore (){
    isGameOver = false;
    p1.score = 0; 
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.style.color = "black"
    p2.display.style.color = "black"
}

const squear = document.querySelector("#squear");

squear.addEventListener("click", Namo);

function Namo(){
    setTimeout(three,3000);
}

function three(){
    squear.style.borderRadius = "100px"
}

function colorRize(){
    squear.style.backgroundColor = "red"
}
