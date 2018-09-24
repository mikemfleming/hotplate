
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ shoutout }) => (
    <div className="shoutout-list__card">
        <p>
            <Link to={`/u/${shoutout.giver}`}>{shoutout.giver}</Link>
            &nbsp;shouts out to
            &nbsp;
            <Link to={`/u/${shoutout.getter}`}>{shoutout.getter}</Link>
            :
        </p>
        <p>"{shoutout.message}"</p>
    </div>
);
