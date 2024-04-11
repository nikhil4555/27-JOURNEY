const getcolor = () => {
    const random = Math.floor(Math.random()*16777215);
    const randomcode = "#"+ random.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById('code').innerText = randomcode;

    //for automatic clip board of the code
    navigator.clipboard.writeText(randomcode);
    

};

//event call
const colors = document.getElementById('btn');
colors.addEventListener('click',getcolor);


//inital call for everry 5sec of refreshing
setInterval(function()
{
 getcolor();   
},5000);