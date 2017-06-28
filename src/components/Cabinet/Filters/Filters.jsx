import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import './Filters.sass';

export default class Filters extends Component {
	render() {
		return (
			<div className="filters">
				<div className="filtersTitle">Filter by:</div>
				<div className="filters__group">
					<div className="filters__groupTitle">Creators</div>
					<Checkbox
						className='filters__checkbox'
						label="Simple"
					/>
					<Checkbox
						className='filters__checkbox'
						label="Simple"
					/>
				</div>
				<div className="filters__group">
					<div className="filters__groupTitle">Project</div>
					<SelectField
						className='filters__select'
						value='0'
						// onChange={this.handleChange}
						maxHeight={200}
						iconStyle={{fill:'#000'}}
					>
						<MenuItem value='0' primaryText='Dark side' />
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
						<MenuItem value='0' primaryText='All' />
						<MenuItem value='0' primaryText='Name, A to Z' />
						<MenuItem value='1' primaryText='Name, Z to A' />
						<MenuItem value='2' primaryText='Progress, low to hight' />
						<MenuItem value='3' primaryText='Progress, hight to low' />
					</SelectField>
				</div>
				<RaisedButton className='filters__button' label="Clear all"/>
			</div>
		);
	}
}
