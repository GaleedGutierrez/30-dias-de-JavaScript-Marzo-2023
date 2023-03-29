import { Flight, IFlight, IPassenger } from './Flight.js';
import { Passenger } from './Passenger.js';

type TEconomicFlight = IFlight

export class EconomicFlight extends Flight implements TEconomicFlight {
	passengers: IPassenger[] = [];

	constructor (
		origin: string,
		destination: string,
		date: string,
		capacity: number,
		price: number,
	) {
		super(origin, destination, date, capacity, price);
	}

	public sellTicket (passenger: Passenger) {
		const { price } = this;
		const { age } = passenger;

		const APPLY_DISCOUNT = age < 18 || age > 65;

		this.price = (APPLY_DISCOUNT)
			? price * 0.8
			: price;

		return super.sellTicket(passenger);
	}
}
