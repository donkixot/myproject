import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
					<button className='cardBox__itemButton' type='submit' onClick={handleRemindPass}>Send</button>
				</form>
				<form className='formSpree hidden' action='' method='POST'>
					<input className='formSpree_email' type='email' name='Your email' />
					<textarea className='formSpree__textarea' name='Your password' placeholder='Your message'></textarea>
					<input className='hidden' type='text' name='_gotcha'/>
					<input type='hidden' name='_next' value='' />
					<input className='formSpree__submit' type='submit' value='Send' />
				</form>
				<div className='cardBox__item cardBox__item_center'>
					<Link className='cardBox__itemLink' to='/signin'>Back to login</Link>
				</div>
			</div>
		</div>
	);
}

export default ForgetPass;