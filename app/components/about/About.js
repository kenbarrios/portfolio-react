import React from 'react';
import PageHeader from '../global/PageHeader';
import Blurb from './Blurb';

class About extends React.Component {
	render() {
		return(
			<section className='link-content'>
				<PageHeader>
					about
				</PageHeader>
				<Blurb />
				
			</section>
		)
	}
}

module.exports = About;