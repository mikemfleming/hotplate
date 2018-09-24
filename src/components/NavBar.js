
import React from 'react';

import { Nav } from '../styles';

export default () => (
	<Nav>
		<a>Shoutouts!</a>
		<a className="active">Your Profile</a>
		<a href="/logout">Logout</a>
	</Nav>
);
