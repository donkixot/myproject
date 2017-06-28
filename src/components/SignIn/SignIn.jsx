import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.sass'

export default class SignIn extends Component {
	handleFocusEmail(e) {
		document.querySelectorAll('.cardBox__spanError_email')[0].style.display = 'none';
	}

	handleFocusPass(e) {
		document.querySelectorAll('.cardBox__spanError_pass')[0].style.display = 'none';
	}

	handleSingInSubmit(e) {
		//get email value from input
		let emailVal = this.refs.signInEmail.value;
		//get password value from input
		let passVal = this.refs.signInPass.value;
		//cancel validation if email and password values is entered
		if(emailVal && passVal){
			e.preventDefault();
		}
		this.props.pageActions.signIn(emailVal, passVal);
		setTimeout(() => {
			this.props.history.replace('/cabinet/account');
		},1000)
	}
	render() {
		return (
			<div className='pageContainer'>
				<div className='pageTitle'>Log in to your account</div>
				<div className='cardBox'>
					{
						this.props.preloader ?
						<div className='pageLoader'></div>
						:
						<form className='singInForm' onSubmit={this.handleSingInSubmit.bind(this)} >
							<div className='cardBox__item'>
								<label className='cardBox__label'>
									<span className='cardBox__labelSpan'>Email</span>
									<input className='cardBox__labelInput' type='email' ref='signInEmail' required onFocus={this.handleFocusEmail.bind(this)} defaultValue='anakin@gmail.com' />
									<span className='cardBox__spanError cardBox__spanError_email spanError'>This user does not exist!</span>
								</label>
							</div>
							<div className='cardBox__item'>
								<label className='cardBox__label'>
									<span className='cardBox__labelSpan'>Password</span>
									<input className='cardBox__labelInput' type='password' ref='signInPass' required onFocus={this.handleFocusPass.bind(this)} defaultValue='123456789' />
									<span className='cardBox__spanError cardBox__spanError_pass spanError'>Invalid password!</span>
								</label>
							</div>
							<div className='cardBox__item cardBox__item_center'>
								<Link className='cardBox__itemLink' to='/forget-password'>Forgot your password?</Link>
							</div>
							<button className='cardBox__itemButton' type='submit'>Enter</button>
							<hr/>
							<div className='cardBox__item cardBox__item_center'>
								<Link className='cardBox__itemLink' to='/signup'>No account? Creat one here</Link>
							</div>
						</form>
					}
					<Link className='loggedIn' to='/cabinet'></Link>
				</div>
			</div>
		);
	}
}
