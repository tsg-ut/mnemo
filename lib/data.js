const $ = require('jquery');

class Data {
	constructor(board, value) {
		this.board = board;
		this.value = value;

		this.currentBlock = this.board.inputBlock;

		this.$element = $('<div/>', {
			'class': 'data',
			text: value,
			css: {
				left: `${this.currentBlock.top.x}px`,
				top: `${this.currentBlock.top.y}px`,
			},
		});
		this.board.$board.find('.data-layer').append(this.$element);
	}
}

module.exports = Data;
