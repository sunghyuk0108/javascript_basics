const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e){
        console.log("error", e);
    }
}

//비동기 함수는 try-catch문으로 전부 감싸야함
loadStarWarsPeople();