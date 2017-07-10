import React from 'react';
import { NavLink } from 'react-router-dom';

function Back() {
	return (
		<aside className='back-button'>
			<NavLink className='fa fa-chevron-left' aria-hidden='true' to='/'></NavLink>
		</aside>
	);
}

module.exports = Back;