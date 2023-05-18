interface ICar {
	brand: string;
	model: string;
	year: number;
	mileage: number;
	state: boolean;
	turnOn: () => void;
	turnOff: () => void;
	drive: (kilometers: number) => void;
}

export class Car implements ICar {
	brand: string;
	model: string;
	year: number;
	mileage: number;
	state: boolean;
	constructor(brand: string, model: string, year: number, mileage: number) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.mileage = mileage;
		this.state = false;
	}

	turnOn() {
		this.state = true;
	}

	turnOff() {
		this.state = false;
	}

	drive(kilometers: number) {
		const { state } = this;

		if (!state) throw new Error('El auto está apagado');

		this.mileage += kilometers;

		return this.mileage;
	}
}

const toyota = new Car('Toyota', 'Corolla', 2020, 0);

toyota.turnOff();
toyota.drive(100);
