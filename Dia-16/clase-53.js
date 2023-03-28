export function protectDog (dog) {
	const COPY = Object.assign({}, dog);

	Object.freeze(COPY);

	for (const KEY in dog) {
		const VALUE = dog[KEY];

		if (typeof (VALUE) === 'object') {
			Object.freeze(VALUE);
		}
	}

	return COPY;
}

protectDog({
	name         : 'Romeo',
	age          : 3,
	owner        : { name: 'Victor', phoneNumber: '555-555-5555' },
	favoriteFood : [ 'pollito', 'croquetas' ],
	activities   : [ 'jugar', 'caminar' ],
});
// console.log(protectDog.name);
// protectDog.name = 'Toro';
console.log(protectDog.name);
