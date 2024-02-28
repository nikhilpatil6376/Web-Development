const container = document.getElementById("js_container");
const highlight = document.getElementById("js_highlight");
let containerHeight;

window.onscroll = function () 
{
    containerHeight = container.offsetHeight - window.innerHeight;
    let containerPos = container.getBoundingClientRect();
    let diff = containerHeight + containerPos.top;
    let progressPercentage = diff / containerHeight * 100;
    let cssWidth = Math.floor(100 - progressPercentage);
    highlight.style.width = cssWidth + "%";
    highlight.textContent = cssWidth + "%";
    highlight.style.color = "black";
    highlight.style.fontSize = "15px";

}