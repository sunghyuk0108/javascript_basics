 const form = document.querySelector("#searchForm");
 form.addEventListener("submit", async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    // 클라이언트의 입력값을 searchTerm 변수로 설정함.
    const config =  { params : { q: searchTerm} }
    //위의 params는 postman에서 확인 가능함.
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    searchTerm = "";
 });

 /*    const data = res.data;
    console.log(data);
    for(let i of data){
        console.log(i);
        const img = document.createElement('IMG');
        img.src = i.show.image.medium;
        document.body.append(img);
    } 내가 적용해본 방식 */ 


 const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
 } 