import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const Task = (props) => {

	//find the index of current task
	const taskIndex = props.tasks.findIndex((task) => task.id === props.match.params.taskId.slice(1));
	const currentTask = props.tasks[taskIndex];

	const handleClickSubtask = (taskId, subtaskIndex, done) => {
		props.pageActions.toggleTask(taskId, subtaskIndex, done)
	};

	return(
		<div className='cabinet'>
			<div className='task__progress' style={{'width':currentTask.progress}} ></div>
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
							onCheck={handleClickSubtask.bind(this, currentTask.id, i, subtask.done)}
						/>
					)
				}
			</div>
			{
				currentTask.progress == '100%' && currentTask.receiver === `${props.currentUser.firstname} ${props.currentUser.lastname}`
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