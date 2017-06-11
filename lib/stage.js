/* global ga */

const $ = require('jquery');
const assert = require('assert');
const React = require('react');
const ReactDOM = require('react-dom');

const BoardComponent = require('./board-component');
const PanelComponent = require('./panel-component');
const api = require('./api');
const {normalizeStageInput} = require('./util');

class Stage {
	constructor({config, onClickExit, onAnswer}) {
		this.config = Object.assign({}, config);
		this.onClickExit = onClickExit;
		this.onAnswer = onAnswer;

		this.caseIndex = 0;
		this.maxClock = 0;

		this.boardComponentProps = {
			status: 'stop',
			width: this.config.width,
			height: this.config.height,
			clockLimit: this.config.clockLimit,
			inputX: this.config.inputX,
			outputX: this.config.outputX,
			input: this.config.input,
			output: this.config.output,
			userOutput: this.config.output.map(() => null),
			userOutputCorrectness: this.config.output.map(() => null),
			onClickBlock: this.handleClickBlock,
			onOutput: this.handleOutput,
			onHalt: this.handleHalt,
			onPaused: this.handlePaused,
			currentInputIndex: null,
			isRapid: false,
			isForced: false,
		};

		this.renderBoardComponent();

		this.panelComponentProps = {
			parts: this.config.parts,
		};

		this.renderPanelComponent();

		this.boardStatus = 'stop';

		this.$stage = $('.stage');

		this.$ranking = this.$stage.siblings('.result-layer').find('.ranking');
		this.$result = this.$stage.siblings('.result-layer').find('.result');

		this.$stage.find('.statement').text(config.statement);

		this.$stage.find('button.execute').click(() => {
			this.execute();
		});

		this.$stage.find('button.stop').click(() => {
			this.handleHalt({force: true});
		});

		this.$stage.find('button.exit').click(() => {
			this.onClickExit();
		});

		this.$stage.find('button.ranking').click(async () => {
			this.$ranking.find('.stage-name').text(this.config.title);
			this.$ranking.addClass('loading');
			this.$ranking.show();

			const submissions = await api.get(`/stages/${this.config.name}/submissions`);

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

		this.$stage.find('button.rapid').click(() => {
			this.boardComponentProps.isRapid = true;

			if (this.boardComponentProps.status !== 'executing') {
				this.execute();
			}

			this.renderBoardComponent();
		});

		// TODO: debug code
		this.$stage.find('button.step').click(() => {
			if (typeof document.body.requestFullscreen === 'function') {
				document.body.requestFullscreen();
			} else if (typeof document.body.mozRequestFullscreen === 'function') {
				document.body.mozRequestFullscreen();
			} else if (typeof document.body.webkitRequestFullscreen === 'function') {
				document.body.webkitRequestFullscreen();
			}
		});

		this.updateIoFields();

		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();

		this.$ranking.find('button.close').click(() => {
			this.$ranking.hide();
		});

		this.resetResults();
	}

	renderBoardComponent() {
		const boardComponent = React.createElement(BoardComponent, this.boardComponentProps);
		this.boardComponent = ReactDOM.render(boardComponent, $('.board-area').get(0));
	}

	renderPanelComponent() {
		const panelComponent = React.createElement(PanelComponent, this.panelComponentProps);
		this.panelComponent = ReactDOM.render(panelComponent, $('.panel-area').get(0));
	}

	exit() {
		ReactDOM.unmountComponentAtNode(this.$stage.find('.panel-area').get(0));
		ReactDOM.unmountComponentAtNode(this.$stage.find('.board-area').get(0));
	}

	execute() {
		this.caseIndex = 0;
		this.maxClock = 0;
		this.boardComponentProps.userOutput = this.config.output.map(() => null);
		this.boardComponentProps.userOutputCorrectness = this.config.output.map(() => null);

		// Dynamically generate cases if ioGenerator exists
		if (this.config.ioGenerator) {
			const random = this.boardComponent.getSeededRandom();
			const {input, output} = this.config.ioGenerator(random);
			assert(Array.isArray(input));
			assert(Array.isArray(output));

			this.boardComponentProps.input = this.config.input = normalizeStageInput(input);
			this.boardComponentProps.output = this.config.output = output;

			this.updateIoFields();
		}

		this.executeCase();
		this.renderBoardComponent();
	}

	executeCase() {
		this.$stage.find('button.stop').show();
		this.$stage.find('button.execute').hide();

		this.boardComponentProps.currentInputIndex = this.caseIndex;
		this.boardComponentProps.status = 'executing';
		this.renderBoardComponent();
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

	async onRegister(event) {
		const registrationStartTime = Date.now();

		const name = this.$result.find('.name').val();
		if (name.length === 0) {
			return;
		}

		$(event.target).attr('disabled', true);

		const data = await api.post(`/stages/${this.config.name}/submissions`, {
			name,
			board: this.boardComponent.getBoardData(),
		});
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
				this.panelComponent.take(blockName);
			}

			// push the old block into panel
			if (oldBlock.config.name !== 'empty') {
				this.panelComponent.push(oldBlock.config.name);
			}

			this.boardComponent.placeBlock({x, y, type: blockName, rotate: 0});
		}
	}

	handleClickBlock = ({x, y, type}) => {
		if (this.boardStatus === 'stop') {
			if (type === 'click') {
				const blockType = this.panelComponent.state.selected; // This is evil :/
				this.takeAndPlace(x, y, blockType);
			} else if (type === 'contextmenu') {
				this.takeAndPlace(x, y, 'empty');
			}
		}

		return false;
	};

	handleHalt = ({force = false} = {}) => {
		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();

		this.boardComponentProps.isForced = force;
		this.boardComponentProps.status = 'stop';
		this.boardComponentProps.currentInputIndex = null;
		this.renderBoardComponent();
	}

	handlePaused = () => {
		this.boardComponentProps.status = 'paused';
		this.renderBoardComponent();
	}

	handleOutput = (value) => {
		const clock = this.boardComponent.getClock();

		this.boardComponentProps.userOutput[this.caseIndex] = value;
		this.boardComponentProps.status = 'stop';
		this.renderBoardComponent();

		if (this.config.output[this.caseIndex] === value) {
			this.boardComponentProps.userOutputCorrectness[this.caseIndex] = true;
			this.maxClock = Math.max(this.maxClock, clock);

			if (this.config.output.length === this.caseIndex + 1) {
				this.boardComponentProps.isRapid = false;
				this.resetResults();
				this.onAnswer();
			} else {
				this.caseIndex++;
				this.executeCase();
			}
		} else {
			this.boardComponentProps.isRapid = false;
			this.boardComponentProps.userOutputCorrectness[this.caseIndex] = false;
		}

		this.renderBoardComponent();
	}
}

module.exports = Stage;
