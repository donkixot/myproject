import React from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

const Benefits = (props) => {

	const possibilities = props.contents.benefits.block1.items;

	return (
		<div>
			<Breadcrumbs
				name={props.name}
				parentpath={props.parentpath}
				parentname={props.parentname}
			/>
			<div className='possibilitiesWrap'>
				<div className='pageTitle blockTitle'>{props.contents.benefits.block1.title}</div>
				<div className='pageDescr'>{props.contents.benefits.block1.description}</div>
				<div className='possibilities'>
					<div className='possibilities__items'>
						{
							possibilities.map( (possibility, i) =>
								<div key={i} className='possibilities__item'>
									<div className='possibilities__itemIcon'>&nbsp;{possibility.icon}</div>
									<div className='possibilities__itemTitle'>{possibility.title}</div>
									<div className='possibilities__itemText'>{possibility.text}</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
