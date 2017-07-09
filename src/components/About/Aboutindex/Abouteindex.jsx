import React from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

const Abouteindex = (props) =>
	<div>
		<Breadcrumbs
			name={props.name}
			parentpath={props.parentpath}
			parentname={props.parentname}
		/>
		<div className='pageTitle blockTitle'>{props.contents.about.block1.title}</div>
		<div className='pageDescr'>{props.contents.about.block1.description}</div>
		<div className='pageText'>{props.contents.about.block1.content}</div>
	</div>

export default Abouteindex;
