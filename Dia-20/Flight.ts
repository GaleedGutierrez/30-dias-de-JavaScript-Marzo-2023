import { Passenger } from './Passenger.js';
import { Reservation } from './Reservation.js';

export interface IFlight {
	origin: string;
	destination: string;
	date: string;
	capacity: number;
	price: number;
	passengers: IPassenger[];
	sellTicket: (passenger: Passenger) => Reservation | void;
}

export interface IPassenger {
	fullName: string;
	age: number;
}

export class Flight implements IFlight {
	passengers: IPassenger[] = [];

	constructor(
		public origin: string,
		public destination: string,
		public date: string,
		public capacity: number,
		public price: number
	) {
		this.origin = origin;
		this.destination = destination;
		this.date = date;
		this.capacity = capacity;
		this.price = price;
	}

	public sellTicket(passenger: Passenger): Reservation | void {
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
