type TContact = [string, string]
type TBuckets = TContact[][]

interface IContactList {
	buckets: TBuckets,
	size: number,
	hash (name: string): number,
	insert(name: string, phone: string): void,
	get(name: string): string | null,
	retrieveAll(): TContact[],
	delete(name: string): void | null,
}

export class ContactList implements IContactList {
	buckets: TBuckets;
	numBuckets: number;
	constructor (public size: number) {
		this.buckets = new Array(size);
		this.numBuckets = this.buckets.length;
		this.hash = this.hash.bind(this);
	}

	hash (name: string): number {
		const { numBuckets } = this;
		let total = 0;

		for (let i = 0; i < name.length; i++) {
			total += name.charCodeAt(i);
		}

		const HASH = total % numBuckets;

		return HASH;
	}

	insert (name: string, phone: string): void {
		const { hash, buckets } = this;
		const ADDRESS = hash(name);

		if (!buckets[ADDRESS]) {
			buckets[ADDRESS] = [];
		}

		buckets[ADDRESS].push([ name, phone ]);
	}

	get (name: string): string | null {

		const INDEX = this.#checkContact(name);

		if (INDEX === null) return null;

		const { hash, buckets } = this;
		const ADDRESS = hash(name);
		const [ NAME, PHONE ] = buckets[ADDRESS][INDEX];

		// for (let i = 0; i < CURRENT_BUCKET.length; i++) {
		// 	if (CURRENT_BUCKET[i][0] === name) {
		// 		phone = CURRENT_BUCKET[i][1];
		// 	}
		// }

		return PHONE;
	}

	retrieveAll (): TContact[] {
		// const LIST: TContact[] = [];

		// for (let i = 0; i < this.buckets.length; i++) {
		// 	if (this.buckets[i] === undefined) continue;

		// 	for (let j = 0; j < this.buckets[i].length; j++) {
		// 		if (this.buckets[i][j]) LIST.push(this.buckets[i][j]);
		// 	}
		// }

		// return LIST;

		// chat gpt
		const { buckets } = this;

		const CONTACT_LIST = buckets.flat();
		const CONTACTS_BOOKED = CONTACT_LIST.filter((contact: TContact) => contact !== undefined);

		return CONTACTS_BOOKED;
	}

	delete (name: string): void | null {
		const { hash, buckets } = this;

		const INDEX = this.#checkContact(name);

		if (INDEX === null) return null;

		const ADDRESS = hash(name);
		const LIST_CONTACT = buckets[ADDRESS];

		LIST_CONTACT.splice(INDEX, 1);

		// for (let i = 0; i < CURRENT_BUCKET.length; i++) {
		// 	if (CURRENT_BUCKET[i][0] === name) {
		// 		CURRENT_BUCKET.splice(i, 1);

		// 		break;
		// 	}
		// }
	}

	#checkContact (name: string): number | null {
		const { hash, buckets } = this;
		const ADDRESS = hash(name);
		const CURRENT_BUCKET = buckets[ADDRESS];

		if (CURRENT_BUCKET === undefined) return null;

		const INDEX = CURRENT_BUCKET.findIndex((contact: TContact) => contact[0] === name);

		if (INDEX === -1) return INDEX;

		return INDEX;
	}
}
