export {};

function createCalculator() {
	let result = 0;
	const add = (userNumber: number) => (result += userNumber);
	const subtract = (userNumber: number) => (result -= userNumber);
	const multiply = (userNumber: number) => (result *= userNumber);
	const divide = (userNumber: number) => (result /= userNumber);
	const clear = () => (result = 0);
	const getTotal = () => result;

	return {
		add,
		subtract,
		multiply,
		divide,
		clear,
		getTotal,
	};
}

const calculator = createCalculator();

calculator.add(10);
calculator.subtract(-10);

const xd = calculator.clear();

console.log(xd);
