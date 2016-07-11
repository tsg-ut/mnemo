const $ = require('jquery');
const {toCSS} = require('./util');

let dataSize = 0;

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

		this.board.dataSize++;
	}

	kill() {
		this.$element.remove();

		this.board.dataSize--;
		if (this.board.dataSize === 0) {
			this.board.executing = false;
		}
	}

	fadeOut() {
		this.$element.hide(500, () => this.kill());
	}

	animate(coordinate) {
		return this.$element.animate(toCSS(coordinate), 400, 'linear').promise();
	}
}

module.exports = Data;
