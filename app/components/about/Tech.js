import React from 'react';
import VerticalText from '../global/VerticalText';

function Tech() {
	let list = ['html', 'css', 'sass', 'javascript', 'typescript', 'angularjs', 'jquery', 'react'];

	return(
		<section className='base-section about-background'>
			<ul className='tech-list'>
				{list.map((item) => {
					return(
						<li key={item}>
							<p>{item}</p>
						</li>
					)
				})}
			</ul>
			<VerticalText text='technology' color='white'/>
		</section>
	)
}

module.exports = Tech;