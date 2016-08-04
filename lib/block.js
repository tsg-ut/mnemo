const Data = require('./data');

class Block {
	constructor(board, $block, config) {
		this.board = board;
		this.$block = $block;
		this.x = config.x;
		this.y = config.y;
		this.rotate = config.rotate;
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

	rotatedDirection(direction) {
		if (!this.config.rotate_levels)
			return direction;
		const directions = ['top', 'right', 'bottom', 'left'];
		return directions[(directions.indexOf(direction) + this.rotate) % 4];
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
				while (queue.length) {
					let data = queue.shift();
					data.fadeOut();
				}
			}
		} else if (this.config.type === 'wire') {
			const rotatedPlugs = this.config.io.plugs.map((direction) => this.rotatedDirection(direction));
			for (let source in this.queues) {
				const queue = this.queues[source];

				if (queue.length !== 0 && rotatedPlugs.includes(source)) {
					const destinations = rotatedPlugs.filter((direction) => direction !== source);
					const data = queue.shift();
					// pass through
					data.animate(this.center).then(() => {
						destinations.forEach((destination) => {
							this.emit(destination, data.value);
						});
						data.kill();
					});
				} else if (!rotatedPlugs.includes(source)) {
					queue.forEach((data) => data.fadeOut());
				}
			}
		} else if (this.config.type === 'calc') {
			const rotatedPlugs = this.config.io.plugs.map((direction) => this.rotatedDirection(direction));
			for (let source in this.queues) {
				const queue = this.queues[source];

				if (queue.length !== 0 && rotatedPlugs.includes(source)) {
					const destinations = rotatedPlugs.filter((direction) => direction !== source);
					const data = queue.shift();
					data.animate(this.center).then(() => {
						destinations.forEach((destination) => {
							this.emit(destination, this.config.func(data.value));
						});
						data.kill();
					});
				} else if (!rotatedPlugs.includes(source)) {
					queue.forEach((data) => data.fadeOut());
				}
			}
		} else if (this.config.type === 'calc2') {
			const rotatedIns = this.config.io.in.map((direction) => this.rotatedDirection(direction));
			const rotatedOut = this.rotatedDirection(this.config.io.out);
			if (rotatedIns.every((source) => this.queues[source].length > 0)) {
				const datas = rotatedIns.map((source) => this.queues[source].shift());
				datas[0].animate(this.center).promise().then(() => {
					this.emit(rotatedOut, this.config.func(...datas.map((data) => data.value)));
					datas[0].kill();
				});
				for (let data of datas.slice(1)) {
					data.animate(this.center).promise().then(() => {
						data.kill();
					});
				}
			}
			for (let source in this.queues) {
				if (!rotatedIns.includes(source)) {
					let queue = this.queues[source];
					queue.forEach((data) => data.fadeOut());
				}
			}
		} else if (this.config.type === 'calc-switch') {
			const rotatedIns = this.config.io.in.map((direction) => this.rotatedDirection(direction));
			const rotatedOuts = this.config.io.out.map((direction) => this.rotatedDirection(direction));
			if (rotatedIns.every((source) => this.queues[source].length > 0)) {
				const datas = rotatedIns.map((source) => this.queues[source].shift());
				datas[0].animate(this.center).promise().then(() => {
					const [directionIndex, value] = this.config.func(...datas.map((data) => data.value));
					this.emit(rotatedOuts[directionIndex], value);
					datas[0].kill();
				});
				for (let data of datas.slice(1)) {
					data.animate(this.center).promise().then(() => {
						data.kill();
					});
				}
			}
			for (let source in this.queues) {
				if (!rotatedIns.includes(source)) {
					let queue = this.queues[source];
					queue.forEach((data) => data.fadeOut());
				}
			}
			for (let source in this.queues) {
				if (!this.config.io.in.includes(source)) {
					let queue = this.queues[source];
					while (queue.length) {
						let data = queue.shift();
						data.fadeOut();
					}
				}
			}
		}
	}

	emit(direction, value) {
		const data = new Data(this.board, this.center, value);

		if (this.board.executing) {
			data.animate(this[direction]).then(() => {
				this.passTo(direction, data);
			});
		} else {
			data.fadeOut();
		}
	}
}

module.exports = Block;
