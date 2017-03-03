import React, { Component } from 'react';

class TodoApp extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default TodoApp;