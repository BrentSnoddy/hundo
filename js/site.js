//starts or controller function
//get values from input
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    //we need validate values
    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers function
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers function
        displayNumbers(numbers);
    } 
    else{
        alert("Error! you must enter integers")
    }

    
    
}
//logic function(s)
//generate numbers from start value til the end value
function generateNumbers(sValue, eValue){
    let numbers = [];

    //get all numbers from start to end
    for(let index = sValue; index <= eValue; index++){

        //this will execute in a loop til index = eValue
        numbers.push(index);
    }

    return numbers;

}
//display or view function
//display numbers, even numbers in bold font
function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++){

        let className = "even"
        let number = numbers[index];
        if (number % 2 == 0){
            className= "even";

        } else{
            className= "odd";

        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;

}