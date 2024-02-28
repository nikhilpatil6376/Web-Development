let btnAdd=document.querySelector("#add");
let input=document.querySelector("input");
let ol=document.querySelector("ol");

btnAdd.addEventListener("click",function(){
    let listItem=document.createElement("li");
    listItem.innerText=input.value;

    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.classList="delete";
    listItem.appendChild(deleteBtn);

    ol.appendChild(listItem);
    input.value="";
})

ol.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let parentElement=event.target.parentElement;
        parentElement.remove();
    }
})

