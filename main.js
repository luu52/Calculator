window.onload = function(){
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

let vIsZero = true;

document.onkeydown = function(event) {

	let key_press = String.fromCharCode(event.keyCode);
	let key_code = event.keyCode;
	let inputVal = displayid.innerHTML;
    let lastChar = inputVal[inputVal.length - 1];
    let equation = inputVal;

 // Target each keypress and update the input screen
    if(key_press==1) {
        displayid.innerHTML += key_press;
    }
    if(key_press==2) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==3 || key_code == 32) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==4) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==5) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==6) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==7) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==8) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==9) {
        displayid.innerHTML += key_press; 
    }
    if(key_press==0) {
        displayid.innerHTML += key_press;
    }

  
}


