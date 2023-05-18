import { doTask1, doTask2, doTask3 } from './clase-37-tasks.mjs';

export function runCode() {
	const STRINGS: string[] = [];

	const PROMISE = new Promise((response) => {
		doTask1()
			.then((result) => {
				STRINGS.push(result);

				return doTask2();
			})
			.then((result) => {
				STRINGS.push(result);

				return doTask3();
			})
			.then((result) => {
				STRINGS.push(result);
				response(STRINGS);
			});
	});

	return PROMISE;
}

runCode().then((response) => console.log(response));
