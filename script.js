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
    console.log(setArray);

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

numberButtons.forEach(button => button.addEventListener('click', addToDisplay));

function addToDisplay(event) {
    const id = event.target.id;
    displayArray.push(id);
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
    const displayString = displayArray.join('');
    console.log(displayString);
    const result = operate(displayString);
    displayArray = [];
    display.textContent = result;

});
//look at target's id and then display it

