const $ = require('jquery');
const Board = require('./board');
const BoardElement = require('./board-element');
const DataElement = require('./data-element');
const Panel = require('./panel');

class Stage {
	constructor(game, config) {
		this.game = game;
		this.config = config;
		this.$stage = this.game.$stage;
		this.blockSize = 50; 
		this.caseIndex = 0;

		this.board = new Board(this.config, this.blockSize);
		this.boardElement = new BoardElement(this, this.board);
		this.panel = new Panel(this);

		this.updateStyles();

		this.board.on('output', (value) => this.output(value));
		this.board.on('halt', () => this.onHalt());

		this.$stage.find('.statement').text(config.statement);

		this.$selectedBlock = this.$stage.find('.panel .block[selected]').first();

		this.$stage.find('.board .block').click((event) => {
			const $block = $(event.target);
			if (this.panel.selected && !this.board.executing) {
				const type = this.$selectedBlock.data('type');
				this.panel.takeAndPlace($block.data('x'), $block.data('y'), type);
			}
		});

		this.$stage.find('.board .block').bind('contextmenu', (event) => {
			const $block = $(event.target);
			if (!this.board.executing) {
				this.panel.takeAndPlace($block.data('x'), $block.data('y'), 'empty');
			}
			return false;
		});

		this.$stage.find('.execute').click(() => {
			this.execute();
		});

		this.$stage.find('.stop').click(() => {
			this.board.halt();
		});

		this.$stage.find('.exit').click(() => {
			this.game.exitStage();
		});

		this.$stage.find('.inputs').empty().append(config.input.map((input) => $('<div/>', {
			'class': 'input',
			text: input,
		})));

		this.$stage.find('.arrows').empty().append(config.output.map(() => $('<div/>', {
			'class': 'arrow',
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

		this.updateStyles();
	}

	execute() {
		this.caseIndex = 0;
		this.$stage.find('.user-outputs .output').empty().removeClass('correct wrong');

		this.executeCase();
	}

	executeCase() {
		const inputData = this.board.input(this.config.input[this.caseIndex]);
		const inputDataElement = inputData.map( (d,i) => new DataElement(this.boardElement, d, this.board.inputBlock[i].top) );

		this.$stage.find('button.stop').show();
		this.$stage.find('button.execute').hide();

		this.clockUp();
	}

	clockUp() {
		this.board.step();
		this.$stage.find('.clock-num').text(this.board.clock);

		if (this.board.executing) {
			Promise.all(this.boardElement.animations).then(() => {
				this.boardElement.animations = [];
				this.board.pass();

				if (this.board.executing) {
					this.clockUp();
				}
			});
		}
	}

	onHalt() {
		this.boardElement.animations = [];
		this.boardElement.eraseData();
		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();
	}

	output(value) {
		const $output = this.$stage.find('.user-outputs .output').eq(this.caseIndex);

		$output.text(value);
		$output.removeClass('correct wrong');

		if (this.config.output[this.caseIndex] === value) {
			$output.addClass('correct');

			if (this.config.output.length === this.caseIndex + 1) {
				this.game.answer();
			} else {
				this.caseIndex++;
				this.executeCase();
			}
		} else {
			$output.addClass('wrong');
		}
	}

	updateStyles() {
		const boardWidth = this.$stage.find('.board-area').width() - 50;
		const boardHeight = this.$stage.find('.board-area').height() - 70;
		const boardSize = Math.min(boardWidth, boardHeight); // 上下のmarginは固定と仮定
		const stageSize = Math.max(this.config.width, this.config.height);
		if (boardSize > 50 * stageSize) {
			this.blockSize = 50;
		} else {
			this.blockSize = boardSize / stageSize;
		}

		this.board.setBlockSize(this.blockSize);

		this.$stage.find('.board .block').height(this.blockSize);
		this.$stage.find('.board .block').width(this.blockSize);
		this.$stage.find('.board-frame-wrapper').css({
			width: `${50 + this.config.width * this.blockSize}px`,
		});
		this.$stage.find('.board-frame').css({
			height: `${50 + this.config.height * this.blockSize}px`,
			flexBasis: `${50 + this.config.height * this.blockSize}px`,
		});


		const getMargin = (selector) => {
			const element = this.$stage.find(selector).get(0);
			const styles = getComputedStyle(element);
			return parseInt(styles['margin-right']);
		};

		const leftMargin = getMargin('.case-joint-top-pipe');
		const rightMargin = getMargin('.board-frame-wrapper') + getMargin('.board-joint-top-pipe');

		this.$stage.find('.upper-pipe-area, .downer-pipe-area').css({
			marginLeft: `${leftMargin}px`,
			marginRight: `${rightMargin}px`,
		});
	}
}

module.exports = Stage;
