class User {
	name;
	tasks = [];
	constructor(name) {
		this.name = name;
	}

	notify(task) {
		this.tasks.push(task);
	}
}

export default User;
