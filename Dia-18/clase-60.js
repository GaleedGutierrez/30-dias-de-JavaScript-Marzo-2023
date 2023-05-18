export class User {
	_name;
	_age;
	_friends = [];
	_messages = [];
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	get age() {
		return this._age;
	}

	set age(newAge) {
		this._age = newAge;
	}

	set messages(newMessage) {
		this._messages.push(newMessage);
	}

	addFriend(friend) {
		this._friends.push(friend);
	}

	sendMessage(message, friend) {
		this._messages.push(message);
		friend.messages = message;
	}

	showMessages() {
		return this._messages;
	}
}
