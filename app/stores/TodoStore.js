import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

import '../demoData';

class TodoStore extends EventEmitter {
	constructor() {
		super();

		// First batch of data comes from `demoData.js` (imported above)
		this.todos = JSON.parse(localStorage.getItem('todos'));
	} 


	/** ================ HELPER METHODS =========================== */

	/**
	 * ----------------------------------------
	 * Return all the todo entries
	 * ----------------------------------------
	 */

	getAll() {
		return this.todos;
	}

	/**
	 * ----------------------------------------
	 * Find a specific todo entry by `id`
	 * ----------------------------------------
	 */

	findTodo(id) {
		return this.todos.find(x => x.id == id);
	}

	/**
	 * ----------------------------------------
	 * Updates the localStorage object & 
	 * emits a change event
	 * ----------------------------------------
	 */

	updateStore() {
		localStorage.setItem('todos', JSON.stringify(this.todos));
		this.emit('change');
	}

	/**
	 * ----------------------------------------
	 * Formats a timestamp to associate with
	 * a newly created todo
	 * ----------------------------------------
	 */

	createTimestamp() {
		const date = new Date();
		const month = date.toLocaleString('en-US', { month: 'short' });
		const day = date.toLocaleString('en-US', { day: '2-digit' });
		const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
		const formatted = `${month} ${day} @ ${time}`;

		const timeStamp = { date, month, day, time, formatted };

		return timeStamp;
	}


	/** ================ ACTION METHODS =========================== */

	/**
	 * ----------------------------------------
	 * Create a new todo
	 * ----------------------------------------
	 */

	createTodo(text) {
		const id = Date.now(), // reasonably unique for this demo
			timeStamp = this.createTimestamp(),
			completed = false;

		this.todos.push({
			id,
			text,
			timeStamp,
			completed
		});

		this.updateStore();
	}

	/**
	 * ----------------------------------------
	 * Save an edited todo
	 * ----------------------------------------
	 */
	
	saveTodo(id, text) {
		const todo = this.findTodo(id);
		todo.text = text;

		this.updateStore();
	}

	/**
	 * ----------------------------------------
	 * Delete a todo
	 * ----------------------------------------
	 */

	deleteTodo(id) {
		const todo = this.findTodo(id);
		const index = this.todos.indexOf(todo);
		
		this.todos.splice(index, 1);

		this.updateStore();
	}

	/**
	 * ----------------------------------------
	 * Update a todo's status
	 * ----------------------------------------
	 */

	changeTodoStatus(id, status) {
		const todo = this.findTodo(id);
		todo.completed = status;

		this.updateStore();
	}


	/** ================ DISPATCHER JAZZ =========================== */

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_TODO':
				this.createTodo(action.text);
				break;
			case 'SAVE_TODO':
				this.saveTodo(action.id, action.text);
				break;
			case 'DELETE_TODO':
				this.deleteTodo(action.id);
				break;
			case 'CHANGE_TODO_STATUS':
				this.changeTodoStatus(action.id, action.status);
				break;
		}
	}
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;