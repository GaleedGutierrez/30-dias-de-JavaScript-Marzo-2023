import Task from "./exercise";
import User from "./User";

/* eslint-disable no-use-before-define */
export interface ITask {
	id: string;
	description: string;
	completed: boolean;
	deadline?: string;
	priority?: EPriority;
	assignUser(user: User): void;
	completeTask(): void;
	notifyUsers(): void;
}

export interface IUser {
	name: string;
	tasks: Task[];
	notify(task: Task): void;
}

export interface IAuthorization {
	checkAuthorization(user: User, task: Task): void;
}

export interface ITaskDecorator {
	task: Task;
	deadline: string;
	priority: EPriority;
	assignUser(user: User): void;
	completeTask(): void;
	notifyUsers(): void;
}

export interface IOptions {
	deadline: string;
	priority: EPriority;
}

export enum EPriority {
	HIGH = "high",
	MEDIUM = "medium",
	LOW = "low",
}

export interface ITaskBuilder {
	id: string;
	description: string;
	completed: boolean;
	users: User[];
	task: Task;
	setId(id: string): this;
	setDescription(description: string): this;
	setCompleted(completed: boolean): this;
	setUsers(users: User[]): this;
	setDeadline(deadline: string): this;
	setPriority(priority: EPriority): this;
	build(): Task;
}

export interface ITaskManager {
	addTask(task: Task): void;
	getTasks(): Task[];
	getTaskById(id: string): Task | null;
}
