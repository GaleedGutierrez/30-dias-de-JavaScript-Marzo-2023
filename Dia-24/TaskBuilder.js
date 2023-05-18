import Task from "./exercise";
import { EPriority } from "./interface.mjs";

class TaskBuilder {
	id;
	description;
	completed;
	users;
	deadline;
	priority;
	task;
	constructor() {
		this.id = "";
		this.description = "";
		this.completed = false;
		this.users = [];
		this.deadline = "";
		this.priority = EPriority.HIGH;
		this.task = new Task(this.id, this.description);
	}

	setId(id) {
		this.task.id = id;

		return this;
	}

	setDescription(description) {
		this.task.description = description;

		return this;
	}

	setCompleted(completed) {
		this.task.completed = completed;

		return this;
	}

	setUsers(users) {
		for (const user of users) {
			this.task.assignUser(user);
		}

		return this;
	}

	setDeadline(deadline) {
		this.task.deadline = deadline;

		return this;
	}

	setPriority(priority) {
		this.task.priority = priority;

		return this;
	}

	build() {
		return this.task;
	}
}

export default TaskBuilder;
