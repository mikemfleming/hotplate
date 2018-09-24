
import React, { Component } from 'react';

import { MyContext } from '../context';
import { ShoutoutList } from '../styles';

import User from './User';
import Shoutout from './Shoutout';

export default ({ match }) => (
    <div className="profile">
        <User userId={match.params.userId}/>
        <ShoutoutList profile={true}>
            <MyContext.Consumer>
                {({ state }) => {
                    // do some filtering here instead
                    return state.shoutouts.map(s => <Shoutout shoutout={s} />)
                }}
            </MyContext.Consumer>
        </ShoutoutList>
    </div>
);
