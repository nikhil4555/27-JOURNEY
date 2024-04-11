const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "0123456789";
const specialset = "!@#$%^&*()_+/";

const getrandomdata = (dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const passbox = document.getElementById('passbox');
const lengthinput = document.getElementById('passlength');
const upperinput = document.getElementById('upper');
const lowerinput = document.getElementById('lower');
const numberinput = document.getElementById('number');
const specialinput = document.getElementById('symbols');

const generatepass = (passworrd="")=>{
    
    if(upperinput.checked)
    {
        passworrd += getrandomdata(upperset);
    }
    if(lowerinput.checked)
    {
        passworrd += getrandomdata(lowerset);
    }
    if(specialinput.checked)
    {
        passworrd+= getrandomdata(specialset)
    }
    if(numberinput.checked)
    {
        passworrd += getrandomdata(numberset);
    }
    
    if(passworrd.length < lengthinput.value)//imp step that up to that length of numbers it will call and generates the password
    {
        return generatepass(passworrd);
    }
    
    passbox.innerText = truncateString(passworrd,lengthinput.value);

    //automatically copies to clipboard
    navigator.clipboard.writeText(passworrd);
    
    
    
}
generatepass();

document.getElementById('button').addEventListener('click',(e)=>
{
    e.preventDefault()
    generatepass()
}
)

function truncateString(str,num)
{
    if(str.length > num)
    {
        let subStr = str.substring(0,num);
        return subStr;
    }
else
    {
        return str;
    }
}

