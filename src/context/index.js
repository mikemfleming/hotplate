
import React, { Component } from 'react';

// first make a new context
export const MyContext = React.createContext();

// then create a provider component
export class MyProvider extends Component {
	constructor (props) {
		super();
		this.state = {
			userName: '',
		}
    }
    
    componentWillMount () {
		this.setState({
			userName: window.stateData.userName
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
