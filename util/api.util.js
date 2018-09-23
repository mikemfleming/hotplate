const axios = require('axios');

exports.request = ({
	url,
	method,
	headers,
	params,
}) => {
	return axios({
		url,
		method,
		headers,
		params,
	}).then(res => res.data);
}
