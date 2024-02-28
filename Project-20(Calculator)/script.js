function insert(num)
{
    document.form.display.value=document.form.display.value+num;
}

function equals()
{
    let txt=document.form.display.value;
    if(txt)
    {
        try
        {
            document.form.display.value=eval(txt);
        }
        catch
        {
            document.form.display.value="Invalid Input";
        }
    }
    else
    {
        document.form.display.value="ERROR";
    }
}

function all_clear_btn()
{
    document.form.display.value="";

}

function clear_btn()
{
    let txt=document.form.display.value;
    document.form.display.value=txt.substring(0, txt.length-1);
}

