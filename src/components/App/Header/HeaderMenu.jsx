import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMenu = (props) =>
	<nav className='headerMenu'>
		<ul className='headerMenu__items'>
			<li className='headerMenu__item'>
				<NavLink
					className='headerMenu__itemLink'
					to='/'
				><span>Home</span></NavLink>
			</li>
			<li className='headerMenu__item'>
				<NavLink
					className='headerMenu__itemLink'
					to='/about'
					activeClassName='headerMenu__itemLink_active'
				><span>About</span></NavLink>
				<ul className='headerMenu__items headerMenu__items_submenu'>
					<li className='headerMenu__item headerMenu__item_submenu'>
						<NavLink className='headerMenu__itemLink headerMenu__itemLink_submenu' to='/about/#who'><span>Who are we</span></NavLink>
					</li>
					<li className='headerMenu__item headerMenu__item_submenu'>
						<NavLink className='headerMenu__itemLink headerMenu__itemLink_submenu' to='/about/#benefits'><span>Benefits</span></NavLink>
					</li>
					<li className='headerMenu__item headerMenu__item_submenu'>
						<NavLink className='headerMenu__itemLink headerMenu__itemLink_submenu' to='/about/#team'><span>Team</span></NavLink>
					</li>
				</ul>
			</li>
			<li className='headerMenu__item'>
				<NavLink
					className='headerMenu__itemLink'
					to='/contacts'
					activeClassName='headerMenu__itemLink_active'
				><span>Contacts</span></NavLink>
			</li>
			{
/*				<li className='headerMenu__item'>
				<NavLink
					className='headerMenu__itemLink'
					to='/task-list'
					activeClassName='headerMenu__itemLink_active'
				>Список задач</NavLink>
			</li>
			<li className='headerMenu__item'>
				<NavLink
					className='headerMenu__itemLink'
					to='/add-task'
					activeClassName='headerMenu__itemLink_active'
				>Добавить задачу</NavLink>
			</li>*/
			}
		</ul>
	</nav>

export default HeaderMenu;