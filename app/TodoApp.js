import React, { Component } from 'react';

import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
    	<div>
	    	<header>
	    		<AddTodo />
	    		<FilterTodo />
	    	</header>

	    	<Todos />
	    </div>
    )
  }
}

export default App;