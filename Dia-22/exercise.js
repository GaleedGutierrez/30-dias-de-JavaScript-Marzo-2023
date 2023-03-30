import { Product } from './product.js';
export class BasicProduct extends Product {
    price;
    description;
    constructor(price, description) {
        super(price);
        this.price = price;
        this.description = description;
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
}
