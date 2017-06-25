import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar  from './Sidebar/Sidebar.jsx';
import Account  from '../Account/Account.jsx';
import AddTask  from '../AddTask/AddTask.jsx';
import TaskList from '../TaskList/TaskList.jsx';
import Task     from '../Task/Task.jsx';


import './styles/Cabinet.sass'

const cabinetRoutes = [
	{
		path: '/cabinet/account',
		component: Account
	},
	{
		path: '/cabinet/task-list',
		component: TaskList
	},
	{
		path: '/cabinet/task:taskId',
		component: Task
	},
	{
		path: '/cabinet/add-task',
		component: AddTask
	}
]

const Cabinet = (props) =>
	<div className='pageContainer'>
		<div className='pageTitle'>My cabinet</div>
		<div className='content'>
			<Sidebar props={props}/>
			<div className='contentRight'>
				<Switch>
					{
						cabinetRoutes.map((route, i) => (
							<Route key={i} path={route.path} render={() => (
								<route.component {...props} />
							)}/>
						))
					}
				</Switch>
			</div>
		</div>
	</div>

export default Cabinet;