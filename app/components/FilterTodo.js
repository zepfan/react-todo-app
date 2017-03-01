import React, { Component } from 'react';

class FilterTodo extends Component {
	render() {
		return (
			<div id="filter-todo">
				<span>Sort by:</span>
				
				<select>
					<option value="date">Date</option>
					<option value="completed">Completed</option>
				</select>
			</div>
		)
	}
}

export default FilterTodo;