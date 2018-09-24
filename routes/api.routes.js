
const { Router } = require('express');
const api = Router();

const apiUtil = require('../util/api.util');

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
]));

module.exports = api;
