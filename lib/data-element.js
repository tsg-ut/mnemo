const $ = require('jquery');
const {toCSS} = require('./util');

class DataElement {
	constructor(boardElement, data, coordinate) {
		this.data = data;
		data.element = this;

		this.boardElement = boardElement;
		this.$board = this.boardElement.$board;
		boardElement.dataElements.push(this);

		let showValue = this.data.value;
		if (showValue === Infinity) {
			showValue = '∞';
		} else if (showValue === -Infinity) {
			showValue = '-∞';
		}
		this.$data = $('<div/>', {
			class: 'data',
			text: showValue,
			css: toCSS(coordinate),
		});

		this.$board.find('.data-layer').prepend(this.$data);
	}

	kill() {
		this.$data.remove();

		const index = this.boardElement.dataElements.indexOf(this);
		if (index !== -1) {
			this.boardElement.dataElements.splice(index, 1);
		}
	}

	fadeOut() {
		this.$data.stop(true, false);
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
