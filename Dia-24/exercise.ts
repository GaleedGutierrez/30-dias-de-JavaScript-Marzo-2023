import { EPriority, ITask } from './interface.mjs';
import User from './User.js';

class Task implements ITask {
	id: string;
	description: string;
	completed: boolean;
	users: User[];
	deadline?: string = '';
	priority?: EPriority = EPriority.HIGH;
	constructor(id: string, description: string) {
		this.id = id;
		this.description = description;
		this.completed = false;
		this.users = [];
	}

	public assignUser(user: User): void {
		if (!(user instanceof User)) throw new Error();

		this.users.push(user);
	}

	public completeTask(): void {
		this.completed = true;
		this.notifyUsers();
	}

	public notifyUsers(): void {
		for (const USER of this.users) {
			USER.notify(this);
		}
	}
}

export default Task;
