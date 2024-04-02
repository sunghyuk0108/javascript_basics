const slideBox = document.querySelector(".slide_box");
const slideContainer = document.querySelector(".slide_container");
const slideContainerLi = document.querySelectorAll(".slide_container li");
const slideLength = slideContainerLi.length;
const slideWidth = "100";
let currentIdx = 0;

const reverseSlideContainerLi = [...slideContainerLi].reverse();
console.log(reverseSlideContainerLi);

const cloneContainerLi = () => {
  for (i = 0; i < slideLength; i++) {
    const cloneAppend = slideContainerLi[i].cloneNode(true);
    slideContainer.append(cloneAppend);
    const clonePrepend = reverseSlideContainerLi[i].cloneNode(true);
    slideContainer.prepend(clonePrepend);
  }
};

cloneContainerLi();

const currentSlides = document.querySelectorAll(".slide_container li");
const newSlideLength = currentSlides.length;

const updateWidth = () => {
  const newWidth = slideWidth * newSlideLength;
  console.log(newWidth);
  slideContainer.style.width = `${newWidth}%`;
};

updateWidth();

const setInitialPos = () => {
  const initialValue = -(slideWidth * slideLength);
  console.log(initialValue);
  slideContainer.style.transform = `translateX(${
    initialValue / newSlideLength
  }%)`;
  console.log(initialValue / newSlideLength);
  //총 길이 1200% 복사된 요소가 아닌 원래 element위치로 가려면 33.333% 값이 나와야함.
  setTimeout(() => {
    slideContainer.classList.add("transition03");
  }, 100);
};

setInitialPos();

const moveSlide = (num) => {
  slideContainer.style.left = -num * slideWidth + "%";
  currentIdx = num;
  if (currentIdx == slideLength || currentIdx == -slideLength) {
    setTimeout(() => {
      slideContainer.style.left = "0px";
      slideContainer.classList.remove("transition03");
      currentIdx = 0;
    }, 300);
    setTimeout(() => {
      slideContainer.classList.add("transition03");
    }, 350);
  }
};

const slideLeftBt = document.querySelector(".left_bt");
const slideRightBt = document.querySelector(".right_bt");

slideLeftBt.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
slideRightBt.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

let timer = true;

function autoSlide() {
  if (timer == true) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
}

autoSlide();

//menu code
const mainMenu = document.querySelector("#main_menu");
const subMenu = document.querySelector("#sub_menu");

const subMenuHandler = () => {
  subMenu.classList.toggle("display_on");
};

mainMenu.addEventListener("click", subMenuHandler);
