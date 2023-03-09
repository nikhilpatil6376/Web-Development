function addToDoItem() 
{
    let li = document.createElement("li");
    let textNode = document.createTextNode(document.forms["myForm"]["toDO"].value);
    li.appendChild(textNode);
    document.getElementById("orderedList").style.display = "block";
    document.getElementById("orderedList").appendChild(li);
}