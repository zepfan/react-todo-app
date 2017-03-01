import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();

		// Starting data (this would come from some backend service)
		this.todos = [
			{
				id: 48292844,
				text: 'Here is your first todo!',
				timeStamp: 'Feb 28, 5:00pm',
				completed: false
			},
			{
				id: 48292845,
				text: 'Here\'s another placeholder',
				timeStamp: 'Feb 28, 5:00pm',
				completed: false
			},
			{
				id: 48292834,
				text: 'Aaaaaaand one more',
				timeStamp: 'Feb 28, 5:00pm',
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
	 * Create a new todo
	 */
	
	createTodo(text) {
		const id = Date.now(), // mostly random number that is good enough for this demo
			timeStamp = 'Feb 28, 10:00pm', // will come back to this later to parse a legit timestamp
			completed = false;

		this.todos.push({
			id,
			text,
			timeStamp,
			completed
		});

		this.emit('change');
	}

	/**
	 * Delete a todo
	 */

	 deleteTodo(id) {
	 	console.log('deleting', id);
	 }

	/**
	 * Direct events to the appropriate methods
	 */

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_TODO': {
				this.createTodo(action.text);
			}
			case 'DELETE_TODO': {
				this.deleteTodo(action.id);
			}
		}
	}
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;