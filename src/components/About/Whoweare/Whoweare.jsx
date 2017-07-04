import React from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

const whoweareItems = [
	{
		'icon': 'g',
		'title': 'On time projects',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'h',
		'title': 'Professional experience',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'j',
		'title': 'Fully support',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'k',
		'title': 'Communicative team',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	}
]

const Whoweare = (props) =>
	<div>
		<Breadcrumbs
			name={props.name}
			parentpath={props.parentpath}
			parentname={props.parentname}
		/>
		<div className='whoweare'>
			<div className='pageTitle blockTitle'>Who we Are</div>
			<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
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

export default Whoweare;
