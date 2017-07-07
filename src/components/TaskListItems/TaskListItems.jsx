import React from 'react';
import { Link } from 'react-router-dom';

const TaskListItems = ({id, progress, title, project, creator, receiver}) =>
	<div className='taskList__item'>
		<span
			className='taskList__itemProgress'
			style={
				parseInt(progress) >= 50
				?	parseInt(progress) == 100
					?	{color: '#4298EB'}
					:	{color: 'green'}
				: {color: 'red'}
			}
		>{progress}</span>
		<span className='taskList__itemText'><Link to={`/cabinet/task:${id}`} className='taskList__itemLink'>{title}</Link></span>
		<span className='taskList__itemProject'>{project}</span>
		<span className='taskList__itemCreator'>{creator}</span>
		{
			receiver
			? <span className='taskList__itemReceiver'>{receiver}</span>
			:  null
		}
	</div>

export default TaskListItems;
