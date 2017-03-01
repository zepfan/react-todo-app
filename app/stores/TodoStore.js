import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

import '../demoData';

class TodoStore extends EventEmitter {
	constructor() {
		super();

		// First batch of data comes from `demoData.js`
		this.todos = JSON.parse(localStorage.getItem('todos'));
	} 

	/**
	 * ----------------------------------------
	 * Updates the localStorage object & emits a change event
	 * ----------------------------------------
	 */

	updateStore(data) {
		localStorage.setItem('todos', JSON.stringify(data));
		this.emit('change');
	}

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
	 * Create a new todo
	 * ----------------------------------------
	 */

	createTodo(text) {
		const id = Date.now(), // placeholder
			timeStamp = 'Feb 28, 10:00pm', // placeholder
			completed = false;

		this.todos.push({
			id,
			text,
			timeStamp,
			completed
		});

		this.updateStore(this.todos);
	}

	/**
	 * ----------------------------------------
	 * Delete a todo
	 * ----------------------------------------
	 */

	deleteTodo(id) {
		let todo = this.todos.find(x => x.id == id);
		let index = this.todos.indexOf(todo);
		
		this.todos.splice(index, 1);

		this.updateStore(this.todos);
	}

	/**
	 * ----------------------------------------
	 * Update a todo's status
	 * ----------------------------------------
	 */

	changeTodoStatus(id, status) {
		let todo = this.todos.find(x => x.id == id);
		todo.completed = status;

		this.updateStore(this.todos);
	}

	/**
	 * ----------------------------------------
	 * Direct events to the appropriate methods
	 * ----------------------------------------
	 */

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_TODO':
				this.createTodo(action.text);
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