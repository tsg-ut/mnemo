const Block = require('./block');

class Board {
	constructor() {
		this.height = 3;
		this.width = 3;
		this.blocks = [
			[null, null, null],
			[null, null, null],
			[null, null, null],
		];
	}

	getBlock(x, y) {
		return this.blocks[y][x];
	}

	placeBlock(x, y, config) {
		config.x = x;
		config.y = y;
		const block = new Block(config);
		this.blocks[y][x] = block;
	}
}

module.exports = Board;
