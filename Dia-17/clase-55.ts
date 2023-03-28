export function arrayModified () {
	Array.prototype.myFilter = function (callback: any) {
		const FILTER: any[] = [];

		for (const ITEM of this) {
			if (callback(ITEM)) FILTER.push(ITEM);
		}

		return FILTER;
	};
}

arrayModified();

const arr = [
	{
		name : 'Juan',
		age  : 10,
	},
	{
		name : 'Pedro',
		age  : 20,
	},
	{
		name : 'Maria',
		age  : 30,
	},
];

console.log(arr.myFilter((person) => person.age > 18));
