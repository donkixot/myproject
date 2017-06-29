import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({currentUser, tasks}) =>{

	//if full name of task receiver equal full name of current user get tasks of current user from all tasks
	let currentUserTasks = tasks.filter(task => {
		return (task.receiver == `${currentUser.firstname} ${currentUser.lastname}`)
	});

	let taskProgress = (currentTask) => {
		let count = 0;
		for (let i = 0; i < currentTask.subtasks.length; i++) {
			if(currentTask.subtasks[i].done){
				count++;
			}
		}
		return Math.round(100*count/currentTask.subtasks.length) + "%";
	}

	return(
		<div className='cabinet'>
			<div className='cabinetTitle'>Hello to you, {currentUser.role == 'manager' ? 'the great manager of all time!' : 'just programmer...'} </div>
			<div className='cabinetSubTitle'>List of task, that was assigned to you:</div>
			{
				//if tasks exist show them, else show error massage
				currentUserTasks.length ?
				<div className='taskList__items'>
					<div className='taskList__item taskList__item_head'>
						<span className='taskList__itemProgress'>Progress</span>
						<span className='taskList__itemText'>Task name</span>
						<span className='taskList__itemProject'>Project name</span>
						<span className='taskList__itemCreator'>Creator</span>
					</div>
					{
						currentUserTasks.map( (task) =>
							<div key={task.id} className='taskList__item'>
								<span
									className='taskList__itemProgress'
									style={
										parseInt(taskProgress(task)) >= 50 ?
											parseInt(taskProgress(task)) == 100 ?
											{color: '#4298EB'}
											:
											{color: 'green'}
										:
										{color: 'red'}
									}
								>{taskProgress(task)}</span>
								<span className='taskList__itemText'><Link to={`/cabinet/task:${task.id}`} className='taskList__itemTextLink'>{task.title}</Link></span>
								<span className='taskList__itemProject'>{task.project}</span>
								<span className='taskList__itemCreator'>{task.creator}</span>
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