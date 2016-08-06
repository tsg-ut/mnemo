const Data = require('./data');
const EventEmitter = require('events');

class Block extends EventEmitter {
	constructor(board, $block, config) {
		super();
		this.board = board;
		this.$block = $block;
		this.x = config.x;
		this.y = config.y;
		this.rotate = config.rotate;
		this.config = config;
		this.inputQueues = {
			top: [],
			left: [],
			right: [],
			bottom: [],
		};
		this.outputQueues = {
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
		if (!this.config.rotate_levels) {
			return direction;
		}

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
			case 'top':
				if (0 <= this.y-1) {
					this.board.getBlock(this.x,this.y-1).input('bottom', data);
				} else {
					data.fadeOut();
				}
				break;
			case 'bottom':
				if (this.board.height > this.y+1) {
					this.board.getBlock(this.x,this.y+1).input('top', data);
				} else {
					data.fadeOut();
				}
				break;
			case 'left':
				if (0 <= this.x-1) {
					this.board.getBlock(this.x-1,this.y).input('right', data);
				} else {
					data.fadeOut();
				}
				break;
			case 'right':
				if (this.board.width > this.x+1) {
					this.board.getBlock(this.x+1,this.y).input('left', data);
				} else {
					data.fadeOut();
				}
				break;
			default:
				break;
		}

	}

	input(position, data) {
		this.inputQueues[position].push(data);
	}

	step() {
		if (this.config.type === 'empty') {
			// Erase all data passed to the empty block
			for (let source in this.inputQueues) {
				const queue = this.inputQueues[source];
				while (queue.length) {
					const data = queue.shift();
					this.emit('erase', data);
				}
			}
		} else if (this.config.type === 'wire') {
			const rotatedPlugs = this.config.io.plugs.map((direction) => this.rotatedDirection(direction));

			for (let source in this.queues) {
				const queue = this.queues[source];

				// When data exists in pluged direction
				if (queue.length !== 0 && rotatedPlugs.includes(source)) {
					const destinations = rotatedPlugs.filter((direction) => direction !== source);
					const data = queue.shift();

					// pass through
					const input = {};
					input[source] = data;

					const output = {};
					destinations.forEach((direction) => {
						const data = new Data(this.board, data.value);
						outputQueues[direction].push(data);
						output[direction] = data;
					});

					this.emit('pass', {in: input, out: output});
				}

				// Erase data when data exists in non-pluged direction
				if (!rotatedPlugs.includes(source)) {
					while (queue.length) {
						const data = queue.shift();
						this.emit('erase', data);
					}
				}
			}
		} else if (this.config.type === 'calc') {
			const rotatedPlugs = this.config.io.plugs.map((direction) => this.rotatedDirection(direction));

			for (let source in this.queues) {
				const queue = this.queues[source];

				// When data exists in pluged direction
				if (queue.length !== 0 && rotatedPlugs.includes(source)) {
					const destinations = rotatedPlugs.filter((direction) => direction !== source);
					const data = queue.shift();

					// Calculate and pass through
					const input = {};
					input[source] = data;

					const output = {};
					destinations.forEach((direction) => {
						const data = new Data(this.board, this.config.func(data.value));
						outputQueues[direction].push(data);
						output[direction] = data;
					});

					this.emit('pass', {in: input, out: output});
				}

				// Erase data when data exists in non-pluged direction
				if (!rotatedPlugs.includes(source)) {
					while (queue.length) {
						const data = queue.shift();
						this.emit('erase', data);
					}
				}
			}
		} else if (this.config.type === 'calc2') {
			const sources = this.config.io.in.map((direction) => this.rotatedDirection(direction));
			const destination = this.rotatedDirection(this.config.io.out);

			// Execute calculation when all inputs are satisfied
			if (sources.every((source) => this.queues[source].length > 0)) {
				const datas = [];

				// Calculate and pass through
				const input = {};
				sources.forEach((source, index) => {
					const data = this.queues[source].shift();
					input[source] = data;
					datas.push(data);
				});

				const output = {};

				const outData = new Data(this.board, this.config.func(...datas.map((data) => data.value)));
				outputQueues[direction].push(outData);
				output[direction] = outData;

				this.emit('pass', {in: input, out: output});
			}

			// Erase data when data exists in non-pluged direction
			for (let source in this.queues) {
				if (!rotatedIns.includes(source)) {
					let queue = this.queues[source];
					while (queue.length) {
						const data = queue.shift();
						data.fadeOut();
					}
				}
			}
		} else if (this.config.type === 'calc-switch') {
			const sources = this.config.io.in.map((direction) => this.rotatedDirection(direction));
			const destinations = this.config.io.out.map((direction) => this.rotatedDirection(direction));

			// Execute calculation when all inputs are satisfied
			if (sources.every((source) => this.queues[source].length > 0)) {
				const datas = [];

				// Calculate and pass through
				const input = {};
				sources.forEach((source, index) => {
					const data = this.queues[source].shift();
					input[source] = data;
					datas.push(data);
				});

				const [directionIndex, value] = this.config.func(...datas.map((data) => data.value));

				const output = {};
				const data = new Data(this.board, this.config.func(value));
				const destination = destinations[directionIndex];
				outputQueues[direction].push(data);
				output[direction] = data;

				this.emit('pass', {in: input, out: output});
			}

			// Erase data when data exists in non-pluged direction
			for (let source in this.queues) {
				if (!rotatedIns.includes(source)) {
					const queue = this.queues[source];
					while (queue.length) {
						const data = queue.shift();
						data.fadeOut();
					}
				}
			}
		} else if (this.config.type === 'if'){
			if (this.config.io.in.every((source) => this.queues[source].length > 0)) {
				const dataA = this.queues[this.config.io.in[0]].shift();
				const dataB = this.queues[this.config.io.in[1]].shift();

				if (dataB.value){
					dataA.animate(this.center).promise().then(() => {
						this.emit(this.config.io.out[1], dataA.value);
						dataA.kill();
					});
					dataB.animate(this.center).promise().then(() => {
						dataB.kill();
					});
				} else {
					dataA.animate(this.center).promise().then(() => {
						this.emit(this.config.io.out[0], dataA.value);
						dataA.kill();
					});
					dataB.animate(this.center).promise().then(() => {
						dataB.kill();
					});
				}
			}
		}
	}
}

module.exports = Block;
