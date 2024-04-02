/* axios.get("https://swapi.dev/api/people/1")
.then(res => {
    console.log("respons!!!", res);
    //axios는 feach와 다르게 data가 이미 채워져 있음 feach의 경우 구문 분석하고 그 결과를 받아와야하는 단점이 있음 한마디로 .json을 호출할 필요가 없음
}); 기본 연결*/ 

//비동기 방식으로 수정해봄

const getStarWarsPerson = async (id) => {
    try{
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
    } catch(e){
        console.log("error", e);
    }
}

getStarWarsPerson(1);
getStarWarsPerson(5);
getStarWarsPerson(10);

