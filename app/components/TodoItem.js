import React, { Component } from 'react';

class TodoItem extends Component {

	/** ================ LIFECYCLE =========================== */

	componentDidUpdate() {
		if(this.props.id == this.props.editing) {
			this.refs.edit_input.focus();
		}
	}


	/** ================ COMPONENT METHODS =========================== */	

	handleKeyUp(e) {
		if(e.keyCode == 13) { // "Enter" key
			this.props.saveTodo(e.target.value);
		}
	}


	/** ================ RENDER =========================== */

	render() {

		/**
		 * ----------------------------------------
		 * Determine if this component is currently
		 * in edit mode
		 * ----------------------------------------
		 */
		
		let element = null;

		if(this.props.id == this.props.editing) {
			element = 
				<div>
					<input 
						type="text"
						ref="edit_input"
						autoFocus
						onFocus={(e) => { let tmp = e.target.value; e.target.value = ''; e.target.value = tmp}} // places cursor at end of line
						onKeyUp={this.handleKeyUp.bind(this)}
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
						defaultChecked={this.props.completed ? 'checked' : ''}
					/>

					<label for={this.props.id}>
						{this.props.text}
					</label>
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