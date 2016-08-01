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
		this.stat = 'stopping';

		this.$selectedBlock = this.$stage.find('.panel .block[selected]').first();

		this.$stage.find('.board .block').click((event) => {
			const $block = $(event.target);
			if (this.panel.selected && !this.board.executing){
				const type = this.$selectedBlock.data('type');
				$block.attr('data-type', type);
				this.panel.takeAndPlace($block.data('x'), $block.data('y'), type);
			}
		});

		this.$stage.find('.execute').click(() => {this.execute()});
		this.$stage.find('.stop').click(() => {this.stop()});

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

		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();
	}

	execute() {
		this.caseIndex = 0;
		this.$stage.find('.user-outputs .output').empty().removeClass('correct wrong');

		this.$stage.find('button.stop').show();
		this.$stage.find('button.execute').hide();

		this.executeCase();
	}

	executeCase() {
		this.stat = 'executing';
		this.board.input(this.config.input[this.caseIndex]);
	}

	stop() {
		this.board.clearData();
	}

	onStop() {
		this.board.executing = false;
		switch(this.stat) {
			case 'correct': // ケースが通った
				if(this.config.output.length === this.caseIndex + 1) {
					// 次のステージに行く処理。
				} else {
					this.caseIndex++;
					this.executeCase();
				}
				break;
			case 'wrong': // ケースに失敗した
			case 'executing': // 実行途中に止まった（ユーザによって/Dataの自然消滅）
				this.$stage.find('button.stop').hide();
				this.$stage.find('button.execute').show();
				this.stat = 'stopping';
				break;
		}
	}

	output(value) {
		const $output = this.$stage.find('.user-outputs .output').eq(this.caseIndex);
		$output.text(value);
		$output.removeClass('correct wrong');

		if (this.config.output[this.caseIndex] === value) {
			$output.addClass("correct");
			this.stat = 'correct';
		} else {
			$output.addClass("wrong");
			this.stat = 'wrong';
		}
		this.stop();
	}
}

module.exports = Stage;
