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
		const type = $selectedBlock.data('type');
		$block.attr('data-type', type);
		board.placeBlock($block.data('x'), $block.data('y'), type);
	});
});
