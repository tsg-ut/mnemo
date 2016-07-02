const EventEmitter = require('events');
const Data = require('./data');

class Block extends EventEmitter {
	constructor(board, $block, config) {
		super();
		this.board = board;
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

	passTo(direction, data) {
	}

	input(position, data) {
		this.queues[position].push(data);
		this.checkEmission();
	}

	checkEmission() {
		for (let source in this.queues) {
			const queue = this.queues[source];
			if (queue.length !== 0 && this.config.io.plugs.includes(source)) {
				const destinations = this.config.io.plugs.filter((direction) => direction !== source);
				const data = queue.shift();
				// pass through
				data.$element.animate(data.getPosition('center'), 400, 'linear').promise().then(() => {
					destinations.forEach((destination) => {
						const outData = new Data(this, 'center', data.value);
						outData.$element.animate(outData.getPosition(destination), 400, 'linear').promise().then(() => {
						});
					});
					data.kill();
				});
			}
		}
	}
}

module.exports = Block;
