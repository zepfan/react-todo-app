import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import Todo from '../pages/Todo';

class App extends Component {
  render() {
    return (
    	<div>
            <Todo />
        </div>
    )
  }
}

export default App;