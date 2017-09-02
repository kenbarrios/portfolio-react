import React from 'react';
import PropTypes from 'prop-types';

function GalleryItemModalImage(props) {
	let pic = require('../../../images/' + props.project.alias + '.jpeg');
	return(
		<div className='gallery-modal-image-container'>
			<img className='gallery-modal-image' src={pic} alt={props.project.title} />
		</div>
	);
}

GalleryItemModalImage.propTypes = {
	project: PropTypes.object.isRequired
};

module.exports = GalleryItemModalImage;