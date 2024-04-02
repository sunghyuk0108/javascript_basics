const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOptions = Array.from(document.querySelectorAll(".color-option")); //querySelectorAll로만 하면 노드 리스트로 나오고 getElementsByClassName로만 선택하면 htmlcollection으로 주기 때문에 배열로 만들기 위해 Array.from()을 사용함
//constext를 줄여서 변수를 보통 ctx로 많이 지정함.
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");
const saveBtn = document.querySelector("#save");

canvas.width = 800;
canvas.height = 800;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;


const colors = ["red", "orange", "yellow", "green", "blue"];

function onMove (event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting (){
    isPainting = true;
}

function cancelPainting (){
    isPainting = false;
    ctx.beginPath();
}

function onLineWidthChange(event){
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}

function onColorChange (event){
    console.log(event.target.value);
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue
    color.value = colorValue;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick (){
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } 
}

function onDestroyClick (){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick (){
    isFilling = false;
    modeBtn.innerText = "Fill";
    ctx.strokeStyle = "white";
}

function onFileChange (event){
    const file = event.target.files[0]; 
    const url = URL.createObjectURL(file); //url 생성함 
    const image = new Image(); //이미지 생성
    image.src = url; //이미지 src = url 설정
    image.onload = function (){
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

function onDoubleClick (event){
    const text = textInput.value;
    if(text !==""){
        ctx.save(); // save(); 는 ctx의 현재 상태, 색상, 스타일 모든 것을 저장한다.
        console.log(event.offsetX, event.offsetY)
        ctx.lineWidth = 1;
        ctx.font = "68px serif"
        ctx.fillText(text, event.offsetX, event.offsetY)
        ctx.restore(); //save(); 사용 후 위 수정을 완료했다면 해당 restore();를 사용하면 완료된다. sava(); restore(); 사이에서는 정말 어떤 수정을 하던 저장되지 않는다. 사이에 내용을 한번 완료하면 원래 저장된 상태로 돌아간다.
    }
}

function onSaveClick (event){
    const url = canvas.toDataURL(); //toDataURL(); 메소드로 canvas url주소를 받아옴
    const a = document.createElement("a"); // 링크태그 생성 후 href = url로 설정 후 링크에 download = "파일명" 속성 추가 설정 후 클릭시 동작하게함.
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color=>color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);

fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);



//forEach문을 활용해서 colorOptions의 배열을 가져와 배열에 모두 click에 대한 이벤트를 적용해줌


/* function onClick(event){
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick); */
// 마우스를 움직일 때 선 그리기

/*ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);
ctx.arc(290, 120, 50, 0, 2 * Math.PI); //2 * Math.PI 자리는 ending angle 원을 끝내는 angle임
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(275, 100, 8, Math.PI, 2 * Math.PI); 
ctx.arc(305, 100, 8, Math.PI, 2 * Math.PI); 
ctx.fill();*/ 
//연습으로 사람을 그려봄 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

/* ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(50,50);
ctx.fill(); */ //선을 연결해서 정사격형을 만드는 과정

/* ctx.beginPath(); //beginPath();는 경로를 새로 만듬
ctx.rect(250, 250, 100, 100);
ctx.fillStyle = "blue";
ctx.fill(); */