import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Nav from './Nav';
import Title from './Title';
import About from '../about/About';
function Landing() {
	return (
		<section className='landing'>
			<Nav />
			<Switch>
				<Route exact path='/' component={Title} />
				<Route path='/about' component={About} />
				<Route render={function() {
						return (<p>404 Not Found</p>)
					}}
				/>
			</Switch>
		</section>
	)
}

module.exports = Landing;