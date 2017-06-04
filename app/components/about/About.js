import React from 'react';
import PageHeader from '../global/PageHeader';
import Blurb from './Blurb';
import Tech from './Tech';

class About extends React.Component {
	render() {
		return(
			<section className='link-content'>
				<PageHeader>
					about
				</PageHeader>
				<Blurb />
				<Tech />
			</section>
		)
	}
}

module.exports = About;