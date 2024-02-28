//Using hexColorCode
// let randomColorGenerator=function(){
//     let val="123456789ABCDEF";
//     let hexColor="#";
//     for(let i=0;i<6;i++)
//     {
//         hexColor= hexColor+val[Math.floor(Math.random()*16)];
//     }
//     return hexColor;
// }

// let btn=document.getElementById("btn")
// btn.addEventListener("click",function(event){
//     document.body.style.backgroundColor= randomColorGenerator();
// })



//Using rgbValues
let randomColorGenerator=function(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}

let btn=document.getElementById("btn")
btn.addEventListener("click",function(event){
    document.body.style.backgroundColor= randomColorGenerator();
})

