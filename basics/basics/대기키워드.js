const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//     .then(()=>delayedColorChange("orange", 1000))
//     .then(()=>delayedColorChange("yellow", 1000))
//     .then(()=>delayedColorChange("green", 1000))
//     .then(()=>delayedColorChange("blue", 1000))
//     .then(()=>delayedColorChange("indigo", 1000))
//     .then(()=>delayedColorChange("violet", 1000))

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
}

const testBt = document.querySelector(".bg-bt");
console.log(testBt);

testBt.addEventListener("click", rainbow);

//await는 비동기 함수에만 쓰이며 promise가 해결될 때까지 실행을 멈추는 키워드임
//주로 정보를 가지고 해결하는 promise를 다루게 될것임.

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    });
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("caught an error!");
    console.log("error is:", e);
  }
}
