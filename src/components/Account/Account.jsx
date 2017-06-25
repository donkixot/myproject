import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({currentUser, tasks}) =>{

	//if full name of task receiver equal full name of current user get tasks of current user from all tasks
	let currentUserTasks = tasks.filter(task => {
		return (task.receiver == `${currentUser.firstname} ${currentUser.lastname}`)
	});

	return(
		<div className='cabinet'>
			<div className='cabinetTitle'>Hello to you, {currentUser.role == 'manager' ? 'the great manager of all time!' : 'just programmer...'} </div>
			<div className='cabinetSubTitle'>List of task, that was assigned to you:</div>
			{
				//if tasks exist show them, else show error massage
				currentUserTasks.length ?
				<div className='taskList__items'>
					{
						currentUserTasks.map( (task) =>
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
							</div>
						)
					}
				</div>
				:
				<div className='taskList__empty'>no tasks yet</div>
			}
		</div>
	);
}

export default Account;