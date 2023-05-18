import { Subscriber } from './Suscriber.js';

export interface IArticle {
	title: string;
	content: string;
}

interface INewsletter {
	subscribers: Subscriber[];
	subscribe(subscriber: Subscriber): void;
	unsubscribe(email: string): void;
	post(article: IArticle): void;
}

export class Newsletter implements INewsletter {
	subscribers: Subscriber[] = [];
	articles: IArticle[] = [];
	subscribe(subscriber: Subscriber): void {
		this.subscribers.push(subscriber);
	}

	unsubscribe(email: string): void {
		const { subscribers } = this;
		const INDEX = subscribers.findIndex(
			(subscriber) => subscriber.email === email
		);

		subscribers.splice(INDEX, 1);
	}

	post(article: IArticle): void {
		const { subscribers } = this;

		this.articles.push(article);

		for (let i = 0; i < subscribers.length; i++) {
			subscribers[i].receive(article);
		}
	}
}

const newsletter = new Newsletter();
const subscriber1 = new Subscriber('pepe@mail.com');
const subscriber2 = new Subscriber('juanito@mail.com');
const subscriber3 = new Subscriber('pedro@mail.com');

const article = {
	title: '30 días de js',
	content: 'Aprende js en 30 días',
};

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);
console.log({ subscriber1, subscriber2, subscriber3 });

// newsletter.post(article);
