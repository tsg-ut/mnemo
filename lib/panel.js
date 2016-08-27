const $ = require('jquery');
const assert = require('assert');

class Panel {
	constructor(stage) {
		this.stage = stage;
		this.parts = Object.keys(stage.config.parts).map((name) => {
			const count = stage.config.parts[name];
			return Array.from({length: count}, () => name);
		}).reduce((a, b) => a.concat(b), []);
		this.$panel = this.stage.$stage.find('.panel');
		this.selected = this.parts[0];
		this.update();
	}

	takeAndPlace(x, y, blockName) {
		const oldBlock = this.stage.board.getBlock(x, y);
		assert(oldBlock, 'oldBlock is invalid');
		if (blockName === 'empty') {
			if (oldBlock.config.name !== 'empty') {
				this.parts.push(oldBlock.config.name);
				this.stage.boardElement.placeBlock(x, y, blockName, 0);
				this.update();
			}
			return;
		}

		const index = this.parts.indexOf(blockName);

		if (index !== -1) {
			let rotate = 0;

			if (oldBlock.config.name !== 'empty') {
				if (oldBlock.config.name === blockName && oldBlock.config.rotatable) {
					rotate = (oldBlock.rotate + 1) % 4;
				} else {
					this.parts.splice(index, 1);
					this.parts.push(oldBlock.config.name);
				}
			} else {
				this.parts.splice(index, 1);
			}

			if (this.parts.indexOf(blockName) === -1) {
				this.selected = null;
			}

			this.stage.boardElement.placeBlock(x, y, blockName, rotate);
			this.update();
		} else if (!this.selected && oldBlock.config.name !== 'empty' &&
				oldBlock.config.rotatable) {
			const rotate = (oldBlock.rotate + 1) % 4;
			this.stage.boardElement.placeBlock(x, y, oldBlock.config.name, rotate);
			this.update();
		}
	}

	update() {
		const uniqueParts = new Map();

		this.parts.forEach((name) => {
			if (!uniqueParts.has(name)) {
				uniqueParts.set(name, 0);
			}
			uniqueParts.set(name, uniqueParts.get(name) + 1);
		});

		this.$panel.empty();
		uniqueParts.forEach((count, name) => {
			this.$panel.append($('<div/>', {
				class: 'block',
				attr: {
					'data-type': name,
					selected: this.selected === name,
				},
			}).append($('<div/>', {
				class: 'count',
				text: count,
			})));
		});

		this.selected = this.$panel.find('.block[selected]').first().data('type');

		this.$panel.find('.block').click((event) => {
			const $block = $(event.target);

			this.$panel.find('.block').attr('selected', false);
			$block.attr('selected', true);

			this.selected = $block.data('type');
			this.stage.$selectedBlock = $block;
		});
	}
}

module.exports = Panel;
