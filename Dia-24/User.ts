import Task from './exercise.js';
import { IUser } from './interface.mjs';

class User implements IUser {
	name: string;
	tasks: Task[] = [];

	constructor(name: string) {
		this.name = name;
	}

	public notify(task: Task): void {
		this.tasks.push(task);
	}
}

export default User;
