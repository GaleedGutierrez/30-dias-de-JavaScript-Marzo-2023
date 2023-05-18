export class CarBuilder {
	year = 0;
	model = "";
	brand = "";
	color = "";
	price = 0;
	isAvailable = false;
	setYear(year) {
		this.year = year;

		return this;
	}

	setModel(model) {
		this.model = model;

		return this;
	}

	setBrand(brand) {
		this.brand = brand;

		return this;
	}

	setColor(color) {
		this.color = color;

		return this;
	}

	setPrice(price) {
		this.price = price;

		return this;
	}

	setIsAvailable(isAvailable) {
		this.isAvailable = isAvailable;

		return this;
	}

	build() {
		const { year, model, brand, color, price, isAvailable } = this;
		const CAR = {
			year,
			model,
			brand,
			color,
			price,
			isAvailable,
		};

		return CAR;
	}
}

const car = new CarBuilder()
	.setYear(2021)
	.setModel("Model X")
	.setBrand("Tesla")
	.setColor("Red")
	.setPrice(50000)
	.setIsAvailable(false)
	.build();

console.log(car);
