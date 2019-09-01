import React from 'react';
import PropTypes from 'prop-types';
import ResumeHeader from './resume-content/ResumeHeader';
import ResumeBlurb from './resume-content/ResumeBlurb';
import ResumeTechList from './resume-content/ResumeTechList';
import ResumeDetailedList from './resume-content/ResumeDetailedList';

import resume from '../../utilities/resume';

class Resume extends React.Component {
	render() {
		const cv = resume.getResume();
			
		return(
			<section className='base-section'>
				<div className='resume-wrapper'>
					<ResumeHeader contact={cv.contact} />

					<div className='resume-body'>
						<ResumeBlurb blurb={cv.blurb} />

						<div className='resume-body-lists'> 
							<ResumeTechList tech={cv.tech} />

							<div className='resume-body-sub-lists'>
								<ResumeDetailedList title='work' list={cv.work} />
								<ResumeDetailedList title='school' list={cv.school} />

							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default  Resume;