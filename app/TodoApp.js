import React, { Component } from 'react';

import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';
import Todos from './components/Todos';

class TodoApp extends Component {
  render() {
    return (
    	<div>
	    	<AddTodo />
	    	<FilterTodos />
	    	<Todos />
	    </div>
    )
  }
}

export default TodoApp;