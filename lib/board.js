const Block = require('./block');

class Board {
	constructor() {
		this.height = 10;
		this.width = 10;
		this.pieces = [[null, null], [null, null]];
	}
}

module.exports = Board;
