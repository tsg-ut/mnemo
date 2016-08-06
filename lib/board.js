const async = require('async');
const $ = require('jquery');
const Block = require('./block');
const Data = require('./data');
const typeToConfig = require('./type-to-config');

class Board {
	constructor(stage) {
		this.stage = stage;
		this.height = stage.config.height;
		this.width = stage.config.width;
		this.$board = stage.$stage.find('.board');

		this.blocks = [];
		for (var i = 0; i < this.height; i++) {
			const row = [];
			this.blocks.push(row);

			const $row = $('<div/>', {
				'class': 'row',
				attr: {'data-y': i},
			});
			this.$board.find('.rows').append($row);

			for (var j = 0; j < this.width; j++) {
				const $block = $('<div/>', {
					'class': 'block',
					attr: {
						'data-x': j,
						'data-y': i,
					},
				});
				$row.append($block);
				row.push(null);
			}
		}

		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.placeBlock(x, y, 'empty');
			}
		}

		this.inputBlockX = stage.config.inputX;
		this.inputBlockY = 0;
		this.outputBlockX = stage.config.outputX;
		this.outputBlockY = stage.config.height - 1;

		this.dataSize = 0; // 盤上dataの個数
		this.executing = false;
	}

	get inputBlock() {
		return this.blocks[this.inputBlockY][this.inputBlockX];
	}

	get outputBlock() {
		return this.blocks[this.outputBlockY][this.outputBlockX];
	}

	getBlock(x, y) {
		return this.blocks[y][x];
	}

	getBlockElement(x, y) {
		return this.$board.find('.block').filter((index, element) => $(element).data('x') === x && $(element).data('y') === y)
	}

	placeBlock(x, y, type) {
		const config = typeToConfig[type];
		config.x = x;
		config.y = y;
		config.rotate = 0;
		config.name = type;
		const oldBlock = this.blocks[y][x];
		if (oldBlock && oldBlock.config.name !== "empty" ){
			this.stage.panel.parts.push(oldBlock.config.name);
			if (oldBlock.config.name === config.name && config.rotate_levels) {
				config.rotate = (oldBlock.rotate + 1) % config.rotate_levels;
			}
		}
		this.getBlockElement(x, y).attr("data-rotate", config.rotate * 90);
		const block = new Block(this, this.getBlockElement(x, y), config);
		this.blocks[y][x] = block;
	}

	input(value) {
		this.executing = true;
		this.inputBlock.input('top', new Data(this, this.inputBlock.top, value));
	}

	output(value) {
		this.stage.output(value);
	}

	clearData() {
		for (var x = 0; x < this.width; x++) { // 動かずに待機しているdataの削除
			for (var y = 0; y < this.height; y++) {
				let queues = this.getBlock(x, y).queues;
				for ( let source in queues ) {
					let queue = queues[source];
					while (queue.length) {
						let data = queue.shift();
						data.fadeOut();
					}
				}
			}
		}
		this.executing = false; // dataの動きを止める
	}

}

module.exports = Board;
