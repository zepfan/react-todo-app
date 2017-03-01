import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		return (
			<li id={this.props.id}>{this.props.text}</li>
		)
	}
}

export default TodoItem;