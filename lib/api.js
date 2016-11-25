const qs = require('querystring');
const {fetch} = require('fetch-ponyfill')();

const apiBase = (() => {
	if (process.env.NODE_ENV === 'production') {
		return 'https://mnemo.pro';
	} else if (typeof process.env.MNEMO_API !== 'undefined') {
		return process.env.MNEMO_API;
	}

	return 'http://localhost:3000';
})();

const api = (method, endpoint, params = {}) => {
	const url = `${apiBase}${endpoint}`;

	if (method === 'GET') {
		return fetch(`${url}?${qs.encode(params)}`, {
			method: 'GET',
			mode: 'cors',
		}).then((res) => res.json());
	} else if (method === 'POST') {
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			},
			body: qs.encode(params),
			credentials: 'include',
		}).then((res) => res.json());
	}

	return Promise.reject();
};

api.get = api.bind(null, 'GET');
api.post = api.bind(null, 'POST');

module.exports = api;
