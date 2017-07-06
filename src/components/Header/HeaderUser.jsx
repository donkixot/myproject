import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const HeaderUser = ({currentUser, isSignIn, pageActions}) =>
	<div className='headerUser'>
		{
			isSignIn ?
			<div className='headerUser__inner'>
				<Link to='/cabinet/account' className='headerUser__link'>
					<div className='headerUser__avatar'>
						<img className='headerUser__avatarImg' src={currentUser.avatar} />
					</div>
					<div className='headerUser__name'><span>{currentUser.firstname} {currentUser.lastname}</span></div>
				</Link>
				<span className='headerUser__exit' onClick={() => pageActions.signOut()}>Sing out</span>
			</div>
			:
			<div className='headerUser__signin'>
				<Link to='/signin' className='headerUser__link'><span>Sing in/Sing up</span></Link>
			</div>
		}
	</div>

export default HeaderUser;
