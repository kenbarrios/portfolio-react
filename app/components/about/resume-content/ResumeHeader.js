import React from 'react';

function ResumeHeader() {
	return(
		<div className='resume-header'>
			<div className='resume-header-contact'>
				<h2>ken barrios</h2>
				<h3>lincoln square, chicago</h3>
				<p>ken.barrios.13 at gmail</p>
			</div>
			<div className='resume-header-avatar'>
				<img className='avatar' src={require('../../../images/ken.jpg')} />
			</div>
		</div>
	)
}

module.exports = ResumeHeader;