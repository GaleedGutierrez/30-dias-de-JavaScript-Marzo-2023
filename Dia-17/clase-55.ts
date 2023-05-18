/* eslint-disable no-extend-native */
export function arrayModified() {
	Array.prototype.myFilter = function (callback: any) {
		const FILTER: unknown[] = [];

		for (const ITEM of this) {
			if (callback(ITEM)) FILTER.push(ITEM);
		}

		return FILTER;
	};
}

arrayModified();

const arr = [
	{
		name: 'Juan',
		age: 10,
	},
	{
		name: 'Pedro',
		age: 20,
	},
	{
		name: 'Maria',
		age: 30,
	},
];
