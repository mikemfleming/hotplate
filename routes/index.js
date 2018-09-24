
const middleware = require('./middleware');
const client = require('./client.routes');
const auth = require('./auth.routes');
const api = require('./api.routes');

module.exports = (app) => {
	app.get('/', client.root);
	app.get('*/script.js', client.bundle);
	app.get('/authorize/slack/redirect', auth.authorize);
	app.get('/authorize/slack/callback', auth.callback);
	app.get('/logout', auth.logout);
	// app.use('/api', middleware.isLoggedIn, api);
	app.use('/api', api);
};
