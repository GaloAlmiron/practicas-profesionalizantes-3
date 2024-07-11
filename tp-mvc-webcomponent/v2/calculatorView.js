import { CalculatorController } from './calculatorController.js'


class CalculatorView extends HTMLElement {
	constructor(modelComponent) {
	  super();
	  this._innerControler = new CalculatorController(this, modelComponent);
	  this._table = document.createElement('table');
  
	  this._firstRow = this._table.insertRow();
	  this._inputCell = this._firstRow.insertCell();
	  this._inputCell.setAttribute('colspan', 4);
  
	  this._secondRow = this._table.insertRow();
	  this._button7Cell = this._secondRow.insertCell();
	  this._button8Cell = this._secondRow.insertCell();
	  this._button9Cell = this._secondRow.insertCell();
	  this._buttonPlusCell = this._secondRow.insertCell();
  
	  this._thirdRow = this._table.insertRow();
	  this._button4Cell = this._thirdRow.insertCell();
	  this._button5Cell = this._thirdRow.insertCell();
	  this._button6Cell = this._thirdRow.insertCell();
	  this._buttonMinusCell = this._thirdRow.insertCell();
  
	  this._fourthRow = this._table.insertRow();
	  this._button1Cell = this._fourthRow.insertCell();
	  this._button2Cell = this._fourthRow.insertCell();
	  this._button3Cell = this._fourthRow.insertCell();
	  this._buttonProductCell = this._fourthRow.insertCell();
  
	  this._fifthRow = this._table.insertRow();
	  this._button0Cell = this._fifthRow.insertCell();
	  this._buttonDecimalCell = this._fifthRow.insertCell();
	  this._buttonCalculateCell = this._fifthRow.insertCell();
	  this._buttonDivisionCell = this._fifthRow.insertCell();
  
	  this._sixthRow = this._table.insertRow();
	  this._buttonClearCell = this._sixthRow.insertCell();
	  this._buttonClearCell.setAttribute('colspan', 4);
  
	  this._input = document.createElement('input');
	  this._input.className = 'displayResult';
	  this._input.id = 'display';
	  this._input.type = 'text';
	  this._input.setAttribute('disabled', true);
  
	  this._button0 = document.createElement('button');
	  this._button0.className = 'numberButton';
	  this._button0.id = 'button0';
	  this._button0.innerText = '0';
  
	  this._button1 = document.createElement('button');
	  this._button1.className = 'numberButton';
	  this._button1.id = 'button1';
	  this._button1.innerText = '1';
  
	  this._button2 = document.createElement('button');
	  this._button2.className = 'numberButton';
	  this._button2.id = 'button2';
	  this._button2.innerText = '2';
  
	  this._button3 = document.createElement('button');
	  this._button3.className = 'numberButton';
	  this._button3.id = 'button3';
	  this._button3.innerText = '3';
  
	  this._button4 = document.createElement('button');
	  this._button4.className = 'numberButton';
	  this._button4.id = 'button4';
	  this._button4.innerText = '4';
  
	  this._button5 = document.createElement('button');
	  this._button5.className = 'numberButton';
	  this._button5.id = 'button5';
	  this._button5.innerText = '5';
  
	  this._button6 = document.createElement('button');
	  this._button6.className = 'numberButton';
	  this._button6.id = 'button6';
	  this._button6.innerText = '6';
  
	  this._button7 = document.createElement('button');
	  this._button7.className = 'numberButton';
	  this._button7.id = 'button7';
	  this._button7.innerText = '7';
  
	  this._button8 = document.createElement('button');
	  this._button8.className = 'numberButton';
	  this._button8.id = 'button8';
	  this._button8.innerText = '8';
  
	  this._button9 = document.createElement('button');
	  this._button9.className = 'numberButton';
	  this._button9.id = 'button9';
	  this._button9.innerText = '9';
  
	  this._buttonDecimal = document.createElement('button');
	  this._buttonDecimal.className = 'numberButton';
	  this._buttonDecimal.id = 'buttonDecimal';
	  this._buttonDecimal.innerText = '.';
  
	  this._buttonPlus = document.createElement('button');
	  this._buttonPlus.className = 'operatorButton';
	  this._buttonPlus.innerText = '+';
	  this._buttonPlus.id = 'buttonPlus';
  
	  this._buttonMinus = document.createElement('button');
	  this._buttonMinus.className = 'operatorButton';
	  this._buttonMinus.innerText = '-';
	  this._buttonMinus.id = 'buttonMinus';
  
	  this._buttonProduct = document.createElement('button');
	  this._buttonProduct.className = 'operatorButton';
	  this._buttonProduct.innerText = '*';
	  this._buttonProduct.id = 'buttonProduct';
  
	  this._buttonDivision = document.createElement('button');
	  this._buttonDivision.className = 'operatorButton';
	  this._buttonDivision.innerText = '/';
	  this._buttonDivision.id = 'buttonDivision';
  
	  this._buttonCalculate = document.createElement('button');
	  this._buttonCalculate.className = 'operatorButton';
	  this._buttonCalculate.innerText = '=';
	  this._buttonCalculate.id = 'buttonCalculate';
  
	  this._buttonClear = document.createElement('button');
	  this._buttonClear.className = 'clearButton';
	  this._buttonClear.id = 'buttonClear';
	  this._buttonClear.innerText = 'BORRAR';
	}
  
