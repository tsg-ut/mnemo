const $ = require('jquery');
const Board = require('./board');

$(document).ready(() => {
	const board = new Board();
	const $selectedBlock = $('.panel .block[selected]').first();

	$('.panel .block').click((event) => {
		const $block = $(event.target);
		$('.panel .block').attr('selected', false);
		$block.attr('selected', true);
	});
});
