import React, { Component } from 'react';

import * as TodoActions from '../actions/TodoActions';

import todoStore from '../stores/TodoStore';

import AddTodoForm from '../components/AddTodoForm';
import TodoItem from '../components/TodoItem';
import Modal from '../components/Modal';

class Todos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: todoStore.getAll(),
			newTodo: '',
			editId: null,
			isModalOpen: false
		}

		// bind methods ahead of time
		this.getTodos = this.getTodos.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.setTodoText = this.setTodoText.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.saveTodo = this.saveTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.changeTodoStatus = this.changeTodoStatus.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}


	/** ================ LIFECYCLE =========================== */

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
		this.setState({ todos: todoStore.getAll() });
	}


	/** ================ METHODS =========================== */

	/**
	 * ----------------------------------------
	 * Sends `newTodo` state to the createTodo 
	 * action
	 * ----------------------------------------
	 */

	createTodo(e) {
		if(this.state.newTodo) {
			TodoActions.createTodo(this.state.newTodo);

			this.setState({ newTodo: '' });
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
		this.setState({ newTodo: e.target.value });
	}

	/**
	 * ----------------------------------------
	 * Update the `editId` state when called
	 * ----------------------------------------
	 */
	
	editTodo(e) {
		let id = e.target.getAttribute('data-id');
		
		this.setState({ editId: id });
	}

	/**
	 * ----------------------------------------
	 * Save an edited todo once "Enter" is
	 * pressed
	 * ----------------------------------------
	 */
	
	saveTodo(text) {
		TodoActions.saveTodo(this.state.editId, text);

		this.setState({ editId: null });
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

		TodoActions.changeTodoStatus(id, status);;
	}

	/**
	 * ----------------------------------------
	 * Set the 'isModalOpen' state to true
	 * ----------------------------------------
	 */
	
	openModal() {
		this.setState({ isModalOpen: true });
	}

	/**
	 * ----------------------------------------
	 * Set the 'isModalOpen' state to false
	 * ----------------------------------------
	 */

	closeModal() {
		this.setState({ isModalOpen: false });
	}


	/** ================ RENDER =========================== */

	render() {
		
		/**
		 * ----------------------------------------
		 * Do some map magic to generate multiple
		 * `TodoItem` components
		 * ----------------------------------------
		 */
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
				{/* Add New Todo Form */}
				<AddTodoForm 
					createTodo={this.createTodo} 
					setTodoText={this.setTodoText} 
				/>

				{/* Open Modal button */}
				<button 
					onClick={this.openModal} 
					class="open-modal"
				>
					Try out this nifty modal!
				</button>

				{/* Main todo list*/}
				<div id="todo-container">
					<ul>
						{TodoItems}
					</ul>
				</div>

				{/* Test Modal */}
				<Modal 
					isOpen={this.state.isModalOpen}
					transitionName="modal-anim"
				>
					<div class="modal-interior">
						<div class="modal-body">
							<h2>This is my Modal</h2>
							<h3>There are many like it, but this one is mine.</h3>

							<p>Just testing out a modal implementation. Nothing more to see here.</p>
						</div>

						<button 
							onClick={this.closeModal} 
							class="close-btn"
						>
							Close Modal
						</button>
					</div>
				</Modal>


			</div>
		)
	}
}

export default Todos;