const $ = require('jquery');
const {toCSS} = require('./util');

class Data {
	constructor(board, coordinate, value) {
		this.board = board;
		this.value = value;

		this.$element = $('<div/>', {
			'class': 'data',
			text: value,
			css: toCSS(coordinate),
		});
		this.board.$board.find('.data-layer').append(this.$element);
	}

	kill() {
		this.$element.remove();
	}

	animate(coordinate) {
		return this.$element.animate(toCSS(coordinate), 400, 'linear').promise();
	}
}

module.exports = Data;
