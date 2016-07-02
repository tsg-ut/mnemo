const async = require('async');
const $ = require('jquery');
const Block = require('./block');
const Data = require('./data');
const typeToConfig = require('./type-to-config');

class Board {
	constructor(width, height, $board) {
		this.height = height;
		this.width = width;
		this.$board = $board;

		this.blocks = [];
		for (var i = 0; i < this.height; i++) {
			const row = [];
			this.blocks.push(row);
			for (var j = 0; j < this.width; j++) {
				row.push(null)
			}
		}

		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.placeBlock(x, y, 'empty');
			}
		}

		this.inputBlockX = 4;
		this.inputBlockY = 0;
		this.outputBlockX = 4;
		this.outputBlockY = 9;
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
		const block = new Block(this, this.getBlockElement(x, y), config);
		this.blocks[y][x] = block;
	}

	execute() {
		this.executing = true;
		this.inputBlock.input('top', new Data(this, this.inputBlock.top, 42));
	}
}

module.exports = Board;
