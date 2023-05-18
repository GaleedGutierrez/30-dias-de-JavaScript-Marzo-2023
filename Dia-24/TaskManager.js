import Task from "./exercise.js";

class TaskManager {
	#tasks = [];
	// eslint-disable-next-line no-use-before-define
	static #instance;
	static getInstance() {
		if (!TaskManager.#instance) {
			TaskManager.#instance = new TaskManager();
		}

		return TaskManager.#instance;
	}

	addTask(task) {
		if (!(task instanceof Task)) return;

		this.#tasks.push(task);
	}

	getTasks() {
		return this.#tasks;
	}

	getTaskById(id) {
		const SEARCH = this.#tasks.find((task) => task.id === id) ?? null;

		return SEARCH;
	}
}

export default TaskManager;
