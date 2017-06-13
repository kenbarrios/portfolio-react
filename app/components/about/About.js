import React from 'react';
import PageHeader from '../global/PageHeader';
import Blurb from './Blurb';
import Tech from './Tech';
import Resume from './Resume';
import Footer from '../global/Footer';
import Back from '../global/Back';

class About extends React.Component {
	render() {
		return(
			<section className='link-content'>
				<Back />
				<PageHeader>
					about
				</PageHeader>
				<Blurb />
				<Tech />
				<Resume />
				<Footer />
			</section>
		)
	}
}

module.exports = About;