import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Aboutindex from './Aboutindex/Abouteindex.jsx';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import Ourteam from './Ourteam/Ourteam.jsx';
import Benefits from './Benefits/Benefits.jsx';
import Whoweare from './Whoweare/Whoweare.jsx';


const abouteRoutes = [
	{
		parentpath: '/about',
		parentname: 'About',
		path: '/about/benefits',
		component: Benefits,
		name: 'Benefits'
	},
	{
		parentpath: '/about',
		parentname: 'About',
		path: '/about/our-team',
		component: Ourteam,
		name: 'Our team'
	},
	{
		parentpath: '/about',
		parentname: 'About',
		path: '/about/who-we-are',
		component: Whoweare,
		name: 'Who we are'
	}
]

const About = (props) =>
	<div className='pageContainer'>
		{
			<Switch>
				{/*to avoid problem with changing pages*/}
				<Route exact path='/about' component={() => <Aboutindex {...props} />} />
				{/*pass props into children components*/}
				{
					abouteRoutes.map((route, i) => (
						<Route key={i} path={route.path} render={() => (
							<route.component
								parentname={route.parentname}
								parentpath={route.parentpath}
								{...props}
								name={route.name}
							/>
						)}/>
					))
				}
			</Switch>
		}
	</div>

export default About;

