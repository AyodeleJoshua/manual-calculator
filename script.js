const SCREEN = document.querySelector(".screen");
const btnSet = document.querySelector(".button-set");

function add(str1, str2) {
    return Number(str1) + Number(str2);
}

function subtract(str1, str2) {
    return Number(str1) - Number(str2);
}

function multiply(str1, str2) {
    return Number(str1) * Number(str2);
}

function divide(str1, str2) {
    if (!Number(str2)) {
        return "Cannot divide by Zero";
    } else {
        return Number(str1) / Number(str2); 
    }
}

function equalsTo(str1, str2, operator) {
    if (operator === "+") {
            operator = "";
           return add(str1, str2);
        } else if (operator === "÷") {
            operator = "";
           return divide(str1, str2);
        } else if (operator === "x") {
            operator = "";
            return multiply(str1, str2);
        } else if (operator === "-") {
            operator = "";
            return subtract(str1, str2);
        }
}

let beforeSymbol = "0";
let afterSymbol = "0";
let operator = "";
let count = 0;
let firstFigure = "";
let lastOperator = "";
let isEqualsto = false;

btnSet.addEventListener('click', function(event) {
    

    if (event.target.innerHTML === "C") {
        SCREEN.innerHTML = "0";
        lastOperator = "";
        isEqualsto = false
    } else if (event.target.innerHTML === "←") {
        let screenContent = SCREEN.innerHTML;
        if (!isEqualsto) {
            if (SCREEN.innerHTML.length === 1 || SCREEN.innerHTML.length === 0) {
            SCREEN.innerHTML = "0";
            } else {
                SCREEN.innerHTML = screenContent.slice(0, screenContent.length - 1);
            }
            
            lastOperator = "";
            isEqualsto = false
        }
        
    } else if (event.target.innerHTML === "=" ) {
        if (isEqualsto) {
        
        } else {
           afterSymbol = SCREEN.innerHTML;
            SCREEN.innerHTML = equalsTo(beforeSymbol, afterSymbol, operator);
            count = 0;
        }
        isEqualsto = true;
        operator = "";
        
    } else if (event.target.innerHTML === "-"|| 
        event.target.innerHTML === "+" || 
        event.target.innerHTML === "÷"|| 
        event.target.innerHTML === "x") {
            if (lastOperator.length > 0) {
            } else {
                firstFigure = beforeSymbol;
                beforeSymbol = SCREEN.innerHTML;
                count++;
                if (count > 1) {
                    beforeSymbol = equalsTo(firstFigure, beforeSymbol, operator);
                }
                SCREEN.innerHTML = "0";
                
                
            }
        
         operator = event.target.innerHTML;
         lastOperator = event.target.innerHTML;
         isEqualsto = false;
        
    } else {
        if (!isEqualsto) {
            if (!Number(SCREEN.innerHTML)) SCREEN.innerHTML = "";
            SCREEN.innerHTML += event.target.innerHTML;
            lastOperator = "";
            isEqualsto = false;
        } else {
            if (!Number(SCREEN.innerHTML)) SCREEN.innerHTML = "";
            SCREEN.innerHTML = event.target.innerHTML;
            lastOperator = "";
            isEqualsto = false;
        }
    }
    
});