/**
 * Sets some placeholder data into localStorage
 * the first time that the app runs
 */

const demoData = [
	{
		id: 48292844,
		text: 'Here is your first todo!',
		timeStamp: 'Feb 28, 5:00pm',
		completed: false
	},
	{
		id: 48292845,
		text: 'Here\'s another placeholder',
		timeStamp: 'Feb 28, 5:00pm',
		completed: false
	},
	{
		id: 48292834,
		text: 'Aaaaaaand one more',
		timeStamp: 'Feb 28, 5:00pm',
		completed: true
	},
];

if(localStorage.getItem('todos') === null) {
	localStorage.setItem('todos', JSON.stringify(demoData));
}