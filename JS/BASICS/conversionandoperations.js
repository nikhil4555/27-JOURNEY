let score = "b";

console.log(typeof score);
console.log(typeof(score));
//convert into number
let valueinnumber = Number(score);//used to convert from string to number
console.log(typeof valueinnumber);
console.log(valueinnumber);

//"33"-->33
//"33abc"--?NaN
// true --> 1


//convert into boolean
let isloggedin = 55
let lobooleanis = Boolean(isloggedin)
console.log(lobooleanis);

//1 --> true
// ""--> false
//"nikhil"--> true


let str =33;
let strnum = String(str);
console.log(strnum);
console.log(typeof strnum);
console.log(" ");


// ****************OPerations************************* imp

let value =3
let negval = -value;
console.log(negval);
console.log(2+2);
console.log(2/8);
console.log(10%5);

let str1 = "hello"
let str2 = " nikhil"
let str3 = str1+str2;
console.log(str3);

//upto here everything normal but now the down part should be kept in mind

//***************IMP****************
console.log("1"+2);//12
console.log(2+"1");//21
console.log("1"+2+2);//122
console.log((1+2+"1"));//31

//whatever the first dataype present it will be converting into it

console.log(+true);//1


let num1,num2,num3
num1=num2=num3=2+2

//**********prefix and postfix****************
let gamecounter =100
++gamecounter
console.log(gamecounter);