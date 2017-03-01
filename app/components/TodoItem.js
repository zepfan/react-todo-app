import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		return (
			<li>
				<div class="todo-auxiliary">
					<span class="todo-date">{this.props.timeStamp}</span>
    				
    				<div class="todo-actions">
    					<span class="edit-todo">Edit</span>
    					<span onClick={this.props.deleteTodo} data-id={this.props.id} class="delete-todo">Delete</span>
    				</div>
    			</div>

				<span class="todo-text">
					<input 
						onChange={this.props.changeTodoStatus} 
						type="checkbox" 
						id={this.props.id} 
						defaultChecked={this.props.completed ? 'checked' : ''} />
					<label for={this.props.id} >{this.props.text}</label>
				</span>
			</li>
		)
	}
}

export default TodoItem;