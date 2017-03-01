import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		return (
			<li data-id={this.props.id}>
				<div class="todo-auxiliary">
					<span class="todo-date">{this.props.timeStamp}</span>
    				
    				<div class="todo-actions">
    					<span class="edit-todo">Edit</span>
    					<span onClick={this.props.deleteTodo} data-id={this.props.id} class="delete-todo">Delete</span>
    				</div>
    			</div>

				<span class="todo-text">
					<input type="checkbox" defaultChecked={this.props.completed ? 'checked' : ''} />
					{this.props.text}
				</span>
			</li>
		)
	}
}

export default TodoItem;