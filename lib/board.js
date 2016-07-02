const async = require('async');
const $ = require('jquery');
const Block = require('./block');
const Data = require('./data');
const typeToConfig = require('./type-to-config');

class Board {
	constructor($board) {
		this.height = 3;
		this.width = 3;
		this.blocks = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
		this.inputBlockX = 1;
		this.inputBlockY = 0;
		this.outputBlockX = 1;
		this.outputBlockY = 2;
		this.executing = false;
		this.$board = $board;
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
		this.inputBlock.input('top', new Data(this.inputBlock, 'top', 42));
	}
}

module.exports = Board;
