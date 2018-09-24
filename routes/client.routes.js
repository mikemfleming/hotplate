
const path = require('path');

function htmlTemplate (user) {
	return `
		<!DOCTYPE html>
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
		</head>
		<html>
			<body>
				<script>
					(function () {
						window.stateData = {
							userName: '${user.name}',
							userId: '${user.id}',
							teamId: '${user.teamId}',
						}
					})()
				</script>
				<div id="root"></div>
				<script src="script.js"></script>
				
			</body>
		</html>
	`;
}

exports.root = (req, res) => {
	if (req.session.user) {
		console.log('⭐️ req.session', req.session);

		res.writeHead( 200, { "Content-Type": "text/html" } );
		res.end(htmlTemplate(req.session.user));
	} else {
		res.sendFile(path.join(__dirname, '../auth.html'));
	}
};

exports.bundle = (req, res) => res.sendFile(path.join(__dirname, '../dist/bundle.js'));