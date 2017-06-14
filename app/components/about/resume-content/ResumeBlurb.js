import React from 'react';
import PropTypes from 'prop-types';

function ResumeBlurb(props) {
	return(
		<div className='resume-blurb'>
			<article>
				<span className='fa fa-quote-left'></span><p>{props.blurb}</p><span className='fa fa-quote-right'></span>
			</article>
		</div>
	)
}

ResumeBlurb.propTypes = {
	blurb: PropTypes.string.isRequired
}

module.exports = ResumeBlurb;