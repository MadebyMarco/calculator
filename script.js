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
    const setArray = setString.split(/[+-/*\s_]+/);
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