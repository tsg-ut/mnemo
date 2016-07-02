const $ = require('jquery');
const Board = require('./board');
const Panel = require('./panel');

class Stage {
	constructor($stage, config) {
		this.$stage = $stage;
		this.config = config;
		this.caseIndex = 0;
		this.board = new Board(this);
		this.panel = new Panel(this);

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

		this.$stage.find('.inputs').empty().append(config.input.map((input) => $('<div/>', {
			'class': 'input',
			text: input,
		})));

		this.$stage.find('.user-outputs').empty().append(config.output.map(() => $('<div/>', {
			'class': 'output',
		})));

		this.$stage.find('.correct-outputs').empty().append(config.output.map((output) => $('<div/>', {
			'class': 'output',
			text: output,
		})));
	}
}

module.exports = Stage;
