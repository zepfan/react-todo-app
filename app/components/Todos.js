import React, { Component } from 'react';

import todoStore from '../stores/TodoStore';

import TodoItem from './TodoItem';

class Todos extends Component {
	constructor() {
		super();

		// Bring in the default/placeholder `todos` array from
		// the store
		this.state = {
			todos: todoStore.getAll()
		}
	}

	render() {
		// Dynamicallly create the individual <TodoItem /> components
		// by mapping the `todos` in as props
		const { todos } = this.state;

		const TodoItems = todos.map((todo) => {
			return <TodoItem key={todo.id} {...todo} />;
		});

		return (
			<div id="todo-container">
				<ul>
					{TodoItems}
				</ul>
			</div>
		)
	}
}

export default Todos;