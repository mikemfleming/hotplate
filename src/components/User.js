
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
                    <React.Fragment>
                        <img src={state.userAvatar}/>
                        <h1>{state.userName}</h1>
                        <h2>{state.userStatusText}</h2>
                    </React.Fragment>
                )
            }}
        </MyContext.Consumer>
    </UserProfile>
);
