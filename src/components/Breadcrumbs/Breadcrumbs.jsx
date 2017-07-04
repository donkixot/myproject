import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({name, parentpath, parentname}) =>
	<div>
		<div className='pageTitle'>{name}</div>
		<div className='breadcrumbs'>
			<ul className='breadcrumbs__items'>
				<li className='breadcrumbs__item'>
					<Link to='/' className='breadcrumbs__itemLink'>Home</Link>
				</li>
				{
					parentpath ?
					<li className='breadcrumbs__item'>
						<Link to={parentpath} className='breadcrumbs__itemLink'>{parentname}</Link>
					</li>
					:
					null
				}
				<li className='breadcrumbs__item'>{name}</li>
			</ul>
		</div>
	</div>


export default Breadcrumbs;
