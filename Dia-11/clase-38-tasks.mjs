export function doTask1() {
	const MESSAGE = "Task 1";

	return common(MESSAGE);
}

export function doTask2() {
	const MESSAGE = "Task 2";

	return common(MESSAGE);
}

export function doTask3() {
	const MESSAGE = "Task 3";

	return common(MESSAGE);
}

function common(message) {
	const PROMISE = new Promise((resolve) =>
		setTimeout(() => resolve(message), 300)
	);

	return PROMISE;
}
