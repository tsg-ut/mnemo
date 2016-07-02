const Block = require('./block');
const typeToConfig = require('./type-to-config');

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

	placeBlock(x, y, type) {
		const config = typeToConfig[type];
		config.x = x;
		config.y = y;
		const block = new Block(config);
		this.blocks[y][x] = block;
	}
}

module.exports = Board;
