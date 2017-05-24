import React from 'react';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Surprise from './surprise/Surprise';

class App extends React.Component {
	render() {
		
		return (
			<div className='app-container'>
				<h1>ken barrios</h1>
				<About />
				<Projects />
				<Contact />
				<Surprise />
			</div>
		)
	}
}

module.exports = App;