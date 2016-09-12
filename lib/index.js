require('./analytics');

require('core-js/es5');
require('core-js/es6');

const querystring = require('querystring');
const $ = require('jquery');
const stageConfigs = require('./stages.json');
const Game = require('./game');

// parse GET parameters of the location
const params = querystring.parse(location.href.slice(1));

if (params.fx === 'off') {
	$.fx.off = true;
}

$(document).ready(() => {
	new Game(stageConfigs);

	$('.modal').each((index, element) => {
		const $modal = $(element);
		$modal.find('.close').click(() => {
			$modal.remove();
		});
	});
});
