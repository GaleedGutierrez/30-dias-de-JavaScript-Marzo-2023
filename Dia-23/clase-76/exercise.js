import { Subscriber } from './Suscriber.js';

export class Newsletter {
	subscribers = [];
	articles = [];
	subscribe (subscriber) {
		this.subscribers.push(subscriber);
	}

	unsubscribe (email) {
		const { subscribers } = this;
		const INDEX = subscribers.findIndex((subscriber) => subscriber.email === email);

		subscribers.splice(INDEX, 1);
	}

	post (article) {
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
	title   : '30 días de js',
	content : 'Aprende js en 30 días'
};

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);
console.log({ subscriber1, subscriber2, subscriber3 });
// newsletter.post(article);
