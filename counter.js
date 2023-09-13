let counter=0;
function inc()
{
    counter=counter+1;
    update();
}
function reset()
{
    counter=0;
    update();
}
function dec()
{
    counter=counter-1;
    update();
}
function update()
{
    document.querySelector(".result").innerHTML=`${counter}`;
}
