import React from 'react';
import DraftingHeader from './components/DraftingHeader';
import DraftingImage from './components/DraftingImage';

function E00001() {
	return (
		<section className='drafting-wrapper'>
			<DraftingHeader title='the first post' date='06/15/2017' />
			<article className='drafting-article'>
				<p>
					I've been working on this site for the last two weeks, or so.
					I'm hoping to use this section of the site to post whatever comes to mind: journaling, photography, css/javascript experiments, etc. Today, I feel like posting about what brought me to this particular point.
				</p>
				<p>
					After several weeks of feeling lost and trying to figure out what to do next, a friend turned me on to <a href='https://reacttraining.com/online' target='_blank'>an online tutorial for ReactJS</a>. The tutorial was absolutely amazing. Led by <a href='https://github.com/tylermcginnis' target='_blank'>Tyler McGinnis</a>, it felt like a holisitic approach to undertanding how ReactJS works: from setting up Webpack all the way to launching with Firebase.
				</p>
				<p>
					The tutorial not only prepared me for constructing a ReactJS app, it also reinvigorated my imagination and desire to code. This portfolio site is my first experiment in applying what I learned and I hope that it will be a launching pad for new projects.
				</p>
				<p>
					Pictured here: Madeline. She has been my main companion since 2010. From living in Chicago, moving to San Francisco, and back: we have been everywhere together. On Sunday, 06/11/2017, I went for my first serious ride of the year. I ended up passing by the <a href='http://studiogang.com/project/nature-boardwalk-at-lincoln-park-zoo' target='_blank'>Studio Gang Nature Boardwalk</a>.
				</p>
			</article>
			<DraftingImage title='madeline.jpeg' caption='my bike - madeline' />
		</section>
	);
}

module.exports = E00001;