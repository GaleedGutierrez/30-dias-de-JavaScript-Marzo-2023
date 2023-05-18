import Task from './exercise.js';
import { ITaskManager } from './interface.mjs';

class TaskManager implements ITaskManager {
	#tasks: Task[] = [];
	// eslint-disable-next-line no-use-before-define
	static #instance: TaskManager;

	public static getInstance(): TaskManager {
		if (!TaskManager.#instance) {
			TaskManager.#instance = new TaskManager();
		}

		return TaskManager.#instance;
	}

	public addTask(task: Task): void {
		if (!(task instanceof Task)) return;

		this.#tasks.push(task);
	}

	public getTasks(): Task[] {
		return this.#tasks;
	}

	public getTaskById(id: string): Task | null {
		const SEARCH = this.#tasks.find((task) => task.id === id) ?? null;

		return SEARCH;
	}
}

export default TaskManager;
