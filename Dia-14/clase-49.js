export function sortByAvailabilityAndPrice(products) {
	const OUT_OF_STOCK = products.filter((product) => !product.inStock);
	const IN_STOCK = products.filter((product) => product.inStock);

	OUT_OF_STOCK.sort((a, b) => a.price - b.price);
	IN_STOCK.sort((a, b) => a.price - b.price);

	const PRODUCTS = IN_STOCK.concat(OUT_OF_STOCK);

	return PRODUCTS;
}

const products = [
	{ name: "product1", price: 10, inStock: true },
	{ name: "product2", price: 20, inStock: false },
	{ name: "product3", price: 15, inStock: true },
	{ name: "product4", price: 5, inStock: false },
];

sortByAvailabilityAndPrice(products);
