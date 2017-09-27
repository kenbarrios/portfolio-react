import React from 'react';
import PropTypes from 'prop-types';

function DraftingImage(props) {
	return(
		<div className="l_m--x-auto">
			<img className='drafting-image' src={require('../../../images/' + props.title)} alt={props.caption} />
		</div>
	)
}

DraftingImage.propTypes = {
	title: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired
}

module.exports = DraftingImage;