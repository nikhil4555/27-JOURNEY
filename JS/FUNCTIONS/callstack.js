// JS EXECUTION CONTEXT 

// JS IS A SINGLE THREADED  LANGUAGE, WHICH MEANS IT ONLY HAS ONE CALL STACK AT ANY GIVEN TIME.
// THE CALL STACK KEEPS TRACK OF ALL FUNCTIONS THAT GET CALLED DURING THE PROGRAM'S EXECUTION.


//arrow func
function greet()
{
    console.log("Nikhil ");
}

const great = ()=>
{
    console.log("Pintu");
}
greet();
great();

let square = (num) => num*num;
console.log(square(5));

let sqr = (n) =>
{
    return n*n*n;
}
console.log(sqr(3));
//if we want to return in a single statement nonedd to mention return function and no curly brackedts



// callstack funnc
// Its a function passed as an argument to another function 
const calculate = (a,b,operate)=>
{
    return operate(a,b);
}


const res = calculate(10,20,function(a,k){
    return a/k;
})

console.log(res);


