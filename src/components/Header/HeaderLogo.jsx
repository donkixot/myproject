import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = (props) =>
	<div className='headerLogo'>
		<Link to='/' className='headerLogo__link'>
			<img className='headerLogo__img' src='./img/logo.jpg'/>
			<span className='headerLogo__span headerLogo__span_blue'>Task</span>
			<span className='headerLogo__span'>Tracking</span>
		</Link>
	</div>

export default HeaderLogo;