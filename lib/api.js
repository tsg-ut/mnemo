const qs = require('querystring');
const {fetch} = require('fetch-ponyfill')();

const apiBase = (() => {
	if (process.env.NODE_ENV === 'production') {
		return 'https://api.mnemo.pro';
	} else if (typeof process.env.MNEMO_API !== 'undefined') {
		return process.env.MNEMO_API;
	}

	return 'http://localhost:3000';
})();

const api = async (method, endpoint, params = {}) => {
	const url = `${apiBase}${endpoint}`;

	if (method === 'GET') {
		const res = await fetch(`${url}?${qs.encode(params)}`, {
			method: 'GET',
			mode: 'cors',
		});
		return res.json();
	} else if (method === 'POST') {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
			},
			body: JSON.stringify(params),
		});
		return res.json();
	}

	return Promise.reject(new Error(`Unknown method name ${method}`));
};

api.get = api.bind(null, 'GET');
api.post = api.bind(null, 'POST');

module.exports = api;
