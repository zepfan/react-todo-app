import React, { Component } from 'react';

import * as TodoActions from '../actions/TodoActions';

import todoStore from '../stores/TodoStore';

import AddTodoForm from '../components/AddTodoForm';
import FilterTodos from '../components/FilterTodos';
import TodoItem from '../components/TodoItem';

class Todos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: todoStore.getAll(),
			newTodo: '',
			editId: null
		}

		// bind methods ahead of time
		this.getTodos = this.getTodos.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.setTodoText = this.setTodoText.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.changeTodoStatus = this.changeTodoStatus.bind(this);
	}


	/** ================ INITIALIZATION JAZZ =========================== */

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


	/** ================ COMPONENT METHODS =========================== */

	/**
	 * ----------------------------------------
	 * Sends `newTodo` state to the createTodo 
	 * action
	 * ----------------------------------------
	 */

	createTodo() {
		if(this.state.newTodo) {
			TodoActions.createTodo(this.state.newTodo);

			this.setState({
				newTodo: ''
			});
		} else {
			alert('Please enter a todo!');
		}
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
	 * Update the `editId` state when called
	 * ----------------------------------------
	 */
	
	editTodo(e) {
		let id = e.target.getAttribute('data-id');
		
		this.setState({
			editId: id
		});
	}

	/**
	 * ----------------------------------------
	 * Save an edited todo once "Enter" is
	 * pressed
	 * ----------------------------------------
	 */
	
	saveTodo(e) {
		let id = this.state.editId;
		let text = e.target.value

		if(e.keyCode == 13) { // "Enter" key
			TodoActions.saveTodo(id, text);

			this.setState({
				editId: null
			});
		}
	}

	/**
	 * ----------------------------------------
	 * Sends a todo `id` to the deleteTodo 
	 * action
	 * ----------------------------------------
	 */
	
	deleteTodo(e) {
		TodoActions.deleteTodo(e.target.getAttribute('data-id'));
	}

	/**
	 * ----------------------------------------
	 * Sends a todo `status` and `id` to 
	 * changeTodoStatus action
	 * ----------------------------------------
	 */

	changeTodoStatus(e) {
		let id = e.target.getAttribute('id');
		let status = e.target.checked;

		TodoActions.changeTodoStatus(id, status);
	}


	/** ================ RENDER FUNCTION =========================== */

	render() {
		// do some .map magic
		const TodoItems = this.state.todos.map((todo) => {
			return <TodoItem 
						key={todo.id} 
						{...todo} 
						timeStamp={todo.timeStamp.formatted}
						editing={this.state.editId}
						deleteTodo={this.deleteTodo} 
						editTodo={this.editTodo}
						saveTodo={this.saveTodo}
						changeTodoStatus={this.changeTodoStatus} 
					/>;
		});

		return (
			<div>
				<AddTodoForm createTodo={this.createTodo} setTodoText={this.setTodoText} />
				
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