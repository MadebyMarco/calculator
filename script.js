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

    const setArray = setString.split(/[/+*-]+/);
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
let result = 0;





numberButtons.forEach(button => button.addEventListener('click', addToDisplay));

function addToDisplay(event) {
    const id = event.target.id;
    displayArray.push(id);

        if(id == '+' || id == '-' || id == '/' || id == '*' ) {
        displayArray.splice((displayArray.length - 1), 0, ' ');
        displayArray.push(' ');
        };
    
    console.log(`display array = ${displayArray}`);
    if(displayArray.length == 1) display.textContent = ''; //removes 0 from display
    display.textContent += id;
};

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', clearDisplay);

function clearDisplay(){
    display.textContent = 0;
    displayArray = [];
};

const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', () => {
    let result = loopOperation();
    if(result == 'Infinity') alert('Nice try'), result = 0;
    display.textContent = result;
    displayArray = [];
});

let arr = [];


function loopOperation() { //Doesnt account for double digits lmaO 
        const string = displayArray.join('');
        const stringArray = string.split(' ');

        const operators = displayArray.filter(x => x === '+' || x === '-' || x === '*' || x === '/');
        console.log(operators)

    for(let c = 0; c < operators.length; c++) { //determine how many times to run
        
        console.log(`String array ${stringArray}`);
        
        for(let i = 0; i < 3; i++) { // Take first three indexes
        arr.push(stringArray.at(i));
        }; 

        let arrString = arr.join('');    //Puts first three indexes into operate
        if(arrString.length == 1) break; 
        console.log(`operate on ${arrString}`);
        let operationResult = operate(arrString); 
    
        stringArray.splice(0, 3, `${operationResult}`); //Puts result back into array

        arr = []; //restarts temporary array for next three indexes

        
    };
    return stringArray.join('');
};
