import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Filters extends Component {
	render() {
		return (
			<div>
				<Checkbox
					label="Simple"
				/>
				<DropDownMenu
					maxHeight={300}
					value={1}
					iconStyle={{fill:'#000'}}
				>
					<MenuItem value={1} primaryText="All" />
					<MenuItem value={2} primaryText="Dark Side" />
					<MenuItem value={3} primaryText="Paint shop" />
				</DropDownMenu>
			</div>
		);
	}
}
