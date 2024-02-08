const arr = ["thor","spidy","hawkeye"]
const arr1 = ["flash","batman","superman"]

// console.log(arr.push(arr1))
console.log(arr);

// const newarr = arr.concat(arr1);//using concat merging two arrays
// console.log(newarr);

const newarr1 = [...arr,...arr1]//using spread where used commonly where elements are individual
console.log(newarr1);

const other = [1,2,3,[4,5,6],7,[9,8,[5,10]]]
const real = other.flat(Infinity)//returns the sub array that are present init
console.log(real);

//************some what very different */
console.log(Array.isArray("nikhil"));
console.log(Array.from("nikhil"));
console.log(Array.from({name: "nikhil"}));

let score1 = 500;
let score2 = 600;
let score3 = 800;

console.log(Array.of(score1,score2,score3));