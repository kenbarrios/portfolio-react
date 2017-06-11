import React from 'react';
import Back from '../global/Back';
import PageHeader from '../global/PageHeader';
import Footer from '../global/Footer';

class Contact extends React.Component {
	render() {
		return(
			<section className='link-content'>
				<Back />
				<PageHeader>
					contact
				</PageHeader>
				<Footer />
			</section>
		)
	}
}

module.exports = Contact;