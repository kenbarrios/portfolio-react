import React from'react';
import ReactDOM from'react-dom';
import PropTypes from'prop-types';
require('./index.scss');
require('font-awesome-sass-loader');
import App from './components/App';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);