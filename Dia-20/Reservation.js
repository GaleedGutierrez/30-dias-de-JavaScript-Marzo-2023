export class Reservation {
	flight;
	passenger;
	constructor(flight, passenger) {
		this.flight = flight;
		this.passenger = passenger;
		(this.flight = flight), (this.passenger = passenger);
	}

	reservationDetails() {
		const { origin, destination, date } = this.flight;
		const { name, lastName } = this.passenger;
		const reservedBy = `${name} ${lastName}`;
		const RESERVATION_DETAILS = {
			origin,
			destination,
			date,
			reservedBy,
		};

		return RESERVATION_DETAILS;
	}
}
