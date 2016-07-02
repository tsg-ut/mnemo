const $ = require('jquery');
const Board = require('./board');
const Panel = require('./panel');

class Stage {
	constructor($stage, config) {
		this.$stage = $stage;
		this.config = config;
		this.board = new Board(this, config.width, config.height, $stage.find('.board'));
		this.panel = new Panel(this, config.parts);

		this.$selectedBlock = this.$stage.find('.panel .block[selected]').first();

		this.$stage.find('.panel .block').click((event) => {
			const $block = $(event.target);
			this.$stage.find('.panel .block').attr('selected', false);
			$block.attr('selected', true);
			this.$selectedBlock = $block;
		});

		this.$stage.find('.board .block').click((event) => {
			const $block = $(event.target);
			const type = this.$selectedBlock.data('type');
			$block.attr('data-type', type);
			this.panel.takeAndPlace($block.data('x'), $block.data('y'), type);
			this.updatePanel();
		});

		this.$stage.find('.execute').click((event) => {
			this.board.execute();
		});
	}

	updatePanel() {
	}
}

module.exports = Stage;
