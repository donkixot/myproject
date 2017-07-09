import React, { Component } from 'react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs.jsx';

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
		const teamMembers = props.contents.team.block1.items;

		return (
			<div>
				<Breadcrumbs
					name={props.name}
					parentpath={props.parentpath}
					parentname={props.parentname}
				/>
				<div className='ourteam'>
					<div className='pageTitle blockTitle'>{props.contents.team.block1.title}</div>
					<div className='pageDescr'>{props.contents.team.block1.description}</div>
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
