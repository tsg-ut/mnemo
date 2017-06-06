const request = require('request');
const querystring = require('querystring');

module.exports.tweet = (params) => {
	const paramString = querystring.stringify(params)
		.replace(/!/g, '%21')
		.replace(/'/g, '%27')
		.replace(/\(/g, '%28')
		.replace(/\)/g, '%29')
		.replace(/\*/g, '%2A');

	return new Promise((resolve, reject) => {
		request({
			url: `https://api.twitter.com/1.1/statuses/update.json?${paramString}`,
			oauth: {
				// eslint-disable-next-line camelcase
				consumer_key: process.env.TWITTER_CONSUMER_KEY,
				// eslint-disable-next-line camelcase
				consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
				token: process.env.TWITTER_OAUTH_TOKEN,
				// eslint-disable-next-line camelcase
				token_secret: process.env.TWITTER_OAUTH_TOKEN_SECRET,
			},
			json: true,
			method: 'POST',
		}, (error, response, body) => {
			if (error) {
				reject(error);
			} else {
				resolve({response, body});
			}
		});
	});
};
