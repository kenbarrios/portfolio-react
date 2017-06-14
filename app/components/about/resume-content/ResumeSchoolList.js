import React from 'react';
import PropTypes from 'prop-types';

function ResumeSchoolList(props) {
	return(
		<div className='resume-school-list'>
			<h3 className='resume-list-header text-align-right'>School</h3>
			<ul>
			{
				props.school.map((s) => {
					return(
						<li key={s.id}>
							<h4>{s.name}</h4>
							<p>{s.period}</p>
							<p>{s.focus}</p>	
						</li>
					)
				})
			}
			</ul>
		</div>
	)
}

ResumeSchoolList.propTypes = {
	school: PropTypes.array.isRequired
}

module.exports = ResumeSchoolList;