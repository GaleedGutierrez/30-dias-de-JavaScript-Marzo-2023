import { Product } from "./product.js";

export class WarrantyDecorator extends Product {
	product;
	constructor(product) {
		const price = product.price + 20;

		super(price);
		this.product = product;
	}

	getPrice() {
		return super.getPrice();
	}

	getDescription() {
		const DESCRIPTION_PRODUCT = this.product.getDescription();
		const MESSAGE = `${DESCRIPTION_PRODUCT} con garantía`;

		return MESSAGE;
	}
}
