import '../www/less/main.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import TodoApp from './TodoApp';
import Todos from './containers/Todos'

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={TodoApp}>
			<IndexRoute component={Todos}></IndexRoute>
		</Route>
	</Router>,
	app
);