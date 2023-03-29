import { IPay, Pay } from './Pay.class.js';

interface ICard extends IPay {
	cardNumber: string,
	makePay: (quantity: number) => {
		realized: boolean,
		quantity: number,
		lastCardNumbers: string,
	}
}

export class Card extends Pay implements ICard {
	cardNumber: string;

	constructor (cardNumber: string) {
		super();
		this.cardNumber = cardNumber;
	}

	makePay (quantity: number) {
		const { cardNumber } = this;
		const IS_RIGHT_CARD = cardNumber.length === 16;

		if (!IS_RIGHT_CARD) throw new Error('Verifique los número de la tarjeta.');
		const lastCardNumbers = cardNumber.slice(12, 16);

		return {
			realized : true,
			quantity,
			lastCardNumbers
		};
	}
}
