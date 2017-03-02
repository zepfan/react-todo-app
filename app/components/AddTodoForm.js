import React, { Component } from 'react';

class AddTodoForm extends Component {
	constructor(props) {
		super(props);

		// binding methods ahead of time
		this.handleEvent = this.handleEvent.bind(this);
		this.clearInput = this.clearInput.bind(this);
	}


	/** ================ METHODS =========================== */

	/**
	 * ----------------------------------------
	 * Submit the todo if they either click
	 * a button or hit "Enter"
	 * ----------------------------------------
	 */

	handleEvent(e) {
		if(e.type == 'click' || e.keyCode == 13) {
			this.props.createTodo();
			this.clearInput();
		}
	}

	/**
	 * ----------------------------------------
	 * Reset the input's value
	 * ----------------------------------------
	 */
	
	clearInput() {
		this.refs.add_todo_input.value = '';
	}


	/** ================ RENDER =========================== */

	render() {
		return (
			<div id="add-todo">
				<input 
					ref="add_todo_input"
					onChange={this.props.setTodoText}
					onKeyUp={this.handleEvent}
					onBlur={this.clearInput}
					placeholder="Enter new todo here"
				/>

				<button
					onClick={this.handleEvent} 
					class="add-todo">
					Add Todo
				</button>
			</div>
		)
	}
}

AddTodoForm.propTypes = {
	setTodoText: React.PropTypes.func,
	createTodo: React.PropTypes.func
}

export default AddTodoForm;