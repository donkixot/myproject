import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

import './SingUp.sass';

export default class SingUp extends Component {

	constructor(props){
		super(props);
		this.state = {
			goToSignIn: false,
			firstnameError: false,
			lastnameError: false,
			emailError: false,
			emailValidationError: false,
			passError: false,
			avatarError: false,
			fileTypeError: false
		}
	}

	handleAddFile(e){
		//the result div
		let result = document.querySelector('.cardBox__imgWrap');
		//img tag
		let img = this.refs.signUpAvatar;
		//file that we get from input
		let file = e.target.files[0];
		//if file type is not image - show error massage and clear src attribute in img tag
		if (file.type.indexOf('image') < 0) {
			img.src = '';
			this.setState({
				fileTypeError: true,
				avatarError: false
			});
			return;
		}else{
			this.setState({
				fileTypeError: false,
				avatarError: false
			});
		}
		//if file type is image set src from FileReader method
		let fReader = new FileReader();
		fReader.onload = function() {
			img.src = fReader.result;
		};
		fReader.readAsDataURL(file);
	}

	handleValidationEmail(e){
		//validate email value
		let emailRegexp = /^\w+@\w+\.\w{2,3}$/;
		if(!emailRegexp.test(e.target.value)){
			this.setState({
				emailValidationError: true
			});
		}else{
			this.setState({
				emailValidationError: false
			});
		}
	}

	handleFocus(e){
		let key = e.target.getAttribute('data-error');
		this.setState( state => state[key] = false );
	}

	handeSignUpSubmit(e){
		e.preventDefault();
		let user = {
			firstname: '',
			lastname: '',
			role: '',
			email: '',
			pass: '',
			avatar: ''
		}
		let checkVal = (val, key) => {
			if (!val) {
				this.setState( state => state[key] = true );
			}
		}
		//get firstname, if it's an empty - show error
		let firstname = this.refs.signUpFirstname.value;
		checkVal(firstname, 'firstnameError');

		//get lastname, if it's an empty - show error
		let lastname = this.refs.signUpLastname.value;
		checkVal(lastname, 'lastnameError');

		//get role
		let role = document.querySelector('.cardBox__radio input:checked').value;

		//get email, if it's an empty - show error
		let email = this.refs.signUpEmail.value;
		checkVal(email, 'emailError');

		//get pass, if it's an empty - show error
		let pass = this.refs.signUpPass.value;
		checkVal(pass, 'passError');

		//get avatar input value, if it's an empty - show error
		let avatarVal = this.refs.signUpAvatarVal.value;
		checkVal(avatarVal, 'avatarError');

		//get avatar image
		let avatar = this.refs.signUpAvatar;
		console.log(avatar.naturalHeight);

		//function for encode image
		let getBase64Image = img => {
			//create an empty canvas element
			let canvas = document.createElement('canvas');
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			//copy the image contents to the canvas
			let ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0);
			//get the data-URL formatted image
			let dataURL = canvas.toDataURL('image/png');
			return dataURL;
		}
		//if all values is exist - register user and show link to signin page
		if (firstname && lastname && role && email && pass && avatar) {
			user.firstname = firstname;
			user.lastname = lastname;
			user.role = role;
			user.email = email;
			user.pass = pass;
			user.avatar = getBase64Image(avatar);
			this.props.pageActions.registerUser(user);
			this.setState({
				goToSignIn: true
			});
		}
	}

	render() {
		return (
			<div className='pageContainer'>
				<Breadcrumbs name={this.props.name} />
				<div className='cardBox'>
					{
						this.state.goToSignIn
						?
							<div className='cardBox__item'>
								<div className='cardBox__title'>Now you have an account and yo can <Link to='/signin'>log in!</Link></div>
							</div>
						:
							<div>
								<div className='cardBox__item'>
									<div className='cardBox__title'>Already have an account? <Link to='/signin'>Log in instead!</Link></div>
								</div>
								<form onSubmit={this.handeSignUpSubmit.bind(this)} onFocus={this.handleFocus.bind(this)} noValidate>
									<div className='cardBox__item'>
										<label className='cardBox__label'>
											<span className='cardBox__labelSpan'>First name</span>
											<input ref='signUpFirstname' data-error='firstnameError' className='cardBox__labelInput' type='text' />
											<span
												className='cardBox__spanError spanError'
												style={
													this.state.firstnameError
													? {display: 'block'}
													: {display: 'none'}
												}
											>This field is required!</span>
										</label>
									</div>
									<div className='cardBox__item'>
										<label className='cardBox__label'>
											<span className='cardBox__labelSpan'>Last name</span>
											<input ref='signUpLastname' data-error='lastnameError' className='cardBox__labelInput' type='text' />
											<span
												className='cardBox__spanError spanError'
												style={
													this.state.lastnameError
													? {display: 'block'}
													: {display: 'none'}
												}
											>This field is required!</span>
										</label>
									</div>
									<div className='cardBox__item'>
										<label className='cardBox__label'>
											<span className='cardBox__labelSpan'>Role</span>
											<RadioButtonGroup className='cardBox__radioGroup' name='role' defaultSelected='manager'>
												<RadioButton
													className='cardBox__radio'
													value='manager'
													label='manager'
													style={{width:'110px',display:'inline-block'}}
												/>
												<RadioButton
													className='cardBox__radio'
													value='programmer'
													label='programmer'
													style={{width:'110px',display:'inline-block'}}
												/>
											</RadioButtonGroup>
										</label>
									</div>
									<div className='cardBox__item'>
										<label className='cardBox__label'>
											<span className='cardBox__labelSpan'>Email</span>
											<input ref='signUpEmail' data-error='emailError' className='cardBox__labelInput' type='email' onChange={this.handleValidationEmail.bind(this)} />
											<span
												className='cardBox__spanError spanError'
												style={
													this.state.emailError
													? {display: 'block'}
													: {display: 'none'}
												}
											>This field is required!</span>
											<span
												className='cardBox__spanError spanError'
												style={
													this.state.emailValidationError
													? {display: 'block'}
													: {display: 'none'}
												}
											>Email is not valid!</span>
										</label>
									</div>
									<div className='cardBox__item'>
										<label className='cardBox__label'>
											<span className='cardBox__labelSpan'>Password</span>
											<input  ref='signUpPass' data-error='passError' className='cardBox__labelInput' type='password' />
											<span
												className='cardBox__spanError spanError'
												style={
													this.state.passError
													? {display: 'block'}
													: {display: 'none'}
												}
											>This field is required!</span>
										</label>
									</div>
									<div className='cardBox__item'>
										<label className='cardBox__label'>
											<span className='cardBox__labelSpan'>Avatar</span>
											<input ref='signUpAvatarVal' className='cardBox__labelInput' type='file' onChange={this.handleAddFile.bind(this)}/>
											<span
												className='cardBox__spanError spanError'
												style={
													this.state.fileTypeError
													? {display: 'block'}
													: {display: 'none'}
												}
											>Invalid type!</span>
											<span
												className='cardBox__spanError spanError'
												style={
													this.state.avatarError
													? {display: 'block'}
													: {display: 'none'}
												}
											>This field is required!</span>
										</label>
									</div>
									<div className='cardBox__imgWrap'>
										<img alt='' ref='signUpAvatar' className='cardBox__img' src='data:image/png;base64,null' />
									</div>
									<div className='cardBox__itemButtonWrap'>
										<RaisedButton className='cardBox__itemButton' type='submit' label="Register" primary={true} />
									</div>
								</form>
							</div>
					}
				</div>
			</div>
		);
	}
}


