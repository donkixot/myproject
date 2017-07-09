import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

export default class SignIn extends Component {
	constructor(props){
		super(props);
		this.state = {
			showEmailError: props.showEmailError,
			showPassError: props.showPassError
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			showEmailError: nextProps.showEmailError,
			showPassError: nextProps.showPassError
		});
	}

	handleFocusForm(e) {
		if(e.target.getAttribute('type') === 'email'){
			this.setState({
				showEmailError: false
			});
		}else{
			this.setState({
				showPassError: false
			});
		}
	}

	handleSubmitForm(e) {
		e.preventDefault()
		//get password value from input
		let passVal = this.refs.signInPass.value;
		//get email value from input
		let emailVal = this.refs.signInEmail.value;
		//validate email value
		let emailRegexp = /^\w+@\w+\.\w{2,3}$/;
		if(!emailRegexp.test(emailVal)){
			this.setState({
				showEmailError: true
			});
		}else{
			//if email is valid post the form
			this.props.pageActions.signIn(emailVal, passVal);
			setTimeout(() => {
				if (this.props.isSignIn) {
					this.props.pageActions.getTask();
					//go to cabinet page
					document.querySelector('.loggedIn').click();
					// this.props.history.replace('/cabinet/account'); - not working in ie
				}
			},1000);
		}
	}
	render() {
		return (
			<div className='pageContainer'>
				<Breadcrumbs name={this.props.name} />
				<div className='cardBox'>
					{
						this.props.preloader ?
						<div className='pageLoader'></div>
						:
						<form className='singInForm' onSubmit={this.handleSubmitForm.bind(this)} onFocus={this.handleFocusForm.bind(this)} noValidate >
							<div className='cardBox__item'>
								<label className='cardBox__label'>
									<span className='cardBox__labelSpan'>Email</span>
									<input className='cardBox__labelInput' type='email' ref='signInEmail'	defaultValue='anakin@gmail.com'	/>
									<span
										className='cardBox__spanError cardBox__spanError_email spanError'
										style={
											this.state.showEmailError
											? {display:'block'}
											: {display:'none'}
										}
									>This user does not exist!</span>
								</label>
							</div>
							<div className='cardBox__item'>
								<label className='cardBox__label'>
									<span className='cardBox__labelSpan'>Password</span>
									<input className='cardBox__labelInput' type='password' ref='signInPass' defaultValue='123456789' />
									<span
										className='cardBox__spanError cardBox__spanError_pass spanError'
										style={
											this.state.showPassError
											? {display:'block'}
											: {display:'none'}
										}
									>Invalid password!</span>
								</label>
							</div>
							<div className='cardBox__item cardBox__item_center'>
								<Link className='cardBox__itemLink' to='/forget-password'>Forgot your password?</Link>
							</div>
							<div className='cardBox__itemButtonWrap'>
								<RaisedButton className='cardBox__itemButton' type='submit' label="Enter" primary={true} />
							</div>
							<hr/>
							<div className='cardBox__item cardBox__item_center'>
								<Link className='cardBox__itemLink' to='/signup'>No account? Creat one here</Link>
							</div>
						</form>
					}
					<Link className='loggedIn' to='/cabinet/account'></Link>
				</div>
			</div>
		);
	}
}
