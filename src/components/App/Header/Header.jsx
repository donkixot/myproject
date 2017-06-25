import React from 'react';

import HeaderLogo from './HeaderLogo.jsx';
import HeaderMenu from './HeaderMenu.jsx';
import HeaderSearch from './HeaderSearch.jsx';
import HeaderUser from './HeaderUser.jsx';

import './styles/Header.sass';

const Header = (props) =>
	<header className='header'>
		<HeaderLogo />
		<HeaderMenu />
		<HeaderSearch />
		<HeaderUser {...props}	/>
	</header>


export default Header;