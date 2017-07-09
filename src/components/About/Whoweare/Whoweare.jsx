import React from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

const Whoweare = (props) => {

	const whoweareItems = props.contents.whoweare.block1.items;

	return (
		<div>
			<Breadcrumbs
				name={props.name}
				parentpath={props.parentpath}
				parentname={props.parentname}
			/>
			<div className='whoweare'>
				<div className='pageTitle blockTitle'>{props.contents.whoweare.block1.title}</div>
				<div className='pageDescr'>{props.contents.whoweare.block1.description}</div>
				<div className='whoweare__items'>
					{
						whoweareItems.map( (whoweareItem, i) =>
							<div key={i} className='whoweare__item'>
								<div className='whoweare__itemIcon'>{whoweareItem.icon}</div>
								<div className='whoweare__itemInner'>
									<div className='whoweare__itemTitle'>{whoweareItem.title}</div>
									<div className='whoweare__itemText'>{whoweareItem.text}</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	);
}

export default Whoweare;
