import { Flight } from "./Flight.js";

export class EconomicFlight extends Flight {
	passengers = [];
	constructor(origin, destination, date, capacity, price) {
		super(origin, destination, date, capacity, price);
	}

	sellTicket(passenger) {
		const { price } = this;
		const { age } = passenger;
		const APPLY_DISCOUNT = age < 18 || age > 65;

		this.price = APPLY_DISCOUNT ? price * 0.8 : price;

		return super.sellTicket(passenger);
	}
}
