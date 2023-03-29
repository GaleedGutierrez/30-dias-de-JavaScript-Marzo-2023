import { Flight } from './Flight.js';
export class PremiumFlight extends Flight {
    specialService;
    passengers = [];
    constructor(origin, destination, date, capacity, price, specialService) {
        super(origin, destination, date, capacity, price);
        this.specialService = specialService;
        this.specialService = specialService;
        this.price += this.specialService;
    }
}
