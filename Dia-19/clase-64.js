// import { Card } from './Card.class.js';
import { Cash } from './Cash.class.js';
// import { PayPal } from './PayPal.class.js';
export function processPay(method, quantity) {
    return method.makePay(quantity);
}
const cash = new Cash();
console.log(processPay(cash, 400));
