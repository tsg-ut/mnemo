const $ = require('jquery');
const Board = require('./board');

$(document).ready(() => {
	const board = new Board();
	let $selectedBlock = $('.panel .block[selected]').first();

	$('.panel .block').click((event) => {
		const $block = $(event.target);
		$('.panel .block').attr('selected', false);
		$block.attr('selected', true);
		$selectedBlock = $block;
	});

	$('.board .block').click((event) => {
		const $block = $(event.target);
		$block.attr('data-type', $selectedBlock.data('type'));
	});
});
