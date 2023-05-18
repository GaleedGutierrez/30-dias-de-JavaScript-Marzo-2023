interface IFlights {
	origin: string;
	destination: string;
	date: string;
	price: number;
}

export interface IBaseDataPassenger {
	name: string;
	lastName: string;
}

export interface IPassenger extends IBaseDataPassenger {
	age: number;
	flights: IFlights[];
}

export class Passenger implements IPassenger {
	flights: IFlights[];

	constructor(
		public name: string,
		public lastName: string,
		public age: number
	) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this.flights = [];
	}
}
