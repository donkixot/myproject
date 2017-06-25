import React from 'react';
import { Link } from 'react-router-dom';

import './Contacts.sass'

const Contacts = (props) =>
	<div className='pageContainer'>
		<div className='pageTitle'>Our contacts</div>
		<div className='breadcrumbs'>
			<ul className='breadcrumbs__items'>
				<li className='breadcrumbs__item'>
					<Link to='/' className='breadcrumbs__itemLink'>Главная</Link>
				</li>
				<li className='breadcrumbs__item'>Контакты</li>
			</ul>
		</div>
		<div className='pageTitle blockTitle'>Where you can find us</div>
		<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
		<div className='findUs'>
			<div className='findUs__items'>
				<div className='findUs__item'>
					<div className='findUs__itemIcon'>&nbsp;l</div>
					<div className='findUs__itemTitle'>Наш адрес</div>
					<div className='findUs__itemText'>Не дом и не улица</div>
				</div>
				<div className='findUs__item'>
					<div className='findUs__itemIcon'>&nbsp;m</div>
					<div className='findUs__itemTitle'>Our email</div>
					<div className='findUs__itemText'>www.ru</div>
				</div>
				<div className='findUs__item'>
					<div className='findUs__itemIcon'>&nbsp;n</div>
					<div className='findUs__itemTitle'>Наш телефон</div>
					<div className='findUs__itemText'>(0) 123-456-789-00</div>
				</div>
			</div>
		</div>
		<div className='contacts_mapWrap'>
		{/*
			<Map google={this.props.google} zoom={14}>
				<Marker
					name={'Current location'}
					position={{lat: 50.4627983, lng: 30.5057531}}
				/>
			</Map>
		*/}
		</div>
	</div>

export default Contacts;
