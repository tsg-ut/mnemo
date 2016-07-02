const $ = require('jquery');

class Data {
	constructor(board, value) {
		this.board = board;
		this.value = value;

		this.currentBlock = this.board.inputBlock;

		this.$element = $('<div/>', {
			'class': 'data',
			text: value,
			css: this.getPosition('top'),
		});
		this.board.$board.find('.data-layer').append(this.$element);

		this.currentBlock.input('top', this);
	}

	getPosition(position) {
		return {
			left: `${this.currentBlock[position].x}px`,
			top: `${this.currentBlock[position].y}px`,
		};
	}
}

module.exports = Data;
