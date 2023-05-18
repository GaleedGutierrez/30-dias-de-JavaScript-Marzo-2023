import Task from "./exercise.js";
import User from "./User.js";

class Authorization {
	checkAuthorization(user, task) {
		// const IS_AUTHORIZATION = task.users.some(
		// 	(taskUser) => taskUser === user
		// );
		const IS_AUTHORIZATION = task.users.includes(user);

		if (!IS_AUTHORIZATION) throw new Error("No autorizado");
	}
}

export default Authorization;

const authorization = new Authorization();
const user1 = new User("Juan");
const user2 = new User("Maria");
const task = new Task("4", "Comprar pan");

task.assignUser(user1);
authorization.checkAuthorization(user2, task);
