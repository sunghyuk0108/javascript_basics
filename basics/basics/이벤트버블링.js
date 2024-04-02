const div = document.querySelector('div');
const button = document.querySelector('button');
const section = document.querySelector("section");

div.addEventListener("click", function (e){
    alert("div");
    e.stopPropagation();
});

// e 인자값을 주고 해당 이벤트 발생 시 stopPropagation(); 을 적용해야 이벤트 버블링을 방지할 수 있음

button.addEventListener("click", function (e){
    alert("button");
    e.stopPropagation();
});

section.addEventListener("click", function(){
    alert("section");
});
