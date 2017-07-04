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
		let showSlides = (n) => {
			let slider = document.querySelector('.pageSlider__items');
			let slides = document.querySelectorAll('.pageSlider__item');
			let slidesHeight = [];
			for (var i = 0; i < slides.length; i++) {
				slidesHeight.push(slides[i].clientHeight);
			}
			let maxSlidesHeigth = Math.max.apply(null, slidesHeight);
			document.querySelector('.pageSlider').setAttribute('style', `height: ${maxSlidesHeigth}px`);
			let slidesWidth = document.querySelector('.pageSlider__item').clientWidth;
			let sliderWidth = slidesWidth*slides.length;
			slider.setAttribute('style',`width: ${sliderWidth}px;`);
			//add events on control buttons
			document.querySelector('.pageSlider__controls').addEventListener('click', function(e){
				if (e.target.getAttribute('data-control') == 'left') {
					slider.setAttribute('style',`width: ${sliderWidth}px; transform: translate(-300px, 0);`);
				}else{
					slider.setAttribute('style',`width: ${sliderWidth}px; transform: translate(0px, 0);`);
				}
			});
			// if(n > slides.length){
			// 	slideIndex = 1;
			// }
			// if(n < 1){
			// 	slideIndex = slides.length;
			// }
		}

		let plusSlides = (n) => {
			showSlides(slideIndex += n);
		}

		let currentSlide = (n) => {
			showSlides(slideIndex = n);
		}

		let slideIndex = 1;
		showSlides(slideIndex);
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
