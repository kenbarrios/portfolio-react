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
				HELLO WORLD
				<div onClick={testingThis()}>Moved into Components folder</div>
			</div>
		)
	}
}

module.exports = App;