let display = document.getElementById("display");
let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonDivision = document.getElementById("buttonDivine");
let buttonProduct = document.getElementById("buttonProduct");
let buttonCalculate = document.getElementById("buttonCalculate");
let buttonDecimal = document.getElementById("buttonDecimal");
let buttonClear = document.getElementById("buttonClear");


function onButton0Click()
{   	
	display.value += '0';
}

function onButton1Click()
{   	
	display.value += '1';
}

function onButton2Click()
{   	
	display.value += '2';
}

function onButton3Click()
{   	
	display.value += '3';
}

function onButton4Click()
{   	
	display.value += '4';
}

function onButton5Click()
{   	
	display.value += '5';
}

function onButton6Click()
{   	
	display.value += '6';
}

function onButton7Click()
{   	
	display.value += '7';
}

function onButton8Click()
{   	
	display.value += '8';
}

function onButton9Click()
{   	
	display.value += '9';
}

function onButtonPlusClick()
{   	
	display.value += '+';
}

function onButtonMinusClick()
{   	
	display.value += '-';
}

function onButtonDivisionClick()
{   	
	display.value += '/';
}

function onButtonProductClick()
{   	
	display.value += '*';
}

function onButtonDecimalClick()
{   	
	display.value += '.';
}

function onButtonClearClick()
{
	display.value = ' ';
}

function onButtonCalculateClick()
{
	display.value = eval(display.value);
}

button0.onclick = onButton0Click;
button1.onclick = onButton1Click;
button2.onclick = onButton2Click;
button3.onclick = onButton3Click;
button4.onclick = onButton4Click;
button5.onclick = onButton5Click;
button6.onclick = onButton6Click;
button7.onclick = onButton7Click;
button8.onclick = onButton8Click;
button9.onclick = onButton9Click;

buttonPlus.onclick = onButtonPlusClick;
buttonMinus.onclick = onButtonMinusClick;
buttonDivision.onclick = onButtonDivisionClick;
buttonProduct.onclick = onButtonProductClick;

buttonDecimal.onclick = onButtonDecimalClick;
buttonCalculate.onclick = onButtonCalculateClick;
buttonClear.onclick = onButtonClearClick;



buttonCalculate.onclick = onButtonCalculateClick;
buttonClear.onclick = onButtonClearClick;


