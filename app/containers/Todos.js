import React, { Component } from 'react';

import * as TodoActions from '../actions/TodoActions';

import todoStore from '../stores/TodoStore';

import AddTodoForm from '../components/AddTodoForm';
import FilterTodos from '../components/FilterTodos';
import TodoItem from '../components/TodoItem';

class Todos extends Component {
	constructor() {
		super();

		this.state = {
			todos: todoStore.getAll(),
			newTodo: ''
		}

		// bind methods ahead of time
		this.getTodos = this.getTodos.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.setTodoText = this.setTodoText.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.changeTodoStatus = this.changeTodoStatus.bind(this);
	}

	/**
	 * ----------------------------------------
	 * Update when the store does
	 * ----------------------------------------
	 */

	componentWillMount() {
		todoStore.on('change', this.getTodos);
	}

	componentWillUnmount() {
		todoStore.removeListener('change', this.getTodos);
	}

	getTodos() {
		this.setState({
			todos: todoStore.getAll()
		});
	}

	/**
	 * ----------------------------------------
	 * Sends `newTodo` state to the createTodo action
	 * ----------------------------------------
	 */

	createTodo() {
		TodoActions.createTodo(this.state.newTodo);
	}

	/**
	 * ----------------------------------------
	 * Updates `newTodo` state as input changes
	 * ----------------------------------------
	 */

	setTodoText(e) {
		this.setState({
			newTodo: e.target.value
		});
	}

	/**
	 * ----------------------------------------
	 * Sends a todo `id` to the deleteTodo action
	 * ----------------------------------------
	 */
	
	deleteTodo(e) {
		TodoActions.deleteTodo(e.target.getAttribute('data-id'));
	}

	/**
	 * ----------------------------------------
	 * Sends a todo `status` and `id` to changeTodoStatus action
	 * ----------------------------------------
	 */

	changeTodoStatus(e) {
		let id = e.target.getAttribute('id');
		let status = e.target.checked;

		TodoActions.changeTodoStatus(id, status);
	}

	render() {
		// do some .map magic
		const TodoItems = this.state.todos.map((todo) => {
			return <TodoItem 
						key={todo.id} {...todo} deleteTodo={this.deleteTodo} changeTodoStatus={this.changeTodoStatus} />;
		});

		return (
			<div>
				<AddTodoForm 
					createTodo={this.createTodo}
					setTodoText={this.setTodoText}
				/>
				
				<FilterTodos />

				<div id="todo-container">
					<ul>
						{TodoItems}
					</ul>
				</div>
			</div>
		)
	}
}

export default Todos;