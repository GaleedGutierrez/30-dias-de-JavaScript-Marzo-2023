import { ShippingInsuranceDecorator } from './ShippingInsurance.js';
import { WarrantyDecorator } from './WarrantyDecorator.js';
import { Product } from './product.js';

interface IBasicProduct {
	price: number,
	description: string,
	getDescription(): string
}


export class BasicProduct extends Product implements IBasicProduct {
	constructor (
		public price: number,
		public description: string
	) {
		super(price);
		this.description = description;
	}

	getDescription (): string {
		return this.description;
	}
}
