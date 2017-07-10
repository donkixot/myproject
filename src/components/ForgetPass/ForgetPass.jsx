import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';


const ForgetPass = () => {
	const handleRemindPass = (e) =>{
		//get email value from input
		let emailVal = document.querySelectorAll('.cardBox__labelInput')[0].value;
		if(emailVal){
			e.preventDefault();
		}
		let userEmail = 'mo4ila@gmail.com';
		let userPass = '123456789';
		document.querySelector('.formSpree').setAttribute('action', `https://formspree.io/${userEmail}`);
		document.querySelector('.formSpree_email').value = `${userEmail}`;
		document.querySelector('.formSpree__textarea').value = `${userPass}`;
		document.querySelector('.formSpree__submit').click();
	}
	return (
		<div className='pageContainer'>
			<div className='pageTitle'>Forgot your password?</div>
			<div className='cardBox'>
				<form>
					<div className='cardBox__title'>Please enter the email address you used to register. You will receive your password.</div>
					<div className='cardBox__item'>
						<label className='cardBox__label'>
							<span className='cardBox__labelSpan'>Email</span>
							<input className='cardBox__labelInput' type='email' required />
						</label>
					</div>
					<div className='cardBox__itemButtonWrap'>
						<RaisedButton className='cardBox__itemButton' type='submit' label="Send" primary={true} />
					</div>
				</form>
				<form className='formSpree hidden' action='' method='POST' noValidate>
					<input className='formSpree_email' type='email' name='Your email' />
					<textarea className='formSpree__textarea' name='Your password' placeholder='Your message'></textarea>
					<input type='hidden' name='_next' value='' />
					<input type='text' name='_gotcha'/>
					<input className='formSpree__submit' type='submit' value='Send' />
				</form>
			</div>
		</div>
	);
}

export default ForgetPass;