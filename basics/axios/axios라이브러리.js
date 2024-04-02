//axios 라이브러리 사용 예시
axios.get('https://api.tvmaze.com/search/shows?q=girls')
    .then(res => {
        const data = res.data
            console.log(res);
            console.log(res.data[0].show.image.medium);
    });

    const backGroundImg = async () => {
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=girls')
        console.log(res);
        const img = res.data[0].show.image.medium;
        document.body.style.background = `url(${img}) no-repeat`
    }

    backGroundImg();

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
const h1 = document.querySelector("h1")

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement("li")
    newLI.append(jokeText)
    jokes.append(newLI)
}
//아래 getDadJoke에서 return res.data.joke를 내보내고 위의 addNewJoke에서 변수로 할당 후 새롭게 생성하는 li에 해당 변수를 넣어 joke api 데이터를 텍스트로 보여줌. 

const getDadJoke = async () => {
    try {
        const config = {headers:{Accept: 'application/json'}}
        //header를 지정하는 방법 요청할 때 객체를 전달함.
        const res = await axios.get('https://icanhazdadjoke.com', config);
        console.log(res);
        return res.data.joke;
    }
    catch (e){
        return "error!!!!"
    }
}

getDadJoke();

button.addEventListener("click", addNewJoke);
