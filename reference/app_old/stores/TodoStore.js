import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
			{
				id: 1222134,
				text: 'Here\'s a todo',
				complete: false
			},
			{
				id: 23243434,
				text: 'Another one blah',
				complete: false
			},
			{
				id: 8374724,
				text: 'Let\'s call this one done',
				complete: true
			}
		];
	}

	getAll() {
		return this.todos;
	}

	createTodo(text) {
		const id = Date.now();

		this.todos.push({
			id,
			text,
			complete: false
		});

		this.emit('change');
	}

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_TODO': {
				this.createTodo(action.text);
			}
		}
	}
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;