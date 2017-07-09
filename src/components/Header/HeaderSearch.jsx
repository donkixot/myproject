import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderSearch extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: false,
			items: [
				// {
				// 	link: '',
				// 	text: ''
				// }
			]
		}
	}

	handleSearch(e){
		//get all content from site
		let contents = this.props.contents;
		//get input value
		let inputVal = e.target.value;
		//create regular expression
		let regexp = new RegExp(inputVal, 'gi');
		//regular expression for images
		let regexpImg = /(\.\/img\/)|(\.jpg)/;
		let arrOfLinks = [];
		let objClosure = (obj, page) => {
			for (let key in obj) {
				//check if value is a string
				if(typeof obj[key] == 'string'){
					//check if search is not empty
					if (inputVal) {
						//search in content
						if (regexp.test(obj[key])) {
							let link;
							if(page === 'About' || obj.page === 'About'){
								link = '/about'
							}else if(page === 'Who we are' || obj.page === 'Who we are'){
								link = '/about/who-we-are'
							}else if(page === 'Benefits' || obj.page === 'Benefits'){
								link = '/about/benefits'
							}else if(page === 'Team' || obj.page === 'Team'){
								link = '/about/our-team'
							}else if(page === 'Contacts' || obj.page === 'Contacts'){
								link = '/contacts'
							}else{
								link = '/'
							}
							let text = regexpImg.test(obj[key]) ? 'Image' : obj[key]
							//create lits of links with found content
							arrOfLinks.push(
								{
									link: link,
									text: text
								}
							);
							//unpdate state
							this.setState( state => {
								state.list = true;
								state.items = arrOfLinks;
							});
						}
					}else{
						//if search input is empty - hide list of links
						this.setState({
							list: false,
							items: [
								{
									link: '',
									text: ''
								}
							]
						});
					}
				}else{
					//if obj.page is not empty set page as obj.page value
					//else set page as previous obj.page value
					page = obj.page ? obj.page : page;
					//if value is not a string run function again
					objClosure(obj[key], page);
				}
			}
		}
		objClosure(contents);
	}

	render() {
		return (
			<div className='headerSearch'>
				<input className='headerSearch__input' type='search' placeholder='Поиск...' onChange={this.handleSearch.bind(this)}/>
				{
					this.state.list
					?
						<ul className="headerSearch__items">
							{
								this.state.items.map( (li, i) =>
									<li key={i} className="headerSearch__item"><Link to={li.link}>{li.text}</Link></li>
								)
							}
						</ul>
					:	null
				}
			</div>
		);
	}
}
