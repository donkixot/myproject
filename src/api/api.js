export function	addTaskToApi(task) {
	//get database from localStorage
	let localDB = JSON.parse(localStorage.getItem('databaseTTS'));
	//push new task
	localDB[0].tasks.push(task);
	//update local storage
	localStorage.setItem('databaseTTS', JSON.stringify(localDB));
}