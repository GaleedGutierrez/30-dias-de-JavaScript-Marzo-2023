import { BasicProduct } from './exercise.js';
import { Product } from './product.js';

interface IWarrantyDecorator {
	product: BasicProduct;
	getPrice(): number;
	getDescription(): string;
}

export class WarrantyDecorator extends Product implements IWarrantyDecorator {
	constructor(public product: BasicProduct) {
		const price = product.price + 20;

		super(price);
	}

	getPrice(): number {
		return super.getPrice();
	}

	getDescription(): string {
		const DESCRIPTION_PRODUCT = this.product.getDescription();
		const MESSAGE = `${DESCRIPTION_PRODUCT} con garantía`;

		return MESSAGE;
	}
}
