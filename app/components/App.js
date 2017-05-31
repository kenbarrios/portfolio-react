import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Nav from './Nav';
import Title from './Title';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className='app-container'>
					<section className='landing'>
						<Nav />
						<Switch>
							<Route exact path='/' component={Title} />
							<Route render={function() {
									return (<p>404 Not Found</p>)
								}}
							/>
						</Switch>
					</section>
					<section className='content-container'>
					</section>
				</div>
			</BrowserRouter>
		)
	}
}

module.exports = App;