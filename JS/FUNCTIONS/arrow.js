//*******ARROW FUNCTIONS V.V.IMP*********

 const user = 
 {
    username: "nikhil",
    price: 999,

    welcome: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);//to refer the current context we use this keyword
    }
 }


 user.welcome()
 user.username = "bahadhur"
 user.welcome()

 console.log(this);//returns an empty object 


 //*******arrow fun */

function coffe()
{
    var username = "nikhil"
    console.log(this.user);//returns undefined
}
coffe();

const cofffe = ()=>
{
    var username = "nikhil"
    console.log(this);//returns undefined
}
cofffe()//same if we use the vaariable into it also

const addo = (n1, n2) => (n1*n2);// here we just removed the function keyword and added the arrow and also removed curly brackets and used paranthesis for only single line statement return (only for single line we use paranthesis)
console.log(addo(14,8))// similarly object also can return