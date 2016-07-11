const async = require('async');
const $ = require('jquery');
const Block = require('./block');
const Data = require('./data');
const typeToConfig = require('./type-to-config');

class Board {
	constructor(stage) {
		this.stage = stage;
		this.height = stage.config.height;
		this.width = stage.config.width;
		this.$board = stage.$stage.find('.board');

		this.blocks = [];
		for (var i = 0; i < this.height; i++) {
			const row = [];
			this.blocks.push(row);

			const $row = $('<div/>', {
				'class': 'row',
				attr: {'data-y': i},
			});
			this.$board.find('.rows').append($row);

			for (var j = 0; j < this.width; j++) {
				const $block = $('<div/>', {
					'class': 'block',
					attr: {
						'data-x': j,
						'data-y': i,
					},
				});
				$row.append($block);
				row.push(null);
			}
		}

		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.placeBlock(x, y, 'empty');
			}
		}

		this.inputBlockX = stage.config.inputX;
		this.inputBlockY = 0;
		this.outputBlockX = stage.config.outputX;
		this.outputBlockY = stage.config.height - 1;
		this.dataSize = 0;
		this.executing = false;
	}

	get inputBlock() {
		return this.blocks[this.inputBlockY][this.inputBlockX];
	}

	get outputBlock() {
		return this.blocks[this.outputBlockY][this.outputBlockX];
	}

	getBlock(x, y) {
		return this.blocks[y][x];
	}

	getBlockElement(x, y) {
		return this.$board.find('.block').filter((index, element) => $(element).data('x') === x.toString() && $(element).data('y') === y.toString())
	}

	placeBlock(x, y, type) {
		const config = typeToConfig[type];
		config.x = x;
		config.y = y;
		config.name = type;
		const block = new Block(this, this.getBlockElement(x, y), config);
		if (this.blocks[y][x] && this.blocks[y][x].config.name !== "empty" ){
			this.stage.panel.parts.push(this.blocks[y][x].config.name);
		}
		this.blocks[y][x] = block;
	}

	input(value) {
		this.executing = true;
		this.inputBlock.input('top', new Data(this, this.inputBlock.top, value));
	}

	output(value) {
		this.stage.output(value);
	}

	set executing(stat) {
		if (this.executing === stat) return;

		this._executing = stat;
		this.stopping = !stat;
		if (stat) {
			$('.execute').hide();
			$('.stop').show();
		} else {
			$('.execute').show();
			$('.stop').hide();
		}
	}
	get executing() {
		return this._executing;
	}
}

module.exports = Board;
