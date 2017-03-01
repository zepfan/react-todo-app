import React, { Component } from 'react';

import TodoItem from '../components/Todo/TodoItem';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class Todo extends Component {
	constructor() {
		super();

		this.state = {
			todos: TodoStore.getAll()
		}
	}

	componentWillMount() {
		TodoStore.on('change', () => {
			this.setState({
				todos: TodoStore.getAll()
			});
		});
	}

	createTodo() {
		TodoActions.createTodo(Date.now());
	}

	render() {
		const { todos } = this.state;

		const TodoList = todos.map((todo) => {
			return <TodoItem key={todo.id} {...todo} />;
		});

		return (
			<div>
				<button onClick={this.createTodo.bind(this)}>Random</button>
				<ul>{TodoList}</ul>
			</div>
		)
	}
}

export default Todo;