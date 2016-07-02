class Data {
	constructor(board, value) {
		this.board = board;
		this.value = value;
		this.$element = $('<div/>', {'class': 'data', text: value});
		this.board.$board.append(this.$element);
		this.currentBlock = this.board.inputBlock;
	}
}

module.exports = Data;
