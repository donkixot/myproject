import React, { Component } from 'react';

export default class Home extends Component {

	componentDidMount() {
		//func for change slides
		let plusSlides = n => showSlides(slideIndex += n);

		//add events on control buttons
		document.querySelector('.homeSlider__controls').addEventListener('click', function(e){
			if (e.target.getAttribute('data-control') == 'left') {
				plusSlides(-1);
			}else{
				plusSlides(1);
			}
		});

		let showSlides = n => {
			let slides = document.querySelectorAll('.homeSlider__img');

			if(slides.length){
				//if slider has only one image - hide control buttons
				if(slides.length <= 1)	document.querySelector('.homeSlider__controls').style.display = 'none';

				//if index of slides more then number of slides - show first slide
				if(n > slides.length) {
					slideIndex = 1
				}

				//if index of slides less then number of slides - show last slide
				if(n < 1)  {
					slideIndex = slides.length
				}

				for (let i = 0; i < slides.length; i++){
					slides[i].style.display = 'none';
				}

				slides[slideIndex-1].style.display = 'block';
			}
		}

		const autoslideshow = (speed) => {
			const timer = setInterval(function () {
				plusSlides(1);
			}, speed)
		}

		//start slideshow from first slide
		let slideIndex = 1;
		showSlides(slideIndex);
		//run autoslideshow
		autoslideshow(6000);
	}

	render() {

		const props = this.props;
		const someNumbers = props.contents.home.block1.items;
		const possibilities = props.contents.home.block2.items;

		return (
			<div className='homePage'>
				<div className='homeSlider'>
					<div className='homeSlider__imgs'>
						<div className='homeSlider__img fade' style={{backgroundImage: 'url(\'./img/homeslider5.jpg\')'}}></div>
						<div className='homeSlider__img fade' style={{backgroundImage: 'url(\'./img/homeslider6.png\')'}}></div>
						<div className='homeSlider__img fade' style={{backgroundImage: 'url(\'./img/homeslider2.jpg\')'}}></div>
						<div className='homeSlider__img fade' style={{backgroundImage: 'url(\'./img/homeslider3.jpg\')'}}></div>
						<div className='homeSlider__img fade' style={{backgroundImage: 'url(\'./img/homeslider7.png\')'}}></div>
						<div className='homeSlider__img fade' style={{backgroundImage: 'url(\'./img/homeslider4.jpg\')'}}></div>
					</div>
					<div className='homeSlider__controls'>
						<button className='homeSlider__control homeSlider__control_left sliderBtn' data-control='left' type='button'>&#10094;</button>
						<button className='homeSlider__control homeSlider__control_right sliderBtn' data-control='right' type='button'>&#10095;</button>
					</div>
				</div>
				<div className='pageContainer'>
					<div className='pageTitle blockTitle'>{props.contents.home.block1.title}</div>
					<div className='pageDescr'>{props.contents.home.block1.description}</div>
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
					<div className='pageTitle blockTitle'>{props.contents.home.block2.title}</div>
					<div className='pageDescr'>{props.contents.home.block2.description}</div>
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
		);
	}
}
