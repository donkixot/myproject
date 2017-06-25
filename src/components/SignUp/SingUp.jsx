import React from 'react';
import { Link } from 'react-router-dom';

const SingUp = (props) =>
	<div className='pageContainer'>
		<div className='pageTitle'>Регистрация</div>
		<div className='cardBox'>
			<div className='cardBox__item'>
				<div className='cardBox__title'>Уже есть аккаунт? <Link to='/signin'>Войдите!</Link></div>
			</div>
			<form>
				<div className='cardBox__item'>
					<label className='cardBox__label'>
						<span className='cardBox__labelSpan'>Имя</span>
						<input className='cardBox__labelInput' type='text' required />
					</label>
				</div>
				<div className='cardBox__item'>
					<label className='cardBox__label'>
						<span className='cardBox__labelSpan'>Фамилия</span>
						<input className='cardBox__labelInput' type='text' required />
					</label>
				</div>
				<div className='cardBox__item'>
					<label className='cardBox__label'>
						<span className='cardBox__labelSpan'>Email</span>
						<input className='cardBox__labelInput' type='email' required />
					</label>
				</div>
				<div className='cardBox__item'>
					<label className='cardBox__label'>
						<span className='cardBox__labelSpan'>Пароль</span>
						<input className='cardBox__labelInput' type="password" required />
					</label>
				</div>
				<button className='cardBox__itemButton' type='submit'>Зарегистрироваться</button>
			</form>
		</div>
	</div>


export default SingUp;
