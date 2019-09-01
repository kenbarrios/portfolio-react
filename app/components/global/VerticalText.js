import React from 'react';
import PropType from 'prop-types';

function VerticalText(props) {
	let list = [];
	for (let i = 0; i < props.text.length; i++) {
		list.push(props.text[i]);
		
	}
	return(
		<div className={'vertical-text-div ' + props.background + '-background'}>
		{list.map((l, index) => {
			return(<p className={props.color + '-color'} key={index}>{ l }</p>);
		})}
		</div>
	)
}

VerticalText.propTypes = {
	text: PropType.string.isRequired,
	color: PropType.string.isRequired,
	background: PropType.string.isRequired
}

export default  VerticalText;