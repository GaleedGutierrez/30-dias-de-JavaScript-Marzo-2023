type TTaskList = Map<string, Set<string>>;

export function taskManager() {
	const TASK_LIST: TTaskList = new Map();

	function addTask(task: string, tags: string[]): void {
		task = task.toLocaleLowerCase();

		if (!TASK_LIST.get(task)) {
			const TAGS = new Set(tags);

			TASK_LIST.set(task, TAGS);

			return;
		}

		const CURRENT_TAGS = TASK_LIST.get(task);

		for (let i = 0; i < tags.length; i++) {
			CURRENT_TAGS?.add(tags[i]);
		}
	}

	function printTasks(): TTaskList {
		return TASK_LIST;
	}

	return {
		addTask,
		printTasks,
	};
}

const myTaskManager = taskManager();

// myTaskManager.addTask('Comprar leche', [ 'compras', 'urgente' ]);
// myTaskManager.addTask('Sacar al perro', ['mascotas']);
// myTaskManager.addTask('Hacer ejercicio', ['salud']);

// console.log(myTaskManager.printTasks());

myTaskManager.addTask('Comprar leche', ['compras', 'urgente']);
myTaskManager.addTask('Sacar al perro', ['mascotas']);
myTaskManager.addTask('Hacer ejercicio', ['salud']);
myTaskManager.addTask('Comprar leche', ['lácteos']);

console.log(myTaskManager.printTasks());

// function removeDuplicates (values: string[]): string[] {
// 	const NOT_REPEAT = new Set(values);
// 	const NEW_ARRAY: string[] = [];
// 	const ELEMENTS = NOT_REPEAT.values();

// 	for (let index = 0; index < NOT_REPEAT.size; index++) {
// 		NEW_ARRAY.push(ELEMENTS.next().value);
// 	}

// 	return NEW_ARRAY;
// }
