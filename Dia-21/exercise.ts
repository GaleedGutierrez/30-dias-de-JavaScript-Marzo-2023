import { User } from './user.js';

interface IChat {
	users: User[],
	sendMessage (message: string): void,
	addUser(user: User): void,
	removeUser(name: string): void
}

export class Chat implements IChat {
	users: User[] = [];
	static #instance: Chat;

	constructor () {
		if (!Chat.#instance) Chat.#instance = Object.freeze(this);

		return Chat.#instance;
	}

	sendMessage (message: string): void {
		const { users: userList } = this;

		for (let i = 0; i < userList.length; i++) {
			userList[i].receiveMessage(message);
		}
	}

	addUser (user: User): void {
		if (user instanceof User) this.users.push(user);
	}

	removeUser (name: string): void {
		const { users: userList } = this;
		const INDEX = userList.findIndex((user) => user.name === name);

		this.users.splice(INDEX, 1);
	}
}
