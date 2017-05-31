import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
	const linkList = ['about', 'projects', 'contact'];
	return(
		<nav>
			<ul>
			{linkList.map((item) => {
				return(<li key={item}>
							<NavLink to={item}>{item}</NavLink>
						</li>)
			})}
			</ul>
		</nav>
	);
}

module.exports = Nav;