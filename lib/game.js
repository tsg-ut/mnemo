/* global ga */

const $ = require('jquery');
const qs = require('querystring');
const Stage = require('./stage');

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
				ga('send', 'event', 'menu', 'click stage selector', config.title);
				this.startStage(index);
			});

			return $stageName;
		});

		$('ol.stage-list').append($stageNames);

		$('.menu-screen button.start').click(() => {
			ga('send', 'event', 'menu', 'click start button');
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

			$result.find('.tweet').click((event) => {
				open(event.target.href, 'twitter', qs.stringify({
					status: 'no',
					width: 575,
					height: 400,
				}, ','));

				return false;
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
		this.currentStage = new Stage({
			config: this.configs[index],
			onClickExit: this.exitStage,
		});
		this.stageIndex = index;
		$('.screens').addClass('gaming');
		$('.result-layer .limit').hide();
		$('.github-fork-ribbon').hide();

		ga('send', 'event', 'stage', 'start stage', this.currentStage.config.title);

		// Display Modal
		if (this.currentStage.config.modal) {
			this.showModal(this.currentStage.config.modal);
		}
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
		const {boardData} = this.currentStage.board;
		const stageName = this.configs[this.stageIndex].name;
		const timestamp = Date.now();
		const item = localStorage.getItem('boardData');
		let properties = [];
		if (item !== null) {
			properties = JSON.parse(localStorage.getItem('boardData'));
		}
		properties.push({stageName, timestamp, boardData});
		try {
			localStorage.setItem('boardData', JSON.stringify(properties));
			return true;
		} catch (error) {
			return false;
		}
	}

	getStageIndexFromName(name) {
		return this.configs.findIndex((config) => (name === config.name));
	}

	loadStage(stageName, timestamp) {
		const item = localStorage.getItem('boardData');
		const properties = JSON.parse(item);

		const index = properties.findIndex((property) => (
			property.stageName === stageName &&
			property.timestamp === timestamp
		));

		if (index === -1) {
			return;
		}
		const {boardData} = properties[index];

		if (stageName === this.configs[this.stageIndex].name &&
				this.currentStage !== null) {
			this.currentStage.clearBoard();
		} else {
			this.exitStage();
			this.startStage(this.getStageIndexFromName(stageName));
		}
		this.currentStage.makeBoard(boardData);
	}

	exitStage = () => {
		this.currentStage.exit();

		const $newStage = this.stagePrototype.clone();
		this.$stage.replaceWith($newStage);
		this.$stage = $newStage;

		this.closeModal();
		this.closeResult();

		$('.screens').removeClass('gaming');
		$('.github-fork-ribbon').show();

		this.currentStage = null;
	}
}

module.exports = Game;
