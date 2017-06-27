import React from 'react';
import Checkbox from 'material-ui/Checkbox';


import './Task.sass';

const Task = (props) => {
	const currentTask = props.tasks.filter(task => {
		return (task.id == props.location.pathname.slice(14));
	});

	const taskProgress = currentTask[0].subtasks.length ? '67%' : currentTask.done ? '100%' : '0%';

	function handleClickSubtask(taskId, subtaskIndex) {
		props.pageActions.completeTask(taskId, subtaskIndex)

	};

	return(
		<div className='cabinet'>
			<div className='task__progress' style={{'width':taskProgress}} ></div>
			<div className='task__title'>{currentTask[0].title}</div>
			<div className='task__subtitle'>List of subtasks:</div>
			<div className='subtask__items'>
				{
					currentTask[0].subtasks.length ?
					currentTask[0].subtasks.map( (subtask,i) =>
						<Checkbox
							key={i}
							className='subtask__item'
							taskId={currentTask[0].id}
							idx={i}
							label={subtask.title}
							// defaultChecked={subtask.done}
							onCheck={handleClickSubtask}
						/>
					)
					:
					<Checkbox
						className='subtask__item'
						label='Done'
						defaultChecked={currentTask.done}
						// onCheck={handleClickSubtask}
					/>
				}
			</div>
		</div>
	);
}


export default Task;