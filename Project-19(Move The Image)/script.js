var moveX = 0;
var moveY = 0;
const speed = 10;
var w = document.body.clientWidth;
var h = document.body.clientHeight;
var view_W = w - 100;
var view_H = h - 100;
window.addEventListener("keydown", Control)
function Control(event) 
{
    let key = event.key;
    let bee = document.getElementById("bee");
    let pos = document.getElementById("pos");
    if (key == "ArrowUp" && moveY < view_H) 
    {
        moveY = moveY + speed;
        bee.style.bottom = moveY + "px";
        bee.style.left = moveX + "px";
        pos.innerHTML = "X: " + moveX + " Y:  " + moveY;
    }
    else if (key == "ArrowDown" && moveY > 0) 
    {
        moveY = moveY - speed;
        bee.style.bottom = moveY + "px";
        pos.innerHTML = "X: " + moveX + " Y:  " + moveY;
    }
    else if (key == "ArrowLeft" && moveX > 0) 
    {
        moveX = moveX - speed;
        bee.style.left = moveX + "px";
        pos.innerHTML = "X: " + moveX + " Y:  " + moveY;
    }
    else if (key == "ArrowRight" && moveX < view_W) 
    {
        moveX = moveX + speed;
        bee.style.left = moveX + "px";
        pos.innerHTML = "X: " + moveX + " Y:  " + moveY;
    }
    else 
    {
        bee.style.left = moveX + "px";
        bee.style.bottom = moveY + "px";
    }
}