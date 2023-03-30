interface IMessages {
	history: string[],
	sendMessage(text: string): void,
	getHistory(): string[],
}

export class Messages implements IMessages {
	// No debes editar este código ❌
	history: string[] = [];
	// constructor () {
	// this.history = [];
	// }

	sendMessage (text: string): void {
		this.history.push(text);
	}

	getHistory (): string[] {
		return this.history;
	}
}
