import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = (props) => {

	let taskProgress = (currentTask) => {
		let count = 0;
		for (let i = 0; i < currentTask.subtasks.length; i++) {
			if(currentTask.subtasks[i].done){
				count++;
			}
		}
		return Math.round(100*count/currentTask.subtasks.length) + "%";
	}

	return (
		<div className='cabinet'>
			<div className='cabinetSubTitle'>List of all task, that was ever created:</div>
			<div className='taskList__items'>
				<div className='taskList__item taskList__item_head'>
					<span className='taskList__itemProgress'>Progress</span>
					<span className='taskList__itemText'>Task name</span>
					<span className='taskList__itemProject'>Project name</span>
					<span className='taskList__itemCreator'>Creator</span>
					<span className='taskList__itemReceiver'>Receiver</span>
				</div>
				{
					props.tasks.map( (task) =>
						<div key={task.id} className='taskList__item'>
							<span
								className='taskList__itemProgress'
								style={
									parseInt(taskProgress(task)) >= 50
									?	parseInt(taskProgress(task)) == 100
										?	{color: '#4298EB'}
										:	{color: 'green'}
									: {color: 'red'}
								}
							>{taskProgress(task)}</span>
							<span className='taskList__itemText'><Link to={`/cabinet/task:${task.id}`} className='taskList__itemLink'>{task.title}</Link></span>
							<span className='taskList__itemProject'>{task.project}</span>
							<span className='taskList__itemCreator'>{task.creator}</span>
							<span className='taskList__itemReceiver'>{task.receiver}</span>
						</div>
					)
				}
			</div>
		</div>
	);
}


export default TaskList;