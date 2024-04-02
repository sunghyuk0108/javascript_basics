const delayedColorChange = (color, delay) => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

delayedColorChange("red", 1000)
    .then(()=>delayedColorChange("orange", 1000))
    .then(()=>delayedColorChange("yellow", 1000))
    .then(()=>delayedColorChange("green", 1000))
    .then(()=>delayedColorChange("blue", 1000))
    .then(()=>delayedColorChange("indigo", 1000))
    .then(()=>delayedColorChange("violet", 1000));

const div = document.querySelector('div');
console.log(div);

function moveTop(){
    return new Promise((resolve, reject)=>{
        div.style.top = "50px";
        resolve();
    });
}

function moveDiv(px, timeout){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            div.style.left = px;
            resolve();
        }, timeout);
    });
}

moveDiv("0px", 1000)
    .then(()=>{
        moveDiv("100px", 1000)
    })
    .then(()=>{
        moveDiv("200px", 2000)
        .then(()=>{
            moveTop();
        })
    })
    


