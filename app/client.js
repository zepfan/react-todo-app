import '../www/less/main.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import TodoApp from './TodoApp';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={TodoApp}>
		</Route>
	</Router>,
	app
);