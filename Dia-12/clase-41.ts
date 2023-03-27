import { resourceUsage } from 'process';
import { InterfaceFormData, InterfaceUser } from './interfaces.mjs';
import { TypeFormData } from './types.mjs';

export function validateForm (formData: InterfaceFormData, registeredUsers: InterfaceUser[]) {
	const MISSING_KEYS: TypeFormData[] = verifyKeys(formData);

	if (MISSING_KEYS.length !== 0) showError(MISSING_KEYS);

	verifyEmail(formData.email, registeredUsers);

	const { name, lastname, email } = formData;

	registeredUsers.push({
		name,
		lastname,
		email
	});

	const FINAL = `Tu registro fue exitoso ${name} ${lastname}`;

	return FINAL;
}

const verifyKeys = (formData: InterfaceFormData) => {
	const KEY_GUIDE: TypeFormData[] = [ 'name', 'lastname', 'email', 'password' ];
	const MISSING_KEYS: TypeFormData[] = [];

	for (const KEY of KEY_GUIDE) {
		const IS_NOT_EMPTY = Object.prototype.hasOwnProperty.call(formData, KEY);

		if (!IS_NOT_EMPTY) MISSING_KEYS.push(KEY);
	}

	return MISSING_KEYS;
};

const showError = (missingKeys: TypeFormData[]) => {
	let message = 'Faltan los siguientes campos requeridos: ';
	const INDEX_PENULTIMATE_ITEM = missingKeys.length - 2;
	const INDEX_LATEST_ITEM = missingKeys.length - 1;

	for (let i = 0; i < missingKeys.length; i++) {
		message += (i < INDEX_PENULTIMATE_ITEM)
			? `${missingKeys[i]}, `
			: (i < INDEX_LATEST_ITEM)
				? `${missingKeys[i]} y `
				: `${missingKeys[i]}`;
	}

	throw new Error(message);
};

const verifyEmail = (email: string, registeredUsers: InterfaceUser[]) => {
	const REPEAT = registeredUsers.find((user) => user.email === email);

	if (REPEAT) throw new Error(`El email ${email} ya está en uso.`);
};

const formData = {
	name     : 'Juan',
	password : '123456',
};

const registeredUsers = [
	{ name: 'Pedro', lastname: 'Gomez', email: 'pedro@example.com' },
	{ name: 'Maria', lastname: 'Garcia', email: 'maria@example.com' },
];

const xd = validateForm(formData, registeredUsers);

console.log(xd);
