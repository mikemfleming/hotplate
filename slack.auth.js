const randomstring = require('randomstring');
const qs = require('querystring');
const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env;
const stateKey = 'slack_auth_state'; // confirms req is from slack
const apiUtil = require('./api.util');

exports.authorize = (req, res) => {
	const state = randomstring.generate(16);
	const query = qs.stringify({
		client_id: CLIENT_ID,
		// redirect_uri: `https://localhost:${PORT}/authorize/slack/callback`,
		scope: 'identity.basic',
		state,
	});

	res.cookie(stateKey, state);

	res.redirect(`https://slack.com/oauth/authorize?${query}`);
};

exports.callback = (req, res) => {
	const { code, state } = req.query;
	const storedState = req.cookies ? req.cookies[stateKey] : null;
	const ruckusUserId = req.session && req.session.passport ? req.session.passport.user : null;

	if (!state || state !== storedState) {
		console.log('⭐️️️️️️️️ ️ ', JSON.stringify(req.cookies))
		console.log('~~~~~~~~~~', state, storedState)
		res.redirect('/?error=true');
	} else {
		res.clearCookie(stateKey);

		// get slack details
		apiUtil.request({
			url: 'https://slack.com/api/oauth.access',
			method: 'GET',
			params: {
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				code,
				// redirect_uri: `https://localhost:${PORT}/authorize/slack/callback`,
			},
		}).then(data => console.log(JSON.stringify(data, null, 4)))
	}
};
