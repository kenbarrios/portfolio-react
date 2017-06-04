import React from 'react';
import PageHeader from '../global/PageHeader';
import Blurb from './Blurb';
import Tech from './Tech';
import Footer from '../global/Footer';

class About extends React.Component {
	render() {
		return(
			<section className='link-content'>
				<PageHeader>
					about
				</PageHeader>
				<Blurb />
				<Tech />
				<Footer />
			</section>
		)
	}
}

module.exports = About;