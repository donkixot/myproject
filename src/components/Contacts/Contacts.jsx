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
		return (
			<div className='pageContainer'>
				<Breadcrumbs name={this.props.name} />
				<div className='pageTitle blockTitle'>Where you can find us</div>
				<div className='pageDescr'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</div>
				<div className='findUs'>
					<div className='findUs__items'>
						<div className='findUs__item'>
							<div className='findUs__itemIcon'>&nbsp;l</div>
							<div className='findUs__itemTitle'>Our adress</div>
							<div className='findUs__itemText'>Not home and not street</div>
						</div>
						<div className='findUs__item'>
							<div className='findUs__itemIcon'>&nbsp;m</div>
							<div className='findUs__itemTitle'>Our email</div>
							<div className='findUs__itemText'>www.com</div>
						</div>
						<div className='findUs__item'>
							<div className='findUs__itemIcon'>&nbsp;n</div>
							<div className='findUs__itemTitle'>Our phone</div>
							<div className='findUs__itemText'>(0) 123-456-789-00</div>
						</div>
					</div>
				</div>
				<div className='contacts_mapWrap'>
					<div id="map-canvas" className='contacts_map' data-lat="50.4627983" data-lng="30.5057531" data-zoom="14" ></div>
				</div>
			</div>
		);
	}
}


