//stack and heap memory 
//stack uses primitive memory --> u will find an copy only
//heap uses non primitive memory --> u will find an reference original value


//stack usage
let myYoutube = "nikhilvlogs"
let newid = myYoutube
newid="gaemrbhaii"

console.log(myYoutube);
console.log(newid);

let userone = //creating a object as heap memorty
{
    mail : "nikhil.20bce7200@vitap.ac.in",
    phone: 9848997574
}
let usertwo = userone;//here creating a refernce as usertwo which takes sameas userone

usertwo.phone= 8639624524

console.log(userone.phone); //++++++++++utmost important regarding heap++++++++++++++++++
console.log(usertwo.phone); //here we get same number for both insipe changing only for usertwo the userone also will get the same as it referencing to the same heap memory