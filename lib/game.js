const $ = require('jquery');
const Stage = require('./stage');
const {wait} = require('./util');
const {calculateScore} = require('./validator');

class Game {
	constructor(configs) {
		this.configs = configs;
		this.$stage = $('.stage');
		this.stageIndex = 0;
		this.stagePrototype = this.$stage.clone();
		this.currentStage = null;

		const $stageNames = this.configs.map((config, index) => {
			const $stageName = $('<li/>', {
				class: 'stage-name',
				text: config.title,
			});

			$stageName.click(() => {
				this.startStage(index);
			});

			return $stageName;
		});

		$('ol.stage-list').append($stageNames);

		$(window).resize(() => this.currentStage && this.currentStage.updateStyles());
		$('.menu-screen button.start').click(() => {
			this.startStage(0);
		});

		$('.menu-screen button.select').click(() => {
			$('ol.stage-list').toggleClass('active');
		});

		$('.menu-screen button.credit').click(() => {
			$('ul.credit-body').toggleClass('active');
		});

		// Initialize Modals
		$('.modal').each((index, element) => {
			const $modal = $(element);

			$modal.find('.close, .close-content').click(() => {
				$modal.hide();
			});
		});

		// Initialize results
		$('.result').each((index, element) => {
			const $result = $(element);

			$result.find('.close').click(() => {
				$result.hide();
			});

			$result.find('.next').click(() => {
				this.nextStage();
			});

			$result.find('.register').click((event) => {
				this.currentStage.onRegister(event);
			});
		});

		// Initialize limit modals
		$('.limit').each((index, element) => {
			const $limit = $(element);

			$limit.find('.ok').click(() => {
				$limit.hide();
			});
		});
	}

	startStage(index) {
		this.currentStage = new Stage(this, this.configs[index]);
		this.stageIndex = index;
		$('.screens').addClass('gaming');
		$('.result-layer .limit').hide();

		// Display Modal
		if (this.currentStage.config.modal) {
			this.showModal(this.currentStage.config.modal);
		}
	}

	answer() {
		const blocks = this.currentStage.board.weighedBlockCount;
		const clocks = this.currentStage.maxClock;

		const score = calculateScore({blocks, clocks, stage: this.currentStage.config});

		$('.result').show();

		const waitTime = $.fx.off ? 0 : 1200;

		wait(waitTime).then(() => (
			$({value: 0}).animate({value: 1}, {
				duration: 500,
				easing: 'linear',
				step: (value) => {
					$('.result .clocks').text(Math.floor(clocks * value));
					$('.result .blocks').text(Math.floor(blocks * value));
				},
			}).promise()
		)).then(() => {
			$('.result .clocks').text(clocks);
			$('.result .blocks').text(blocks);
		});

		const scoreWaitTime = $.fx.off ? 0 : 1400;

		wait(scoreWaitTime).then(() => (
			$({value: 0}).animate({value: 1}, {
				duration: 2000,
				easing: 'linear',
				step: (value) => {
					$('.result .score-value').text(Math.min(score, Math.floor(10000 * value)));
				},
			}).promise()
		)).then(() => {
			$('.result .score-value').text(score);
		});
	}

	nextStage() {
		if (this.configs.length <= this.stageIndex) {
			// 全てのステージを終了
			alert('wei wei wei');
		} else {
			this.exitStage();
			this.startStage(this.stageIndex + 1);
		}
	}

	showModal(modalName) {
		const $modal = $('.modal').filter((index, element) => $(element).hasClass(modalName));

		if ($modal.length === 1) {
			$modal.show();
		}
	}

	closeModal() {
		$('.modal').hide();
	}

	closeResult() {
		$('.result').hide();
	}

	saveStage() {
		const boardData = this.currentStage.board.boardData;
		const name = this.configs[this.stageIndex].name;
		const format = 'YYYY-MM-DD hh:mm';
		const date = new Date();
		const timestamp = format.replace(/YYYY/g, date.getFullYear())
			.replace(/MM/g, date.getMonth() + 1)
			.replace(/DD/g, date.getDate())
			.replace(/hh/g, date.getHours())
			.replace(/mm/g, date.getMinutes());
		const item = localStorage.getItem('boardData');
		let properties = {};
		if (item !== null) {
			properties = JSON.parse(localStorage.getItem('boardData'));
		}
		if (!(name in properties)) {
			properties[name] = [];
		}
		properties[name].push({timestamp, boardData});
		try {
			localStorage.setItem('boardData', JSON.stringify(properties));
			return true;
		} catch (error) {
			return false;
		}
	}

	getStageIndexFromName(name) {
		for (let index = 0; index < this.configs.length; index++) {
			if (name === this.configs[index].name) {
				return index;
			}
		}
		return -1;
	}

	loadStage(stageName, timestamp) {
		const item = localStorage.getItem('boardData');
		const properties = JSON.parse(item)[stageName];

		let boardData = null;
		for (let i = 0; i < properties.length; i++) {
			if (properties[i].timestamp === timestamp) {
				boardData = properties[i].boardData;
				break;
			}
		}

		if (boardData === null) {
			return;
		}

		this.exitStage();

		this.startStage(this.getStageIndexFromName(stageName));
		this.currentStage.makeBoard(boardData);
	}

	exitStage() {
		// TODO: Should graceful shutdown of this.currentStage be necessary?
		const $newStage = this.stagePrototype.clone();
		this.$stage.replaceWith($newStage);
		this.$stage = $newStage;

		this.closeModal();
		this.closeResult();

		$('.screens').removeClass('gaming');
		this.currentStage = null;
	}
}

module.exports = Game;
