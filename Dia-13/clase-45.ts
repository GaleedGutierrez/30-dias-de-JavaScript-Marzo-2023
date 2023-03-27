export function searchValue (array: number[][], value: number) {
	const IS_NUMBER = array
		.flat()
		.includes(value);

	if (!IS_NUMBER) throw new Error('Valor no encontrado');

	let final = {
		row    : 0,
		column : 0
	};

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i][j] === value) {
				final = {
					row    : i,
					column : j
				};

				break;
			}
		}
	}

	return final;
}

const array = [
	[ 1, 2, 3 ],
	[ 4, 5, 6 ],
	[ 7, 8, 9 ],
];

const value = 5;

const xd = searchValue(array, value);

console.log(xd);
