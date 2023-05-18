import Task from './exercise.js';
import { EPriority, IOptions, ITaskDecorator } from './interface.mjs';
import User from './User.js';

class TaskDecorator implements ITaskDecorator {
	task: Task;
	deadline: string;
	priority: EPriority;

	constructor(task: Task, options: IOptions) {
		this.task = task;
		this.priority = EPriority.MEDIUM;
		this.deadline = options.deadline;
	}

	public assignUser(user: User): void {
		this.task.assignUser(user);
	}

	public completeTask(): void {
		this.task.completeTask();
	}

	public notifyUsers(): void {
		this.task.notifyUsers();
	}
}

export default TaskDecorator;
