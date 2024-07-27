// Create a calculator


 /*
    Create variables for 2 numbers and operator
    Create functions for operations
    Create the html and css calculator
    Each button on the calculator should have an event that helps assign values to the 3 variables and display numbers on the screen
    The equal sign should help you invoke the calculation
    create conditions for cases where a user might input only 1 number and presses operator button twice
 */

const numberButtons = "1234567890."
const operatorButtons = "+-*/"
    
let firstNum = ""
let secondNum = ""
let operator = ""
let result = ""

let displayContainer = document.querySelector('.calc-display')
let buttons =document.querySelector('.calc-buttons')
let calculateButton = document.querySelector('.calculate-button')
let clearButton = document.querySelector('.clear-button')

buttons.addEventListener('click', buttonClick)
calculateButton.addEventListener('click', ()=>calculate(firstNum,secondNum,operator))
clearButton.addEventListener('click', clearAll)


function buttonClick(e){
    let buttonValue = e.target.value
    console.log(buttonValue)
    if(numberButtons.includes(buttonValue)){
        clickNumButton(buttonValue)
    }else if(operatorButtons.includes(buttonValue)){
        clickOperatorButton(buttonValue)
    }
}

function display(valTobeDisplayed){
    displayContainer.innerText = ""
    let displayValue = document.createElement('p')
    displayValue.innerText = valTobeDisplayed
    displayContainer.appendChild(displayValue)
}

function clickNumButton(buttonVal){
    // append value from button to firstNum if oeprator has no value
    // append value from button to secondNum if operator has a value and firstNum has value
    // append operator if firstNum has a value or if result has a value
    if(!firstNum  || !operator   ){
        firstNum+=buttonVal;
        display(firstNum)
    }

    // Checking if 1st num and operator exist. If they exist, then append numbers to secondVal
    if(firstNum  && operator ){
        secondNum+=buttonVal
        display(secondNum)
    }
    
}

function clickOperatorButton(operatorVal){
    // if the first number exists then change operator to chosen operator
    if(firstNum  && !operator ){
        operator = operatorVal
    }
    // When a second number exists already then calculate the two numbers and start the next calculation 
    // with that operator 
    if(secondNum ){
        calculate(firstNum, secondNum, operator)
        operator = operatorVal
        firstNum = result
        console.log(result , firstNum)
        secondNum= ""
    } 
}

function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
  
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

function clearAll(){
    firstNum = ""
    secondNum = ""
    operator = ""
    result = ""

    displayContainer.innerText = ""
}

function calculate(num1,num2, operator){
    // parse string to number
    // store result in result and parse to number
    // display result
    console.log(num1, num2, operator)
    

    let newResult = 0
    if(operator == "+"){
        if(!secondNum){
            newResult = result + result
            display(newResult)
            return
        }
        newResult = parseInt(num1) + parseInt(num2)
       
    } else if(operator == "-"){
        newResult = parseInt(num1) - parseInt(num2)
        if(!secondNum){
            newResult = result - result
            display(newResult)
            return
        }
       
    }
    else if(operator == "/"){
        newResult = parseInt(num1) / parseInt(num2)
        if(!secondNum){
            newResult = result/result
            display(newResult)
            return
        }
        
    }
    else if(operator == "*"){
        newResult = parseInt(num1) * parseInt(num2)
        if(!secondNum){
            newResult = result * result
            display(newResult)
            return
        }
        
    }
    display(newResult)
    result = newResult
    return newResult

}