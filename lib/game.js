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
			this.$stage.remove();
			this.$stage = this.stagePrototype.clone();
			this.$stage.appendTo('.game-screen');
			this.currentStage = new Stage(this, this.configs[this.stageIndex++]);
		}
	}
}

module.exports = Game;
