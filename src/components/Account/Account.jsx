import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TaskListItems from '../TaskListItems/TaskListItems.jsx';
import Pagination from '../Pagination/Pagination.jsx';

export default class Account extends Component {
	constructor(props) {
		super(props);
		//if full name of task receiver equal full name of current user get tasks of current user from all tasks
		let currentUserTasks = props.tasks.filter(task => {
			return (task.receiver === `${props.currentUser.firstname} ${props.currentUser.lastname}`)
		});
		this.state = {
			currentUserTasks: currentUserTasks.slice(0,10),
			pageCount: Math.ceil(currentUserTasks.length/10)
		}
	}

	handlePageClick(data){

		//if full name of task receiver equal full name of current user get tasks of current user from all tasks
		let currentUserTasks = this.props.tasks.filter(task => {
			return (task.receiver === `${this.props.currentUser.firstname} ${this.props.currentUser.lastname}`)
		});

		let selected = data.selected;
		let offset = Math.ceil(selected * 10);

		this.setState({
			currentUserTasks: currentUserTasks.slice(offset, offset+10)
		});
	}

	render() {

		//if full name of task receiver equal full name of current user get tasks of current user from all tasks
		let currentUserTasks = this.props.tasks.filter(task => {
			return (task.receiver === `${this.props.currentUser.firstname} ${this.props.currentUser.lastname}`)
		});

		return (
			<div className='cabinet'>
				<div className='cabinetTitle'>Hello to you, {this.props.currentUser.role == 'manager' ? 'the great manager of all time!' : 'just programmer...'} </div>
				<div className='cabinetSubTitle'>List of task, that was assigned to you:</div>
				{
					//if tasks exist show them, else show error message
					currentUserTasks.length ?
					<div className='taskList__items'>
						<div className='taskList__item taskList__item_head'>
							<span className='taskList__itemProgress'>Progress</span>
							<span className='taskList__itemText'>Task name</span>
							<span className='taskList__itemProject'>Project name</span>
							<span className='taskList__itemCreator'>Creator</span>
						</div>
						{
							this.state.currentUserTasks.map( (t, i) =>
								<TaskListItems
									key={i}
									id={t.id}
									title={t.title}
									progress={t.progress}
									project={t.project}
									creator={t.creator}
								/>
							)
						}
					</div>
					:
					<div className='taskList__empty'>no tasks yet</div>
				}
				{
					currentUserTasks.length > 10
					?
						<Pagination
							pageCount={this.state.pageCount}
							onPageChange={this.handlePageClick.bind(this)}
						/>
					:
					null
				}
			</div>
		);
	}
}
