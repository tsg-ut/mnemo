const $ = require('jquery');
const assert = require('assert');

class Panel {
	constructor(stage) {
		this.stage = stage;
		this.parts = new Map();
		Object.keys(stage.config.parts).forEach((name, index) => {
			const count = stage.config.parts[name];
			this.parts.set(name, count);
			if (index === 0) {
				this.selected = name;
			}
		});
		this.$panel = this.stage.$stage.find('.panel');
		this.update();
	}

	/**
	 *  panel上にblockを追加する
	 *  @param {string} itemName - 追加するblock名
	 *  @param {number} count - 追加する量
	 *  @return {bool} 処理が成功したかどうか
	 */
	addItem(itemName, count) {
		if (!this.parts.has(itemName)) {
			this.parts.set(itemName, count);
			return true;
		}
		const currentCount = this.parts.get(itemName);
		if (currentCount === null) {	// null means infinity
			return true;
		}
		this.parts.set(itemName, currentCount + count);
		return true;
	}

	/**
	 *  panel上のblockを減らす
	 *  @param {string} itemName - 消費するblock名
	 *  @param {number} count - 消費する量
	 *  @return {bool} 処理が成功したかどうか
	 */
	removeItem(itemName, count) {
		if (!this.parts.has(itemName)) {
			return false;
		}
		const currentCount = this.parts.get(itemName);
		if (currentCount === null) {	// null means infinity
			return true;
		}
		if (currentCount - count > 0) {
			this.parts.set(itemName, currentCount - count);
			return true;
		}
		if (currentCount - count < 0) {	// if panel doesn't have enough item
			return false;
		}
		this.parts.delete(itemName);
		return true;
	}

	takeAndPlace(x, y, blockName) {
		const oldBlock = this.stage.board.getBlock(x, y);
		assert(oldBlock, 'oldBlock is invalid');
		if (blockName === 'empty') {	// just take the block
			if (oldBlock.config.name !== 'empty') {
				// take the block from the board
				this.addItem(oldBlock.config.name, 1);
				this.stage.boardElement.placeBlock({x, y, type: blockName, rotate: 0});
				this.update();
			}
			return;
		}

		if (this.parts.has(blockName)) {
			let rotate = 0;

			if (oldBlock.config.name === 'empty') {
				// just place the block
				this.removeItem(blockName, 1);
			} else if (oldBlock.config.name === blockName && oldBlock.config.rotatable) {
				rotate = (oldBlock.rotate + 1) % 4;
			} else {
				// take and place
				this.removeItem(blockName, 1);
				this.addItem(oldBlock.config.name, 1);
			}

			if (!this.parts.has(blockName)) {
				this.selected = null;
			}

			this.stage.boardElement.placeBlock({x, y, type: blockName, rotate});
			this.update();
		} else if (
			!this.selected &&
			oldBlock.config.name !== 'empty' &&
			oldBlock.config.rotatable
		) {
			const rotate = (oldBlock.rotate + 1) % 4;
			this.stage.boardElement.placeBlock({x, y, type: oldBlock.config.name, rotate});
			this.update();
		}
	}

	update() {
		this.$panel.empty();
		this.parts.forEach((count, name) => {
			this.$panel.append($('<div/>', {
				class: 'block',
				attr: {
					'data-type': name,
					selected: this.selected === name,
				},
			}).append($('<div/>', {
				class: 'count',
				text: count === null ? '∞' : count,
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
