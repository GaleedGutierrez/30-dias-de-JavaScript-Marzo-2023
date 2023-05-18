interface IUser {
	name: string;
	messages: string[];
	receiveMessage: (message: string) => void;
}

export class User implements IUser {
	// Este código no debe ser editado ❌
	messages: string[];

	constructor(public name: string) {
		this.name = name;
		this.messages = [];
	}

	receiveMessage(message: string) {
		this.messages.push(message);
	}
}
