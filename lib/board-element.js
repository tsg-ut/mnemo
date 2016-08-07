const $ = require('jquery');
const Board = require('./board');

class BoardElement {
	constructor(stage, board) {
		super();

		this.stage = stage;
		this.board = board;

		this.height = stage.config.height;
		this.width = stage.config.width;
		this.$board = stage.$stage.find('.board');

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

	placeBlock(x, y, type) {
		let rotate = 0;

		const oldBlock = this.board.getBlcok(x, y);
		if (oldBlock && oldBlock.config.name !== 'empty') {
			this.stage.panel.parts.push(oldBlock.config.name);
			if (oldBlock.config.name === config.name && config.rotate_levels) {
				rotate = (oldBlock.rotate + 1) % config.rotate_levels;
			}
		}
		this.getBlock(x, y).attr('data-rotate', rotate * 90);

		this.board.placeBlock(x, y, type, rotate);
	}
}

module.exports = BoardElement;
