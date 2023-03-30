export class Messages {
	// No debes editar este código ❌
	history = [];
	// constructor () {
	// this.history = [];
	// }
	sendMessage (text) {
		this.history.push(text);
	}

	getHistory () {
		return this.history;
	}
}
