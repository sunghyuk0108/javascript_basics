fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(res => {
    console.log("response", res)
    return res.json()
})
.then(data => {
  console.log("date response", data)
  const dataArr = data
  for (let datas of dataArr){
    console.log(datas.score);
  }
})
.catch(err => {
    console.log("error", err)
})

//fetch() 문은 promise를 반환함.
const apples = ["apple", "banana", "orange"]
for(let datas of apples){
    console.log(datas)
}

const fetchMoviesScore = async () => {
    try {
        const ress = await fetch('https://api.tvmaze.com/search/shows?q=girls');
        const movie = await ress.json();
        const movies = movie
        for (let i of movies){
            console.log(i.show.name);
          }
    }
    catch(e){
        console.log("error", e)
    }
}

fetchMoviesScore();

//try {} catch() {} 문을 활용하여 오류를 확인할 수 있음