
//if
// it undergoes only if its true

const isuserloggedin = true
if(isuserloggedin)
{
    console.log("nikhil");
}

const score = 200;

if(score>100)
{
    let power = "fly";
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);//not possible as the scope end there

// if else, switch

const month = 5;
switch(month)
{
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    default:
        console.log("default case amr]");
        break;
}


//**********V.V.IMP */
// FALSY VALUES --> false, 0, -0, Bigint,"",null,undefined,Nan
// reamonoig allre TRUTHY VALUES --> "0",'0'," ",'false'


//nullcollescnece operatoer

let val1;
val1 = null??10
console.log(val1);