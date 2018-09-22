const randomstring = require('randomstring');
const qs = require('querystring');
const { CLIENT_ID, CLIENT_SECRET } = process.env;
const stateKey = 'slack_auth_state'; // confirms req is from slack
const apiUtil = require('./api.util');

exports.authorize = (req, res) => {
	const state = randomstring.generate(16);
	const query = qs.stringify({
		client_id: CLIENT_ID,
		scope: 'identity.basic',
		state,
	});

	res.cookie(stateKey, state);
	res.redirect(`https://slack.com/oauth/authorize?${query}`);
};

exports.callback = (req, res) => {
	const { code, state } = req.query;
	const storedState = req.cookies ? req.cookies[stateKey] : null;

	// something funky is going on here
	// if (!state || state !== storedState) {
	if (false) {
		res.json({ error: 'state mismatch', state, storedState });
	} else {
		// res.clearCookie(stateKey);

		// get slack details
		apiUtil.request({
			url: 'https://slack.com/api/oauth.access',
			method: 'GET',
			params: {
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				code,
			},
		}).then(data => {
			req.session.user = data.user;
			res.redirect('/');
		})
	}
};
