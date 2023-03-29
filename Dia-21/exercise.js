import { User } from './user.js';
export class Chat {
    users = [];
    static #instance;
    constructor() {
        if (!Chat.#instance)
            Chat.#instance = Object.freeze(this);
        return Chat.#instance;
    }
    sendMessage(message) {
        const { users: userList } = this;
        for (let i = 0; i < userList.length; i++) {
            userList[i].receiveMessage(message);
        }
    }
    addUser(user) {
        if (user instanceof User)
            this.users.push(user);
    }
    removeUser(name) {
        const { users: userList } = this;
        const INDEX = userList.findIndex((user) => user.name === name);
        this.users.splice(INDEX, 1);
    }
}
