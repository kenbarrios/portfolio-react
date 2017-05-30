import React from 'react';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Surprise from './surprise/Surprise';

class App extends React.Component {
	render() {
		const linkList = ['about', 'projects', 'contact'];
		return (
			<div className='app-container'>
				<section className='landing'>
					<nav>
					{linkList.map((item) => {
					
							return(<div key={item}>{item}</div>)
					
					})}
					</nav>
					<div className='landing-header'>
						<h1>ken</h1>
						<h1>barrios</h1>
					</div>
				</section>
				<section className='content-container'>
				</section>
			</div>
		)
	}
}

module.exports = App;