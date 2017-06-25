import React from 'react';
import Checkbox from 'material-ui/Checkbox';

const Task = (props) =>{
	const currentTask = props.tasks.filter(task => {
		return (task.id == props.location.pathname.slice(14))
	});
	console.log(currentTask);
	return(
		<div className='cabinet'>
			<div className='taskTitle'>{currentTask[0].title}</div>
			<div className='subtask_items'>
				{
					currentTask[0].subtasks.length ?
					currentTask[0].subtasks.map( (subtask,i) =>
						<Checkbox
							key={i}
							className='subtask_item'
							label={subtask}
						/>
					)
					:
					<Checkbox
						className='subtask_item'
						label='Done'
					/>
				}
			</div>
			<div className='task_progress' style={'width':currentTask[0].progress} ></div>
		</div>
	);
}


export default Task;