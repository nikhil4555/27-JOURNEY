//********  functions think as making everything  code into a packagea and using everywhere we want*** */
function myname(){
    console.log('N');
    console.log('i');
    console.log('k');
    console.log('h');
    console.log('i');
}
myname//refernce
myname()//exceution

function addtwonum(number1,number2)//through parameters 
{
    console.log(number1+number2);
}
const res = addtwonum(3,5);//through arguments
console.log("result: ",res);//only if the function has the return type then only it wil stores in the variable if not givesa as undefined
// here above we are just storing that value in that variable we cant access through it
function addtwo(number1,number2){

    return number1+number2;
}

const res2 = addtwo(null,null);
console.log(res2);

// ************V.V.IMP USING REST OPERATOR****************

function calculateCartprice(INT1,int2,...num1)//... rest or spread operator used when to print all the numbers in a bundle format 
{
    return int2;
}
console.log( calculateCartprice(5));  
console.log( calculateCartprice(5,58,877,8999));  


// ********check the type script carefully
const anu =
{
    username: "Nikhil",
    price: 9985
}
function handleObject(anyobj)
{
    console.log(`User id  ${anyobj.username} and price is ${anyobj.price}`);
}
handleObject(anu);

// can also pass the arrayas too

const nwArr = [100,200,500,899]

function returnvakue(nwArr)
{
    return nwArr[1];
}

// console.log(returnvakue(nwArr));
console.log(returnvakue([588,587,5890]));//here we can directly pass the arr in the function call itself