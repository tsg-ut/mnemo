const $ = require('jquery');

class Data {
	constructor(block, position, value) {
		this.block = block;
		this.board = block.board;
		this.value = value;

		this.$element = $('<div/>', {
			'class': 'data',
			text: value,
			css: this.getPosition(position),
		});
		this.board.$board.find('.data-layer').append(this.$element);
	}

	getPosition(position) {
		return {
			left: `${this.block[position].x}px`,
			top: `${this.block[position].y}px`,
		};
	}

	kill() {
		this.$element.remove();
	}
}

module.exports = Data;
