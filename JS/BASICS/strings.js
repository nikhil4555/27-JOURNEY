const naem = "nikhil"
const repocnt = 20


// console.log(naem+repocnt+" easy peady"); out dated
// use back text

console.log(`hello my name is ${naem} and my repo count is ot be ${repocnt}`);


const gamename = new String('gummadavelly-me')//type of object not array i.e. its akey value pair

console.log(gamename[0]);
console.log(gamename.__proto__);//object
console.log(gamename.length);
console.log(gamename.toLocaleUpperCase());//all different obj
console.log(gamename.charAt('8'));
console.log(gamename.indexOf('g'));

const newstring = gamename.substring(0,6);//return a substring of desired range
console.log(newstring);

const anotherstring = gamename.slice(-1,5)//slice
console.log(anotherstring);

const newstr = "     *+88-     "//removes the white spaces
console.log(newstr);
console.log(newstr.trim());

const url = "https://www.instagram.com/login" //replaces the value we wanted
console.log(url.replace('www','xxx'));

console.log(url.includes('nikhil'))
// *************IMP CONVERTING TO ARRAY USING SPLIT*********************
console.log(gamename.split('m'));
