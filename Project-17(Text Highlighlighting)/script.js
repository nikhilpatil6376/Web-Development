const body=document.body;
body.innerHTML=body.innerHTML.split(" ").map(word=>
{
    return word.length>8?`<span style='background-color:yellow'>${word}</span>`:word;
}).join(" ");