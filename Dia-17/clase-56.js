export class Car {
	brand;
	model;
	year;
	mileage;
	state;
	constructor (brand, model, year, mileage) {
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.mileage = mileage;
		this.state = false;
	}

	turnOn () {
		this.state = true;
	}

	turnOff () {
		this.state = false;
	}

	drive (kilometers) {
		const { state } = this;

		if (!state)
			throw new Error('El auto está apagado');

		this.mileage += kilometers;

		return this.mileage;
	}
}

const toyota = new Car('Toyota', 'Corolla', 2020, 0);

toyota.turnOff();
toyota.drive(100);
