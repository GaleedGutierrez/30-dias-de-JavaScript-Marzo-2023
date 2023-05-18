import { Messages } from "./messages.js";
import { User } from "./User.js";

export class MessagesProxy {
	messages;
	user;
	constructor(messages, user) {
		this.messages = messages;
		this.user = user;
		this.messages = messages;
		this.user = user;
	}

	sendMessage(text) {
		this.verifyLogin();
		this.messages.sendMessage(text);
	}

	getHistory() {
		this.verifyLogin();

		return this.messages.getHistory();
	}

	verifyLogin() {
		const { isLoggedIn } = this.user;

		if (!isLoggedIn()) throw new Error("Usuario no registrado");
	}
}

const user = new User("John");
const messages = new Messages();
const messagesProxy = new MessagesProxy(messages, user);

console.log(messagesProxy.sendMessage("Hola"));
