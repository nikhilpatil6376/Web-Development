let randomColor=()=>
{
    let val="123456789ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++)
    {
        cons=cons+val[Math.floor(Math.random()*16)];

    }
    return cons;
}

let colorChange=()=>
{
    document.body.style.backgroundColor= randomColor();
}

let btn1=document.getElementById("button")
btn1.addEventListener("click",colorChange)