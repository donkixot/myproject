import React, { Component } from 'react';

import TaskListItems from '../TaskListItems/TaskListItems.jsx';
import Pagination from '../Pagination/Pagination.jsx';


export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: props.tasks.slice(0,10),
			pageCount: Math.ceil(props.tasks.length/10)
		}
	}

	handlePageClick(data){
		let selected = data.selected;
		let offset = Math.ceil(selected * 10);

		this.setState({
			tasks: this.props.tasks.slice(offset, offset+10)
		});
	}

	render() {
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
						this.state.tasks.map( (t,i) =>
							<TaskListItems
								key={i}
								id={t.id}
								title={t.title}
								progress={t.progress}
								project={t.project}
								creator={t.creator}
								receiver={t.receiver}
							/>
						)
					}
				</div>
				{
					this.props.tasks.length > 10
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


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Pagination from '../Pagination/Pagination.jsx';
// import _ from 'lodash';

// class TaskList extends React.Component {
// 	constructor() {
// 		super();

// 		// an example array of items to be paged
// 		var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });

// 		this.state = {
// 			exampleItems: exampleItems,
// 			pageOfItems: []
// 		};

// 		// bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
// 		this.onChangePage = this.onChangePage.bind(this);
// 	}

// 	onChangePage(pageOfItems) {
// 		// update state with new page of items
// 		this.setState({ pageOfItems: pageOfItems });
// 	}

// 	render() {

// 		const props = this.props;

// 		return (
// 			<div className='cabinet'>
// 				<div className='cabinetSubTitle'>List of all task, that was ever created:</div>
// 				<div className='taskList__items'>
// 					<div className='taskList__item taskList__item_head'>
// 						<span className='taskList__itemProgress'>Progress</span>
// 						<span className='taskList__itemText'>Task name</span>
// 						<span className='taskList__itemProject'>Project name</span>
// 						<span className='taskList__itemCreator'>Creator</span>
// 						<span className='taskList__itemReceiver'>Receiver</span>
// 					</div>
// 					{
// 						props.tasks.map( (task) =>
// 							<div key={task.id} className='taskList__item'>
// 								<span
// 									className='taskList__itemProgress'
// 									style={
// 										parseInt(task.progress) >= 50
// 										?	parseInt(task.progress) == 100
// 											?	{color: '#4298EB'}
// 											:	{color: 'green'}
// 										: {color: 'red'}
// 									}
// 								>{task.progress}</span>
// 								<span className='taskList__itemText'><Link to={`/cabinet/task:${task.id}`} className='taskList__itemLink'>{task.title}</Link></span>
// 								<span className='taskList__itemProject'>{task.project}</span>
// 								<span className='taskList__itemCreator'>{task.creator}</span>
// 								<span className='taskList__itemReceiver'>{task.receiver}</span>
// 							</div>
// 						)
// 					}
// 					<div className='paginationWrap'>
// 						<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
// 					</div>
// 				</div>
// 				<div>
// 					<div className="container">
// 						<div className="text-center">
// 							<h1>React - Pagination Example with logic like Google</h1>
// 							{this.state.pageOfItems.map(item =>
// 								<div key={item.id}>{item.name}</div>
// 							)}
// 							<Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
// 						</div>
// 					</div>
// 					<hr />
// 					<div className="credits text-center">
// 						<p>
// 								<a href="http://jasonwatmore.com" target="_top">JasonWatmore.com</a>
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default TaskList;