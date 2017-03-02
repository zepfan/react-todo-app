(() => {

	/**
	 * Sets some placeholder data into localStorage
	 * the first time that the app runs
	 */

	const demoData = [
		{
			id: 482928441231,
			text: 'Here is your first todo!',
			timeStamp: {
				date: '2017-03-02T01:35:05.319Z',
				day: '01',
				formatted: 'Mar 01 @ 5:35 PM',
				month: 'Mar',
				time: '5:35 PM'
			},
			completed: false
		},
		{
			id: 482928451222,
			text: 'Here\'s another placeholder',
			timeStamp: {
				date: '2017-03-02T01:27:05.319Z',
				day: '01',
				formatted: 'Mar 01 @ 5:27 PM',
				month: 'Mar',
				time: '5:27 PM'
			},
			completed: false
		},
		{
			id: 482928349374,
			text: 'Aaaand one more (this one is completed)',
			timeStamp: {
				date: '2017-03-02T01:03:05.319Z',
				day: '01',
				formatted: 'Mar 01 @ 5:03 PM',
				month: 'Mar',
				time: '5:03 PM'
			},
			completed: true
		},
	];

	if(localStorage.getItem('todos') === null) {
		localStorage.setItem('todos', JSON.stringify(demoData));
	}

})();