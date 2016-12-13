/* global ga */

const $ = require('jquery');
const qs = require('querystring');
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
				ga('send', 'event', 'menu', 'click stage selector', config.title);
				this.startStage(index);
			});

			return $stageName;
		});

		$('ol.stage-list').append($stageNames);

		$(window).resize(() => {
			if (this.currentStage) {
				this.currentStage.updateStyles();
			}

			// スマホでの横長表示を改善
			if ($(window).width() > $(window).height()) {
				$('meta[name=viewport]').attr('content', 'width=1600');
			} else {
				$('meta[name=viewport]').attr('content', 'width=1200');
			}
		}).resize();

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
		this.currentStage = new Stage(this, this.configs[index]);
		this.stageIndex = index;
		$('.screens').addClass('gaming');
		$('.result-layer .limit').hide();

		ga('send', 'event', 'stage', 'start stage', this.currentStage.config.title);

		// Display Modal
		if (this.currentStage.config.modal) {
			this.showModal(this.currentStage.config.modal);
		}
	}

	answer() {
		const blocks = this.currentStage.board.weighedBlockCount;
		const clocks = this.currentStage.maxClock;

		const score = calculateScore({blocks, clocks, stage: this.currentStage.config});

		$('.result .tweet').attr('href', `https://twitter.com/intent/tweet?${qs.stringify({
			text: `MNEMO「${this.currentStage.config.title}」ステージを ${score} 点でクリアしました！`,
			url: 'https://mnemo.pro/',
			hashtags: 'MNEMO',
			related: 'tsg_ut:MNEMOを開発している東京大学のサークル',
		})}`);

		ga('send', 'event', 'stage', 'clear stage', this.currentStage.config.title, score);

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
