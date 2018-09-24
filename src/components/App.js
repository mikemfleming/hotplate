
import React from 'react';

export default class App extends React.Component {
	constructor () {
		super();
		this.state = {
			userName: '',
		};
	}

	componentWillMount () {
		this.setState({
			userName: window.stateData.userName
		});
	}

	render () {
		return (
			<p>{this.state.userName}</p>
		);
	}
}
