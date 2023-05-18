import { Messages } from './messages.js';
import { User } from './User.js';

interface IMessagesProxy {
	messages: Messages;
	user: User;
	sendMessage(text: string): void;
	getHistory(): string[];
	verifyLogin(): void;
}

export class MessagesProxy implements IMessagesProxy {
	constructor(public messages: Messages, public user: User) {
		this.messages = messages;
		this.user = user;
	}

	sendMessage(text: string): void {
		this.verifyLogin();

		this.messages.sendMessage(text);
	}

	getHistory(): string[] {
		this.verifyLogin();

		return this.messages.getHistory();
	}

	verifyLogin(): void {
		const { isLoggedIn } = this.user;

		if (!isLoggedIn()) throw new Error('Usuario no registrado');
	}
}

const user = new User('John');
const messages = new Messages();
const messagesProxy = new MessagesProxy(messages, user);

console.log(messagesProxy.sendMessage('Hola'));
