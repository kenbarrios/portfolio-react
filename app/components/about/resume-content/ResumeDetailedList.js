import React from 'react';
import PropTypes from 'prop-types';

function ResumeDetailedList(props) {
	return(
		<div className='resume-detailed-list'>
			<h3 className='resume-list-header text-align-right'>{props.title}</h3>
			<ul>
			{
				props.list.map((s) => {
					return(
						<li key={s.id}>
							<h4>{s.name}</h4>
							<p>{s.period}</p>
							<p>{s.focus}</p>	
						</li>
					);
				})
			}
			</ul>
		</div>
	);
}

ResumeDetailedList.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.array.isRequired
};

export default  ResumeDetailedList;