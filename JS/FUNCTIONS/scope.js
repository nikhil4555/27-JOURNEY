// var c =300;

let a = 009;
if(true)
{
    let a =10;
    const b =20;
    var c = 30;
    console.log('inner of let',a);
}

console.log(a);
// console.log(b);

//global scope variables can be accesed through block scope also in the fun but vice-versa not possible
console.log(c);