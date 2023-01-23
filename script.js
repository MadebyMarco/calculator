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

function operate(setString) {
    const test = setString.split(/[+-/*\s_]+/);
    console.log(test);
    const setArray = Array.from(setString);

    console.log(setArray);
    
    const setNumbers = setArray
        .filter(item => item !== '+' && item !== '/' && item !== '*' && item !== '-' && item !== ' ')
        .map(item => parseInt(item, 10));
    console.log(setNumbers);

    if (setArray.includes('+')) { 
       const sum = add(setNumbers[0], setNumbers[1]);
       return sum;
    } else if (setArray.includes('-')) { 
        const difference = subtract(setNumbers[0], setNumbers[1]);
        return difference;
    } else if (setArray.includes('*')) { 
        const product = multiply(setNumbers[0], setNumbers[1]);
        return product;
    } else if (setArray.includes('/')) { 
        const quotient = subtract(setNumbers[0], setNumbers[1]);
        return quotient;
    }
};
//idea for not running calc unless we can divide the array length by 3 and get 0, so setArray.length % 3 == 0