const $counter = document.getElementById("counter");
const $increase = document.getElementById("increase");
const $decrease = document.getElementById("decrease");

let num = 0;

const render = () => {
  $counter.innerHTML = num;
};

function plus() {
  num++;
  console.log("increase button click!", num);
  return render();
}

function minus() {
  num--;
  console.log("decreace button click!", num);
  return render();
}

$increase.addEventListener("click", plus);
$decrease.addEventListener("click", minus);

const box = document.querySelector(".box");
console.log(box);
