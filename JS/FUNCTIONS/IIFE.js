//*******IIFE --> IMMEDIATELY INVOKED FUNCTION EXPRESSION */

//It involves creating a function expression and immediately invoking it. This pattern is often used to create a private scope for variables, preventing them from polluting the global scope.

//()()// first one for defintion and second for excution

(function coffe(){
    console.log(`CD DB CONNECTION SUCCESFUL`);
})();
// HERE ';' plays an imp role where it makes an end with that if not there then error occurs
//to remove the global scope pollution sometimes we use iife

((NAME)=>{
    console.log(`UNSUCCESSFUL SORRY ${NAME}`);
})('NIKHIL')