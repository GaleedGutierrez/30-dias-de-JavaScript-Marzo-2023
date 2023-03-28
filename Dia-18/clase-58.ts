import { Product } from './product.js';

interface InterfaceCart {
	list: Product[]
	addProduct: (product: Product) => void,
	deleteProduct: (product: Product) => void,
	calculateTotal: () => void,
	getProducts: () => void,
}

export class Article extends Product {
	constructor (
		name: string,
		price: number,
		quantity: number
	) {
		super(name, price, quantity);
	}

	addToCart () {
		const { name, quantity } = this;
		const MESSAGE = `Agregando ${name} unidades del artículo ${quantity} al carrito`;

		return MESSAGE;
	}
}

export class Service extends Product {
	constructor (
		name: string,
		price: number,
		quantity: number
	) {
		super(name, price, quantity);
	}

	addToCart () {
		const { name } = this;
		const MESSAGE = `Agregando el servicio ${name} al carrito`;

		return MESSAGE;
	}
}

export class Cart implements InterfaceCart {
	list: Product[] = [];

	addProduct (product: Product) {
		this.list.push(product);

		return product.addToCart();
	}

	deleteProduct (product: Product) {
		const INDEX = this.list.findIndex((item) => item.name === product.name);

		this.list.splice(INDEX, 1);
	}

	calculateTotal () {
		const { list } = this;
		const PRICES = list.map((product) => product.price * product.quantity);
		const TOTAL = PRICES.reduce((total, price) => total + price);

		return TOTAL;
	}

	getProducts () {
		return this.list;
	}
}

const book = new Article('Libro', 100, 2);
const course = new Service('Curso', 120, 1);

const cart = new Cart();

console.log(cart.addProduct(book));
console.log(cart.addProduct(course));
console.log(cart.calculateTotal());
