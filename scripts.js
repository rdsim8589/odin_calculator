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

function updateDisplay(contents) {
    const display = document.querySelector(".display");
    display.innerHTML = contents;
}

function calculator() {
    let value = "";
    let a = null;
    let b = null;
    currentOperator = null;
    const buttons = document.querySelectorAll("input[type='button'");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            input = button.value;
            numbers = "0123456789."
            operators = "/*-+="
            if (input == "AC") {
                value = "";
                a = null;
                b = null;
                currentOperator = null;
                updateDisplay(0);
            } else if (numbers.includes(input)) {
                if (input == "." && value.includes(".")) return;
                value += input
                updateDisplay(value);
            } else if (operators.includes(input)) {
                //handle a and b value
                if (a == null) {
                    a = Number(value);
                } else if (b == null) {
                    if (value != "") {
                        b = Number(value);
                        a = operate(a,b, currentOperator);
                        updateDisplay(a);
                        b = null;
                    }                 
                }
                // handle =
                if (input == "=") {
                    currentOperator = null;
                } else {
                    currentOperator = input;
                }
                value = "";
            }
        })
    })

}

calculator()