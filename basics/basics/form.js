
const form = document.querySelector('form');
const list = document.querySelector("#list");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addTweet(productInput.value, qtyInput.value);
    productInput.value = "";
    qtyInput.value = ``;
});

const addTweet = (productValue, qtyValue) => {
    const li = document.createElement("li");
    list.appendChild(li);
    li.innerText = `${qtyValue} ${productValue}`;
}

// 이벤트 위임에 대한 내용임.
list.addEventListener("click", function(e){
    console.dir(e.target)
    e.target.nodeName === "LI" && e.target.remove();
});

// ul인 list의 타겟을 확인하고 nodeName === "LI"와 같다면 지워지게함

//target이 뭔지 활용해서 그 타겟만 지우기

