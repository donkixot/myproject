import React from 'react';

const HeaderSearch = (props) =>
	<div className='headerSearch'>
		<input className='headerSearch__input' type='search' placeholder='Поиск...' />
		<div className='headerSearch__icon'></div>
	</div>


export default HeaderSearch;