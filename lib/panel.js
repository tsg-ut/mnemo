const $ = require('jquery');
const assert = require('assert');

class Panel {
	constructor(stage) {
		this.stage = stage;
		this.parts = Object.keys(stage.config.parts).map((name) => {
			const count = stage.config.parts[name];
			return {name: name, count: count};
		});
		this.$panel = this.stage.$stage.find('.panel');
		this.selected = this.parts[0].name;
		this.update();
	}

	addItem(itemName, count) {
		for (let index = 0; index < this.parts.length; index++) {
			let obj = this.parts[index];
			const item = obj.name;
			if (item === itemName) {
				if (obj.count === null) {return true;}	// null means infinity
				this.setInventory(index, obj.count + count);
				return true;
			}
		}
		// if unable to find
		this.parts.push({name: itemName, count: count});
		return true;
	}

	removeItem(itemName, count) {	// TODO: when count > 1
		let currentCount = -1;
		for (let index = 0; index < this.parts.length; index++) {
			let obj = this.parts[index];
			const item = obj.name;
			if (item === itemName) {
				if (obj.count === null) return true;	// null means infinity
				this.setInventory(index, obj.count - count);
				return true;
			}
		}
		return false;
	}

	setInventory(index, count) {
		if (this.parts[index].count === null) {return true;}
		if (count <= 0) {
			this.parts.splice(index, 1);
			return true;
		}
		this.parts[index].count = count;
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

		let index = -1;
		let currentCount = -1;
		//this.parts.forEach((obj, iterator) => {
		for (let iterator = 0; iterator < this.parts.length; iterator++) {
			let obj = this.parts[iterator];

			if (obj.name === blockName) {
				index = iterator;
				currentCount = obj.count;
				break;
			}
		}
		if (index !== -1) {
			let rotate = 0;

			if (oldBlock.config.name === 'empty') {
				// just place the block
				this.setInventory(index, currentCount-1);
			} else if (oldBlock.config.name === blockName && oldBlock.config.rotatable) {
				rotate = (oldBlock.rotate + 1) % 4;
			} else {
				// take and place
				this.setInventory(index, currentCount-1);
				this.addItem(oldBlock.config.name, 1);
			}

			if (this.parts.indexOf(blockName) === -1) {
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
		const uniqueParts = new Map();

		this.parts.forEach((obj) => {
			uniqueParts.set(obj.name, obj.count);
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
				text: count!==null?count:'∞',
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
