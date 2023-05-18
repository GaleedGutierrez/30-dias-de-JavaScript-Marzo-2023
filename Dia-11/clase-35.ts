export function sendEmail(email: string, subject: string, body: string) {
	const PROMISE = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			const IS_EMAIL_NOT_EMPTY =
				email.length !== 0 && subject.length !== 0 && body.length !== 0;

			if (IS_EMAIL_NOT_EMPTY) {
				const MESSAGE = { email, subject, body };

				resolve(MESSAGE);
			} else {
				const ERROR_MESSAGE =
					'Error: Hacen falta campos para enviar el email';

				reject(new Error(ERROR_MESSAGE));
			}
		}, 2000);
	});

	return PROMISE;
}

sendEmail('test@mail.com', '2', 'Únete a los 30 días de JS')
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
