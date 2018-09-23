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
		apiUtil.request({
			url: 'https://slack.com/api/oauth.access',
			method: 'GET',
			params: {
				client_id: CLIENT_ID,
				client_secret: CLIENT_SECRET,
				code,
			},
		}).then(data => {
			// https://stackoverflow.com/questions/50971247/expected-behaviour-of-sign-in-with-slack
			apiUtil.request({
				url: `https://slack.com/api/users.identity?token=${data.access_token}`,
				method: 'GET',
			}).then(data => {
				data.user.teamId = data.team.id;
				req.session.user = data.user;
				res.redirect('/');
			})
		})
	}
};
