const onepromise = new Promise(function(resolve,reject)
{
    //can plan DB calls, async tasks, network , crypto

    setTimeout(function()
    {
        console.log('Async task is complete');
        resolve()
    },1000)
});

onepromise.then(function()      //.then is related to resolve. if in the above resolve was not declared then it wont run this
{
    console.log('Promise resolved');
})


//without declaring any referneces making uasge as a whole one unit i.e. both into 1

new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log('async task is 2');
        resolve();
    },1000)

}).then(function()
{
    console.log('Promise 2 resolved');
})

//promise-3 where the paramteres are passed as objects to .then .i.e to resolve one

const threepromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:'PINTU',
            age:58
        })
    },1000)
})

threepromise.then(function(user){
    console.log(user);
})

//PROMISE-4....IMP usage of .then return and usage of reject
//for return of  then we should use another .then to access return values
//finally =>its like default that whether completed or not

const fourpromise = new Promise(function(resolve,reject){
    setTimeout(function(){
    
    let error = true;
    if(!error)
    {
        resolve({username: 'Naveen Kumar',age:25});
    }
    else
    {
        reject('ERROR!!! something went wrong occured');
    }
    },1000)
    
})

fourpromise
.then((user)=>
{
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log('name of the starrer ',username);
})
.catch((error) => {
    console.log(error);
})
.finally(()=>
{
    console.log('The promise either resolve or rejected');
})


//PROMISE-5 -----> alternatevily usage of async and await
//can use  async await also instead of .then or .catch but erros cant be handled directly so comes try and catch block to handle
//async function always return a promise
//await keyword is used to wait for the promise to resolve
//await can only be used inside async function

const fivepromise = new Promise(function(resolve,reject){
    setTimeout(function(){
    
        let error = true;
        if(!error)
        {
            resolve({username: 'Java Script',password:'paytm123'});
        }
        else
        {
            reject('ERROR!!! JS went wrong');
        }
        },1000)
})

async function consumefivepromise(){
    try{

        const response = await fivepromise
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumefivepromise();

//async examples backend using json file and little of fetch where fetch return a promise

async function getAallUsers(){
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = aw ait response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
   
}
getAallUsers();

//FETCH IMP
//as fetch returns a PROMISE we can here directly use fetch and do all functions using .then or with async ina above and below examples as shown

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>
{
    return response.json()
})
.then((data) =>
{
    console.log(data);
})
.catch((error)  =>{
    console.log(error);
})
.finally(() => console.log('finally acts as a default'));





