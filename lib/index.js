require('core-js/shim');

const $ = require('jquery');
const stageConfigs = require('./stages.json');
const Game = require('./game');

$(document).ready(() => {
	const game = new Game(stageConfigs);

	$('.modal').each((index, element) => {
		const $modal = $(element);
		$modal.find('.close').click(() => {
			$modal.remove();
		});
	});
});
