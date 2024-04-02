const req = new XMLHttpRequest();

req.onload = function () {
    console.log("all done with request!!!")
    const data = JSON.parse(this.responseText);
    console.log(data)
}

req.onerror = function () {
    console.log("error")
    console.log(this)
}

req.open('GET', 'https://api.tvmaze.com/search/shows?q=betman')
req.send();

//해당 방식은 현재 잘 안씀 예시로 만들어봄.