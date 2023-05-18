interface InterfaceUser {
	_name: string;
	_age: number;
	_friends: User[];
	_messages: string[];
	addFriend: (friend: User) => void;
	sendMessage: (message: string, friend: User) => void;
	showMessages: () => string[];
}

export class User implements InterfaceUser {
	_name: string;
	_age: number;
	_friends: User[] = [];
	_messages: string[] = [];
	constructor(name: string, age: number) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(newName: string) {
		this._name = newName;
	}

	get age() {
		return this._age;
	}

	set age(newAge: number) {
		this._age = newAge;
	}

	set messages(newMessage: string) {
		this._messages.push(newMessage);
	}

	addFriend(friend: User): void {
		this._friends.push(friend);
	}

	sendMessage(message: string, friend: User): void {
		this._messages.push(message);

		friend.messages = message;
	}

	showMessages(): string[] {
		return this._messages;
	}
}
