import { IPay, Pay } from './Pay.class.js';

interface IPayPal extends IPay {
	email: string;
	makePay: (quantity: number) => {
		realized: boolean;
		quantity: number;
		email: string;
		platform: string;
	};
}

export class PayPal extends Pay implements IPayPal {
	email: string;

	constructor(email: string) {
		super();
		this.email = email;
	}

	makePay(quantity: number) {
		return {
			realized: true,
			quantity,
			platform: 'PayPal',
			email: this.email,
		};
	}
}
