
import React, { Component } from 'react';

// first make a new context
export const MyContext = React.createContext();

// then create a provider component
export class MyProvider extends Component {
	constructor (props) {
		super();
		this.state = {
			userName: '',
			userId: '',
			teamId: '',
			shoutouts: [
				{
					giver: 'Ebru',
					getter: 'Rui',
					message: 'great job!'
				},
				{
					giver: 'Ebru',
					getter: 'Rui',
					message: 'great job!'
				},
				{
					giver: 'Ebru',
					getter: 'Rui',
					message: 'great job!'
				},
				{
					giver: 'Ebru',
					getter: 'Rui',
					message: 'great job!'
				},
				{
					giver: 'Ebru',
					getter: 'Rui',
					message: 'great job!'
				},
			],
		}
    }
    
    componentWillMount () {
		this.setState({
			userName: window.stateData.userName,
			userId: window.stateData.userId,
			teamId: window.stateData.teamId,
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
