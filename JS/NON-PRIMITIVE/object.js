//******V.V.IMP  OBJECTS */

// OBJECTS  can be declare with literals and through constructors
// through constructors then its a singleton
// through literals i.e. normal way then no singleton

//objects has key valuepair

const symbol = Symbol('key1')

const user = {
    name: "Nikhil",
    fullname:"gummadavelly nikhil",
    [symbol]:"mykey1",//to reference a symbol
    age: 20,
    location:"hyderabad",
    email:"nikhil@yahoo.com",
    isloggedin:false,
    lastlogedin:['monday','saturday']
}

//to access the elements we can use . or []

console.log(user.email);
console.log(user['email']);
console.log(user['fullname'])//cannot acces through the dot . operator
console.log(user[symbol]);

user.email='gemini.gemin@brad.com'
// Object.freeze(user);//here after freezing no changing after it
user.email='nikhil&kfn'
console.log(user);

//function is a universal here for everything we can declare a functiion as we are creating a function using the object
user.greeting = function(){
    console.log("hello nikhil");
}

//this keyword --> refernce to a same variable

user.greets = function(){
    console.log(`hi  user ${this.fullname}`);
}


console.log(user.greeting);
console.log(user.greets());

