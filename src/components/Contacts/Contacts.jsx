import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';

export default class Contacts extends Component {

	componentDidMount() {
		let lat = document.getElementById('map-canvas').getAttribute('data-lat');
		let lng = document.getElementById('map-canvas').getAttribute('data-lng');
		let zoom = document.getElementById('map-canvas').getAttribute('data-zoom');
		let mapOptions = {
			zoom: parseInt(zoom),
			scrollwheel: false,
			center: new google.maps.LatLng(lat, lng)
		};
		let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		let point = new google.maps.LatLng(lat, lng);
		let marker = new google.maps.Marker({
			draggable: false,
			raiseOnDrag: false,
			map: map,
			position: point,
			icon: {
				url: './img/point.png',
				scaledSize: new google.maps.Size(175, 175)
			}
		});
	}

	render() {

		const props = this.props;
		const finUsItems = props.contents.contacts.block1.items;

		return (
			<div className='pageContainer'>
				<Breadcrumbs name={props.name} />
				<div className='pageTitle blockTitle'>{props.contents.contacts.block1.title}</div>
				<div className='pageDescr'>{props.contents.contacts.block1.description}</div>
				<div className='findUs'>
					<div className='findUs__items'>
						{
							finUsItems.map( (f,i) =>
								<div key={i} className='findUs__item'>
									<div className='findUs__itemIcon'>&nbsp;{f.icon}</div>
									<div className='findUs__itemTitle'>{f.title}</div>
									<div className='findUs__itemText'>{f.text}</div>
								</div>
							)
						}
					</div>
				</div>
				<div className='contacts_mapWrap'>
					<div id="map-canvas" className='contacts_map' data-lat="50.4627983" data-lng="30.5057531" data-zoom="14" ></div>
				</div>
			</div>
		);
	}
}


