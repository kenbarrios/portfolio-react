import React from 'react';

function Footer() {
	return (
		<footer>
			<div className='footer-header-wrapper'>
				<h3>connect</h3>
			</div>
			<ul className='footer-link-list'>
				<li>
					<a href='https://github.com/kenbarrios' target='_blank'>
						<i className="fa fa-github" aria-hidden="true"></i>
					</a>
					<h6>github</h6>
				</li>
				<li>
					<a href='mailto:ken.barrios.13@gmail.com' target='_blank'>
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</a>
					<h6>ken.barrios.13</h6>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/kenbarrios1/' target='_blank'>
						<i className="fa fa-linkedin-square" aria-hidden="true"></i>
					</a>
					<h6>linkedin</h6>
				</li>
			</ul>
		</footer>
	)
}

module.exports = Footer;