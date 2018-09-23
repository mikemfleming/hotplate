import React from 'react';
import ReactDOM from 'react-dom';
import apiUtil from '../api.util';

// import App from './containers/App';
import reducer from './reducers';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			data: ''
		};
	}

	componentWillMount () {
		console.log('callin!')
		apiUtil.request({
			url: '/api',
			method: 'GET',
		}).then(data => this.setState({ data }));
	}

	render () {
		return (
			<p>{JSON.stringify(this.state.data)}</p>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

