import { Flight, IFlight, IPassenger } from './Flight.js';

interface IPremiumFlight extends IFlight {
	specialService: number;
}

export class PremiumFlight extends Flight implements IPremiumFlight {
	passengers: IPassenger[] = [];

	constructor(
		origin: string,
		destination: string,
		date: string,
		capacity: number,
		price: number,
		public specialService: number
	) {
		super(origin, destination, date, capacity, price);
		this.specialService = specialService;
		this.price += this.specialService;
	}
}
