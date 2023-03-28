export function hotelSystem (rooms) {
	const MAX_ROOMS = rooms;
	const BOOKING = [];
	const searchReservation = (id) => {
		const RESERVATION_ROOM = BOOKING.find((book) => book.id === id);

		if (!RESERVATION_ROOM)
			throw new Error('La reservación no fue encontrada');

		return RESERVATION_ROOM;
	};

	const getSortReservations = () => {
		const SORTED = [...BOOKING].sort((bookA, bookB) => {
			const FIRST_DATE = new Date(bookA.checkIn).getTime();
			const SECOND_DATE = new Date(bookB.checkIn).getTime();

			return FIRST_DATE - SECOND_DATE;
		});

		return SORTED;
	};

	const addReservation = (reservation) => {
		const CHECK_CHECK_IN = BOOKING.some((book) => book.checkIn === reservation.checkIn);
		const CHECK_CHECK_OUT = BOOKING.some((book) => book.checkOut === reservation.checkOut);
		const IS_IT_NOT_AVAILABLE = CHECK_CHECK_IN && CHECK_CHECK_OUT;

		if (IS_IT_NOT_AVAILABLE)
			throw new Error('La habitación no está disponible');

		BOOKING.push(reservation);
	};

	const removeReservation = (id) => {
		const INDEX = BOOKING.findIndex((book) => book.id === id);

		if (INDEX < 0)
			throw new Error('La reservación que se busca remover no existe');
		const REMOVING = BOOKING.splice(INDEX, 1)[0];

		return REMOVING;
	};

	const getReservations = () => {
		return BOOKING;
	};

	const getAvailableRooms = (checkIn, checkOut) => {
		const ROOMS_CHECK_IN = BOOKING
			.filter((book) => book.checkIn === checkIn)
			.map((book) => book.roomNumber);
		const ROOMS_CHECK_OUT = BOOKING
			.filter((book) => book.checkOut === checkOut)
			.map((book) => book.roomNumber);
		const OCCUPIED_ROOMS = [ ROOMS_CHECK_IN, ROOMS_CHECK_OUT ].flat();
		const FREE_ROOMS = [];

		for (let i = 1; i <= MAX_ROOMS; i++) {
			const IS_FREE = OCCUPIED_ROOMS.includes(i);

			if (!IS_FREE)
				FREE_ROOMS.push(i);
		}

		return FREE_ROOMS;
	};

	return {
		searchReservation,
		getSortReservations,
		addReservation,
		removeReservation,
		getReservations,
		getAvailableRooms
	};
}

const hotel = hotelSystem(10);

hotel.addReservation({
	id         : 1,
	name       : 'John Doe',
	checkIn    : '01/01',
	checkOut   : '02/01',
	roomNumber : 1,
});
hotel.addReservation({
	id         : 2,
	name       : 'Pepe Doe',
	checkIn    : '01/01',
	checkOut   : '10/01',
	roomNumber : 9,
});
// Buscamos habitaciones disponibles entre el 01 y el 05 del primer mes
console.log(hotel.getAvailableRooms('01/01', '05/01'));
