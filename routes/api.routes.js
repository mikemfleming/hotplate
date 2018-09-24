
const { Router } = require('express');
const api = Router();
const qs = require('querystring');
const axios = require('axios');

const { SLACK_TOKEN } = process.env;

const apiUtil = require('../util/api.util');

api.get('/users/:userId', (req, res) => {
    const params = qs.stringify({
        token: SLACK_TOKEN,
        user: req.params.userId,
    });

    axios.post('https://slack.com/api/users.info', params)
        .then(response => response.data)
        .then(data => apiUtil.respond(res, data))
        .catch(err => console.log('🐅', err));
});

// talks to our backend getting recorded shoutouts
api.get('/shoutouts', (req, res) => apiUtil.respond(res, [
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
    {
        giver: 'Ebru',
        getter: 'Rui',
        message: 'great job from the server!'
    },
]));

module.exports = api;
