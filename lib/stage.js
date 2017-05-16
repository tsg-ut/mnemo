/* global ga */

const querystring = require('querystring');
const $ = require('jquery');
const assert = require('assert');
const React = require('react');
const ReactDOM = require('react-dom');

// TODO: 消す
const Board = require('./board');
const BoardComponent = require('./board-component');
const PanelComponent = require('./panel');
const api = require('./api');

const params = querystring.parse(location.search.slice(1));

class Stage {
	constructor(game, config) {
		this.game = game;
		this.config = Object.assign({}, config);
		this.$stage = this.game.$stage;
		this.blockSize = 50;
		this.caseIndex = 0;
		this.maxClock = 0;

		this.board = new Board(this.config, this.blockSize);

		const boardComponent = React.createElement(BoardComponent, {
			board: this.board,
			width: this.config.width,
			height: this.config.height,
			clockLimit: this.config.clockLimit,
			inputX: this.config.inputX,
			outputX: this.config.outputX,
			onClickBlock: this.handleClickBlock,
			onOutput: this.handleOutput,
			onHalt: this.handleClickBlock,
		});
		this.boardComponent = ReactDOM.render(boardComponent, this.$stage.find('.board-area').get(0));

		const panel = React.createElement(PanelComponent, {parts: this.config.parts});
		this.panel = ReactDOM.render(panel, this.$stage.find('.panel-area').get(0));

		this.$ranking = this.$stage.siblings('.result-layer').find('.ranking');
		this.$result = this.$stage.siblings('.result-layer').find('.result');

		this.updateStyles();
		this.updateClockElement();

		this.board.on('output', (value) => this.handleOutput(value));
		this.board.on('halt', () => this.handleHalt());

		this.$stage.find('.statement').text(config.statement);

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
				this.boardComponent.dataElements.forEach((element) => element.$data.finish());
			}
			if (this.board.status === 'stop') {
				this.execute();
			}
		});

		this.updateIoFields();

		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();

		this.$ranking.find('button.close').click(() => {
			this.$ranking.hide();
		});

		this.resetResults();

		this.updateStyles();
	}

	exit() {
		ReactDOM.unmountComponentAtNode(this.$stage.find('.panel-area').get(0));
	}

	execute() {
		this.caseIndex = 0;
		this.maxClock = 0;
		this.$stage.find('.user-outputs .output').empty().removeClass('correct wrong');

		// Dynamically generate cases if ioGenerator exists
		if (this.config.ioGenerator) {
			const random = this.board.getSeededRandom();
			const {input, output} = this.config.ioGenerator(random);
			assert(Array.isArray(input));
			assert(Array.isArray(output));

			this.config.input = input;
			this.config.output = output;

			this.updateIoFields();
		}

		this.executeCase();
	}

	executeCase() {
		this.boardComponent.execute(this.config.input[this.caseIndex]);

		this.$stage.find('button.stop').show();
		this.$stage.find('button.execute').hide();
	}

	updateIoFields() {
		this.$stage.find('.inputs').empty().append(this.config.input.map((input) => {
			let inputString = '';

			if (input === null) {
				inputString = '???';
			} else if (typeof input === 'number') {
				inputString = input.toString();
			} else {
				inputString = input.map((x) => {
					if (typeof x === 'number') {
						return x.toString();
					}

					return `[${x.join(',')}]`;
				}).join(', ');
			}

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

		this.$stage.find('.arrows').empty().append(this.config.output.map(() => (
			$('<div/>', {class: 'arrow'})
		)));

		this.$stage.find('.user-outputs').empty().append(this.config.output.map(() => (
			$('<div/>', {class: 'output'})
		)));

		this.$stage.find('.correct-outputs').empty().append(this.config.output.map((output) => (
			$('<div/>', {class: 'output'}).append($('<span/>', {
				class: 'inner-text',
				text: output === null ? '???' : output,
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
			width: `${this.config.width * this.blockSize}px`,
			height: `${this.config.height * this.blockSize}px`,
			flexBasis: `${this.config.height * this.blockSize}px`,
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
		const registrationStartTime = Date.now();

		const name = this.$result.find('.name').val();
		if (name.length === 0) {
			return;
		}

		$(event.target).attr('disabled', true);

		api.post(`/stages/${this.config.name}/submissions`, {
			name,
			board: this.board.boardData,
		}).then((data) => {
			const registrationDuration = Date.now() - registrationStartTime;

			if (data.error) {
				if (data.message === 'user name existing') {
					this.$result.find('.register').text('すでに登録されています').addClass('success');
					ga('send', 'event', 'stage', 'register ranking', 'duplicated', registrationDuration);
				} else {
					this.$result.find('.register').text('エラーが発生しました').addClass('error');
					ga('send', 'event', 'stage', 'register ranking', 'errored', registrationDuration);
				}

				return;
			}

			this.$result.find('.register').text('登録しました!!').addClass('success');

			ga('send', 'event', 'stage', 'register ranking', 'succeeded', registrationDuration);
		});
	}

	clearBoard() {
		this.board.blocks.forEach((row, x) => {
			row.forEach((block, y) => {
				this.takeAndPlace(x, y, 'empty');
			});
		});
	}

	makeBoard(board) {
		board.forEach((block) => {
			for (let i = 0; i < block.rotate + 1; i++) {
				this.takeAndPlace(block.x, block.y, block.type);
			}
		});
	}

	resetResults() {
		const $register = this.$result.find('.register');

		// TODO: CSSでテキスト管理したい
		$register.text('ランキングに登録する');
		$register.removeClass('success error');
		$register.attr('disabled', false);
	}

	takeAndPlace(x, y, blockName) {
		const oldBlock = this.boardComponent.getBlock(x, y);
		assert(oldBlock, 'oldBlock is invalid');

		if (!blockName || blockName === oldBlock.config.name) { // rotate the block
			if (oldBlock.config.rotatable) {
				const rotate = (oldBlock.config.rotate + 1) % 4;
				this.boardComponent.placeBlock({x, y, type: oldBlock.config.name, rotate});
			}
		} else { // replace the block
			// take the block from panel
			if (blockName !== 'empty') {
				this.panel.take(blockName);
			}

			// push the old block into panel
			if (oldBlock.config.name !== 'empty') {
				this.panel.push(oldBlock.config.name);
			}

			this.boardComponent.placeBlock({x, y, type: blockName, rotate: 0});
		}
	}

	handleClickBlock = ({x, y, type}) => {
		if (type === 'click') {
			if (this.board.status === 'stop') {
				const blockType = this.panel.state.selected; // This is evil :/
				this.takeAndPlace(x, y, blockType);
			}
		} else if (type === 'contextmenu') {
			if (this.board.status === 'stop') {
				this.takeAndPlace(x, y, 'empty');
			}
		}

		return false;
	};

	handleHalt = () => {
		this.boardComponent.animations = [];
		this.boardComponent.eraseData();
		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();
	}

	handleOutput = (value) => {
		const $output = this.$stage.find('.user-outputs .output').eq(this.caseIndex);

		$output.text(value);
		$output.removeClass('correct wrong');

		if (this.config.output[this.caseIndex] === value) {
			$output.addClass('correct');

			this.maxClock = Math.max(this.maxClock, this.board.clock);

			if (this.config.output.length === this.caseIndex + 1) {
				$.fx.off = params.fx === 'off';
				this.resetResults();
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
}

module.exports = Stage;
