import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

//array of checked checkboxes
let chooseProject = ['all'];

export default class Filters extends Component {

	handleSetProject(e){
		//if array of checked checkboxes hasn't current checkbox text - add this text to array
		let isPositive = str => str === e.target.nextSibling.children[1].textContent;
		if(!chooseProject.some(isPositive)){
			chooseProject.push(e.target.nextSibling.children[1].textContent);
		}else{
			//if array of checked checkboxes has current checkbox text - remove this text from array
			let indexOfCurrentCheckbox = chooseProject.indexOf(e.target.nextSibling.children[1].textContent);
			if(indexOfCurrentCheckbox !== -1){
				chooseProject.splice([indexOfCurrentCheckbox],1);
			};
		}
		this.props.pageActions.onProjectChange(chooseProject, this.props.creator);
	}

	handleSetCreator(e){
		this.props.pageActions.onCreatorChange(e.target.textContent, this.props.projects);
	}

	handleSortSorting(e){
		this.props.pageActions.onSortChange(e.target.textContent);
	}

	handleResetFilters(){
		this.props.pageActions.onFiltersReset('all', 'All', 'Random');
		chooseProject = ['all']
	}

	render() {

		const {creatorsForFilters, projectsForFilters} = this.props;

		return (
			<div className="filters">
				<div className="filtersTitle">Filter by:</div>
					<div className='filters__groups'>
					<div className="filters__group">
						<div className="filters__groupTitle">Projects</div>
							{
								projectsForFilters.map( (p, i) =>
									<Checkbox
										key={i}
										className='filters__checkbox'
										checked={
											Object.prototype.toString.call(this.props.projects) === '[object Array]'
											?	this.props.projects.some( str => str == p) ? true : false
											: false
										}
										label={p}
										onCheck={this.handleSetProject.bind(this)}
										style={{'width':'225px'}}
									/>
								)
							}
					</div>
					<div className="filters__group">
						<div className="filters__groupTitle">Creator</div>
						<SelectField
							className='filters__select'
							value={this.props.creator}
							onChange={this.handleSetCreator.bind(this)}
							maxHeight={200}
							iconStyle={{fill:'#000'}}
						>
							<MenuItem value='All' primaryText='All' />
							{
								creatorsForFilters.map( (c, i) =>
									<MenuItem
										key={i}
										value={c}
										primaryText={c}
									/>
								)
							}
						</SelectField>
					</div>
					<div className="filtersTitle">Sort by:</div>
					<div className="filters__group">
						<SelectField
							className='filters__select'
							value={this.props.sorting}
							onChange={this.handleSortSorting.bind(this)}
							maxHeight={200}
							iconStyle={{fill:'#000'}}
							autoWidth={false}
						>
							<MenuItem value='Random' primaryText='Random' />
							<MenuItem value='Name, A to Z' primaryText='Name, A to Z' />
							<MenuItem value='Name, Z to A' primaryText='Name, Z to A' />
							<MenuItem value='Progress, low to hight' primaryText='Progress, low to hight' />
							<MenuItem value='Progress, hight to low' primaryText='Progress, hight to low' />
						</SelectField>
					</div>
					<RaisedButton
						className='filters__button'
						label="Clear all"
						onClick={this.handleResetFilters.bind(this)}
					/>
				</div>
			</div>
		);
	}
}
