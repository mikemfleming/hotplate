require('dotenv').config();

const express = require('express');
const path = require('path');
const log = require('./logger');
const pino = require('pino-http')({ logger: log });
const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env;
const { Strategy } = require('passport-slack');
// const passport = require('passport');
// require('./passport')(passport);
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const redisClient = require('./redis.config');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);


const slackAuth = require('./slack.auth');

// set up the strategy with defaults
// passport.use(
// 	new Strategy({ clientID: CLIENT_ID, clientSecret: CLIENT_SECRET }),
// 	(accessToken, refreshToken, profile, done) => {
// 		// optionally persist profile data
// 		done(null, profile);
// 	}
// );

const app = express();
app.use(helmet());
app.use(pino);
// app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
	store: new RedisStore({ client: redisClient, ttl: 260 }),
	secret: 'SUPER_SESSION_SECRET',
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './auth.html')));
app.get('/authorize/slack/redirect', slackAuth.authorize);
app.get('/authorize/slack/callback', slackAuth.callback);

app.get('*/script.js', (req, res) => res.sendFile(path.join(__dirname, 'dist/bundle.js')));

// app.post('/login', passport.authenticate());


app.listen(PORT, () => log.info(`shoutoutz is listening on port ${PORT}`));
