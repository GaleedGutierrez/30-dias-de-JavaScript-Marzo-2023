export interface IPay {
	makePay: (quantity: number) => {
		realized: boolean,
		quantity: number,
	}
}

export class Pay implements IPay {
	makePay (quantity: number) {
		return {
			realized : true,
			quantity
		};
	}
}
