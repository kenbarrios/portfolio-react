import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
	// const linkList = ['about', 'projects', 'drafting'];
	// return(
	// 	<nav>
	// 		<ul>
	// 		{linkList.map((item) => {
	// 			return(<li key={item}>
	// 						<NavLink className={item + '-background'} to={item}>{item}</NavLink>
	// 					</li>)
	// 		})}
	// 		</ul>
	// 	</nav>
	// );

	return(
		<nav className='experiment-nav'>
			<ul>
				<li>
					<NavLink to='about'>
						<h1>k</h1>
						<p>about</p>
					</NavLink>
				</li>
				<li>
					<NavLink to='projects'>
						<h1>e</h1>
						<p>projects</p>	
					</NavLink>
				</li>
				<li>
					<NavLink to='drafting'>
						<h1>n</h1>
						<p>drafting</p>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

module.exports = Nav;