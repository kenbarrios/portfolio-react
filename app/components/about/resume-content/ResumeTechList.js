import React from 'react';
import PropTypes from 'prop-types';

function ResumeTechList(props) {
	return(
		<aside className='resume-tech-list'>
			<h3 className='resume-list-header text-align-left'>Tech</h3>
			<ul>
			{
				props.tech.map((t) => {
					return(
						<li key={t}>{t}</li>
					)
				})
			}
			</ul>
		</aside>
	)
}

ResumeTechList.propTypes = {
	tech: PropTypes.array.isRequired
}

module.exports = ResumeTechList;