class CalculatorModel {
	constructor() {}
  
	calculate(ecuation) {
	  try {
		return eval(ecuation);
	  } catch {
		return 'Error';
	  }
	}
  }

export { CalculatorModel }