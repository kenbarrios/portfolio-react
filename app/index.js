import React from'react';
import ReactDOM from'react-dom';
import PropTypes from'prop-types';
require('./index.scss');
import App from './components/App';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);