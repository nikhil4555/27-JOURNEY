console.log(2>1);
console.log(2>=1);


//confusion arises when you compare 2 different datatypes
console.log("2">1);
console.log(2>"01");
console.log(2+2+7+8+4+"9"+6);
//**************imp i.e. except == operator the remaining operators makes the value null as 0 */
console.log(null < 0);
console.log(null >= 0);//true
console.log(null == 0);//false

console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<0);

//=== checks the datatype of both and returns the boolean
console.log(null===true);