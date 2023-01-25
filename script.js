function add(...arr) {

const sum = arr.reduce((previous, current) => {
    return previous + current
}, 0);

return sum;
};

function subtract(a, b) {
return a - b;
};


function multiply(...arr) {

    const sum = arr.reduce((previous, current) => {
        return previous * current;
    });
    return(sum);
};

function divide(a, b) {
    return a / b;
};

function operate(setString) {
    const setArray = setString.split(/[+-/*]+/);
    const operation = Array.from(setString);
    const setNumbers = setArray.map(item => parseInt(item, 10));

    if (operation.includes('+')) { 
       const sum = add(setNumbers[0], setNumbers[1]);
       return sum;
    } else if (operation.includes('-')) { 
        const difference = subtract(setNumbers[0], setNumbers[1]);
        return difference;
    } else if (operation.includes('*')) { 
        const product = multiply(setNumbers[0], setNumbers[1]);
        return product;
    } else if (operation.includes('/')) { 
        const quotient = divide(setNumbers[0], setNumbers[1]);
        return quotient;
    }
};


//idea for not running calc unless we can divide the array length by 3 and get 0, so setArray.length % 3 == 0
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
let displayArray = [];

let testString = '';


numberButtons.forEach(button => button.addEventListener('click', addToDisplay));

function addToDisplay(event) {
    const id = event.target.id;
    displayArray.push(id);
    testString += id;
    console.log(testString);
    console.log(displayArray);
    if(displayArray.length == 1) display.textContent = ''; //removes 0 from display
    
    display.textContent += id;
};

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', clearDisplay);

function clearDisplay(){
    display.textContent = 0;
    displayArray = [];
    console.log(displayArray);
};

const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', () => {
    loopOperation();
    const displayString = displayArray.join('');
    displayArray = [];
    display.textContent = displayString;
});

let testArr = ['1', '+', '2', '+', '5', '/', '2'];
let arr = [];

function loopOperation() { //Doesnt account for double digits lmaO 
    while(displayArray.length != 1) { //determine how many times to run

        for(let i = 0; i < 3; i++) { // Take first three indexes
        arr.push(displayArray.at(i));
        }; 

        let arrString = arr.join('');    //Puts first three indexes into operate
        let operationResult = operate(arrString); 

        displayArray.splice(0, 3, `${operationResult}`); //Puts result back into array

        arr = []; //restarts temporary array for next three indexes
    };
};









//I want to take in the first three indexes in my display array
//Then I will put them into the operate function
//then push the result back into the display array
//want it to stop once it only has one value.