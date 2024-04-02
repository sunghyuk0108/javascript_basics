const data = `{"ticker":{"base":"BTC","target":"USD","price":"19239.66667235","volume":"6195.41747238","change":"12.09192318"},"timestamp":1665632164,"success":true,"error":""}`

const parsedData = JSON.parse(data);
//parse(): JSON 문자열을 매개변수로서 수용하고, 일치하는 자바스크립트 객체로서 변환합니다.

console.log(parsedData.ticker.price);

//stringify(): 객체를 매개변수로서 수용하고, JSON 문자열 형태로 변환합니다. 
// json 형식의 데이터를 받는 api에 정보를 보낼 때 유용함.

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

console.log(JSON.stringify(dog));
//모두 쌍따움표로 바뀐것을 볼 수 있음. true인 불리언은 json에서 유효하기 때문에 붙지 않음.

