export default{

	getCurrentUserFromApi(email, pass){
		return new Promise((resolve, reject) => {
			//get database from localStorage
			let localDB = JSON.parse(localStorage.getItem('databaseTTS'));
			//find user with current email
			let currentUser = localDB[0].users.filter(m => email === m.email);

			if(!currentUser.length){
				//if user is not exit - throw email error
				reject(new Error("SIGN_IN_EMAIL_FAILED"));
			}else{
				if(currentUser[0].pass !== pass){
					//if user is exit but pass is not correct - throw pass error
					reject(new Error("SIGN_IN_PASS_FAILED"));
				}else{
					//if all is ok send current user
					resolve(currentUser[0]);
				}
			}
		});
	},



	getTaskFromApi(){
		return JSON.parse(localStorage.getItem('databaseTTS'))[0].tasks;
	},

	addTaskToApi(task) {
		//get database from localStorage
		let localDB = JSON.parse(localStorage.getItem('databaseTTS'));
		//push new task
		localDB[0].tasks.push(task);
		//update local storage
		localStorage.setItem('databaseTTS', JSON.stringify(localDB));
	},

	toggleTaskInApi(taskId, subtaskIndex, done){
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
}

