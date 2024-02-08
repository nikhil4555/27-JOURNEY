//******arrays */

const arr = [1,5,98];
const heros = ["Thor","avnger",2]
const arr1 = new Array(1,2,3,4)

console.log(heros);//size can be resizable

arr1.push("nikhil")
arr1.push("gummadavelly")
arr1.pop()//removes the last or latest element
console.log(arr1);


heros.unshift("ironman")//adds the desired elements at the first posn in array
console.log(heros);

heros.shift()//removes the first element of a array
console.log(heros);

console.log(heros.includes('nikhil'));
console.log(heros.indexOf(3));

const newArr = heros.join()//adds all the elememts to arrays in to string
console.log(heros);
console.log(typeof newArr);//string

//*********************IMP SLICE & SPLICE *
console.log("");
console.log("");
console.log("");
console.log("");

const villians = [1,2,3,4,5];
console.log("A",villians);//original arary
//slice
const vill1 = villians.slice(1,3)//returns the section of array that is mentioned in between the range that it takes as indices that is from
//index of villans 1 to index of (3-1)
console.log("B ",villians);//after slice original array remains same 
console.log(vill1);

//splice
const vill2 = villians.splice(1,3);
console.log("C ",villians);// original array will not have the splice elements and the remainig will be printed
console.log(vill2);//ranged from the elemnts will be printed i.e from index 1 to 3

