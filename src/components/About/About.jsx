import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

import './About.sass';

import possibilities from '../Home/possibilities.json';

const whoweareItems = [
	{
		'icon': 'g',
		'title': 'On time projects',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'h',
		'title': 'Professional experience',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'j',
		'title': 'Fully support',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	},
	{
		'icon': 'k',
		'title': 'Communicative team',
		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
	}
]

const About = (props) =>
	<div className='pageContainer'>
		<Breadcrumbs name={props.name} />
		<div className='whoweare'>
			<div className='pageTitle blockTitle'>Who we Are</div>
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
		<div className='pageTitle blockTitle' id='benefits'>Benefits</div>
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
		<div className='pageTitle blockTitle' id='team'>Our team</div>
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


export default About;