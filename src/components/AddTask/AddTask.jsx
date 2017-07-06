import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import shortid from 'shortid';

const allUsers = [ 'Sith Lord', 'Anakin Skywalker', 'Gandalf the White', 'Frodo Baggins' ];

export default class AddTask extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: '',
			subtaskItems: [],
			taskTitleError: false,
			projectNameError: false,
			assignToError: false
		};
	}

	handleSubtaskChange(index, event, value){
		this.setState( state => state.subtaskItems[index] = value );
	};

	handleSubtaskAdd(){
		let items = this.state.subtaskItems;
		items.push('');
		this.setState({
			subtaskItems: items
		});
	};

	handleSubtaskRemove(index){
		let items = this.state.subtaskItems;
		items.splice([index],1);
		this.setState({
			subtaskItems: items
		});
	};

	handleAssignTo(index, event, value){
		this.setState({value});
	};

	handleAddTask(){
		let task = {
			'creator': `${this.props.currentUser.firstname} ${this.props.currentUser.lastname}`,
			'progress': '0%'
		}

		let checkValue = ([currentValue, testKey, errorKey]) => {
			if (currentValue) {
				//if value is exist add it to task object and hide error massage
				task[testKey] = currentValue;
				this.setState( state => state[errorKey] = false );
			}else{
				//if value is empty - show error massage
				this.setState( state => state[errorKey] = true );
			}
		}
		//get task title value, key in task object and error key in state
		let taskTitleVal = [this.refs.taskTitle.input.value, 'title', 'taskTitleError'];
		checkValue(taskTitleVal);

		//get project name value, key in task object and error key in state
		let projectNameVal = [this.refs.projectName.input.value, 'project', 'projectNameError'];
		checkValue(projectNameVal);

		//get receiver name value, key in task object and error key in state
		let assignTo = [this.refs.assignTo.props.value, 'receiver', 'assignToError']
		checkValue(assignTo);

		//get subtask values
		let subtasks = [];
		let subtasksItems = document.querySelectorAll('.addTask__subtaskItem input');
		for (var i = 0; i < subtasksItems.length; i++) {
			subtasks.push({
				'title': subtasksItems[i].value,
				'done': false
			});
		}
		//if no added subtask - set one subtask with task title value
		if(!subtasks.length){
			subtasks = [{
				'title': taskTitleVal[0],
				'done': false
			}]
		}
		task.subtasks = subtasks;
		if(taskTitleVal[0] && projectNameVal[0] && assignTo[0]){
			//if all values is exist add uniq id to task and add task to database
			task.id = shortid.generate();
			this.props.pageActions.addTask(task);
			//clear all fields
			this.refs.taskTitle.input.value = '';
			this.refs.taskTitle.state.hasValue = false;
			this.refs.projectName.input.value = '';
			this.refs.projectName.state.hasValue = false;
			this.setState({
				value: '',
				subtaskItems: []
			});
		}
	};

	render() {

		//remove current user from list of receivers
		let indexOfCurrentUser = allUsers.indexOf(`${this.props.currentUser.firstname} ${this.props.currentUser.lastname}`);
		if(indexOfCurrentUser !== -1){
			allUsers.splice([indexOfCurrentUser],1);
		}

		return (
			<div className='addTask'>
				<TextField
					className='addTask__item'
					hintText='Type the title of your task'
					floatingLabelText='Task title'
					floatingLabelShrinkStyle={{color:'rgb(0, 188, 212)'}}
					floatingLabelStyle={{color:'rgba(0, 0, 0, 0.6)'}}
					errorText={this.state.taskTitleError && 'This field is required'}
					ref='taskTitle'
				/>
				<br/>
				<TextField
					className='addTask__item'
					hintText='Type the name of your project'
					floatingLabelText='Project name'
					floatingLabelShrinkStyle={{color:'rgb(0, 188, 212)'}}
					floatingLabelStyle={{color:'rgba(0, 0, 0, 0.6)'}}
					errorText={this.state.projectNameError && 'This field is required'}
					ref='projectName'
				/>
				<br/>
				<div className='addTask__subtaskItems'>
					{
						this.state.subtaskItems.length ?
						this.state.subtaskItems.map((s,i) => (
							<div key={i} className='addTask__subtaskItem'>
								<TextField
									hintText='Type the title of your subtask'
									floatingLabelText='Subtask title'
									floatingLabelShrinkStyle={{color:'rgb(0, 188, 212)'}}
									floatingLabelStyle={{color:'rgba(0, 0, 0, 0.6)'}}
									value={s}
									onChange={this.handleSubtaskChange.bind(this,i)}
								/>
								<span
									className='addTask__itemSpan addTask__subtaskRemove'
									onClick={this.handleSubtaskRemove.bind(this, i)}
								>-</span>
							</div>
						))
						:
						null
					}
				</div>
				<div className='addTask__item addTask__subtaskAdd' onClick={this.handleSubtaskAdd.bind(this)} >
					<span className='addTask__itemSpan'>+</span>
					<span className='addTask__itemText'>Add subtask</span>
				</div>
				<div className='addTask__item addTask__item_assign'>
					<div className='addTask__itemText'>Assign to:</div>
					<SelectField
						className='filters__select'
						value={this.state.value}
						onChange={this.handleAssignTo.bind(this)}
						maxHeight={200}
						iconStyle={{fill:'#000'}}
						autoWidth={false}
						errorText={this.state.assignToError && 'This field is required'}
						ref='assignTo'
					>
						{
							allUsers.map((u,i) => (
								<MenuItem key={i} value={u} primaryText={u} />
							))
						}
					</SelectField>
				</div>
				<RaisedButton
					className='addTask__button'
					label='Add'
					onClick={this.handleAddTask.bind(this)}
				/>
			</div>
		);
	}
}
