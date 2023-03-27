export function getPetExerciseInfo (type, age) {
	let message = '';

	switch (type) {
		case 'perro':
			message = dog(age);

			break;

		case 'gato':
			message = cat(age);

			break;

		case 'ave':
			message = bird(age);

			break;

		default:
			message = 'Tipo de mascota inválida';
	}

	return message;
}

function dog (age) {
	let message = '';

	switch (true) {
		case age < 1:
			message = 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego';

			break;

		case age <= 7:
			message = 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego';

			break;

		case age > 7:
			message = 'Los perros viejos necesitan caminatas más cortas';

			break;
	}

	return message;
}

function cat (age) {
	let message = '';

	switch (true) {
		case age < 1:
			message = 'Los gatitos necesitan frecuentes sesiones de juego';

			break;

		case age <= 7:
			message = 'Los gatos a esta edad necesitan jugar diariamente';

			break;

		default:
			message = 'Los gatos viejos necesitan sesiones de juego más cortas';
	}

	return message;
}

function bird (age) {
	let message = '';

	switch (true) {
		case age < 1:
			message = 'Las aves jóvenes necesitan mucho espacio para volar';

			break;

		case age <= 7:
			message = 'Las aves necesitan jugar diariamente y un lugar para volar';

			break;

		default:
			message = 'Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar';
	}

	return message;
}

const xd = getPetExerciseInfo('gato', 1);

console.log(xd);
