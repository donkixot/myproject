import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = (props) =>
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
								parseInt(task.progress) >= 50
								?	parseInt(task.progress) == 100
									?	{color: '#4298EB'}
									:	{color: 'green'}
								: {color: 'red'}
							}
						>{task.progress}</span>
						<span className='taskList__itemText'><Link to={`/cabinet/task:${task.id}`} className='taskList__itemLink'>{task.title}</Link></span>
						<span className='taskList__itemProject'>{task.project}</span>
						<span className='taskList__itemCreator'>{task.creator}</span>
						<span className='taskList__itemReceiver'>{task.receiver}</span>
					</div>
				)
			}
		</div>
	</div>


export default TaskList;