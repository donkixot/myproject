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

		let arr = document.querySelectorAll('.pageSlider__item');
		let arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr2.push(arr[i].clientHeight);
		}
		let maxHeigth = Math.max.apply(null, arr2);
		console.log(maxHeigth);
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
							<button className='pageSlider__control pageSlider__control_left sliderBtn sliderBtn_left' type='button'>&#10094;</button>
							<button className='pageSlider__control pageSlider__control_right sliderBtn sliderBtn_right' type='button'>&#10095;</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
