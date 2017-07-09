import React from 'react';

import HeaderLogo from './HeaderLogo.jsx';
import HeaderMenu from './HeaderMenu.jsx';
import HeaderSearch from './HeaderSearch.jsx';
import HeaderUser from './HeaderUser.jsx';

import './Header.sass'

const Header = (props) =>
	<header className='header'>
		<div className='header__toggle'>
			<label className='header__toggleLabel' htmlFor='mobNav'>
				<span></span>
			</label>
		</div>
		<input id='mobNav' type='checkbox' />
		<div className='header__dropdown'>
			<HeaderLogo />
			<HeaderMenu />
			<HeaderSearch {...props} />
			<HeaderUser {...props} />
		</div>
	</header>


export default Header;