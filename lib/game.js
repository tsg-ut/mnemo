const $ = require('jquery');
const Stage = require('./stage');

class Game {
	constructor(configs) {
		this.configs = configs;
		this.$stage = $('.stage');
		this.stageIndex = 0;
		this.stagePrototype = this.$stage.clone();
		this.currentStage = null;

		const saveData = localStorage.getItem('MNEMO_Achievement');
		if (saveData) {
			this.achievement = JSON.parse(localStorage.getItem('MNEMO_Achievement'));
		} else {
			this.achievement = [];
			for (var i = 0; i < this.configs.length; i++) {
				this.achievement.push(false);
			}
			localStorage.setItem('MNEMO_Achievement', JSON.stringify(this.achievement));
		}

		const $stageNames = this.configs.map((config, index) => {
			const $stageName = $('<li/>', {
				class: 'stage-name',
				text: config.statement,
				'stage-index': index,
			});

			$stageName.click(() => {
				this.startStage(index);
			});

			if (this.achievement[index]) {
				$stageName.addClass('cleared');
			}

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
	}

	startStage(index) {
		this.currentStage = new Stage(this, this.configs[index]);
		this.stageIndex = index;
		$('.screens').addClass('gaming');
	}

	answer() {
		if (this.configs.length <= this.stageIndex) {
			// 全てのステージを終了
			alert('wei wei wei');
		} else {
			this.exitStage();

			this.achievement[this.stageIndex] = true;
			localStorage.setItem('MNEMO_Achievement', JSON.stringify(this.achievement));
			$('.stage-name[stage-index = "'+ this.stageIndex + '"]').addClass('cleared');

			this.startStage(this.stageIndex + 1);
		}
	}

	exitStage() {
		// TODO: Should graceful shutdown of this.currentStage be necessary?
		this.$stage.remove();
		this.$stage = this.stagePrototype.clone();
		this.$stage.appendTo('.game-screen');

		$('.screens').removeClass('gaming');
		this.currentStage = null;
	}
}

module.exports = Game;
