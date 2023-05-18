import { doTask1, doTask2, doTask3 } from './clase-38-tasks.mjs';

export async function runCode() {
	const STRINGS: string[] = [];

	STRINGS.push(await doTask1());
	STRINGS.push(await doTask2());
	STRINGS.push(await doTask3());

	return STRINGS;
}

console.log(await runCode());
