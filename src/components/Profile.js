
import React, { Component } from 'react';

import { MyContext } from '../context';
import { ShoutoutList, ProfileWrapper } from '../styles';

import User from './User';
import Shoutout from './Shoutout';

export default () => (
    <ProfileWrapper>
        <User />
        <ShoutoutList profile={true}>
            <MyContext.Consumer>
                {({ state }) => {
                    // do some filtering here instead
                    return state.shoutouts.map(s => <Shoutout shoutout={s} />)
                }}
            </MyContext.Consumer>
        </ShoutoutList>
    </ProfileWrapper>
);
