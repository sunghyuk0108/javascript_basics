const startBt = document.querySelector(".start-bt");
const firstSlot = document.querySelector(".first_slot");
const secondSlot = document.querySelector(".second_slot");
const secondSlotList = document.querySelectorAll(".roll");
const secondSlotLastRoll = secondSlotList[secondSlotList.length - 1];

let companySlot = {
  isMove: false,
};

let numberSlot = [
  { isMove: false, delay: 500 },
  { isMove: false, delay: 1000 },
  { isMove: false, delay: 1500 },
  { isMove: false, delay: 2000 },
];

let timeOutList = [];

const animationEndDetector = (element) => {
  return new Promise((reslove, reject) => {
    // animation이 종료되는 시점에 reslove() 호출
    const handleAnimationEnd = () => {
      reslove("첫벗째 슬롯 애니메이션이 종료되었습니다.");
      element.classList.remove("move");
      element.removeEventListener("animationend", handleAnimationEnd); // 이벤트 리스너 제거
    };

    element.addEventListener("animationend", handleAnimationEnd);
  });
};

const startCompanySlotAnimation = async () => {
  if (companySlot.isMove) {
    throw new Error("이미 게임이 시작되었습니다.");
  } else {
    console.log("slot머신 게임이 시작되었습니다.");
    companySlot.isMove = true;
    firstSlot.classList.add("move");

    return animationEndDetector(firstSlot);
  }
};

function startNumberSlotAnimation() {
  for (let i = 0; i < secondSlotList.length; i++) {
    console.log(i);
    const timer = setTimeout(() => {
      secondSlotList[i].isMove = true;
      secondSlotList[i].classList.add("move");
      timeOutList.push(timer);
    }, numberSlot[i].delay);
  }

  return animationEndDetector(secondSlotLastRoll);
}

// 체이닝 방식을 더 선호함
const gameStart = () => {
  startCompanySlotAnimation()
    .then((firstRollResult) => {
      console.log(firstRollResult); // 첫번째 롤링 완료
      return startNumberSlotAnimation();
    })
    .then((secondRollResult) => {
      console.log(secondRollResult, "마지막 롤 종료 확인"); // 두번째 롤링 완료
      timeOutList.forEach((timer) => {
        clearTimeout(timer);
      });
      console.log("후처리"); // 후처리 작업
    })
    .catch((error) => {
      console.log(error); // 에러 발생 시 처리
    });
};

startBt.addEventListener("click", gameStart);
// gameStart();
