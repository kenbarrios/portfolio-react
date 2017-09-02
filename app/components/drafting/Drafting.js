import React from 'react';
import Back from '../global/Back';
import PageHeader from '../global/PageHeader';
import Footer from '../global/Footer';
import Drafts from './Drafts';

class Drafting extends React.Component {
	render() {
		return(
			<section className='link-content'>
				<Back />
				<PageHeader>
					drafting
				</PageHeader>
				{
					Drafts.map((Element, index) => {
						return(
							<Element key={index}/>
						);
					})
				}
				<Footer />
			</section>
		);
	}
}

module.exports = Drafting;