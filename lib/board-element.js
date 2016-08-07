const $ = require('jquery');
const Board = require('./board');
const DataElement = require('./data-element');

class BoardElement {
	constructor(stage, board) {
		this.stage = stage;
		this.board = board;

		this.height = stage.config.height;
		this.width = stage.config.width;
		this.$board = stage.$stage.find('.board');
		this.dataElements = [];

		for (var i = 0; i < this.height; i++) {
			const $row = $('<div/>', {
				'class': 'row',
				attr: {'data-y': i},
			});
			this.$board.find('.rows').append($row);

			for (var j = 0; j < this.width; j++) {
				$row.append($('<div/>', {
					'class': 'block',
					attr: {
						'data-x': j,
						'data-y': i,
					},
				}));
			}
		}

		this.inputBlockX = stage.config.inputX;
		this.inputBlockY = 0;
		this.outputBlockX = stage.config.outputX;
		this.outputBlockY = stage.config.height - 1;

		this.animations = [];

		this.board.on('erase', (block, data) => {
			if (data.element) {
				data.element.fadeOut();
			}
		});

		this.board.on('pass', (block, io) => {
			const inputAnimations = [];
			const outputAnimations = [];

			for (let direction in io.in) {
				const data = io.in[direction];
				if (data.element) {
					const promise = data.element.animate(block.center);
					inputAnimations.push(promise);
				}
			}

			const animation = Promise.all(inputAnimations).then(() => {
				for (let direction in io.in) {
					io.in[direction].element.kill();
				}

				for (let direction in io.out) {
					const data = io.out[direction];

					if (!block.outputQueues[direction].includes(data)) {
						continue;
					}

					const dataElement = new DataElement(this, data, block.center);

					const promise = data.element.animate(block[direction]);
					outputAnimations.push(promise);
				}

				return Promise.all(outputAnimations)
			});

			this.animations.push(animation);
		});
	}

	get inputBlock() {
		return this.getBlock(this.inputBlockX, this.inputBlockY);
	}

	get outputBlock() {
		return this.getBlock(this.outputBlockX, this.outputBlockY);
	}

	getBlock(x, y) {
		return this.$board.find('.block').filter((index, element) => $(element).data('x') === x && $(element).data('y') === y)
	}

	placeBlock(x, y, type, rotate) {
		this.getBlock(x, y).attr('data-type', type).attr('data-rotate', rotate * 90);
		this.board.placeBlock(x, y, type, rotate);
	}

	eraseData() {
		this.dataElements.forEach((dataElement) => {
			dataElement.fadeOut();
		});
	}
}

module.exports = BoardElement;
