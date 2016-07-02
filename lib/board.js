const async = require('async');
const Block = require('./block');
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
		this.$
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

	placeBlock(x, y, type) {
		const config = typeToConfig[type];
		config.x = x;
		config.y = y;
		const block = new Block(config);
		this.blocks[y][x] = block;
	}

	execute() {
		this.executing = true;
		let currentBlock = this.inputBlock;

		async.doWhilst((done) => {

		}, () => $currentBlock !== this.outputBlock, () => {

		})
	}
}

module.exports = Board;
