const $ = require('jquery');
const Stage = require('./stage');

class Game {
	constructor($stage, configs) {
		this.configs = configs;
		this.$stage = $stage;
		this.stageIdx = 0;
		this.retrieve = this.$stage.clone();
		this.stage = new Stage(this, configs[this.stageIdx++]);
	}

	answer(flag) {
		if (!flag){
			// 間違えた場合はゲーム終了か何か
			alert('you are too clever to answer corectly');
		}
		else if (this.configs.length <= this.stageIdx){
			// 全てのステージを終了
			alert('wei wei wei');
		}
		else{
			//ここはなんかもう少しうまいやり方を知りたい
			this.$stage.remove();
			this.retrieve.appendTo('.container');
			this.$stage = $('.stage');
			this.retrieve = this.$stage.clone();//何故かもう一度こうしないとうまく動かない
			this.stage = new Stage(this, this.configs[this.stageIdx++]);
		}
	}
}

module.exports = Game;
