
const path = require('path');

exports.root = (req, res) => {
	// console.log('⭐️ req.session', req.session);
	// console.log('⭐️ req.cookie', req.cookies);
	if (req.session.user) {
		console.log('⭐️ req.session', req.session);
		res.sendFile(path.join(__dirname, '../app.html'));
	} else {
		res.sendFile(path.join(__dirname, '../auth.html'));
	}
};

exports.bundle = (req, res) => res.sendFile(path.join(__dirname, '../dist/bundle.js'));