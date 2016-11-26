const querystring = require('querystring');
const $ = require('jquery');
const Board = require('./board');
const BoardElement = require('./board-element');
const DataElement = require('./data-element');
const Panel = require('./panel');
const api = require('./api');

const params = querystring.parse(location.search.slice(1));

class Stage {
	constructor(game, config) {
		this.game = game;
		this.config = config;
		this.$stage = this.game.$stage;
		this.blockSize = 50;
		this.caseIndex = 0;
		this.maxClock = 0;

		this.board = new Board(this.config, this.blockSize);
		this.boardElement = new BoardElement(this, this.board);
		this.panel = new Panel(this);

		this.$ranking = this.$stage.siblings('.result-layer').find('.ranking');
		this.$result = this.$stage.siblings('.result-layer').find('.result');

		this.updateStyles();
		this.updateClockElement();

		this.board.on('output', (value) => this.output(value));
		this.board.on('halt', () => this.onHalt());

		this.$stage.find('.statement').text(config.statement);

		this.$selectedBlock = this.$stage.find('.panel .block[selected]').first();

		this.$stage.find('.board .block').click((event) => {
			const $block = $(event.target);
			if (!this.board.executing) {
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

		this.$stage.find('button.execute').click(() => {
			$.fx.off = params.fx === 'off';
			this.execute();
		});

		this.$stage.find('button.stop').click(() => {
			this.board.halt();
			$.fx.off = params.fx === 'off';
		});

		this.$stage.find('button.exit').click(() => {
			$.fx.off = params.fx === 'off';
			this.game.exitStage();
		});

		this.$stage.find('button.ranking').click(() => {
			this.$ranking.find('.stage-name').text(this.config.title);
			this.$ranking.addClass('loading');
			this.$ranking.show();

			api.get(`/stages/${this.config.name}/submissions`).then((submissions) => {
				this.$ranking.removeClass('loading');
				this.$ranking.find('.ranks').empty().append(submissions.map((submission) => (
					$('<li/>', {
						class: 'rank',
					}).append([
						$('<div/>', {
							class: 'name',
							text: submission.name,
						}),
						$('<div/>', {
							class: 'data',
						}).append([
							$('<div/>', {
								class: 'clocks',
								text: submission.clocks,
							}),
							$('<div/>', {
								class: 'blocks',
								text: submission.blocks,
							}),
						]),
						$('<div/>', {
							class: 'score',
							text: submission.score,
						}),
					])
				)));
			});
		});

		this.$stage.find('button.rapid').click(() => {
			if ($.fx.off) {
				$.fx.off = params.fx === 'off';
			} else {
				$.fx.off = true;
				this.boardElement.dataElements.forEach((element) => element.$data.finish());
			}
			if (!this.board.executing) {
				this.execute();
			}
		});

		this.$stage.find('.inputs').empty().append(config.input.map((input) => {
			let inputString = (typeof input === 'number') ? input.toString()
				: input.map((x) => (typeof x === 'number')
					? x.toString() : `[${x.toString()}]`).join(',');
			if (inputString.length > 15) {
				inputString = `${inputString.substring(0, 13)}...`;
			}

			return $('<div/>', {class: 'input'}).append($('<span/>', {
				class: 'inner-text',
				text: inputString,
			}));
		}));

		this.$stage.find('.inputs .input').each((index, input) => {
			const $span = $(input).find('.inner-text');
			const inputWidth = $(input).outerWidth();
			const spanWidth = $span.width();
			if (inputWidth < spanWidth) {
				$span.css({fontSize: `${inputWidth / spanWidth * 100 - 2}%`});
			}
		});

		this.$stage.find('.arrows').empty().append(config.output.map(() => (
			$('<div/>', {class: 'arrow'})
		)));

		this.$stage.find('.user-outputs').empty().append(config.output.map(() => (
			$('<div/>', {class: 'output'})
		)));

		this.$stage.find('.correct-outputs').empty().append(config.output.map((output) => (
			$('<div/>', {class: 'output'}).append($('<span/>', {
				class: 'inner-text',
				text: output,
			}
		)))));

		this.$stage.find('.outputs .output').each((index, output) => {
			const $span = $(output).find('.inner-text');
			const outputWidth = $(output).outerWidth();
			const spanWidth = $span.width();
			if (outputWidth < spanWidth) {
				$span.css({fontSize: `${outputWidth / spanWidth * 100 - 2}%`});
			}
		});

		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();

		this.$ranking.find('button.close').click(() => {
			this.$ranking.hide();
		});

		// TODO: CSSでテキスト管理したい
		this.$result.find('.register').text('ランキングに登録する').attr('disabled', false).removeClass('success error');

		this.updateStyles();
	}

	execute() {
		this.caseIndex = 0;
		this.maxClock = 0;
		this.$stage.find('.user-outputs .output').empty().removeClass('correct wrong');

		this.executeCase();
	}

	executeCase() {
		const inputs = this.board.input(this.config.input[this.caseIndex]);
		inputs.forEach((input, index) => {
			input.forEach((value) => {
				new DataElement(this.boardElement, value, this.board.inputBlock[index].top);
			});
		});

		this.$stage.find('button.stop').show();
		this.$stage.find('button.execute').hide();

		this.clockUp();
	}

	clockUp() {
		this.board.step();
		this.updateClockElement();

		if (this.board.executing && !this.board.paused) {
			Promise.all(this.boardElement.animations).then(() => {
				this.boardElement.animations = [];
				this.board.pass();

				if (this.board.executing && !this.board.paused) {
					if (this.board.clock >= this.board.clockLimit) {
						this.board.halt();
						$.fx.off = params.fx === 'off';

						const $clockLimit = this.$stage.siblings('.result-layer').find('.clock-limit');

						$clockLimit.find('.limit-value').text(this.board.clockLimit);
						$clockLimit.show();

						return;
					}

					if (this.board.dataCount > 100) {
						this.board.halt();
						$.fx.off = params.fx === 'off';

						const $dataLimit = this.$stage.siblings('.result-layer').find('.data-limit');

						$dataLimit.show();

						return;
					}

					this.clockUp();
				}
			});
		}
	}

	updateClockElement() {
		this.$stage.find('.clock-value').text(`${this.board.clock}/${this.board.clockLimit}`);
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

			this.maxClock = Math.max(this.maxClock, this.board.clock);

			if (this.config.output.length === this.caseIndex + 1) {
				$.fx.off = params.fx === 'off';
				this.game.answer();
			} else {
				this.caseIndex++;
				this.executeCase();
			}
		} else {
			$.fx.off = params.fx === 'off';
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

		const $leftPipe = this.$stage.find('.case-joint-top-pipe');
		const leftMargin = ($leftPipe.parent().width() - $leftPipe.width()) / 2;

		const $boardArea = this.$stage.find('.board-area');
		const $rightPipe = this.$stage.find('.board-joint-top-pipe');
		const rightMargin = ($boardArea.width() - $rightPipe.width()) / 2;

		this.$stage.find('.upper-pipe-area, .downer-pipe-area').css({
			marginLeft: `${leftMargin}px`,
			marginRight: `${rightMargin}px`,
		});
	}

	onRegister(event) {
		const name = this.$result.find('.name').val();
		if (name.length === 0) {
			return;
		}

		$(event.target).attr('disabled', true);

		api.post(`/stages/${this.config.name}/submissions`, {
			name,
			board: this.board.boardData,
		}).then((data) => {
			if (data.error) {
				if (data.message === 'user name existing') {
					this.$result.find('.register').text('すでに登録されています').addClass('success');
				} else {
					this.$result.find('.register').text('エラーが発生しました').addClass('error');
				}

				return;
			}

			this.$result.find('.register').text('登録しました!!').addClass('success');
		});
	}
	makeBoard(board) {
		board.forEach((row, y) => {
			row.forEach((block, x) => {
				for (let i = 0; i < block.rotate + 1; i++) {
					this.panel.takeAndPlace(x, y, block.name);
				}
			});
		});
	}
}

module.exports = Stage;
