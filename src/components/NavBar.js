
import React, { Component } from 'react';

import { MyContext } from '../context';
import { Nav } from '../styles';

export default class NavBar extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<Nav>
				<MyContext.Consumer>
					{(ctx) => (
						<React.Fragment>
							<a>Your Avatar</a>
							<a className="active">Your Name</a>
							<a>Your Profile</a>
						</React.Fragment>
					)}
				</MyContext.Consumer>
			</Nav>
		);
	}
}