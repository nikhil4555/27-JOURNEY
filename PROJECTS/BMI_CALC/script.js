
const form = document.querySelector('form');//bcz it only has the submit one

form.addEventListener("submit",(event)=>{ //when
    event.preventDefault(); //stops page from  reloading when we press enter in a text field
    
    const height = document.querySelector('#height').value;//should take after the eventlitsner bcz if take outside the values will be empty
    const weight = document.querySelector('#weight').value;
    
    const results = document.querySelector('#results');

    if(isNaN(height))//if true then will not have a valid number then goes into the if condition
    {
        results.innerHTML = 'enter a valid height in CM';
        // alert("Please Enter A Valid Height in CM");//irrespective of the value it displays
    }
    else if(isNaN(weight))
    {
        results.innerHTML = 'enter a valid weight in KG';
    }
    else{
      var BMI =  (weight / ((height * height)/10000)).toFixed(2);//it rounds off to two decimal places
      results.innerHTML = `<span>Your BMI is ${BMI}</span>`
    }
    //categorizing in different sections of the  BMI
    if(BMI >= 24.9)
    {
        results.innerHTML = `<span>Your BMI of value ${BMI} falls under OVERWEIGHT</span>`    
    }
    else if(BMI >= 18.6 && BMI<=24.9)
    {
        results.innerHTML = `<span>Your BMI of value ${BMI} falls under NORMAL WEIGHT</span>`    
    }
    else
    {
        results.innerHTML = `<span>Your BMI of value ${BMI} falls under UNDER WEIGHT</span>`    
    }
});



