import React from 'react';
import { Link } from 'react-router-dom';


import './TaskList.sass';

const TaskList = (props) =>
	<div className='cabinet'>
		<div className='cabinetSubTitle'>List of all task, that was ever created:</div>
		<div className='taskList__items'>
			{
				props.tasks.map( (task) =>
					<div key={task.id} className='taskList__item'>
						<span
							className='taskList__itemProgress'
							style={
								parseInt(task.progress) >= 50 ?
									parseInt(task.progress) == 100 ?
									{color: '#4298EB'}
									:
									{color: 'green'}
								:
								{color: 'red'}
							}
						>{task.progress}</span>
						<Link to={`/cabinet/task:${task.id}`} className='taskList__itemText'>{task.title}</Link>
						<span className='taskList__itemProject'>{task.project}</span>
						<span className='taskList__itemCreator'>{task.creator}</span>
						<span className='taskList__itemReceiver'>{task.receiver}</span>
					</div>
				)
			}
		</div>
	</div>

export default TaskList;