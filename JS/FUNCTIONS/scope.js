// var c =300;

let a = 9;
if(true)
{
    let a =10;//block scope
    const b =20;
    var c = 30;//global scope
    console.log('inner of let',a);
}

console.log(a);
// console.log(b);

//global scope variables can be accesed through block scope also in the fun but vice-versa not possible
console.log(c);


function one(){
    const username = "NIKHIL"

    function two()
    {
        const website = "YT"
        console.log(username);
    }
    //console.log(website);//here the matter is simple as the child asking iceccream to aparent and they can have but vice versa cant happen
    two();
}
one();

//********tha above concept is similar to closures */

//similarly with if else blocks
if(true)
{
    const user="nikhil";
    if(user==="nikhil"){
        const web = " yt"
        console.log(user+web);
    }
    // console.log(web);//throws error as the scope of the web ends in the above scope
}
// console.log(user);//same as the above



//*************QUESTION */

console.log(add1(55))
function add1(num)
{
    return num+1
}

// in both ways we can declare the functions
//but in the second way we cant call the function before decleration is called hoisting

// add2(54)
const add2 = function(num)
{
    return num+2
}
add2(5)