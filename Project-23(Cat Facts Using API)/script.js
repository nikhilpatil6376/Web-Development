let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let fact=await getFact();
    // console.log(fact);
    let p=document.querySelector("#result");
    // console.log(p);
    p.innerText=fact;
})

let url="https://catfact.ninja/fact";
async function getFact(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }catch(err){
        return "Not Found, Try Again...";
    }
}