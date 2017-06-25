import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './About.sass';

import possibilities from '../Home/possibilities.json';

const whoweareItems = [
	{
		'icon': 'g',
		'title': 'Проекты вовремя',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'h',
		'title': 'Полная поддержка',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'j',
		'title': 'Проффесиональный опыт',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'k',
		'title': 'Коммуникативная комманда',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	}
]

export default class About extends Component {
	render() {
		return (
			<div className='pageContainer'>
				<div className='pageTitle'>О нас</div>
				<div className='breadcrumbs'>
					<ul className='breadcrumbs__items'>
						<li className='breadcrumbs__item'>
							<Link to='/' className='breadcrumbs__itemLink'>Главная</Link>
						</li>
						<li className='breadcrumbs__item'>О нас</li>
					</ul>
				</div>
				<div className='whoweare'>
					<div className='pageTitle blockTitle'>Кто мы такие</div>
					<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
					<div className='whoweare__items'>
						{
							whoweareItems.map( (whoweareItem, i) =>
								<div key={i} className='whoweare__item'>
									<div className='whoweare__itemIcon'>{whoweareItem.icon}</div>
									<div className='whoweare__itemInner'>
										<div className='whoweare__itemTitle'>{whoweareItem.title}</div>
										<div className='whoweare__itemText'>{whoweareItem.text}</div>
									</div>
								</div>
							)
						}
					</div>
				</div>
				<br/><br/><br/><br/>
				<div className='pageTitle blockTitle' id='benefits'>Преимущества</div>
				<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
				<div className='possibilities'>
					<div className='possibilities__items'>
						{
							possibilities.map( (possibility, i) =>
								<div key={i} className='possibilities__item'>
									<div className='possibilities__itemIcon'>&nbsp;{possibility.icon}</div>
									<div className='possibilities__itemTitle'>{possibility.title}</div>
									<div className='possibilities__itemText'>{possibility.text}</div>
								</div>
							)
						}
					</div>
				</div>
				<br/><br/><br/><br/><br/><br/>
				<div className='pageTitle blockTitle' id='team'>Наша команда</div>
				<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
				<div className='pageSlider'>
					<div className='pageSlider__imgs'>
						<div className='pageSlider__img' style={{backgroundImage: 'url(\'./img/homeSlider5.jpg\')'}}></div>
					</div>
					<div className='pageSlider__controls'>
						<button className='pageSlider__control pageSlider__control_left sliderBtn sliderBtn_left' type='button'>left</button>
						<button className='pageSlider__control pageSlider__control_right sliderBtn sliderBtn_right' type='button'>right</button>
					</div>
				</div>
			</div>
		);
	}
}
