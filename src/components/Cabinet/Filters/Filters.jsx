import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

let chooseProject = ['all'];

export default class Filters extends Component {

	handleSetProject(e){
		// e.target.checked
		// ? this.props.pageActions.onProjectChange(e.target.nextSibling.children[1].textContent, this.props.selectedCreator)
		// : this.props.pageActions.onProjectChange('all', this.props.selectedCreator)

		let isPositive = (str) =>	{ return str == e.target.nextSibling.children[1].textContent; }
		if(!chooseProject.some(isPositive)){
			chooseProject.push(e.target.nextSibling.children[1].textContent);
		}else{
			for (let i = 0; i < chooseProject.length; i++) {
				if (chooseProject[i] == e.target.nextSibling.children[1].textContent) {
					chooseProject.splice([i],1);
				}
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
		// this.props.pageActions.onProjectChange('all', 'all');
		// this.props.pageActions.onSortChange('Random');
		this.props.pageActions.onSortChange('all', 'All', 'Random');
		chooseProject = ['all']
	}

	render() {

		const {creatorsForFilters, projectsForFilters} = this.props;

		return (
			<div className="filters">
				<div className="filtersTitle">Filter by:</div>
				<div className="filters__group">
					<div className="filters__groupTitle">Projects</div>
						{
							projectsForFilters.map( (p, i) =>
								<Checkbox
									key={i}
									className='filters__checkbox'
									checked={
										Object.prototype.toString.call(this.props.projects) === '[object Array]'
										?	this.props.projects.some((str) => str == p) ? true : false
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
		);
	}
}
