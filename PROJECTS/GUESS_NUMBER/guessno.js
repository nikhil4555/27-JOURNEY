let randomnum = parseInt(Math.floor(Math.random()*100+1));

const userinput = document.querySelector("#guess");
const submit = document.querySelector('#submit');
const  guesslot = document.querySelector('.guessess');
const remaining = document.querySelector('.lastres');

const loworhigh = document.querySelector('.loworhigh');
const startover = document.querySelector('.result'); 

const p = document.createElement('p') ;

let prevguess = []
let numofguesses = 1;
let playgame = true;


if(playgame)
{
    submit.addEventListener('click',function(e)
    {
        e.preventDefault();
        const guess1 = parseInt(userinput.value);
        validateGuess(guess1);
    })
}

function validateGuess(guess)//to check its a valid number or not
{
if(isNaN(guess))
{
    alert("Please enter a NUMBER!");
}
else if(guess<1)
{
    alert("please enter  a number greater than zero")
}
else if(guess>100)
{
    alert("please enter a number lessthan 100")
}
else
{
    prevguess.push(guess);
    if(numofguesses === 11)
    {
        displayguess(guess)
        displaymessage(`game over . random number was  ${randomnum}`)
        endgame();
    }
    else{
        displayguess(guess);
        checkGuess(guess);

    }
}
}
function checkGuess(guess)//will make an range as per the given input like high or  low and will compare with the actual number and prints msg
{
    if(guess === randomnum)
    {
        displaymessage(`guessed it right`);
        endgame();
    }
    else if(guess > randomnum)
    {
        displaymessage('your guess is too high');
    }
    else if(guess < randomnum)
    {
        displaymessage(`your guess is too low`)
    }
}
function displayguess(guess)//cleanup method
{
    guesslot.innerHTML += `${guess}, `;
    numofguesses++;
    remaining.innerHTML = `${11 - numofguesses}`;
    userinput.value='';
}
function displaymessage(message)
{
    loworhigh.innerHTML= `<h2>${message}</h2>`;
}
function endgame()
{
    userinput.value=' ';
    userinput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<h2 id = 'newgame'> start new game </h2>`
    startover.appendChild(p);
    playgame = false;
    newGame()
}
function newGame()
{
    const newgamebutt = document.querySelector('#newgame');
    newgamebutt.addEventListener('click',(e)=>
    {
        randomnum = parseInt(Math.floor(Math.random()*100+1));
        prevguess = [];
        numofguesses = 1;
        guesslot.innerHTML='';
        remaining.innerHTML=`${11-numofguesses} `;
        userinput.removeAttribute('disabled')
        startover.removeChild(p);

        playgame=true;
    })
}



