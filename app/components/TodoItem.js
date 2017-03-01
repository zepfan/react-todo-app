import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		console.log(this.props);
		return (
			<li>
				<div class="todo-auxiliary">
					<span class="todo-date"></span>
    				
    				<div class="todo-actions">
    					<span class="edit-todo">Edit</span>
    					<span class="delete-todo">Delete</span>
    				</div>
    			</div>

				<span class="todo-text"><input type="checkbox"/>asdfasfs</span>
			</li>
		)
	}
}

export default TodoItem;