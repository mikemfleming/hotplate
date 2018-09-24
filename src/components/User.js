
import React, { Component } from 'react';
import axios from 'axios';

import { UserProfile } from '../styles';

export default class User extends Component {
    constructor (props) {
        super(props);

        this.state = {
            avatarUrl: 'default stuff',
            userName: 'default stuff',
            userStatusText: 'default stuff',
        }
    }

    componentWillMount () {
        axios.get(`/api/users/${this.props.userId}`)
            .then(res => res.data)
            .then(({ data }) => {
                console.log(data)
                // move this logic to the server
                this.setState({
                    userStatusText: data.user.profile.status_text,
                    avatarUrl: data.user.profile.image_original,
                    userName: data.user.profile.real_name
                });
            });
    }

    render () {

        return (
            <UserProfile>
                <img src={this.state.avatarUrl}/>
                <h1>{this.state.userName}</h1>
                <h2>{this.state.userStatusText}</h2>
            </UserProfile>
        );
    }
}
