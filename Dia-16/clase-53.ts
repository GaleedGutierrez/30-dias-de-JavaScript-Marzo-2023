interface InterfaceDog {
	name: string;
	age: number;
	owner: InterfaceOwner;
	favoriteFood: string[];
	activities: string[];
}

interface InterfaceOwner {
	name: string;
	phoneNumber: string;
}

export function protectDog(dog: InterfaceDog) {
	const COPY: InterfaceDog = Object.assign(dog);

	Object.freeze(COPY);

	for (const KEY in dog) {
		const VALUE = dog[KEY as keyof typeof dog];

		if (typeof VALUE === 'object') {
			Object.freeze(VALUE);
		}
	}

	return COPY;
}

protectDog({
	name: 'Romeo',
	age: 3,
	owner: { name: 'Victor', phoneNumber: '555-555-5555' },
	favoriteFood: ['pollito', 'croquetas'],
	activities: ['jugar', 'caminar'],
});

// console.log(protectDog.name);
// protectDog.name = 'Toro';
console.log(protectDog.name);
