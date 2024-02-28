let gameSeq=[];
let userSeq=[];
let btnColor=["red","yellow","green","purple"]
let started=false
let level=0;
let h2=document.querySelector("h2");
let higherScore=0;

document.addEventListener("keypress", function()
{
    if(started==false){
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    let randomColorIndex= Math.floor(Math.random()*3);
    let randomColor=btnColor[randomColorIndex];
    let randomColorBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    // console.log(`Game Sequence: ${gameSeq}`);
    btnFlash(randomColorBtn); 
}

function checkSeq(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            // console.log(`Level ${level} Completed ...`);
            setTimeout(levelUp,1000);
        }
    } else{
        if(higherScore<level){
            higherScore=level;
        }
        h2.innerHTML=`Game Over! <br>
         Higher Score was: ${higherScore} <br>
         Your Score is: <b>${level}</b> <br/>
         Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
        // console.log("Game Over");
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(`User Sequence: ${userSeq}`);
    checkSeq(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
