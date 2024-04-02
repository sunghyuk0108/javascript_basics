const catagories = document.querySelector("#catagories");

const test = async () => {
    try{
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    console.log(res)
    //res headers -> constent-type 확인가능
    console.log(res.data.meals);
        for(let i = 0; i < res.data.meals.length; i++){
            make(res.data.meals[i].strCategory
                );
            
        }
    } catch (e) {
        console.log(e);
    }
}

function make (i){
    const newLi = document.createElement("li");
    const img = document.createElement("img");
    newLi.append(img);
    img.src = `images/${i}.png`
    newLi.append(i);
    catagories.append(newLi);
}

test();

