import React from 'react';

class GalleryItemModal extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			modalOpen: true
		}
		console.log('props? ', this.props.project);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			modalOpen: false
		}, () => {
			this.props.reset(
				this.state.modalOpen
			)
		})
	}
	render() {
		return(
			<div className='gallery-item-modal'>
				<aside className='back-button close-button' onClick={this.handleClick.bind(this)}>
					<a className='fa fa-times' aria-hidden='true'></a>
				</aside>
				MODAL
			</div>
		)
	}
}

module.exports = GalleryItemModal;