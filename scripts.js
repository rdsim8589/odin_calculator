function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    if (b == 0) return "nope";
    return a/b;
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
    const numbers = "0123456789."
    const operators = "/*-+="
    let value = "0";
    let a = null;
    currentOperator = null;
    const buttons = document.querySelectorAll("input[type='button'");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            input = button.value;
            if (input == "AC") {
                value = "0";
                a = null;
                currentOperator = null;
                updateDisplay(0);
            } else if (numbers.includes(input)) {
                if (input == "." && value.includes(".")) return;
                if (input == "0" && value == "0") return;
                if (value == "0") value = "";
                if (currentOperator == null) a = null; // putting another number after = resets
                value += input
                updateDisplay(value);
            } else if (operators.includes(input)) {
                if (a == null) {
                    a = Number(value);
                } else if (a != null && currentOperator != null) {
                    a = operate(a, Number(value), currentOperator);
                    updateDisplay(a);
                }
                // handle =
                (input == "=") ? currentOperator = null : currentOperator = input;
                value = "0";
            } else if (input == "+/-") {
                if(value.includes("-")) {
                    value = value.slice(1);
                } else {
                    value  = "-" + value;
                }
                updateDisplay(value);
            } else if (input == "%") {
                if(!isNaN(value)) value = (Number(value) * 0.01).toString();
                updateDisplay(value);
            }
        })
    })

}

calculator()