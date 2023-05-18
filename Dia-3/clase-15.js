function printTriangle(size, character) {
	let message = "";
	const space = " ";
	let counterCharacters = 1;
	let counterSpaces = size - counterCharacters;

	for (let i = 1; i <= size; i++) {
		message +=
			i < size
				? `${
						space.repeat(counterSpaces) +
						character.repeat(counterCharacters)
				  }\n`
				: space.repeat(counterSpaces) +
				  character.repeat(counterCharacters);
		counterCharacters++;
		counterSpaces--;
	}

	return message;
}

const xd = printTriangle(6, "$");

console.log(xd);
