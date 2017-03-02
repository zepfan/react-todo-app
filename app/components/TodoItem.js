import React, { Component } from 'react';

class TodoItem extends Component {
	placeCaretAtEnd(e) {
		let temp_value = e.target.value;
		e.target.value = '';
		e.target.value = temp_value;
	}

	componentDidUpdate() {
		if(this.props.id == this.props.editing) {
			this.refs.edit_input.focus();
		}
	}

	render() {
		let element = null;
		if(this.props.id == this.props.editing) {
			element = 
				<div>
					<input 
						type="text"
						ref="edit_input"
						autoFocus
						onFocus={this.placeCaretAtEnd}
						onKeyUp={this.props.saveTodo}
						defaultValue={this.props.text} 
					/>
				</div>
		} else {
			element = 
				<div>
					<input 
						onChange={this.props.changeTodoStatus} 
						type="checkbox" 
						id={this.props.id} 
						defaultChecked={this.props.completed ? 'checked' : ''} />
					<label for={this.props.id} >{this.props.text}</label>
				</div>;
		}

		return (
			<li class={this.props.completed ? 'completed' : ''}>
				<div class="todo-auxiliary">
					<span class="todo-date">{this.props.timeStamp}</span>
    				
    				<div class="todo-actions">
    					<span 
    						onClick={this.props.editTodo}
    						data-id={this.props.id}
    						class="edit-todo">Edit</span>

    					<span 
    						onClick={this.props.deleteTodo} 
    						data-id={this.props.id} 
    						class="delete-todo">Delete</span>
    				</div>
    			</div>

				<span class="todo-text">
					{element}
				</span>
			</li>
		)
	}
}

export default TodoItem;