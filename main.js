let firstNum = "";
let operationSymbol = "";
let secondNum = "";
let showSecondNum = false;

window.onload = function (vSymbol) {
  setResult(0);
  clean(vSymbol);
};

function setResult(displayVal) {
  let display = "";
  display = display + displayVal;
  document.getElementById("displayid").innerHTML = display.replace(".", ",");
}

function getResult() {
  return document.getElementById("displayid").innerHTML;
}

function add(key) {
    if (showSecondNum) {
        setResult(0);
        showSecondNum = false;
    }
    let result = getResult();
    if (result.length < 10 ||(result.lastIndexOf(",") <= 9 && result.length < 11)) {
    if (result != "0" || isNaN(key)) setResult(result + key);
    else setResult(key);
  }
}

function clean(vSymbol) {
  unhighlightOperators(vLastHighlighted);
  setResult(0);
}

function equalUnhighlight() {
  unhighlightOperators(vLastHighlighted);
}

function changeSign() {
  let number = "";
  number = getResult();
  let negative = "";
  negative = negative + number.replace(",", ".");
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

function unhighlightOperators(vSymbol) {
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

function getFirstNum(op){
    showSecondNum = true;
    operationSymbol = op;
    firstNum = getResult();
    firstNum =  firstNum + firstNum.replace(",",".");
}

function getSecondNum(displayVal){
    secondNum = getResult();
    secondNum = secondNum + secondNum.replace(",",".");
}

function equalBtn() {
  switch (operationSymbol) {
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
  setResult(result);
  firstNum = 0;
  secondNum = 0;
}
