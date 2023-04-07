export class ContactList {
	size;
	buckets;
	numBuckets;
	constructor (size) {
		this.size = size;
		this.buckets = new Array(size);
		this.numBuckets = this.buckets.length;
	}

	hash (name) {
		let total = 0;

		for (let i = 0; i < name.length; i++) {
			total += name.charCodeAt(i);
		}

		const HASH = total % this.numBuckets;

		return HASH;
	}

	insert (name, phone) {
		const ADDRESS = this.hash(name);

		if (!this.buckets[ADDRESS]) {
			this.buckets[ADDRESS] = [];
		}

		this.buckets[ADDRESS].push([ name, phone ]);
	}

	get (name) {
		const INDEX = this.#checkContact(name);

		if (INDEX === null)
			return null;
		const ADDRESS = this.hash(name);
		const [ NAME, PHONE ] = this.buckets[ADDRESS][INDEX];

		// for (let i = 0; i < CURRENT_BUCKET.length; i++) {
		// 	if (CURRENT_BUCKET[i][0] === name) {
		// 		phone = CURRENT_BUCKET[i][1];
		// 	}
		// }
		return PHONE;
	}

	retrieveAll () {
	// const LIST: TContact[] = [];
	// for (let i = 0; i < this.buckets.length; i++) {
	// 	if (this.buckets[i] === undefined) continue;
	// 	for (let j = 0; j < this.buckets[i].length; j++) {
	// 		if (this.buckets[i][j]) LIST.push(this.buckets[i][j]);
	// 	}
	// }
	// return LIST;
	// chat gpt
		const CONTACT_LIST = this.buckets.flat();
		const CONTACTS_BOOKED = CONTACT_LIST.filter(contact => contact !== undefined);

		return CONTACTS_BOOKED;
	}

	delete (name) {
		const INDEX = this.#checkContact(name);

		if (INDEX === null)
			return null;
		const ADDRESS = this.hash(name);
		const LIST_CONTACT = this.buckets[ADDRESS];

		LIST_CONTACT.splice(INDEX, 1);
	// for (let i = 0; i < CURRENT_BUCKET.length; i++) {
	// 	if (CURRENT_BUCKET[i][0] === name) {
	// 		CURRENT_BUCKET.splice(i, 1);
	// 		break;
	// 	}
	// }
	}

	#checkContact (name) {
		const ADDRESS = this.hash(name);
		const CURRENT_BUCKET = this.buckets[ADDRESS];

		if (CURRENT_BUCKET === undefined)
			return null;
		const INDEX = CURRENT_BUCKET.findIndex((contact) => contact[0] === name);

		if (INDEX === -1)
			return null;

		return INDEX;
	}
}
