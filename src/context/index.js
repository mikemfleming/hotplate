
import React, { Component } from 'react';
import axios from 'axios';

// first make a new context
export const MyContext = React.createContext();

// then create a provider component
export class MyProvider extends Component {
	constructor (props) {
		super();
		this.state = {
			userName: '',
			userId: '',
			userStatusText: '',
			userAvatar: '',
			teamId: '',
			shoutouts: [],
		}
    }
    
    componentWillMount () {
		this.setState({
			userName: window.stateData.userName,
			userId: window.stateData.userId,
			teamId: window.stateData.teamId,
		});
	}

	componentDidMount () {
		axios.get('/api/shoutouts')
			.then(res => res.data)
			.then(({ data }) => {
				this.setState({ shoutouts: data });
			});

		axios.get(`/api/users/${this.state.userId}`)
			.then(res => res.data)
			.then(({ data }) => {
				// move this logic to the server
				this.setState({
					userStatusText: data.user.profile.status_text,
					userAvatar: data.user.profile.image_original,
				});
			});
	}

	render () {
		return (
			<MyContext.Provider value={{ state: this.state }}>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}
