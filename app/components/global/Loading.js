var React = require('react');
var PropTypes = require('prop-types');

class Loading extends React.Component {

	constructor() {
		super();
		this.state = {
			text: 'Loading'
		}
	}

	componentDidMount() {
		var stopper = this.props.text + '...';
		this.interval = window.setInterval(function() {
			if (this.state.text === stopper) {
				this.setState(function() {
					return {
						text: this.state.text
					}
				})
			} else {
				this.setState(function(prevState) {
					return {
						text: prevState.text + '.'
					}
				})
			}
		}.bind(this), 300)
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}
	render() {
		return(
			<div className='loading'>
				<p>
					{this.state.text}
				</p>
			</div>
		)
	}
}


export default  Loading;