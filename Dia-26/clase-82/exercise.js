export function removeDuplicates(values) {
	const NOT_REPEAT = new Set(values);
	const NEW_ARRAY = [];
	const ELEMENTS = NOT_REPEAT.values();

	for (let index = 0; index < NOT_REPEAT.size; index++) {
		NEW_ARRAY.push(ELEMENTS.next().value);
	}

	return NEW_ARRAY;
}

const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers));
