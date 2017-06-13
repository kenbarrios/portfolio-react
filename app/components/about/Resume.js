import React from 'react';
import PropTypes from 'prop-types';
import ResumeHeader from './resume-content/ResumeHeader';
import resume from '../../utilities/resume';

class Resume extends React.Component {
	render() {
		return(
			<section className='base-section'>
				<div className='resume-wrapper'>
					<ResumeHeader />

					<div className='resume-body'>
						<div className='resume-blurb'>
							<article>
								<p>I believe in these things...</p>
							</article>
						</div>
						<aside className='resume-tech-list'>
							<h3>Tech</h3>
							<ul>
								<li>
									reactjs
								</li>
							</ul>
						</aside>
						<div className='resume-work-list'>
							<h3>Work</h3>
							<ul>
								<li>
									Pierce & Assoc
								</li>
							</ul>
						</div>
						<div className='resume-school-list'>
							<h3>School</h3>
							<ul>
								<li>
									General Assembly
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

module.exports = Resume;