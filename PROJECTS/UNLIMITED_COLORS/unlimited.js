function randomcode()
{

    const num = Math.floor(Math.random()*16777215)
    console.log(num);
    const randomcode = '#'+ num.toString(16);
    return randomcode;
}


const startinterval = document.querySelector('.btn-1');
const stopinterval = document.querySelector('.btn-2');

let changecolor;
const start = function()
{
    if(!changecolor)//after stopage as we are making into null only if its exist it will run again
    {
        changecolor=setInterval(change,1000)
    }
    
    function change()
    {
        document.body.style.backgroundColor = randomcode();
        
    }
}
const stop = function()
{
    clearInterval(changecolor);
    changecolor = null;//making effecient by making it as null after stopping
}

startinterval.addEventListener('click',start);
stopinterval.addEventListener('click',stop);