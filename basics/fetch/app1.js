fetch("https://swapi.dev/api/people/1")
//fetch 문은 get요청이 자동으로 실행된다. 그리고 promise를 반환함
//한가지 단점은 응답 객체의 본문이 자동으로 구문 분석되지 않아 ReadableStream으로 바디가 확인되기 때문에 json을 반환하도록 요청했다고 가정하에 .json 형식으로 구문을 분석해야함.

.then(res => {
    console.log("resolved", res);
    return res.json();
    //.then(data => console.log(data));로 처리해도 되고 두번째 retrun 문을 사용해 프로미스를 반환하고 .then 내용처럼 깔끔하게 처리해도 동일함.
    //res.json()은 JSON.parse와는 다르다.
    //res.json()은 간단하지만 주의할 점은 res.json도 프로미스로 반환해야 한다. 그래서 .then을 추가해야함
    //res.json()을 사용하면 response body를 읽을 수 있다?
})
.then((data)=>{
    console.log(data);
    return fetch("https://swapi.dev/api/people/2")
    //만약 첫 번째 요청이 처리된 후에 people/2에 요청을 보내려는 경우
})
.then(res => {
    console.log("resolved2", res);
    return res.json();
})
.then((data)=>{
    console.log(data);
})
// 값을 return 하고 그다음 .then으로 프로미스를 처리해도됨.
.catch(e => {
    console.log("error", e)

});
//fetch 문으 promise를 반환함.
