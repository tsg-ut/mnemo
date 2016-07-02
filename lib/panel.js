const $ = require('jquery');

class Panel {
	constructor(stage, parts) {
		this.stage = stage;
		this.parts = parts;
		this.$panel = this.stage.$stage.find('.panel');
		this.selected = this.parts[0];
		this.update();
	}

	takeAndPlace(x, y, blockName) {
		const index = this.parts.indexOf(blockName);
		if (index !== -1) {
			this.parts.splice(index, 1);
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
	}
}

module.exports = Panel;
