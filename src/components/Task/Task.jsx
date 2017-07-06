import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const Task = (props) => {

	//find the index of current task
	const taskIndex = props.tasks.findIndex((task) => task.id === props.match.params.taskId.slice(1));
	const currentTask = props.tasks[taskIndex];

	let taskProgress = () => {
		let count = 0;
		for (let i = 0; i < currentTask.subtasks.length; i++) {
			if(currentTask.subtasks[i].done){
				count++;
			}
		}
		return Math.round(100*count/currentTask.subtasks.length) + '%';
	}

	const handleClickSubtask = (taskIndex, subtaskIndex, done) => {
		props.pageActions.toggleTask(taskIndex, subtaskIndex, done, props.projects, props.creator, props.sorting)
	};

	return(
		<div className='cabinet'>
			<div className='task__progress' style={{'width':taskProgress()}} ></div>
			<div className='task__title'>{currentTask.title}</div>
			<div className='task__subtitle'>List of subtasks:</div>
			<div className='subtask__items'>
				{
					currentTask.subtasks.map( (subtask,i) =>
						<Checkbox
							key={i}
							className='subtask__item'
							label={subtask.title}
							defaultChecked={subtask.done}
							disabled={
								currentTask.receiver === `${props.currentUser.firstname} ${props.currentUser.lastname}`
								? false
								: true
							}
							onCheck={handleClickSubtask.bind(this, taskIndex, i, subtask.done)}
						/>
					)
				}
			</div>
			{
				parseInt(taskProgress()) == 100 && currentTask.receiver === `${props.currentUser.firstname} ${props.currentUser.lastname}`
				?
				<div className='taskShare'>
					<div className='taskShare__title'>Share in social networks:</div>
					<ul className='taskShare__items'>
						<li className='taskShare__item taskShare__item_twitter'></li>
						<li className='taskShare__item taskShare__item_vk'></li>
						<li className='taskShare__item taskShare__item_google'></li>
						<li className='taskShare__item taskShare__item_facebook'></li>
					</ul>
				</div>
				: null
			}
		</div>
	);
}


export default Task;