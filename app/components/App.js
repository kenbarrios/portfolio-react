import React from 'react';

class App extends React.Component {
	render() {

		function testingThis() {
			return () => {
				console.log('this in testingThis = ');
			}
		}
		
		return (
			<div>
				<h1>ken barrios</h1>
				<div onClick={testingThis()}>Moved into Components folder</div>
			</div>
		)
	}
}

module.exports = App;