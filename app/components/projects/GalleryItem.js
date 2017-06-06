import React from 'react';

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
			<li className={'gallery-item ' + item.alias + '-background'} key={item.id} 
				onClick={this.handleClick.bind(this, item)}>
				<div className='gallery-item-info'>
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
				</div>
			</li>
		)
	}
}

module.exports = GalleryItem;