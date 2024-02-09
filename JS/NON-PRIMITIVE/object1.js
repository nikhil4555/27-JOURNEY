const bumble = {

}
bumble.id = "555sdc"
bumble.name="manoj"
bumble.isLogdgedin=false

// console.log(bumble);

//nested objects
const regularuser= {
    email: "rakesh@gmail.com",
    fullname: {
        userfullname:{
            frstname: "rakesh",
            lastname:"chiitaa"
        }
    }
}
console.log(regularuser.fullname?.userfullname.lastname);
//use of question mark here is that it checks if the corresponding user present or not

//**************************mergeing objects

const obj = {bumble,regularuser}//one way
const obj1 = Object.assign({},bumble,regularuser)// way two using assign
const obj2 ={...bumble,...regularuser}//third and popular way used in arrays also for merging
console.log(obj2);


//**********for getting all keys */
console.log(Object.keys(bumble));
console.log(Object.values(bumble));
console.log(Object.entries(bumble));

console.log(bumble.hasOwnProperty('isLogdgedin'));

 