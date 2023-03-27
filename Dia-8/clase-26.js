function createCalculator() {
    let result = 0;
    const add = (userNumber) => result += userNumber;
    const subtract = (userNumber) => result -= userNumber;
    const multiply = (userNumber) => result *= userNumber;
    const divide = (userNumber) => result /= userNumber;
    const clear = () => result = 0;
    const getTotal = () => result;
    return {
        add,
        subtract,
        multiply,
        divide,
        clear,
        getTotal
    };
}
const calculator = createCalculator();
calculator.add(10);
calculator.subtract(-10);
const xd = calculator.clear();
console.log(xd);
export {};
//# sourceMappingURL=clase-26.js.map