import React, { Component } from 'react';

import Todos from './containers/Todos';

class TodoApp extends Component {
	render() {
		return (
			<div>
				<Todos />
			</div>
		)
	}
}

export default TodoApp;