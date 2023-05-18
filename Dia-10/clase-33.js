export function createTaskPlanner() {
	const TASKS = [];
	const addTask = (task) => {
		task.completed = false;
		TASKS.push(task);
	};

	const removeTask = (value) => {
		const index = TASKS.findIndex(
			(task) => task.id === value || task.name === value
		);

		TASKS.splice(index, 1);
		// TASKS = (typeof(value) === 'number')
		// 	? TASKS.filter((task) => task.id !== value)
		// 	: TASKS.filter((task) => task.name !== value);
	};

	const getTasks = () => TASKS;
	const getPendingTasks = () => TASKS.filter((task) => !task.completed);
	const getCompletedTasks = () => TASKS.filter((task) => task.completed);
	const markTaskAsCompleted = (value) => {
		const TASK = TASKS.find(
			(task) => task.id === value || task.name === value
		);

		// const INDEX = (typeof(value) === 'number')
		// 	? TASKS.findIndex((task) => task.id === value)
		// 	: TASKS.findIndex((task) => task.name === value);
		// TASKS[INDEX].completed = true;
		if (TASK) TASK.completed = true;
	};

	const getSortedTasksByPriority = () =>
		[...TASKS].sort((taskA, taskB) => taskA.priority - taskB.priority);
	const filterTasksByTag = (tag) =>
		TASKS.filter((task) => task.tags.some((tagName) => tagName === tag));
	const updateTask = (taskId, updates) => {
		const INDEX = TASKS.findIndex((task) => task.id === taskId);

		TASKS[INDEX] = { ...TASKS[INDEX], ...updates };
	};

	return {
		addTask,
		removeTask,
		getTasks,
		getPendingTasks,
		getCompletedTasks,
		markTaskAsCompleted,
		getSortedTasksByPriority,
		filterTasksByTag,
		updateTask,
	};
}

const planner = createTaskPlanner();

planner.addTask({
	id: 1,
	name: "Comprar leche",
	priority: 1,
	tags: ["XD", "home"],
});
planner.addTask({
	id: 2,
	name: "Comprar MANTECA",
	priority: 3,
	tags: ["shopping", "home"],
});
planner.addTask({
	id: 2,
	name: "Comprar QUESO",
	priority: 2,
	tags: ["queso", "home"],
});
// planner.removeTask('Comprar leche');
// planner.removeTask('Comprar MANTECA');
// planner.getTasks();
// const xd = planner.getPendingTasks();
// console.log(planner.filterTasksByTag('XD'));
planner.updateTask(2, { name: "CCCC", id: 100000000 });
