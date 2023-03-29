export class User {
    name;
    // Este código no debe ser editado ❌
    messages;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.messages = [];
    }
    receiveMessage(message) {
        this.messages.push(message);
    }
}
