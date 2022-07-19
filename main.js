document.addEventListener("keydown", function(event) {event.preventDefault();});

window.onload = function(vSymbol){
    document.onkeydown = keyboard;
    setResult(0);
    clean(vSymbol);
}

function setResult(displayVal) {
    let display = "";
    display = display + displayVal;
    document.getElementById('displayid').innerHTML = display.replace('.',',');
}

function getResult() {
    return (document.getElementById('displayid').innerHTML);
}

function add(key) {
    let result = getResult();
    if (result.length < 10 || result.lastIndexOf(',') <= 9 && result.length < 11) {
        if (result != '0' || isNaN(key)) setResult(result + key);
        else setResult(key);
    }
}

function clean(vSymbol) {
    unhighlightOperators(vLastHighlighted);
    setResult(0);
}

function equal(){
    unhighlightOperators(vLastHighlighted);
}

function changeSign() {
    let number = "";
    number = getResult();
    let negative = "";
    negative = negative + number.replace(',','.');
    setResult(-negative);
}

let isHighlighted = true;
let vLastHighlighted;

function highlightOperators(vSymbol) {
    unhighlightOperators(vLastHighlighted);
    if (isHighlighted == true) {
        isHighlighted = false;
        switch (vSymbol) {
        case "multiply":
            multiply.style.background = "#5b7aa1";
            vLastHighlighted = vSymbol;
            break;
        case "divide":
            divide.style.background = "#5b7aa1";
            vLastHighlighted = vSymbol;
            break;
        case "sum":
            sum.style.background = "#5b7aa1";
            vLastHighlighted = vSymbol;
            break;
        case "substract":
            substract.style.background = "#5b7aa1";
            vLastHighlighted = vSymbol;
            break;
        default:
            break;
        }
    }
}

function unhighlightOperators(vSymbol){
    if (isHighlighted == false) {
        isHighlighted = true;
        switch (vSymbol) {
        case "multiply":
            multiply.style.background = "#013668";
            break;
        case "divide":
            divide.style.background = "#013668";
            break;
        case "sum":
            sum.style.background = "#013668";
            break;
        case "substract":
            substract.style.background = "#013668";
            break;
        default:
            break;
        }
    }
}

//function keyboard (x) { 
    //events = x || window.event;
    //k=events.keyCode;
    //if (k>47 && k<58) { 
        //p=k-48;
        //p=String(p)
        //getNumericValueClickingButton(p);
    //}

    //if (k == 27) calculatorReset('');

    //if (k>95 && k<106) {
       //p=k-96;
       //p=String(p);
       //getNumericValueClickingButton(p);
    //}
    //if (k==110 || k==190 || k==188) getNumericValueClickingButton(",")
    //if (k==106) clickingOperationButtons('x')
    //if (k==107) clickingOperationButtons('+')
    //if (k==109 || k==189) clickingOperationButtons('-')
    //if (k==111 || k==191) clickingOperationButtons('/')
    //if (k==32 || k==187 || k==13) clickingOperationButtons('=')
    //if (k==27) calculatorReset('0')
    //if (k==17) changeToNegativeOrPositiveButton('-1')
//}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let firstNum = "";
let secondNum = "";
let operator = "";
let result = 0;

function operator(key){
        if (operator == "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
        } else { // Read second number
            secondNum += e.target.innerText;
        }
}

function equalBtn(){
        if (e.target.innerText !== "=") { // If the operator is not equals
            operator = e.target.innerText;

        } else { // If equals button clicked 
            switch (operator) { // Calculate and print output
                case "+":
                    result = parseFloat(firstNum) + parseFloat(secondNum);
                    break;
                case "-":
                    result = parseFloat(firstNum) - parseFloat(secondNum);
                    break;
                case "*":
                    result = parseFloat(firstNum) * parseFloat(secondNum);
                    break;
                case "/":
                    result = parseFloat(firstNum) / parseFloat(secondNum);
                break;
                default:
                    break;
            }
        }
        setResult(result);
}

