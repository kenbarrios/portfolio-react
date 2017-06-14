import React from 'react';
import PropTypes from 'prop-types';

function ResumeWorkList(props) {
	return(
		<div className='resume-work-list'>
			<h3 className='resume-list-header text-align-right'>Work</h3>
			<ul>
			{
				props.work.map((w) => {
					return(
						<li key={w.id}>
							<h4>{w.name}</h4>
							<p>{w.period}</p>
							<p>{w.focus}</p>	
						</li>
					)
				})
			}
			</ul>
		</div>
	)
}

ResumeWorkList.propTypes = {
	work: PropTypes.array.isRequired
}

module.exports = ResumeWorkList;