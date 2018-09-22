require('dotenv').config();

const express = require('express');
const path = require('path');
const log = require('./logger');
const pino = require('pino-http')({ logger: log });
const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env;
const { Strategy } = require('passport-slack');
const passport = require('passport');
// require('./passport')(passport);
const bodyParser = require('body-parser');

// set up the strategy with defaults
passport.use(
	new Strategy({ clientID: CLIENT_ID, clientSecret: CLIENT_SECRET }),
	(accessToken, refreshToken, profile, done) => {
		// optionally persist profile data
		done(null, profile);
	}
);

const app = express();
app.use(pino);
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './auth.html')));
app.get('/authorize/slack/redirect', passport.authorize('slack'));
app.get(
	'/authorize/slack/callback',
	passport.authorize('slack', { failureRedirect: '/login' }),
	(req, res) => res.redirect('/'),
);

app.get('*/script.js', (req, res) => res.sendFile(path.join(__dirname, 'dist/bundle.js')));

// app.post('/login', passport.authenticate());


app.listen(PORT, () => log.info(`listening on port ${PORT}`));
