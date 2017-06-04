import React from 'react';
import VerticalText from '../global/VerticalText';

function Blurb() {
	let motivations = 
		[
			{
				title: 'creation',
				body: 'I started coding simply because I heard that web development was a career that provided a future. But the more that I learned about it, the more I discovered how amazing it feels to build things.'},
			{
				title: 'freedom',
				body: 'Building things in web development is based on digital materials that can be built up and torn down quickly. This provides so much creative freedom, and lends itself to so much experimentation, that it creates a feedback loop of inspiration.'
			},
			{
				title: 'play',
				body: 'The inspiration is also reinforced by the fun and frustration of problem solving. Whether the issue is choosing the right typefaces and color palettes, or the DRY-est logic for functionality: the work itself is fun because it is one big puzzle.'
			}
		];

	return (
		<section className='base-section'>
			<VerticalText text='motivation' color='about'/>
			<ul className='motivation-list'>
				{
					motivations.map((item) => {
						return(
							<li key={item.title}>
								<h4>{item.title}</h4>
								<p>
									{item.body}
								</p>
							</li>
						)
					})
				}
			</ul>
		</section>
	)
}

module.exports = Blurb;