const $ = require('jquery');
const anime = require('animejs');
const Stage = require('./stage');

class Game {
	constructor(configs) {
		this.configs = configs;
		this.$stage = $('.stage');
		this.stageIndex = 0;
		this.stagePrototype = this.$stage.clone();
		this.currentStage = null;

		$(window).resize(() => this.currentStage.updateStyles());
		$('.menu-screen button.start').click(() => {
			this.startStage(0);
		});
	}

	startStage(index) {
		this.currentStage = new Stage(this, this.configs[index]);
		this.stageIndex = index;
		$('.screens').addClass('gaming');
	}

	answer() {
		if (this.configs.length <= this.stageIdx){
			// 全てのステージを終了
			alert('wei wei wei');
		} else {
			this.exitStage();

			// 何らかの処理

			this.startStage(this.stageIndex + 1)
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
