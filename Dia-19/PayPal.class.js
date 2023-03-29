import { Pay } from './Pay.class.js';
export class PayPal extends Pay {
    email;
    constructor(email) {
        super();
        this.email = email;
    }
    makePay(quantity) {
        return {
            realized: true,
            quantity,
            platform: 'PayPal',
            email: this.email,
        };
    }
}
