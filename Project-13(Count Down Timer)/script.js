//set deadline of timer
const timer_deadline=new Date("2023 Mar 05 00:00:00").getTime();

//setInterval method for calling block of code repetedly
let timer=setInterval(()=>
{
    //set current time 
    const current_time=new Date().getTime();

    //calculate remaining time to reach deadline

    let T=timer_deadline-current_time;

    //calculate Day,Hour,Minute and Second from milliseconds
    let Day=Math.floor(T/(1000*60*60*24));
    let Hour=Math.floor((T%(1000*60*60*24))/(1000*60*60));
    let Minute=Math.floor((T%(1000*60*60))/(1000*60));
    let Second=Math.floor((T%(1000*60))/1000);

    //display timer  web page
    let display_time=document.getElementById("display_time");
    display_time.innerText=Day+":"+Hour+":"+Minute+":"+Second;

    //if deadline is meet
    if(T<0)
    {
        //call clearInterval method for stopping setInterval method
        clearInterval(timer);
        display_time.innerText="Timer is Expired";
    }
},1000)