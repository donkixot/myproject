import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CSSTransitionGroup } from 'react-transition-group'

import { Route, Switch, Redirect } from 'react-router-dom';

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
		component: About,
		name: 'About'
	},
	{
		path: '/contacts',
		component: Contacts,
		name: 'Contacts'
	},
	{
		path: '/signin',
		component: SignIn,
		name: 'Sign in'
	},
	{
		path: '/forget-password',
		component: ForgetPass,
		name: 'Forget password'
	},
	{
		path: '/signup',
		component: SignUp,
		name: 'Sign up'
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
							<Route exact path='/' component={() => <Home name='Home' {...this.props} />} />
							{/*pass props into children components*/}
							{
								routes.map((route, i) => (
									<Route key={i} path={route.path} render={() => (
										<route.component name={route.name} {...this.props} />
									)}/>
								))
							}
							{
								this.props.isSignIn ?
								<Route path='/cabinet' component={() => <Cabinet {...this.props} />} />
								:
								<Redirect to={{
									pathname: '/signin'
								}}/>
							}
						</Switch>
					}
				</div>
			</MuiThemeProvider>
		);
	}
}

  // <Route {...rest} render={props => (
  //   fakeAuth.isAuthenticated ? (
  //     <Component {...props}/>
  //   ) : (
  //     <Redirect to={{
  //       pathname: '/login',
  //       state: { from: props.location }
  //     }}/>
  //   )
  // )}/>