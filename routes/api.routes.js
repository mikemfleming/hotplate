
const { Router } = require('express');
const api = Router();

api.get('/:userId', (req, res) => res.json(req.params.userId));

module.exports = api;
