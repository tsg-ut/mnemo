const $ = require('jquery');
const Board = require('./board');
const Panel = require('./panel');

class Stage {
	constructor($stage, config) {
		this.$stage = $stage;
		this.config = config;
		this.board = new Board(this);
		this.panel = new Panel(this, config.parts);

		this.$selectedBlock = this.$stage.find('.panel .block[selected]').first();

		this.$stage.find('.board .block').click((event) => {
			const $block = $(event.target);
			const type = this.$selectedBlock.data('type');
			$block.attr('data-type', type);
			this.panel.takeAndPlace($block.data('x'), $block.data('y'), type);
		});

		this.$stage.find('.execute').click((event) => {
			this.board.execute();
		});
	}
}

module.exports = Stage;
