const score =500;
console.log(score);

const balance = new Number(151.1);//explicitly mentioning with object 
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(4));//after the decimal value it will add the no.of zeros accordingly to the given no.

const newnum = 25.589;
console.log(newnum.toPrecision(2));//round off to the no.of value that we specify

const hundreds = 100000
console.log(hundreds.toLocaleString());

// ********************maths****************

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(52233.2));
console.log(Math.ceil(5.45));//rounds off tot he next higher number only
console.log(Math.floor(5.98));//rounds of to the lowest number only

console.log(Math.random());//values b/w 0-1
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max =20;

console.log(Math.floor(Math.random() * (max-min+1) )+min)