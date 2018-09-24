
import React from 'react';

export default ({ shoutout }) => (
    <div className="shoutout-list__card">
        <p>
            <a>{shoutout.giver}</a>
            &nbsp;shouts out to
            &nbsp;
            <a>{shoutout.getter}</a>
            :
        </p>
        <p>"{shoutout.message}"</p>
    </div>
);
