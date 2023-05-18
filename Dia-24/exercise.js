import { EPriority } from "./interface.mjs";
import User from "./User.js";

class Task {
	id;
	description;
	completed;
	users;
	deadline = "";
	priority = EPriority.HIGH;
	constructor(id, description) {
		this.id = id;
		this.description = description;
		this.completed = false;
		this.users = [];
	}

	assignUser(user) {
		if (!(user instanceof User)) throw new Error();

		this.users.push(user);
	}

	completeTask() {
		this.completed = true;
		this.notifyUsers();
	}

	notifyUsers() {
		for (const USER of this.users) {
			USER.notify(this);
		}
	}
}

export default Task;
