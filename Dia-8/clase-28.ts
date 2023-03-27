export function myMap (array: any[], func: any) {
	const RESULT: any[] = [];

	for (let i = 0; i < array.length; i++) {
		const ITEM = array[i];
		const PREVIEW = func(ITEM);

		RESULT.push(PREVIEW);
	}

	return RESULT;
}

const array = [
	{ name: 'michi', age: 2 },
	{ name: 'firulais', age: 6 }
];

const myFunction = (pet: any) => pet?.name;

const xd = myMap(array, myFunction);

console.log(xd);
