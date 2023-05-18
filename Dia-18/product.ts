interface InterfaceProduct {
	name: string;
	price: number;
	quantity: number;
	addToCart: () => void;
}

export class Product implements InterfaceProduct {
	// No debes editar este archivo ❌
	name: string;
	price: number;
	quantity: number;
	constructor(name: string, price: number, quantity: number) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	addToCart() {
		throw new Error(
			'La lógica de este método debe ser implementada por las clases hijas'
		);
	}
}
