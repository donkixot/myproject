import React, { Component } from 'react';

import './Home.sass';

import possibilities from './possibilities.json';

const someNumbers = [
	{
		'title':'1600',
		'text': 'Happy clients'
	},
	{
		'title':'3200',
		'text': 'Completed projects'
	},
	{
		'title':'40',
		'text': 'Awards'
	},
	{
		'title':'20 000',
		'text': 'Coffee drinks'
	}
]

const sliderBgStyle ={
	backgroungImage: "url('./img/homeslider1.jpg')"
}

const Home = (props) =>
	<div className='homePage'>
		<div className='homeSlider'>
			<div className='homeSlider__imgs'>
				<div className='homeSlider__img' style={{backgroundImage: 'url(\'./img/homeslider5.jpg\')'}}></div>
			</div>
			<div className='homeSlider__controls'>
				<button className='homeSlider__control homeSlider__control_left sliderBtn sliderBtn_left' type='button'>left</button>
				<button className='homeSlider__control homeSlider__control_right sliderBtn sliderBtn_right' type='button'>right</button>
			</div>
		</div>
		<div className='pageContainer'>
			<div className='pageTitle blockTitle'>Some numbers</div>
			<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
			<div className='someNumbers'>
				<div className='someNumbers__items'>
					{
						someNumbers.map( (someNumber, i) =>
							<div key={i} className='someNumbers__item'>
								<div className='someNumbers__itemInner'>
									<div className='someNumbers__itemTitle'>{someNumber.title}</div>
									<div className='someNumbers__itemText'>{someNumber.text}</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
			<div className='pageTitle blockTitle'>Possibilities</div>
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
		</div>
	</div>


export default Home;