const $ = require('jquery');

class Panel {
	constructor(partsLimit, $panel) {
		this.parts = new Map();
		Object.keys(partsLimit).forEach((name, index) => {
			const count = partsLimit[name];
			this.parts.set(name, count);
			if (index === 0) {
				this.selected = name;
			}
		});
		this.$panel = $panel;
		this.update();
	}

	/**
	 *  panel上にblockを追加する
	 *  @param {string} blockName - 追加するblock名
	 *  @return {undefined}
	 */
	push(blockName) {
		let currentCount = 0;
		if (this.parts.has(blockName)) {
			currentCount = this.parts.get(blockName);
		}
		if (currentCount !== null) {	// null means infinity
			this.parts.set(blockName, currentCount + 1);
		}
		this.update();
	}

	/**
	 *  panel上のblockを減らす
	 *  @param {string} blockName - 消費するblock名
	 *  @return {undefined}
	 */
	take(blockName) {
		const currentCount = this.parts.get(blockName);
		if (currentCount !== null) {	// null means infinity
			if (currentCount - 1 === 0) { // take the last block
				this.selected = null;
				this.parts.delete(blockName);
			} else {
				this.parts.set(blockName, currentCount - 1);
			}
		}
		this.update();
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

		this.$panel.find('.block').click((event) => {
			const $block = $(event.target);

			this.$panel.find('.block').attr('selected', false);
			$block.attr('selected', true);

			this.selected = $block.data('type');
		});
	}
}

module.exports = Panel;
