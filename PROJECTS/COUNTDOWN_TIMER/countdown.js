const target = "11, April 2024 9:30";

let inputs  = document.querySelectorAll(".timer input");
console.log(inputs);


function clock(){
    const req = new Date(target);
    const now = new Date();
    const  timeLeft = (req - now)/1000;

    console.log(timeLeft);
    if(timeLeft<0)return;
    
    inputs[0].value = Math.floor(timeLeft / 3600 / 24); //days
    inputs[1].value = Math.floor((timeLeft / 3600)%24); //hours
    inputs[2].value = Math.floor( (timeLeft / 60) % 60 );//minutes
    inputs[3].value = Math.floor( timeLeft % 60 );//seconds

    

}
clock();

setInterval(
    ()=>
    {
        clock();
    }, 1000);//for every 1000ms i.e for each sec the clock will be called and refreshes

