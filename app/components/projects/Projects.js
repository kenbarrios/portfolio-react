import React from 'react';
import PageHeader from '../global/PageHeader';
import Gallery from './Gallery';
import Footer from '../global/Footer';
import Back from '../global/Back';

class Projects extends React.Component {
	render() {
		return (
			<section className='link-content'>
				<Back />
				<PageHeader>
					projects
				</PageHeader>
				<Gallery />
				<Footer />
			</section>
		)
	}
}

export default  Projects;