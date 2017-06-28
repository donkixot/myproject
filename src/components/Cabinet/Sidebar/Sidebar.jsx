import React from 'react';
import { Link } from 'react-router-dom';
import Filters from '../Filters/Filters.jsx';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionList from 'material-ui/svg-icons/action/list';
import AVPlaylistAdd from 'material-ui/svg-icons/AV/playlist-add';
import {List, ListItem} from 'material-ui/List';

import './Sidebar.sass';

const Sidebar = (props) =>
	<div className='sidebar'>
		<List>
			<Link className='sidebar__itemLink' to='/'>
				<ListItem
					className='sidebar__item'
					leftIcon={<ActionHome />}
					primaryText='Home'
				/>
			</Link>
			<Link className='sidebar__itemLink' to='/cabinet/account'>
				<ListItem
					className='sidebar__item'
					leftIcon={<ActionPermIdentity/>}
					primaryText='My account'
				/>
			</Link>
			<Link className='sidebar__itemLink' to='/cabinet/task-list'>
				<ListItem
					className='sidebar__item'
					leftIcon={<ActionList />}
					primaryText='Task list'
				/>
			</Link>
			<Link className='sidebar__itemLink' to='/cabinet/add-task'>
				<ListItem
					className='sidebar__item'
					leftIcon={<AVPlaylistAdd />}
					primaryText='Add task'
				/>
			</Link>
		</List>
		<br/>
		{
			props.location.pathname == '/cabinet/task-list' || props.location.pathname == '/cabinet/account'
			?	<Filters/>
			:	null
		}
	</div>


export default Sidebar;