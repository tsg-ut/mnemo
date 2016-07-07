const Data = require('./data');

class Block {
	constructor(board, $block, config) {
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
		if (direction === 'bottom' && this.y + 1 === this.board.height && this.x === this.board.outputBlockX) {
			this.board.output(data.value);
			data.fadeOut();
			return;
		}


		switch (direction){
			case "top":
				if (0<= this.y-1) {
					this.board.getBlock(this.x,this.y-1).input("bottom", data);
				} else {
					data.fadeOut();
				}
				break;
			case "bottom":
				if (this.board.height > this.y+1) {
					this.board.getBlock(this.x,this.y+1).input("top", data);
				} else {
					data.fadeOut();
				}
				break;
			case "left":
				if (0 <= this.x-1) {
					this.board.getBlock(this.x-1,this.y).input("right", data);
				} else {
					data.fadeOut();
				}
				break;
			case "right":
				if (this.board.width > this.x+1) {
					this.board.getBlock(this.x+1,this.y).input("left", data);
				} else {
					data.fadeOut();
				}
				break;
			default:
				break;
		}

	}

	input(position, data) {
		this.queues[position].push(data);
		this.checkEmission();
	}

	checkEmission() {
		if (this.config.type === 'empty') {
			for (let source in this.queues) {
				const queue = this.queues[source];
				queue.forEach((data) => data.fadeOut());
			}
		} else if (this.config.type === 'wire') {
			for (let source in this.queues) {
				const queue = this.queues[source];

				if (queue.length !== 0 && this.config.io.plugs.includes(source)) {
					const destinations = this.config.io.plugs.filter((direction) => direction !== source);
					const data = queue.shift();
					// pass through
					data.animate(this.center).then(() => {
						destinations.forEach((destination) => {
							this.emit(destination, data.value);
						});
						data.kill();
					});
				} else if (!this.config.io.plugs.includes(source)) {
					queue.forEach((data) => data.fadeOut());
				}
			}
		} else if (this.config.type === 'calc') {
			for (let source in this.queues) {
				const queue = this.queues[source];

				if (queue.length !== 0 && this.config.io.plugs.includes(source)) {
					const destinations = this.config.io.plugs.filter((direction) => direction !== source);
					const data = queue.shift();
					data.animate(this.center).then(() => {
						destinations.forEach((destination) => {
							this.emit(destination, this.config.func(data.value));
						});
						data.kill();
					});
				} else if (!this.config.io.plugs.includes(source)) {
					queue.forEach((data) => data.fadeOut());
				}
			}
		} else if (this.config.type === 'calc2') {
			if (this.config.io.in.every((source) => this.queues[source].length > 0)) {
				const dataA = this.queues[this.config.io.in[0]].shift();
				const dataB = this.queues[this.config.io.in[1]].shift();
				dataA.animate(this.center).promise().then(() => {
					this.emit(this.config.io.out, this.config.func(dataA.value, dataB.value));
					dataA.kill();
				});
				dataB.animate(this.center).promise().then(() => {
					dataB.kill();
				});
			}
		}
	}

	emit(direction, value) {
		if (this.board.executing) {
			const data = new Data(this.board, this.center, value);
			data.animate(this[direction]).then(() => {
				this.passTo(direction, data);
			});
		}
	}
}

module.exports = Block;
