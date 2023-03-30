import { WarrantyDecorator } from './WarrantyDecorator.js';
import { BasicProduct } from './exercise.js';
import { Product } from './product.js';

interface IShippingInsuranceDecorator {
	product: BasicProduct | WarrantyDecorator,
	getPrice(): number,
	getDescription(): string
}

export class ShippingInsuranceDecorator extends Product implements IShippingInsuranceDecorator {
	constructor (public product: BasicProduct | WarrantyDecorator) {
		const price = product.price + 20;

		super(price);
	}

	getPrice (): number {
		return super.getPrice();
	}

	getDescription (): string {
		const DESCRIPTION_PRODUCT = this.product.getDescription();
		const MESSAGE = `${DESCRIPTION_PRODUCT} con seguro de envío`;

		return MESSAGE;
	}
}
