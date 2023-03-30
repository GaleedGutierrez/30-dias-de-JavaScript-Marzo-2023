interface IProduct {
	price: number,
	getPrice(): number,
	getDescription(): void
}

export abstract class Product implements IProduct {
	// Este código no debe ser editado ❌
	constructor (public price: number) {
		this.price = price;
	}

	getPrice (): number {
		return this.price;
	}

	getDescription (): void {
		throw new Error('Este método debe ser implementado en las subclases');
	}
}
