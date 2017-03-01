import React, { Component } from 'react';

class AddTodo extends Component {
	render() {
		return (
			<div id="add-todo">
				<input placeholder="Enter new todo here" />
				<button class="add-todo">Add Todo</button>
			</div>
		)
	}
}

export default AddTodo;