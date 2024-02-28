const timer_deadline=new Date("2024 Mar 05 00:00:00").getTime();

let timer=setInterval(()=>
{
    const current_time=new Date().getTime();

    let T=timer_deadline-current_time;

    let Day=Math.floor(T/(1000*60*60*24));
    let Hour=Math.floor((T%(1000*60*60*24))/(1000*60*60));
    let Minute=Math.floor((T%(1000*60*60))/(1000*60));
    let Second=Math.floor((T%(1000*60))/1000);

    let display_time=document.getElementById("display_time");
    display_time.innerText=Day+":"+Hour+":"+Minute+":"+Second;

    if(T<0)
    {
        clearInterval(timer);
        display_time.innerText="Timer is Expired";
    }
},1000)