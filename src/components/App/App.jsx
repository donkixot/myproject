import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Route, Switch } from 'react-router-dom';

import About      from '../About/About.jsx';
import Cabinet    from '../Cabinet/Cabinet.jsx';
import Contacts   from '../Contacts/Contacts.jsx';
import Home       from '../Home/Home.jsx';
import NotFound   from '../NotFound/NotFound.jsx';
import SignIn     from '../SignIn/SignIn.jsx';
import ForgetPass from '../ForgetPass/ForgetPass.jsx';
import SignUp     from '../SignUp/SingUp.jsx';


import './styles/App.sass';

import Header from './Header/Header.jsx';

const routes = [
	{
		path: '/about',
		component: About
	},
	{
		path: '/contacts',
		component: Contacts
	},
	{
		path: '/signin',
		component: SignIn
	},
	{
		path: '/forget-password',
		component: ForgetPass
	},
	{
		path: '/signup',
		component: SignUp
	}
]

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header	{...this.props} />
					{
						<Switch>
							{/*to avoid problem with changing pages*/}
							<Route exact path='/' component={() => <Home {...this.props} />} />
							{/*pass props into children components*/}
							{
								routes.map((route, i) => (
									<Route key={i} path={route.path} render={() => (
										<route.component {...this.props} />
									)}/>
								))
							}
							<Route path='/cabinet' component={() => <Cabinet {...this.props} />} />
						</Switch>
					}
				</div>
			</MuiThemeProvider>
		);
	}
}
