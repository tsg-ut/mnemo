const EventEmitter = require('events');

class Block extends EventEmitter {
	constructor($block, config) {
		super();
		this.$block = $block;
		this.x = config.x;
		this.y = config.y;
		this.config = config;
		this.queues = {
			top: [],
			left: [],
			right: [],
			bottom: [],
		};
	}

	get center() {
		return {
			x: (this.x + .5) * 50,
			y: (this.y + .5) * 50,
		};
	}

	get top() {
		return {
			x: (this.x + .5) * 50,
			y: this.y * 50,
		};
	}

	get left() {
		return {
			x: this.x * 50,
			y: (this.y + .5) * 50,
		};
	}

	get right() {
		return {
			x: (this.x + 1) * 50,
			y: (this.y + .5) * 50,
		};
	}

	get bottom() {
		return {
			x: (this.x + .5) * 50,
			y: (this.y + 1) * 50,
		};
	}

	input(position, data) {
		this.queues[position].push(data);
		this.checkEmission();
	}

	checkEmission() {
		for (let source in this.queues) {
			const queue = this.queues[source];
			if (queue.length !== 0 && this.config.io.plugs.includes(source)) {
				const destination = this.config.io.plugs.find((direction) => direction !== source);
				const data = queue.shift();
				// pass through
				data.$element.animate(data.getPosition('center'), 400, 'linear').promise().then(() => {
					return data.$element.animate(data.getPosition(destination), 400, 'linear');
				});
			}
		}
	}
}

module.exports = Block;
