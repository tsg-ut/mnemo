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
            if (this.panel.selected && !this.board.executing){
			    const type = this.$selectedBlock.data('type');
			    $block.attr('data-type', type);
			    this.panel.takeAndPlace($block.data('x'), $block.data('y'), type);
            }
		});

		this.$stage.find('.execute').click(() => {this.execute()});

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

	execute() {
		if (this.board.executing) return;
		this.caseIndex = 0;
		this.$stage.find('.user-outputs .output').empty().removeClass('correct wrong');
		this.executeCase();
	}

	executeCase() {
		this.board.input(this.config.input[this.caseIndex]);
	}

	output(value) {
		const $output = this.$stage.find('.user-outputs .output').eq(this.caseIndex);
		$output.text(value);
		$output.removeClass('correct wrong');

		if (this.config.output[this.caseIndex] === value) {
			$output.addClass("correct");
			if (this.config.output.length === this.caseIndex + 1) {
				// 終了処理をここに書く
				return false;
			} else {
				setTimeout(() => {
					this.caseIndex++;
					this.executeCase();
				}, 600); //dataのanimateが400msだったのでそれが終わるまで待つ
				return true;
			}
		} else {
			$output.addClass("wrong");
			return false;
		}
	}
}

module.exports = Stage;
