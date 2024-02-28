const decrement_btn =document.getElementById("decrement_btn");
const increment_btn=document.getElementById("increment_btn");
const display_value=document.getElementById("display_value");
const  reset_btn=document.getElementById("reset_btn");



decrement_btn.addEventListener("click",()=>
{
    let value=Number(display_value.innerText);
    if(value<=0)
    {
        alert("Negative Value Is Not Allowed");
    }
    else
    {
        display_value.innerText--;
    }
})

increment_btn.addEventListener("click",()=>
{
    let value=Number(display_value.innerText);
    if(value>=10)
    {
        alert("Above 10 Value is Not Allowed");
    }
    else
    {
        display_value.innerText++;
    }
})


reset_btn.addEventListener("click",()=>
{
    display_value.innerText=0;
})