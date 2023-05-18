import Task from './exercise';
import { EPriority, ITaskBuilder } from './interface.mjs';
import User from './User';

class TaskBuilder implements ITaskBuilder {
	id: string;
	description: string;
	completed: boolean;
	users: User[];
	deadline: string;
	priority: EPriority;
	task: Task;

	constructor() {
		this.id = '';
		this.description = '';
		this.completed = false;
		this.users = [];
		this.deadline = '';
		this.priority = EPriority.HIGH;
		this.task = new Task(this.id, this.description);
	}

	public setId(id: string): this {
		this.task.id = id;

		return this;
	}

	public setDescription(description: string): this {
		this.task.description = description;

		return this;
	}

	public setCompleted(completed: boolean): this {
		this.task.completed = completed;

		return this;
	}

	public setUsers(users: User[]): this {
		for (const user of users) {
			this.task.assignUser(user);
		}

		return this;
	}

	public setDeadline(deadline: string): this {
		this.task.deadline = deadline;

		return this;
	}

	public setPriority(priority: EPriority): this {
		this.task.priority = priority;

		return this;
	}

	public build(): Task {
		return this.task;
	}
}

export default TaskBuilder;
