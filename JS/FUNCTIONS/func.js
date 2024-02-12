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

function addtwo(number1,number2){

    return number1+number2;
}

const res2 = addtwo(null,null);
console.log(res2);