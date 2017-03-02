import React, { Component } from 'react';

class AddTodoForm extends Component {
	render() {
		return (
			<div id="add-todo">
				<input 
					ref="new_todo_input"
					onChange={this.props.setTodoText} 
					onBlur={(e) => {e.target.value = ''}} 
					placeholder="Enter new todo here"
				/>

				<button
					onClick={this.props.createTodo} 
					class="add-todo">
					Add Todo
				</button>
			</div>
		)
	}
}

export default AddTodoForm;