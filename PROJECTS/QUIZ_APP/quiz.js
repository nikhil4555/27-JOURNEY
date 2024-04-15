const questions = [
    {
        'que': 'What is the full form of HTML?',
        'a': 'Hyper Text Markup Language',
        'b': 'Hidden Text Markup Language',
        'c': 'Hyper Text makeup Language',
        'd': 'Hyper Text Markup Langore',
        'correct': "a"
    },
    {
        'que': "Which of the following is a client site language?",
        'a': "Java",
        'b': "C",
        'c': "Python",
        'd': "JavaScript",
        'correct': "d",
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b",
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Jason Object Notation",
        'c': "Cascading Style Sheet",
        'd': "Helicopters Terminals Motorboats Lamborginis",
        'correct': "c",
    }
]

const quebox = document.getElementById('quebox');
const optioninput = document.querySelectorAll('.options');


let index=0;
let total = questions.length;
let right=0,
    wrong=0;

const loadquestion= ()=>
{
    if(index === total)
    {
        return endquiz();
    }

    reset();//makes the input unselected after going to next question

    const data = questions[index]; //fetching data from array of objects through indexes
    quebox.innerText = `${index+1}) ${data.que}`; //displaying the question 
    console.log(data);
    //displaying the options as its a node list
    optioninput[0].nextElementSibling.innerText= data.a//taking from input and placing in place of labels
    optioninput[1].nextElementSibling.innerText= data.b
    optioninput[2].nextElementSibling.innerText= data.c
    optioninput[3].nextElementSibling.innerText= data.d
    
}

document.getElementById('btn').addEventListener('click',()=>
{
    submitquiz();
})//for submitting the quiz button

document.getElementById('bt-n').addEventListener('click',()=>{
    optioninput.forEach(
        (input) => 
        {
            input.checked=false
        }
    ) 
}
)//for clearing the options


const submitquiz=()=> //after submit button click it checks the right ans and also updatesthe index to next que
{
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct)
    {
        right++;
    }
    else{
        wrong++;
    }

    index++;
    loadquestion();
    // return;
}

const getAnswer=()=>//to fetch value from input of html and return it to check if the value matches
{
    let answer;
    optioninput.forEach((input)=>
    {
        if(input.checked)
        {
          answer = input.value;//before directly the return was placed here butas it return the arrow function not the getanswer function we intriduced aa variable as answer
        }
    })
    return answer;
}

const reset=()=> //makes the input unselected after going to next question
{
    
    optioninput.forEach(
        (input) => 
        {
            input.checked=false
        }
    )
}

loadquestion();
const endquiz=()=>
{
    document.getElementById('box').innerHTML=
    `<h3>Thank you for playing the quiz</h3>
    <h2>${right} /  ${total} are correct </h2>`
}


