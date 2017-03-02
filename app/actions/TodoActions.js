import dispatcher from '../dispatcher';

/**
 * ----------------------------------------
 * Creates a new todo
 * @param  [str] text - The todo message
 * ----------------------------------------
 */

export function createTodo(text) {
	dispatcher.dispatch({
		type: 'CREATE_TODO',
		text
	});
}

/**
 * ----------------------------------------
 * Saves a todo with an edited message
 * @param  [num] id - Todo identifier
 * @param  [str] text - The todo message
 * ----------------------------------------
 */

export function saveTodo(id, text) {
	dispatcher.dispatch({
		type: 'SAVE_TODO',
		id,
		text
	});
}

/**
 * ----------------------------------------
 * Deletes a todo
 * @param  [num] id - Todo identifier
 * ----------------------------------------
 */

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: 'DELETE_TODO',
		id
	});
}

/**
 * ----------------------------------------
 * Saves the completed/checked state of todo
 * @param  [num] id - Todo identifier
 * @param  [bool] text - Checked/not checked
 * ----------------------------------------
 */

export function changeTodoStatus(id, status) {
	dispatcher.dispatch({
		type: 'CHANGE_TODO_STATUS',
		id,
		status
	});
}