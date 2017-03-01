import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();

		/**
		 * Starting with some dummy/placeholder data.
		 * This would obviously come from some backend service in
		 * a real world example.
		 */
		
		this.todos = [
			{
				id: 48292844,
				text: 'Here is your first todo!',
				timeStamp: 'Feb 28',
				completed: false
			},
			{
				id: 48292845,
				text: 'Here\'s another placeholder',
				timeStamp: 'Feb 28',
				completed: false
			},
			{
				id: 48292834,
				text: 'Aaaaaaand one more',
				timeStamp: 'Feb 28',
				completed: true
			},
		];
	}


	/**
	 * Return all the todo entries
	 */
	
	getAll() {
		return this.todos;
	}


	/**
	 * Route events to the appropriate the methods
	 */

	handleActions() {
		// dispatcher stuff here
	}
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;