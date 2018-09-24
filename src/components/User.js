
import React, { Component } from 'react';

import { MyContext } from '../context';
import { UserProfile } from '../styles';

export default () => (
    <UserProfile>
        <MyContext.Consumer>
            {({ state }) => {
                // avatar image lives here
                // current status lives here
                // any meta about shoutouts
                return (
                    <h1>{state.userName}</h1>
                )
            }}
        </MyContext.Consumer>
    </UserProfile>
);
