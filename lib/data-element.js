const $ = require('jquery');
const {toCSS} = require('./util');

class DataElement {
	constructor($board, data, coordinate) {
		this.data = data;
		this.$board = $board;

		this.$data = $('<div/>', {
			'class': 'data',
			text: this.data.value,
			css: toCSS(coordinate),
		});

		this.$board.find('.data-layer').append(this.$data);
	}

	kill() {
		this.$data.remove();
	}

	fadeOut() {
		return this.$data.hide(500, () => this.kill()).promise();
	}

	animate(coordinate) {
		return this.$data.animate(toCSS(coordinate), 400, 'linear').promise();
	}
}

module.exports = DataElement;
