import React from 'react';
import PropTypes from 'prop-types';

function DraftingHeader(props) {
	return(
		<header className='drafting-header'>
			<h2>{props.title}</h2>
			<span>{props.date}</span>
		</header>
	)
}

DraftingHeader.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
}

module.exports = DraftingHeader;