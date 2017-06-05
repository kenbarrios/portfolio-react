import React from 'react';
import projects from '../../utilities/projects';

class GalleryItem extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			item: {}
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(item) {
		this.setState({
			item: item
		}, () => {
			this.props.activation(
			this.state.item
		)
		})
	}
	render() {
		let item = this.props.project;
		
		return(
			<li className='gallery-item' key={item.id} 
				onClick={this.handleClick.bind(this, item)}>
				<h6>{item.title}</h6>
				<ul className='tag-list'>
				{item.tech.map((v, index) => {
					return(
						<li key={index}>
							<p>{v}</p>
						</li>
					)
				})}
				</ul>
				{this.state.clicked}
			</li>
		)
	}
}

class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			itemIsActive: false,
			activeItem: {}
		}

		this.handleActivation = this.handleActivation.bind(this);
	}

	handleActivation(item) {
		console.log('what is item? ', item);
		this.setState({
			itemIsActive: this.state.itemIsActive = !this.state.itemIsActive,
			activeItem: item
			
		})
	}

	render() {
		const list = projects.getList();

		return(
			<section className='gallery'>
				<ul className='gallery-list'>
				{list.map((item) => {
					return(
						<GalleryItem key={item.id} project={item} activation={this.handleActivation} />
					)
				})}
				</ul>
			</section>
		)
	}
}

module.exports = Gallery;