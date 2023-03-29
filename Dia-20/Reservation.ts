import { Flight } from './Flight.js';
import { Passenger } from './Passenger.js';

interface IReservationDetails {
	origin: string,
	destination: string,
	date: string,
	reservedBy: string,
}

export interface IReservation {
	flight: Flight,
	passenger: Passenger,
	reservationDetails: () => IReservationDetails,
}

export class Reservation implements IReservation {
	constructor (
		public flight: Flight,
		public passenger: Passenger
	) {
		this.flight = flight,
		this.passenger = passenger;
	}

	public reservationDetails (): IReservationDetails {
		const { origin, destination, date } = this.flight;
		const { name, lastName } = this.passenger;
		const reservedBy = `${name} ${lastName}`;
		const RESERVATION_DETAILS: IReservationDetails = {
			origin,
			destination,
			date,
			reservedBy
		};

		return RESERVATION_DETAILS;
	}
}