	connectedCallback() {
	  this._inputCell.appendChild(this._input);
	  this._button7Cell.appendChild(this._button7);
	  this._button8Cell.appendChild(this._button8);
	  this._button9Cell.appendChild(this._button9);
	  this._buttonPlusCell.appendChild(this._buttonPlus);
	  this._button4Cell.appendChild(this._button4);
	  this._button5Cell.appendChild(this._button5);
	  this._button6Cell.appendChild(this._button6);
	  this._buttonMinusCell.appendChild(this._buttonMinus);
	  this._button1Cell.appendChild(this._button1);
	  this._button2Cell.appendChild(this._button2);
	  this._button3Cell.appendChild(this._button3);
	  this._buttonProductCell.appendChild(this._buttonProduct);
	  this._button0Cell.appendChild(this._button0);
	  this._buttonDecimalCell.appendChild(this._buttonDecimal);
	  this._buttonCalculateCell.appendChild(this._buttonCalculate);
	  this._buttonDivisionCell.appendChild(this._buttonDivision);
	  this._buttonClearCell.appendChild(this._buttonClear);
  
	  this.appendChild(this._table);
  
	  this._button0.onclick = () => this._innerControler.onButton0Click();
	  this._button1.onclick = () => this._innerControler.onButton1Click();
	  this._button2.onclick = () => this._innerControler.onButton2Click();
	  this._button3.onclick = () => this._innerControler.onButton3Click();
	  this._button4.onclick = () => this._innerControler.onButton4Click();
	  this._button5.onclick = () => this._innerControler.onButton5Click();
	  this._button6.onclick = () => this._innerControler.onButton6Click();
	  this._button7.onclick = () => this._innerControler.onButton7Click();
	  this._button8.onclick = () => this._innerControler.onButton8Click();
	  this._button9.onclick = () => this._innerControler.onButton9Click();
	  this._buttonPlus.onclick = () => this._innerControler.onButtonPlusClick();
	  this._buttonMinus.onclick = () => this._innerControler.onButtonMinusClick();
	  this._buttonProduct.onclick = () => this._innerControler.onButtonProductClick();
	  this._buttonDivision.onclick = () => this._innerControler.onButtonDivisionClick();
	  this._buttonDecimal.onclick = () => this._innerControler.onButtonDecimalClick();
	  this._buttonClear.onclick = () => this._innerControler.onButtonClearClick();
	  this._buttonCalculate.onclick = () => this._innerControler.onClickButtonCalculate();

    }

      replaceInput(data) {
        this._input.value = data;
      }
    
      getInputValue() {
        return this._input.value;
      }
    
      adoptedCallback() {}
    
      attributesChangedCallback(oldValue, newValue) {}
    
      static get observableAttributes() {}
}


customElements.define('x-wc-component-view', CalculatorView);

export { CalculatorView }