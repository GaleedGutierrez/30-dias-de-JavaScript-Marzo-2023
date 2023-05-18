import { IArticle } from './exercise.js';

interface ISubscriber {
	email: string;
	articles: IArticle[];
	receive(article: IArticle): void;
}

export class Subscriber implements ISubscriber {
	articles: IArticle[] = [];

	constructor(public email: string) {
		this.email = email;
	}

	receive(article: IArticle): void {
		this.articles.push(article);
		console.log(
			`El suscriptor ${this.email} ha recibido el artículo: ${article.title}`
		);
	}
}
