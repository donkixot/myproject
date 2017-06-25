import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/AddTask.sass'

const handleChange = (event, index, value) => {
	this.setState({value});
};

const AddTask = (props) =>
	<div className='addTask'>
		<TextField
			className='addTask__item'
			hintText="Type the title of your task"
			floatingLabelText="Task title"
			floatingLabelShrinkStyle={{color:'rgb(0, 188, 212)'}}
			floatingLabelStyle={{color:'rgba(0, 0, 0, 0.6)'}}
		/>
		<br/>
		<TextField
			className='addTask__item'
			hintText="Type the name of your project"
			floatingLabelText="Project name"
			floatingLabelShrinkStyle={{color:'rgb(0, 188, 212)'}}
			floatingLabelStyle={{color:'rgba(0, 0, 0, 0.6)'}}
		/>
		<br/>
		<TextField
			className='addTask__item'
			hintText="Type the title of your subtask"
			floatingLabelText="Subtask title"
			floatingLabelShrinkStyle={{color:'rgb(0, 188, 212)'}}
			floatingLabelStyle={{color:'rgba(0, 0, 0, 0.6)'}}
		/>
		<div className='addTask__item addTask__item_subtask'>
			<span className='addTask__itemSpan'>+</span>
			<span className='addTask__itemText'>Add subtask</span>
		</div>
		<div className='addTask__item addTask__item_assign'>
			<div className='addTask__itemText'>Assign to:</div>
			<DropDownMenu
				maxHeight={300}
				value={1}
				onClick={handleChange}
				iconStyle={{fill:'#000'}}
			>
				<MenuItem value={1} primaryText="Владыка Ситхов" />
				<MenuItem value={2} primaryText="Дарт Вейдер" />
				<MenuItem value={3} primaryText="Фродо Тиринг" />
			</DropDownMenu>
		</div>
		<RaisedButton className='addTask__button' label="Add"/>
	</div>


export default AddTask;