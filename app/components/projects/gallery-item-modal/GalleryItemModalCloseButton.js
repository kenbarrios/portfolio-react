import React from 'react';
import PropTypes from 'prop-types';

class GalleryItemModalCloseButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: true
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			open: false
		}, () => {
			this.props.close(
				this.state.open
			)
		})
	}

	render() {
		return(
			<aside className='close-button' onClick={this.handleClick.bind(this)}>
				<a className='fa fa-times' aria-hidden='true'></a>
			</aside>
		)
	}
}

GalleryItemModalCloseButton.propTypes = {
	close: PropTypes.func.isRequired
}

export default  GalleryItemModalCloseButton;