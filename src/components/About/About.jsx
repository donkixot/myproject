// import React, { Component } from 'react';
// import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

// import './About.sass';

// const possibilities = [
// 	{
// 		'icon':'a',
// 		'title': 'Analise',
// 		'text': 'Vivamus suscipit tortor eget felis porttitor volutpat. Cura bitur aliquet quam.'
// 	},
// 	{
// 		'icon':'b',
// 		'title': 'Preparing',
// 		'text': 'Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
// 	},
// 	{
// 		'icon':'c',
// 		'title': 'Working',
// 		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
// 	},
// 	{
// 		'icon':'d',
// 		'title': 'Finalyse',
// 		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
// 	},
// 	{
// 		'icon':'e',
// 		'title': 'Testing',
// 		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
// 	},
// 	{
// 		'icon':'f',
// 		'title': 'Deliver',
// 		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
// 	}
// ]

// const whoweareItems = [
// 	{
// 		'icon': 'g',
// 		'title': 'On time projects',
// 		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
// 	},
// 	{
// 		'icon': 'h',
// 		'title': 'Professional experience',
// 		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
// 	},
// 	{
// 		'icon': 'j',
// 		'title': 'Fully support',
// 		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
// 	},
// 	{
// 		'icon': 'k',
// 		'title': 'Communicative team',
// 		'text': 'Lorem ipsum dolor sit amet. molestiae, dicta velit, pariatur optio magni! Sint repellendus natus aperiam, deleniti dolorem iste optio, at dolorum consectetur sequi odit voluptate. Unde, fugiat, officiis. Ratione, unde quos? Nihil voluptatem ab rem fugit!'
// 	}
// ]

// var slideIndex = 1;

// showSlides(slideIndex);

// function plusSlides(n){
// 	showSlides(slideIndex += n);
// }

// function currentSlide(n){
// 	showSlides(slideIndex = n);
// }

// function showSlides(n){
// 	var slides = document.querySelectorAll('mySlides');
// 	var dots = document.querySelectorAll('dot');

// console.log(slides);
// 	if(n > slides.length){
// 		slideIndex = 1;
// 	}
// 	if(n < 1){
// 		slideIndex = slides.length;
// 	}
// 	for (var i = 0; i < slides.length; i++){
// 		slides[i].style.display = 'none';
// 	}
// 	for (var i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace('active','');
// 	}
// 	slides[slideIndex-1].style = {'display':'block'};
// 	dots[slideIndex-1].className +=' active';
// }

