import React from 'react';
import Back from '../global/Back';
import PageHeader from '../global/PageHeader';
import Footer from '../global/Footer';
import E00001 from './E00001';

class Drafting extends React.Component {
	render() {
		return(
			<section className='link-content'>
				<Back />
				<PageHeader>
					drafting
				</PageHeader>
				<E00001 />
				<Footer />
			</section>
		)
	}
}

module.exports = Drafting;