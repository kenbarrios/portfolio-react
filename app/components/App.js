import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './landing/Landing';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className='app-container'>
					<Landing />
				</div>
			</BrowserRouter>
		);
	}
}

module.exports = App;