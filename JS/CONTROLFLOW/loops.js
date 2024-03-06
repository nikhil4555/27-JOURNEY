// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// while (condition) {
    
// }
// do {
    
// } while (condition);

// for (const iterator of object) {
    
// }

//Maps

const map = new Map();

const muobj = {
    java:'Java',
    cpp: 'C++',
    rb:'Ruby',
    js: 'JavaScript'
}
// for (const key in muobj) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
    //     console.log(element);  
    // }
// }

// array.forEach(element => {
    
// });


// basic and v.v.imp loops ----------->> 

const coding = ['js','ruby','java','python','cpp']

const value = coding.forEach( (item)=>{
    console.log(item)
    return item;
}) 

console.log(value);//cant return anything in foreach


const mynums = [1,2,3,4,5,6,7,8,9,10];

const newnums = mynums.filter( (num)=>  { return num%2==0});//usage of filter method for returning instead of foreach

console.log(newnums);