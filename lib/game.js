const $ = require('jquery');
const Stage = require('./stage');

class Game {
	constructor(configs) {
		this.configs = configs;
		this.$stage = $('.stage');
		this.stageIndex = 0;
		this.stagePrototype = this.$stage.clone();
		this.currentStage = new Stage(this, configs[this.stageIndex++]);

		$(window).resize(() => this.currentStage.updateStyles());
	}

	answer(flag) {
		if (!flag){
			// 間違えた場合はゲーム終了か何か
			alert('you are too clever to answer corectly');
		} else if (this.configs.length <= this.stageIdx){
			// 全てのステージを終了
			alert('wei wei wei');
		} else {
			//ここはなんかもう少しうまいやり方を知りたい
			this.$stage.remove();
			this.stagePrototype.clone().appendTo('.container');
			this.$stage = $('.stage');
			this.currentStage = new Stage(this, this.configs[this.stageIndex++]);
		}
	}
}

module.exports = Game;
