export function processShoppingList(list) {
    list = list.map(modifyShoppingList);
    const PRICES = list.map((product) => product.price);
    const TOTAL = PRICES.reduce((total, price) => total + price);
    return TOTAL;
}
function modifyShoppingList(product) {
    const { name, quantity } = product;
    const IS_OFFER = name.includes('oferta');
    if (IS_OFFER)
        product.price *= 0.8;
    if (quantity)
        product.price *= quantity;
    delete product.quantity;
    return product;
}
const shoppingList = [
    { name: 'pan', price: 20, quantity: 2 },
    { name: 'leche', price: 25, quantity: 1 },
    { name: 'oferta manzanas', price: 10, quantity: 3 },
];
const xd = processShoppingList(shoppingList);
console.log(xd);
