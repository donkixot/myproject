import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import './Filters.sass';

export default class Filters extends Component {

	handleSetProject(e){
		this.props.pageActions.onProjectChange(e.target.nextSibling.children[1].textContent);
	}

	render() {

		const {creators, projects} = this.props;

		return (
			<div className="filters">
				<div className="filtersTitle">Filter by:</div>
				<div className="filters__group">
					<div className="filters__groupTitle">Projects</div>
						{
							projects.map( (p, i) =>
								<Checkbox
									key={i}
									className='filters__checkbox'
									label={p}
									onCheck={this.handleSetProject.bind(this)}
								/>
							)
						}
				</div>
				<div className="filters__group">
					<div className="filters__groupTitle">Creator</div>
					<SelectField
						className='filters__select'
						value='0'
						// onChange={this.handleChange}
						maxHeight={200}
						iconStyle={{fill:'#000'}}
					>
						<MenuItem value='0' primaryText='All' />
						{
							creators.map( (c, i) =>
								<MenuItem
									key={i}
									value={i}
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
						value='0'
						// onChange={this.handleChange}
						maxHeight={200}
						iconStyle={{fill:'#000'}}
						autoWidth={false}
					>
						<MenuItem value='0' primaryText='Random' />
						<MenuItem value='1' primaryText='Name, A to Z' />
						<MenuItem value='2' primaryText='Name, Z to A' />
						<MenuItem value='3' primaryText='Progress, low to hight' />
						<MenuItem value='4' primaryText='Progress, hight to low' />
					</SelectField>
				</div>
				<RaisedButton className='filters__button' label="Clear all"/>
			</div>
		);
	}
}
