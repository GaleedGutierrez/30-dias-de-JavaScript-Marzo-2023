interface IAnimal {
	name: string,
	age: number,
	specie: string,
	getInfo: () => {
		name: string,
		age: number,
		specie: string,
	},
}

interface IMammal extends IAnimal {
	hasFur: boolean,
	getInfo: () => {
		name: string,
		age: number,
		specie: string,
		hasFur: boolean,
	},
}

interface IDog extends IMammal {
	breed: string,
	getInfo: () => {
		name: string,
		age: number,
		specie: string,
		hasFur: boolean,
		breed: string,
	},
	bark: () => string,
}

export class Animal implements IAnimal {
	name: string;
	age: number;
	specie: string;

	constructor (
		name: string,
		age: number,
		specie: string,
	) {
		this.name = name;
		this.age = age;
		this.specie = specie;
	}

	getInfo () {
		const { name, age, specie } = this;

		return {
			name,
			age,
			specie
		};
	}
}

export class Mammal extends Animal implements IMammal {
	hasFur: boolean;

	constructor (
		name: string,
		age: number,
		specie: string,
		hasFur: boolean
	) {
		super(name, age, specie);
		this.hasFur = hasFur;
	}

	getInfo () {
		const { name, age, specie } = super.getInfo();

		return {
			name,
			age,
			specie,
			hasFur : this.hasFur
		};
	}
}

export class Dog extends Mammal implements IDog {
	breed: string;

	constructor (
		name: string,
		age: number,
		specie: string,
		hasFur: boolean,
		// breed: string
	) {
		super(name, age, specie, hasFur);
		this.specie = 'dog';
		this.breed = specie;
	}

	getInfo () {
		const { name, age, specie, hasFur } = super.getInfo();

		return {
			name,
			age,
			specie,
			hasFur,
			breed : this.breed
		};
	}

	bark () {
		return 'woof!';
	}
}
