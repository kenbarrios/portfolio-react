import React from 'react';

function PageHeader(props) {
	return (
		<div className={ 'page-header ' + props.children + '-background' }>
			<h2>{ props.children }</h2>
		</div>
	)
}

module.exports = PageHeader;