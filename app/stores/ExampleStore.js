import { EventEmitter } from 'events';

class ExampleStore extends EventEmitter {
	constructor() {
		super();
		this.exampleData = [
			'Item #1',
			'Item #2',
			'Item #3',
			'Item #4',
			'Item #5'
		];
	}

	getAll() {
		return this.exampleData;
	}
}

const exampleStore = new ExampleStore;

export default exampleStore;