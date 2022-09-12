function add(a, b){
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a,b) {
    return a/b
}


function operate(a,b, operator) {
    let value;
    switch(operator) {
        case "+":
            value = add(a,b);
            break;
        case "-":
            value = subtract(a,b);
            break;
        case "*": 
            value = multiply(a,b);
            break;
        case "/": 
            value = divide(a,b);
            break;
        default:
            value = null;
    }
    return value;
}
console.log(operate(8,7,"+"));
console.log(operate(8,7,"-"));
console.log(operate(8,7,"*"));
console.log(operate(8,7,"/"));