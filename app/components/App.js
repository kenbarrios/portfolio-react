import React from 'react';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Surprise from './surprise/Surprise';

class App extends React.Component {
	render() {
		
		return (
			<div className='app-container'>
				<nav>
					<h1 className='nav-header'>ken barrios</h1>
				</nav>
				<div className='content-container'>
					<div className='sub-content-container sub-content-container-top'>
						<div className='blocks top-block'>TOP</div>
					</div>
					<div className='sub-content-container sub-content-container-middle'>
						<div className='blocks left-block'>LEFT</div>
						<div className='blocks center-block'>CENTER</div>
						<div className='blocks right-block'>RIGHT</div>
					</div>
					<div className='sub-content-container sub-content-container-bottom'>
						<div className='blocks bottom-block'>BOTTOM</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = App;