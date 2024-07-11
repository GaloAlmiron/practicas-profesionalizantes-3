class CalculatorController {
	constructor(viewComponent, modelComponent) {
	  this._viewComponent = viewComponent;
	  this._modelComponent = modelComponent;
	}
  
	onButton0Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '0');
	}
	onButton1Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '1');
	}
	onButton2Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '2');
	}
	onButton3Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '3');
	}
	onButton4Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '4');
	}
	onButton5Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '5');
	}
	onButton6Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '6');
	}
	onButton7Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '7');
	}
	onButton8Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '8');
	}
	onButton9Click() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '9');
	}
	onButtonPlusClick() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + ' + ');
	}
	onButtonMinusClick() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + ' - ');
	}
	onButtonProductClick() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + ' * ');
	}
	onButtonDivisionClick() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + ' / ');
	}
	onButtonDecimalClick() {
	  this._viewComponent.replaceInput(this._viewComponent.getInputValue() + '.');
	}
	onButtonClearClick() {
	  this._viewComponent.replaceInput('');
	}
  
	onClickButtonCalculate() {
	  const ecuation = this._viewComponent.getInputValue();
	  const result = this._modelComponent.calculate(ecuation);
	  this._viewComponent.replaceInput(result);
	}
  }
  
export { CalculatorController }