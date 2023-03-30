export class User {
    name;
    isLogin = false;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }
    login() {
        this.isLogin = true;
    }
    logout() {
        this.isLogin = false;
    }
    isLoggedIn() {
        return this.isLogin;
    }
}
