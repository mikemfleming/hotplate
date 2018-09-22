const randomstring = require('randomstring');
const qs = require('querystring');
const { CLIENT_ID, CLIENT_SECRET, PORT } = process.env;
const stateKey = 'slack_auth_state'; // confirms req is from slack

exports.authorize = (req, res) => {
	const state = randomstring.generate(16);
	const query = qs.stringify({
		client_id: CLIENT_ID,
		redirect_uri: `https://localhost:${PORT}/authorize/slack/callback`,
		scope: 'identity.basic',
		state,
	});

	res.cookie(stateKey, state);

	res.redirect(`https://slack.com/oauth/authorize?${query}`);
};
