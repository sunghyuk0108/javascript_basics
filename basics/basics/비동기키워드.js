// async 는 promise를 약속하는 비동기 키워드임
const sing = async () => {
  throw "oh no, problem!!";
};

sing()
  .then((data) => {
    console.log("promise resolved with :", data);
  })
  .catch((err) => {
    console.log("oh no, promise rejected!");
    console.log(err);
  });

const login = async (username, password) => {
  if (!username || !password) throw "missing credentials";
  if (password === "corgifeetarecute") return "welcome!";
  throw "invalid password";
};

login("akjsdhsa", "corgifeetarecute")
  .then((msg) => {
    console.log("logged in!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });

// 드림코딩

// delay ms를 파마리터로 받고 promise를 리턴하는 함수
// resolve
function delay(ms) {
  //executor : resolve 시 정상 실행
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

async function pickFruits() {
  // 해당 코드는 apple을 받아오는데 1초, banana를 받아오는데 1초 총 2초가 걸림
  // 병렬 처리를 위해서 Promise.all 메서드를 사용하면됨
  const apple = await getApple();
  const banana = await getBanana();

  return `${apple} + ${banana}`;
}

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickFruits().then((res) => {
  console.log(res, "병렬처리 x");
});
pickAllFruits().then((res) => {
  console.log(res, "병렬처리 O");
});
