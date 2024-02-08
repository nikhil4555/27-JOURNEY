// ****** DATES


let mydate = new Date();//created a obj of type date
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(typeof mydate)//returns the type as object

let mycreateddate = new Date (2003,4,17)//type-1 of creating dates
console.log(mycreateddate.toDateString());

let mycreateddat= new Date (2003,4,17,16,58)//type-2 of creating dates
console.log(mycreateddat.toLocaleString());

let mycreatedda = new Date ("2003-05-17");//type-3 of creating dates
console.log(mycreatedda.toLocaleDateString());

let mytimestamp = Date.now();
console.log(mytimestamp);

console.log(mycreatedda.getTime());//in miili seconds
console.log(Math.floor(Date.now()/1000));//to seconds conversion


let newdate = new Date();
console.log(newdate.getMonth()+8);

console.log(newdate.toLocaleString('default'),{
    weekday: "long",
    
});


