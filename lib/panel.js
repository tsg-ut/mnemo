const $ = require('jquery');

class Panel {
	constructor(stage) {
		this.stage = stage;
		this.parts = stage.config.parts;
		this.$panel = this.stage.$stage.find('.panel');
		this.selected = this.parts[0];
		this.update();
		this.stage.$stage.click((event) => {
			const $target = $(event.target);
			if ($target.parents().filter('.panel').length) {
				return;
			}
			this.selected = null;
			this.$panel.find('.block').attr("selected", false);
		});
	}

	takeAndPlace(x, y, blockName) {
		const index = this.parts.indexOf(blockName);
		if (index !== -1) {
			this.parts.splice(index, 1);
            if (this.parts.indexOf(blockName) == -1) {
                this.selected = null; // maybe, "empty" is better than null
            }
			this.stage.board.placeBlock(x, y, blockName);
			this.update();
		}
	}

	update() {
		const uniqueParts = $.unique(this.parts.slice(0)).map((name) => ({
			count: this.parts.filter((part) => name === part).length,
			name: name,
		}));

		this.$panel.empty();
		uniqueParts.forEach((part) => {
			this.$panel.append($('<div/>', {
				'class': 'block',
				attr: {
					'data-type': part.name,
					selected: this.selected === part.name,
				},
			}).append($('<div/>', {
				'class': 'count',
				text: part.count,
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
