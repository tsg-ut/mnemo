// Shim ES7 Array::includes function
require('core-js/fn/array/includes');

const Data = require('./data');
const EventEmitter = require('events');

class Block extends EventEmitter {
	constructor(board, config, size) {
		super();
		this.board = board;
		this.x = config.x;
		this.y = config.y;
		this.rotate = config.rotate;
		this.config = config;
		this.size = size;
		this.inputQueues = new Map([
			['top', []],
			['left', []],
			['right', []],
			['bottom', []],
		]);

		this.outputQueues = new Map([
			['top', []],
			['left', []],
			['right', []],
			['bottom', []],
		]);
	}

	get center() {
		return {
			x: (this.x + .5) * this.size,
			y: (this.y + .5) * this.size,
		};
	}

	get top() {
		return {
			x: (this.x + .5) * this.size,
			y: this.y * this.size,
		};
	}

	get left() {
		return {
			x: this.x * this.size,
			y: (this.y + .5) * this.size,
		};
	}

	get right() {
		return {
			x: (this.x + 1) * this.size,
			y: (this.y + .5) * this.size,
		};
	}

	get bottom() {
		return {
			x: (this.x + .5) * this.size,
			y: (this.y + 1) * this.size,
		};
	}

	rotatedDirection(direction) {
		if (!this.config.rotatable) {
			return direction;
		}

		const directions = ['top', 'right', 'bottom', 'left'];
		return directions[(directions.indexOf(direction) + this.rotate) % 4];
	}

	input(position, data) {
		this.inputQueues.get(position).push(data);
	}

	step() {
		if (this.config.type === 'empty') {
			// Erase all data passed to the empty block
			for (const queue of this.inputQueues.values()) {
				while (queue.length) {
					const data = queue.shift();
					this.emit('erase', data);
				}
			}
		} else if (this.config.type === 'wire') {
			const rotatedPlugs = this.config.io.plugs.map((direction) => (
				this.rotatedDirection(direction)
			));

			for (const [source, queue] of this.inputQueues.entries()) {
				// When data exists in pluged direction
				if (queue.length !== 0 && rotatedPlugs.includes(source)) {
					const destinations = rotatedPlugs.filter((direction) => direction !== source);
					const data = queue.shift();

					// pass through
					const input = new Map([[source, data]]);

					const output = new Map();
					destinations.forEach((direction) => {
						const outData = new Data(this.board, data.value);
						this.outputQueues.get(direction).push(outData);
						output.set(direction, outData);
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
			const rotatedPlugs = this.config.io.plugs.map((direction) => (
				this.rotatedDirection(direction)
			));

			for (const [source, queue] of this.inputQueues.entries()) {
				// When data exists in pluged direction
				if (queue.length !== 0 && rotatedPlugs.includes(source)) {
					const destinations = rotatedPlugs.filter((direction) => direction !== source);
					const data = queue.shift();

					// Calculate and pass through
					const input = new Map([[source, data]]);

					const output = new Map();
					destinations.forEach((direction) => {
						const outData = new Data(this.board, this.config.func(data.value));
						this.outputQueues.get(direction).push(outData);
						output.set(direction, outData);
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
			if (sources.every((source) => this.inputQueues.get(source).length > 0)) {
				const datas = [];

				// Calculate and pass through
				const input = new Map();
				sources.forEach((source) => {
					const data = this.inputQueues.get(source).shift();
					input.set(source, data);
					datas.push(data);
				});

				const outData = new Data(
					this.board,
					this.config.func(...datas.map((data) => data.value))
				);
				this.outputQueues.get(destination).push(outData);
				const output = new Map([[destination, outData]]);

				this.emit('pass', {in: input, out: output});
			}

			// Erase data when data exists in non-pluged direction
			for (const [source, queue] of this.inputQueues.entries()) {
				if (!sources.includes(source)) {
					while (queue.length) {
						const data = queue.shift();
						this.emit('erase', data);
					}
				}
			}
		} else if (this.config.type === 'calc-switch') {
			const sources = this.config.io.in.map((direction) => (
				this.rotatedDirection(direction)
			));
			const destinations = this.config.io.out.map((direction) => (
				this.rotatedDirection(direction)
			));

			// Execute calculation when all inputs are satisfied
			if (sources.every((source) => this.inputQueues.get(source).length > 0)) {
				const datas = [];

				// Calculate and pass through
				const input = new Map();
				sources.forEach((source) => {
					const data = this.inputQueues.get(source).shift();
					input.set(source, data);
					datas.push(data);
				});

				const values = datas.map((data) => data.value);
				const [directionIndex, value] = this.config.func(...values);

				const data = new Data(this.board, value);
				const destination = destinations[directionIndex];
				this.outputQueues.get(destination).push(data);
				const output = new Map([[destination, data]]);

				this.emit('pass', {in: input, out: output});
			}

			// Erase data when data exists in non-pluged direction
			for (const [source, queue] of this.inputQueues.entries()) {
				if (!sources.includes(source)) {
					while (queue.length) {
						const data = queue.shift();
						this.emit('erase', data);
					}
				}
			}
		} else if (this.config.type === 'wireX') {
			const oppositeDirection = {
				top: 'bottom',
				bottom: 'top',
				left: 'right',
				right: 'left'
			};
			for (const [source, queue] of this.inputQueues.entries()) {
				const destination = oppositeDirection[source];

				// When data exists in pluged direction
				if (queue.length !== 0) {
					const data = queue.shift();

					// pass through
					const input = new Map([[source, data]]);

					const outData = new Data(this.board, data.value);
					this.outputQueues.get(destination).push(outData);
					const output = new Map([[destination, outData]]);

					this.emit('pass', {in: input, out: output});
				}
			}
		}
	}

	pass() {
		for (const [direction, queue] of this.outputQueues.entries()) {
			while (queue.length) {
				const data = queue.shift();
				this.passTo(direction, data);
			}
		}
	}

	passTo(direction, data) {
		if (
			direction === 'bottom' &&
			this.y + 1 === this.board.height &&
			this.x === this.board.outputBlockX
		) {
			this.board.output(data.value);
			this.emit('erase', data);
			return;
		}

		switch (direction) {
			case 'top':
				if (0 <= this.y - 1) {
					this.board.getBlock(this.x, this.y - 1).input('bottom', data);
				} else {
					this.emit('erase', data);
				}
				break;
			case 'bottom':
				if (this.board.height > this.y + 1) {
					this.board.getBlock(this.x, this.y + 1).input('top', data);
				} else {
					this.emit('erase', data);
				}
				break;
			case 'left':
				if (0 <= this.x - 1) {
					this.board.getBlock(this.x - 1, this.y).input('right', data);
				} else {
					this.emit('erase', data);
				}
				break;
			case 'right':
				if (this.board.width > this.x + 1) {
					this.board.getBlock(this.x + 1, this.y).input('left', data);
				} else {
					this.emit('erase', data);
				}
				break;
		}
	}

	clearData() {
		// Erase data when data exists in non-pluged direction
		[this.inputQueues, this.outputQueues].forEach((queues) => {
			for (const queue of queues.values()) {
				while (queue.length) {
					const data = queue.shift();
					this.emit('erase', data);
				}
			}
		});
	}
}

module.exports = Block;
