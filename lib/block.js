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
		switch (direction){
			case "top":
				if (0<= this.y-1)
					this.board.getBlock(this.x,this.y-1).input("bottom", data);
				break;
			case "bottom":
				if (this.board.height > this.y+1)
					this.board.getBlock(this.x,this.y+1).input("top", data);
				break;
			case "left":
				if (0 <= this.x-1)
					this.board.getBlock(this.x-1,this.y).input("right", data);
				break;
			case "right":
				if (this.board.width > this.x+1)
					this.board.getBlock(this.x+1,this.y).input("left", data);
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
		for (let source in this.queues) {
			const queue = this.queues[source];

			if (this.config.type === 'empty') {
				// nop
			} else if (this.config.type === 'wire') {
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
				}
			} else if (this.config.type === 'calc') {
				if (queue.length !== 0 && this.config.io.plugs.includes(source)) {
					const destinations = this.config.io.plugs.filter((direction) => direction !== source);
					const data = queue.shift();
					data.animate(this.center).then(() => {
						destinations.forEach((destination) => {
							this.emit(destination, this.config.func(data.value));
						});
						data.kill();
					});
				}
			}
		}
	}

	emit(direction, value) {
		const data = new Data(this.board, this.center, value);
		data.animate(this[direction]).then(() => {
			this.passTo(direction, data);
		});
	}
}

module.exports = Block;
