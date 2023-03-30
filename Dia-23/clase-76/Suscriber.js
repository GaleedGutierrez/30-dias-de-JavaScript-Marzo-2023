export class Subscriber {
    email;
    articles = [];
    constructor(email) {
        this.email = email;
        this.email = email;
    }
    receive(article) {
        this.articles.push(article);
        console.log(`El suscriptor ${this.email} ha recibido el artículo: ${article.title}`);
    }
}
