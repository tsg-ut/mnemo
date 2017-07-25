/* global ga */

const $ = require('jquery');
const assert = require('assert');
const React = require('react');
const ReactDOM = require('react-dom');

const BoardComponent = require('./board-component.jsx');
const PanelComponent = require('./panel-component.jsx');
const api = require('./api');
const {normalizeStageInput, translateDateFromUnixTime} = require('./util');

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
			onDataLimitExceeded: this.handleDataLimitExceeded,
			onClockLimitExceeded: this.handleClockLimitExceeded,
			currentInputIndex: null,
			isRapid: false,
			isForced: false,
		};

		this.renderBoardComponent();

		this.panelComponentProps = {
			parts: this.config.parts,
		};

		this.renderPanelComponent();

		this.$stage = $('.stage');

		this.$ranking = this.$stage.siblings('.result-layer').find('.ranking');
		this.$result = this.$stage.siblings('.result-layer').find('.result');

		this.$savePanel = this.$stage.find('.save-panel-area');

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
			if (this.boardComponentProps.status !== 'executing') {
				this.boardComponentProps.isRapid = true;
				this.execute();
			} else {
				this.boardComponentProps.isRapid = !this.boardComponentProps.isRapid;
			}

			this.renderBoardComponent();
		});

		this.$savePanel.find('button.save-entry').click(() => {
			const flag = this.saveStage();
			if (!flag) {
				alert('セーブに失敗しました');
			}
			this.updateSaveEntries();
		});

		this.$stage.find('button.save').click(() => {
			this.updateSaveEntries();
			this.$savePanel.toggle();
		});

		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();
		this.isExecutingCases = false;

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

	saveStage() {
		const boardData = this.boardComponent.getBoardData();
		const stageName = this.config.name;
		const timestamp = Date.now();
		const item = localStorage.getItem('boardData');

		let properties = [];
		if (item !== null) {
			properties = JSON.parse(item);
		}

		properties.push({stageName, timestamp, boardData});
		try {
			localStorage.setItem('boardData', JSON.stringify(properties));
			return true;
		} catch (error) {
			return false;
		}
	}

	loadStage(timestamp) {
		const item = localStorage.getItem('boardData');
		const properties = JSON.parse(item);

		const index = properties.findIndex((property) => (
			property.stageName === this.config.name &&
			property.timestamp === timestamp
		));

		if (index === -1) {
			return;
		}
		const boardData = properties[index].boardData;

		this.clearBoard();
		this.makeBoard(boardData);
	}

	getSaveEntries() {
		const item = localStorage.getItem('boardData');
		if (item === null) {
			return [];
		}
		const properties = JSON.parse(item);
		return properties.filter((prop) => (this.config.name === prop.stageName));
	}

	removeSaveEntry(timestamp) {
		const item = localStorage.getItem('boardData');
		let properties = [];
		if (item !== null) {
			properties = JSON.parse(item);
		}
		const index = properties.findIndex((property) => (
			property.stageName === this.config.name &&
			property.timestamp === timestamp
		));

		assert(index !== -1);

		properties.splice(index, 1);
		try {
			localStorage.setItem('boardData', JSON.stringify(properties));
			return true;
		} catch (error) {
			return false;
		}
	}

	updateSaveEntries() {
		const entries = this.getSaveEntries();
		this.$savePanel.find('.saved-entries').empty().append(entries.map((entry) => (
			$('<li/>', {
				class: 'saved-item',
			}).append([
				$('<button/>', {
					class: 'timestamp',
					text: translateDateFromUnixTime(entry.timestamp),
				}),
				$('<button/>', {
					class: 'delete',
				}).append($('<i/>', {
					class: 'fa fa-times',
					'aria-hidden': 'true',
				})),
			])
		)));
		this.$savePanel.find('.timestamp').each((index, element) => {
			const $timestampButton = $(element);
			const entry = entries[index];
			$timestampButton.click(() => {
				this.loadStage(entry.timestamp);
				this.updateSaveEntries();
			});
		});
		this.$savePanel.find('.delete').each((index, element) => {
			const $delButton = $(element);
			const entry = entries[index];
			$delButton.click(() => {
				this.removeSaveEntry(entry.timestamp);
				this.updateSaveEntries();
			});
		});
	}

	exit() {
		ReactDOM.unmountComponentAtNode(this.$stage.find('.panel-area').get(0));
		ReactDOM.unmountComponentAtNode(this.$stage.find('.board-area').get(0));
	}

	execute() {
		if (this.isExecutingCases) {
			return;
		}

		this.isExecutingCases = true;

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

	clearBoard() {
		for (let x = 0; x < this.config.width; x++) {
			for (let y = 0; y < this.config.height; y++) {
				this.takeAndPlace(x, y, 'empty');
			}
		}
	}

	makeBoard(boardData) {
		boardData.forEach((block) => {
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
		if (this.boardComponentProps.status === 'stop') {
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
		// TODO delete parameter force

		this.isExecutingCases = false;
		this.boardComponentProps.isRapid = false;
		this.$stage.find('button.stop').hide();
		this.$stage.find('button.execute').show();

		this.boardComponentProps.isForced = true;
		this.boardComponentProps.status = 'stop';
		this.boardComponentProps.currentInputIndex = null;
		this.renderBoardComponent();
	}

	handlePaused = () => {
		this.boardComponentProps.status = 'paused';
		this.renderBoardComponent();
	}

	handleOutput = (value) => {
		// FIXME BAD decrement? (because of last clear clock)
		const clock = this.boardComponent.getClock() - 1;

		this.boardComponentProps.userOutput[this.caseIndex] = value;
		this.boardComponentProps.status = 'stop';
		this.renderBoardComponent();

		if (this.config.output[this.caseIndex] === value) {
			this.boardComponentProps.userOutputCorrectness[this.caseIndex] = true;
			this.maxClock = Math.max(this.maxClock, clock);

			if (this.config.output.length === this.caseIndex + 1) {
				this.boardComponentProps.currentInputIndex = null;
				this.isExecutingCases = false;
				this.boardComponentProps.isRapid = false;
				this.$stage.find('button.stop').hide();
				this.$stage.find('button.execute').show();
				this.resetResults();
				this.onAnswer();
			} else {
				this.caseIndex++;
				this.executeCase();
			}
		} else {
			this.boardComponentProps.currentInputIndex = null;
			this.isExecutingCases = false;
			this.boardComponentProps.isRapid = false;
			this.boardComponentProps.userOutputCorrectness[this.caseIndex] = false;
			this.$stage.find('button.stop').hide();
			this.$stage.find('button.execute').show();
		}

		this.renderBoardComponent();
	}

	handleDataLimitExceeded = () => {
		const $dataLimit = this.$stage.siblings('.result-layer').find('.data-limit');
		$dataLimit.show();

		this.handleHalt({force: true});
	}

	handleClockLimitExceeded = (clockLimit) => {
		const $clockLimit = this.$stage.siblings('.result-layer').find('.clock-limit');
		$clockLimit.find('.limit-value').text(clockLimit);
		$clockLimit.show();

		this.handleHalt({force: true});
	}
}

module.exports = Stage;
