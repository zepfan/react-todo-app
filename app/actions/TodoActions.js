import dispatcher from '../dispatcher';

export function createTodo(text) {
	dispatcher.dispatch({
		type: 'CREATE_TODO',
		text
	});
}

export function saveTodo(id, text) {
	dispatcher.dispatch({
		type: 'SAVE_TODO',
		id,
		text
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: 'DELETE_TODO',
		id
	});
}

export function changeTodoStatus(id, status) {
	dispatcher.dispatch({
		type: 'CHANGE_TODO_STATUS',
		id,
		status
	});
}