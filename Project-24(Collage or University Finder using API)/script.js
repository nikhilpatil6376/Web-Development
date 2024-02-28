let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let input=document.querySelector("input");
    let country=input.value;
    input.value="";
    let resArr=await getCollages(country);
    displayCollagesList(resArr);
})

function displayCollagesList(resArr){
    let ul=document.querySelector("ul");
    ul.innerText="";
    for(res of resArr.data){
        let li=document.createElement("li");
        li.innerText=res.name;
        ul.appendChild(li);
    }
}

async function getCollages(country){
    try{
        let url="http://universities.hipolabs.com/search?name=";
        let resArr=await axios.get(url+country);
        return resArr;
    }catch(err){
        console.log("Error: ",err);
    }
}