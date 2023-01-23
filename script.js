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

function division(a, b) {
    return a / b;
};

function operate(number1, operator, number2) {
    if (operator === '+') {
       return add(number1, number2);
    } 
};