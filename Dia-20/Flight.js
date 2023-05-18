import { Reservation } from "./Reservation.js";

export class Flight {
	origin;
	destination;
	date;
	capacity;
	price;
	passengers = [];
	constructor(origin, destination, date, capacity, price) {
		this.origin = origin;
		this.destination = destination;
		this.date = date;
		this.capacity = capacity;
		this.price = price;
		this.origin = origin;
		this.destination = destination;
		this.date = date;
		this.capacity = capacity;
		this.price = price;
	}

	sellTicket(passenger) {
		const { capacity } = this;
		const IS_RIGHT_CAPACITY = capacity > 0;

		if (!IS_RIGHT_CAPACITY) return;

		this.capacity--;

		const { origin, destination, date, price } = this;
		const { name, lastName, age } = passenger;
		const FLIGHT_PASSENGER = {
			origin,
			destination,
			date,
			price,
		};
		const DATA_PASSENGER = {
			fullName: `${name} ${lastName}`,
			age,
		};

		this.passengers.push(DATA_PASSENGER);
		passenger.flights.push(FLIGHT_PASSENGER);

		const RESERVATION = new Reservation(this, passenger);

		return RESERVATION;
	}
}
