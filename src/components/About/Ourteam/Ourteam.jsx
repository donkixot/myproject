import React, { Component } from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

const teamMembers = [
	{
		"firstname": "Bumblebee",
		"lastname": "",
		"position": "CTO",
		"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/bumblebee.jpg"
	},
	{
		"firstname": "Alexandra",
		"lastname": "Daddario",
		"position": "HR",
		"description": "No comments..",
		"image": "./img/team/daddario.jpg"
	},
	{
		"firstname": "Deadpool",
		"lastname": "",
		"position": "Team lead",
		"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/deadpool.jpg"
	},
	{
		"firstname": "Terminator 2",
		"lastname": "",
		"position": "CEO",
		"description": "Cras ultricies ligula sed magna dictum porta. Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/terminator.jpg"
	},
	{
		"firstname": "Zack",
		"lastname": "Efron",
		"position": "Front-end",
		"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/efron.jpg"
	},
	{
		"firstname": "Michelangelo",
		"lastname": "",
		"position": "Pizza guy",
		"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/michelangelo.jpg"
	},
	{
		"firstname": "Rocket",
		"lastname": "Raccoon",
		"position": "Back-end",
		"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/rocket.jpg"
	},
	{
		"firstname": "Some",
		"lastname": "Strangers",
		"position": "Doing nothing",
		"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/some.jpg"
	},
	{
		"firstname": "Dart",
		"lastname": "Wader",
		"position": "System administrator",
		"description": "Morbi vel felis cursus, fermentum nibh nec, volutpat urna.",
		"image": "./img/team/wader.jpg"
	}
]

export default class Ourteam extends Component {

	componentDidMount() {

		let slider = document.querySelector('.pageSlider__items');
		//get all slides
		let slides = document.querySelectorAll('.pageSlider__item');
		let slidesHeight = [];
		//get height of all slides
		for (var i = 0; i < slides.length; i++) {
			slidesHeight.push(slides[i].clientHeight);
		}
		//equal max height
		let maxSlidesHeigth = Math.max.apply(null, slidesHeight);
		//set max height to slider wrapper
		document.querySelector('.pageSlider').setAttribute('style', `height: ${maxSlidesHeigth}px`);
		//get width of slide
		let slideWidth = document.querySelector('.pageSlider__item').offsetWidth;
		//set width to sliders container - slide width multiply by number of slides
		let sliderWidth = slideWidth*slides.length;
		slider.setAttribute('style',`width: ${sliderWidth}px;`);


		let showSlides = (n) => {
			//window width
			let contentWidth = window.innerWidth;
			//get number of visible slides
			let numberVisibleSlides = Math.floor(contentWidth / slideWidth);
			//set width of slider wrapper
			let sliderWrapperWidth = numberVisibleSlides*slideWidth;
			document.querySelector('.pageSlider').setAttribute('style', `width: ${sliderWrapperWidth}px`);
			//set slider position
			slider.setAttribute('style',`width: ${sliderWidth}px; transform: translate(${n}px, 0);`);

			//get number of slides that are not visible
			let numberHiddenSlides = slides.length - numberVisibleSlides;
			//get control button width
			let controlWidth = document.querySelector('.pageSlider__control_right').clientWidth;
			//hide right control button when slider don't need to move in right
			document.querySelector('.pageSlider__control_right').setAttribute('style', `right: -${controlWidth}px`);

			//if slider achive his last slide - hide left control button
			if(n == -slideWidth*numberHiddenSlides){
				document.querySelector('.pageSlider__control_left').setAttribute('style', `left: -${controlWidth}px`);
			}else{
				document.querySelector('.pageSlider__control_left').setAttribute('style', `left: 0px`);
			}

			//if slider achive his first slide - hide right control button
			if(n <= -slideWidth){
				document.querySelector('.pageSlider__control_right').setAttribute('style', `right: 0px`);
			}else{
				document.querySelector('.pageSlider__control_right').setAttribute('style', `right: -${controlWidth}px`);
			}
		}


		let slideTranslate = 0;
		showSlides(slideTranslate);

		//get visible slides in differens window width
		window.addEventListener('resize', function(){
			showSlides(slideTranslate);
		});

		let moveSlides = (n) => {
			let presentSlideTranslate = parseInt(slider.style.transform.slice(10));
			showSlides(n += presentSlideTranslate);
		}

		//add events on control buttons
		document.querySelector('.pageSlider__controls').addEventListener('click', function(e){
			if (e.target.getAttribute('data-control') == 'left') {
				moveSlides(-slideWidth);
			}else{
				moveSlides(slideWidth);
			}
		});
	}

	render() {

		const props = this.props;

		return (
			<div>
				<Breadcrumbs
					name={props.name}
					parentpath={props.parentpath}
					parentname={props.parentname}
				/>
				<div className='ourteam'>
					<div className='pageTitle blockTitle'>Our team</div>
					<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
					<div className='pageSlider'>
						<div className='pageSlider__items'>
							{
								teamMembers.map((m,i) => (
									<div key={i} className='pageSlider__item'>
										<table>
											<tbody>
												<tr>
													<td className='pageSlider__itemImgWrap'>
														<img className='pageSlider__itemImg' src={m.image} alt=""/>
													</td>
												</tr>
												<tr>
													<td className='pageSlider__itemTextWrap'>
														<div className='pageSlider__itemText'>
															<div className='pageSlider__itemName'>{m.firstname} {m.lastname}</div>
															<div className='pageSlider__itemPosition'>{m.position}</div>
															<div className='pageSlider__itemDescr'>{m.description}</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								))
							}
						</div>
						<div className='pageSlider__controls'>
							<button className='pageSlider__control pageSlider__control_left sliderBtn sliderBtn_left' data-control='left' type='button'>&#10094;</button>
							<button className='pageSlider__control pageSlider__control_right sliderBtn sliderBtn_right' data-control='right' type='button'>&#10095;</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
