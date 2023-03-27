export function groupProducts (products, category) {
	const PRODUCTS_SELECTED = products.filter((product) => product.category === category);
	const PRODUCTS_NAME = PRODUCTS_SELECTED.map((product) => product.name);
	const NAMES = PRODUCTS_NAME.join(', ');
	const PRICES = PRODUCTS_SELECTED.map((products) => products.price);
	const totalPrice = PRICES.reduce((acumulador, actual) => acumulador + actual);
	const FINAL = {
		products : NAMES,
		totalPrice
	};

	return FINAL;
}

const products = [
	{ name: 'Smartphone', category: 'Electronics', price: 800 },
	{ name: 'Laptop', category: 'Electronics', price: 1200 },
	{ name: 'Shirt', category: 'Clothing', price: 50 },
	{ name: 'Pants', category: 'Clothing', price: 100 },
];
const xd = groupProducts(products, 'Electronics');

console.log(xd);
