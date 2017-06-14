import React from 'react';
import PropTypes from 'prop-types';
import ResumeHeader from './resume-content/ResumeHeader';
import resume from '../../utilities/resume';

class Resume extends React.Component {
	render() {
		const cv = resume.getResume();
			
		return(
			<section className='base-section'>
				<div className='resume-wrapper'>
					<div className='resume-header'>
						<div className='resume-header-contact'>
							<h2>{cv.contact.name}</h2>
							<h3>{cv.contact.location}</h3>
							<p>{cv.contact.email}</p>
						</div>
						<div className='resume-header-avatar'>
							<img className='avatar' src={require('../../images/' + cv.contact.img)} />
						</div>
					</div>

					<div className='resume-body'>
						<div className='resume-blurb'>
							<article>
								<span className='fa fa-quote-left'></span><p>{cv.blurb}</p><span className='fa fa-quote-right'></span>
							</article>
						</div>
						<div className='resume-body-lists'> 
							<aside className='resume-tech-list'>
								<h3 className='resume-list-header text-align-left'>Tech</h3>
								<ul>
								{
									cv.tech.map((t) => {
										return(
											<li key={t}>{t}</li>
										)
									})
								}
								</ul>
							</aside>
							<div className='resume-body-sub-lists'>
								<div className='resume-work-list'>
									<h3 className='resume-list-header text-align-right'>Work</h3>
									<ul>
									{
										cv.work.map((w) => {
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
								<div className='resume-school-list'>
									<h3 className='resume-list-header text-align-right'>School</h3>
									<ul>
									{
										cv.school.map((s) => {
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
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

module.exports = Resume;