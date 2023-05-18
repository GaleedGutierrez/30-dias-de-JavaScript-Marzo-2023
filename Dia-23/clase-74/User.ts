interface IUser {
	name: string;
	isLogin: boolean;
	login(): void;
	logout(): void;
	isLoggedIn(): boolean;
}

export class User implements IUser {
	isLogin = false;
	constructor(public name: string) {
		this.name = name;
		this.isLoggedIn = this.isLoggedIn.bind(this);
	}

	login() {
		this.isLogin = true;
	}

	logout() {
		this.isLogin = false;
	}

	isLoggedIn(): boolean {
		return this.isLogin;
	}
}
