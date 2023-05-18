import { Pay } from "./Pay.class.js";

export class Card extends Pay {
	cardNumber;
	constructor(cardNumber) {
		super();
		this.cardNumber = cardNumber;
	}

	makePay(quantity) {
		const { cardNumber } = this;
		const IS_RIGHT_CARD = cardNumber.length === 16;

		if (!IS_RIGHT_CARD)
			throw new Error("Verifique los número de la tarjeta.");

		const lastCardNumbers = cardNumber.slice(12, 16);

		return {
			realized: true,
			quantity,
			lastCardNumbers,
		};
	}
}
