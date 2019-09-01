import React from 'react';
import PropTypes from 'prop-types';

function ResumeHeader(props) {
	return(
		<div className='resume-header'>
			<div className='resume-header-contact'>
				<h2>{props.contact.name}</h2>
				<h3>{props.contact.location}</h3>
				<p>{props.contact.email}</p>
			</div>
			<div className='resume-header-avatar'>
				<img className='avatar' src={require('../../../images/' + props.contact.img)} />
			</div>
		</div>
	)
}

ResumeHeader.propTypes = {
	contact: PropTypes.object.isRequired
}

export default  ResumeHeader;