import { EPriority } from "./interface.mjs";

class TaskDecorator {
	task;
	deadline;
	priority;
	constructor(task, options) {
		this.task = task;
		this.priority = EPriority.MEDIUM;
		this.deadline = options.deadline;
	}

	assignUser(user) {
		this.task.assignUser(user);
	}

	completeTask() {
		this.task.completeTask();
	}

	notifyUsers() {
		this.task.notifyUsers();
	}
}

export default TaskDecorator;
