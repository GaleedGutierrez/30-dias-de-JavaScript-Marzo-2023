interface ICar {
	year: number,
	model: string,
	brand: string,
	color: string,
	price: number,
	isAvailable: boolean,
}

interface ICarBuilder extends ICar {
	setYear(year: number): this,
	setModel(model: string): this,
	setBrand(brand: string): this,
	setColor(color: string): this,
	setPrice(price: number): this,
	setIsAvailable(isAvailable: boolean): this,
	build(): ICar
}

export class CarBuilder implements ICarBuilder {
	year = 0;
	model = '';
	brand = '';
	color = '';
	price = 0;
	isAvailable = false;

	setYear (year: number): this {
		this.year = year;

		return this;
	}

	setModel (model: string): this {
		this.model = model;

		return this;
	}

	setBrand (brand: string): this {
		this.brand = brand;

		return this;
	}

	setColor (color: string): this {
		this.color = color;

		return this;
	}

	setPrice (price: number): this {
		this.price = price;

		return this;
	}

	setIsAvailable (isAvailable: boolean): this {
		this.isAvailable = isAvailable;

		return this;
	}

	build (): ICar {
		const { year, model, brand, color, price, isAvailable } = this;
		const CAR = {
			year,
			model,
			brand,
			color,
			price,
			isAvailable
		};

		return CAR;
	}
}

const car = new CarBuilder()
	.setYear(2021)
	.setModel('Model X')
	.setBrand('Tesla')
	.setColor('Red')
	.setPrice(50000)
	.setIsAvailable(false)
	.build();

console.log(car);
