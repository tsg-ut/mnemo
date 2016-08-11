const $ = require('jquery');
const {toCSS} = require('./util');

class DataElement {
	constructor(boardElement, data, coordinate) {
		this.data = data;
		data.element = this;

		this.boardElement = boardElement;
		this.$board = this.boardElement.$board;
		boardElement.dataElements.push(this);

		this.$data = $('<div/>', {
			'class': 'data',
			attr: {'data-value': this.data.value},
			css: toCSS(coordinate),
		});

		this.$board.find('.data-layer').append(this.$data);
	}

	kill() {
		this.$data.remove();

		const index = this.boardElement.dataElements.indexOf(this);
		if (index !== -1) {
			this.boardElement.dataElements.splice(index, 1);
		}
	}

	fadeOut() {
		this.$data.hide({
			duration: 500,
			queue: false,
			complete: () => this.kill(),
		});
	}

	animate(coordinate) {
		return this.$data.animate(toCSS(coordinate), 400, 'linear').promise();
	}
}

module.exports = DataElement;
