export class MyArray {
	length;
	data;
	constructor() {
		this.length = 0;
		this.data = {};
	}

	map(func) {
		const { data } = this;
		const NEW_ARRAY = new MyArray();

		for (const KEY in data) {
			NEW_ARRAY.data[KEY] = func(data[KEY]);
		}

		NEW_ARRAY.length = this.length;

		return NEW_ARRAY;
	}

	filter(func) {
		const { data } = this;
		const NEW_ARRAY = new MyArray();
		let counter = 0;

		for (const KEY in data) {
			const IS_OK = func(data[KEY]);

			if (IS_OK) {
				NEW_ARRAY.data[counter] = data[KEY];
				counter++;
			}

			NEW_ARRAY.length = counter;
		}

		return NEW_ARRAY;
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
	}

	pop() {
		const DELETED = this.data[this.length - 1];

		delete this.data[this.length - 1];
		this.length--;

		return DELETED;
	}

	join(character = ",") {
		const { data } = this;
		let newString = "";
		const LENGTH = this.length - 1;

		for (const KEY in data) {
			newString +=
				Number(KEY) !== LENGTH ? data[KEY] + character : data[KEY];
		}

		return newString;
	}

	shift() {
		const { data } = this;
		const LENGTH_STOP = this.length - 1;
		const DELETE = this.data["0"];

		delete this.data["0"];
		this.length = 0;

		for (const KEY in data) {
			this.data[this.length] = data[KEY];
			this.length++;

			if (Number(KEY) === LENGTH_STOP) {
				this.length++;

				break;
			}
		}

		this.pop();

		return DELETE;
	}

	unshift(item) {
		if (item === undefined) return;

		const { data } = this;

		this.length = 1;

		for (const KEY in data) {
			this.data[this.length] = data[KEY];
			this.length++;
		}

		this.data["0"] = item;

		return this.length;
	}
}
// const myArray = new MyArray();
// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// myArray.push(4);
// myArray.pop();
// myArray.shift();
// console.log(myArray);
// myArray.unshift(5);
// const myMap = myArray.map((number: number) => number * 2);
// const myFilter = myArray.filter((number: number) => number % 2 === 0);
// const myJoin = myArray.join('-');
// console.log(myArray);
// console.log({ myMap, myFilter, myJoin });
