const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("실패했어");
      } else {
        resolve("성공이야");
      }
    }, delay);
  });
};

fakeRequestPromise("yelp.com/api/coffee1")
  .then(() => {
    console.log("it worked !!!(page1)");
    return fakeRequestPromise("yelp.com/api/coffee2");
    //return을 통해 다음 Promise를 반환하면 아래처럼 .then() 문으로 이어갈 수 있음. 중첩하지 않고 구문을 사용할 수 있음. fakeRequestPromise() 함수 자체에 Promise가 반환됨.
  })
  .then(() => {
    console.log("it worked !!!(page2)");
    return fakeRequestPromise("yelp.com/api/coffee3");
  })
  .then(() => {
    console.log("it worked !!!(page3)");
    // return respone('https://www.naver.com');
  })
  .catch(() => {
    console.log("oh no, a request failed!!!");
  });

//  function respone(api){
//      setTimeout(function(){
//          location.href = api
//      },3000)
//  }
