require('dotenv').config();

const express = require('express');
const path = require('path');
const log = require('./logger');
const { PORT } = process.env;
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const redisClient = require('./redis.config');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const morgan = require('morgan');

const slackAuth = require('./slack.auth');

const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
	store: new RedisStore({ client: redisClient, ttl: 10000 }),
	secret: 'SUPER_SESSION_SECRET',
}));

app.get('/', (req, res) => {
	// console.log('⭐️ req.session', req.session);
	// console.log('⭐️ req.cookie', req.cookies);
	if (req.session.user) {
		res.json(req.session.user);
	} else {
		res.sendFile(path.join(__dirname, './auth.html'));
	}
});
app.get('/authorize/slack/redirect', slackAuth.authorize);
app.get('/authorize/slack/callback', slackAuth.callback);

app.get('*/script.js', (req, res) => res.sendFile(path.join(__dirname, 'dist/bundle.js')));


app.listen(PORT, () => log.info(`shoutoutz is listening on port ${PORT}`));
