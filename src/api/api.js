export function	addTaskToApi(task) {
	//get database from localStorage
	let localDB = JSON.parse(localStorage.getItem('databaseTTS'));
	//push new task
	localDB[0].tasks.push(task);
	//update local storage
	localStorage.setItem('databaseTTS', JSON.stringify(localDB));
}

export function	toggleTaskInApi(taskId, subtaskIndex, done){
	//get database from localStorage
	let localDB = JSON.parse(localStorage.getItem('databaseTTS'));

	//get tasks list from localStorage
	let localTasks = localDB[0].tasks;

	//find the index of current task
	let taskIndex = localTasks.findIndex((task) => task.id === taskId);
	let currentTask = localTasks[taskIndex];

	//change subtask status
	currentTask.subtasks =[
		...currentTask.subtasks.slice(0, subtaskIndex), //before the one subtask we are updating
		{
			...currentTask.subtasks[subtaskIndex],  //current subtask
			done: !done
		},
		...currentTask.subtasks.slice(subtaskIndex+1) //after the one subtask we are updating
	]

	//get new progress value
	let taskProgress = () => {
		let count = 0;
		for (let i = 0; i < currentTask.subtasks.length; i++) {
			if(currentTask.subtasks[i].done){
				count++;
			}
		}
		return Math.round(100*count/currentTask.subtasks.length) + '%';
	}

	//set new progress value
	currentTask.progress = taskProgress();

	//update local storage
	localStorage.setItem('databaseTTS', JSON.stringify(localDB));
}

export function	getTaskFromApi(){
	return JSON.parse(localStorage.getItem('databaseTTS'))[0].tasks;
}