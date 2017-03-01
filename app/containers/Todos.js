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

		// bind everything ahead of time
		this.getTodos = this.getTodos.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.setTodoText = this.setTodoText.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	/**
	 * Update the `todos` as the stey change
	 * in the store
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
	 * Sends the `newTodo` entry to the 
	 * createTodo action to add a new entry
	 */

	createTodo() {
		TodoActions.createTodo(this.state.newTodo);
	}

	/**
	 * Updates the `newTodo` entry in state
	 * as the user types in the input field
	 */

	setTodoText(e) {
		this.setState({
			newTodo: e.target.value
		});
	}

	/**
	 * Delete a todo from the store based
	 * on the ID
	 */
	
	deleteTodo(e) {
		TodoActions.deleteTodo(e.target.getAttribute('data-id'));
	}

	render() {
		// do some .map magic
		const TodoItems = this.state.todos.map((todo) => {
			return <TodoItem key={todo.id} {...todo} />;
		});

		return (
			<div>
				<AddTodoForm 
					createTodo={this.createTodo}
					setTodoText={this.setTodoText}
					deleteTodo={this.deleteTodo}
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