// const About = (props) =>
// 	<div className='pageContainer'>
// 		<Breadcrumbs name={props.name} />
// 		<div className='whoweare'>
// 			<div className='pageTitle blockTitle'>Who we Are</div>
// 			<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
// 			<div className='whoweare__items'>
// 				{
// 					whoweareItems.map( (whoweareItem, i) =>
// 						<div key={i} className='whoweare__item'>
// 							<div className='whoweare__itemIcon'>{whoweareItem.icon}</div>
// 							<div className='whoweare__itemInner'>
// 								<div className='whoweare__itemTitle'>{whoweareItem.title}</div>
// 								<div className='whoweare__itemText'>{whoweareItem.text}</div>
// 							</div>
// 						</div>
// 					)
// 				}
// 			</div>
// 		</div>
// 		<br/><br/><br/><br/>
// 		<div className='pageTitle blockTitle' id='benefits'>Benefits</div>
// 		<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
// 		<div className='possibilities'>
// 			<div className='possibilities__items'>
// 				{
// 					possibilities.map( (possibility, i) =>
// 						<div key={i} className='possibilities__item'>
// 							<div className='possibilities__itemIcon'>&nbsp;{possibility.icon}</div>
// 							<div className='possibilities__itemTitle'>{possibility.title}</div>
// 							<div className='possibilities__itemText'>{possibility.text}</div>
// 						</div>
// 					)
// 				}
// 			</div>
// 		</div>
// 		<br/><br/><br/><br/><br/><br/>
// 		<div className='pageTitle blockTitle' id='team'>Our team</div>
// 		<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
// 		<div className='slidershow-container'>
// 			<div className='mySlides fade'>
// 				<div className='numbertext'>1/3</div>
// 				<img src='./img/homeslider1.jpg' />
// 				<div className='text'>Text</div>
// 			</div>
// 			<div className='mySlides fade'>
// 				<div className='numbertext'>2/3</div>
// 				<img src='./img/homeslider2.jpg' />
// 				<div className='text'>Text</div>
// 			</div>
// 			<div className='mySlides fade'>
// 				<div className='numbertext'>3/3</div>
// 				<img src='./img/homeslider3.jpg' />
// 				<div className='text'>Text</div>
// 			</div>
// 			<a className='prev' onClick={plusSlides(-1)}>&#10094;</a>
// 			<a className='next' onClick={plusSlides(1)}>&#10095;</a>
// 		</div>
// 		<br/>
// 		<div className='dots'>
// 			<span className='dot' onClick={currentSlide(1)}></span>
// 			<span className='dot' onClick={currentSlide(2)}></span>
// 			<span className='dot' onClick={currentSlide(3)}></span>
// 		</div>
// 		<div className='pageSlider'>
// 			<div className='pageSlider__imgs'>
// 				<div className='pageSlider__img' style={{backgroundImage: 'url(\'./img/homeSlider5.jpg\')'}}></div>
// 			</div>
// 			<div className='pageSlider__controls'>
// 				<button className='pageSlider__control pageSlider__control_left sliderBtn sliderBtn_left' type='button'>left</button>
// 				<button className='pageSlider__control pageSlider__control_right sliderBtn sliderBtn_right' type='button'>right</button>
// 			</div>
// 		</div>
// 	</div>


// export default About;

import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

import './About.sass';

const possibilities = [
	{
		'icon':'a',
		'title': 'Analise',
		'text': 'Vivamus suscipit tortor eget felis porttitor volutpat. Cura bitur aliquet quam.'
	},
	{
		'icon':'b',
		'title': 'Preparing',
		'text': 'Lorem Ipsum - это текст- рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'c',
		'title': 'Working',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'d',
		'title': 'Finalyse',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'e',
		'title': 'Testing',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	},
	{
		'icon':'f',
		'title': 'Deliver',
		'text': 'Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'
	}
]

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



export default class About extends Component {

componentDidMount() {
	let slideIndex = 1;

	showSlides(slideIndex);

	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	function showSlides(n){
		var slides = document.querySelectorAll('.mySlides');
		var dots = document.querySelectorAll('.dot');

		for (var i = 0; i < dots.length; i++) {
			dots[i].addEventListener("click", function(){
				currentSlide(i);
			});
		}

		document.querySelector('.prev').addEventListener("click", function(){
			plusSlides(-1);
		});
		document.querySelector('.next').addEventListener("click", function(){
			plusSlides(1);
		});

		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = slides.length;
		}
		for (var i = 0; i < slides.length; i++){
			slides[i].style.display = 'none';
		}
		for (var i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace('active','');
		}
		slides[slideIndex-1].style.display = 'block';
		dots[slideIndex-1].className +=' active';
	}
}

	render() {

		const props = this.props;

		return (
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
				<div className='slidershow-container'>
					<div className='mySlides fade'>
						<div className='numbertext'>1/3</div>
						<img src='./img/homeslider1.jpg' />
						<div className='text'>Text</div>
					</div>
					<div className='mySlides fade'>
						<div className='numbertext'>2/3</div>
						<img src='./img/homeslider2.jpg' />
						<div className='text'>Text</div>
					</div>
					<div className='mySlides fade'>
						<div className='numbertext'>3/3</div>
						<img src='./img/homeslider3.jpg' />
						<div className='text'>Text</div>
					</div>
					<a className='prev'>&#10094;</a>
					<a className='next'>&#10095;</a>
				</div>
				<br/>
				<div className='dots'>
					<span className='dot'></span>
					<span className='dot'></span>
					<span className='dot'></span>
				</div>
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
