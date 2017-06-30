const EventEmitter = require('events');
const Data = require('./data');
const PassEvent = require('./pass-event');

class Block extends EventEmitter {
	constructor(board, config) {
		super();
		this.board = board;
		this.x = config.x;
		this.y = config.y;
		this.rotate = config.rotate || 0;
		this.name = config.name;
		this.config = config;
		this.inputExists = false; // indicates whether self has input
		this.outputExists = false; // indicates whether self has anything as output now
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
		if (this.config.type === 'wire' || this.config.type === 'calc') {
			this.rotatedPlugs = this.config.io.plugs.map((direction) => (this.rotatedDirection(direction)));
		}
	}

	rotatedDirection(direction) {
		if (!this.config.rotatable) {
			return direction;
		}

		const directions = ['top', 'right', 'bottom', 'left'];
		return directions[(directions.indexOf(direction) + this.rotate) % 4];
	}

	input(position, data) {
		this.inputExists = true;
		this.inputQueues.get(position).push(data);
		this.emit('get', {direction: position, data});
	}

	step() {
		this.inputExists = false;

		switch (this.config.type) {
			case 'empty': {
				// Erase all data passed to the empty block
				for (const queue of this.inputQueues.values()) {
					while (queue.length) {
						const data = queue.shift();
						this.emit('erase', data);
					}
				}
				break;
			}
			case 'wire': {
				for (const [source, queue] of this.inputQueues.entries()) {
					// When data exists in pluged direction
					if (queue.length === 0) {
						continue;
					}
					if (this.rotatedPlugs.includes(source)) {
						const destinations = this.rotatedPlugs.filter((direction) => direction !== source);
						const data = queue.shift();

						// pass through
						const input = new Map([[source, data]]);

						const output = new Map();
						destinations.forEach((direction) => {
							const outData = new Data(this.board, data.value);
							this.outputQueues.get(direction).push(outData);
							output.set(direction, outData);
						});

						this.emit('pass', new PassEvent({in: input, out: output}));
						this.outputExists = true;
					} else {
						// Erase data when data exists in non-pluged direction
						while (queue.length) {
							const data = queue.shift();
							this.emit('erase', data);
						}
					}
				}
				break;
			}
			case 'calc': {
				for (const [source, queue] of this.inputQueues.entries()) {
					// When data exists in pluged direction
					if (queue.length !== 0 && this.rotatedPlugs.includes(source)) {
						const destinations = this.rotatedPlugs.filter((direction) => direction !== source);
						const data = queue.shift();

						// Calculate and pass through
						const input = new Map([[source, data]]);

						const output = new Map();
						destinations.forEach((direction) => {
							const value = this.config.func(data.value);
							const outData = new Data(this.board, isNaN(value) ? 0 : value);
							this.outputQueues.get(direction).push(outData);
							output.set(direction, outData);
						});

						this.emit('pass', new PassEvent({in: input, out: output}));
						this.outputExists = true;
					}

					// Erase data when data exists in non-pluged direction
					if (!this.rotatedPlugs.includes(source)) {
						while (queue.length) {
							const data = queue.shift();
							this.emit('erase', data);
						}
					}
				}
				break;
			}
			case 'calc2': {
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

					const value = this.config.func(...datas.map((data) => data.value));
					const outData = new Data(this.board, isNaN(value) ? 0 : value);
					this.outputQueues.get(destination).push(outData);
					const output = new Map([[destination, outData]]);

					this.emit('pass', new PassEvent({in: input, out: output}));
					this.outputExists = true;
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
				break;
			}
			case 'calc-switch': {
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
					const {directionIndex, value} = this.config.func(...values);

					const data = new Data(this.board, isNaN(value) ? 0 : value);
					const destination = destinations[directionIndex];
					this.outputQueues.get(destination).push(data);
					const output = new Map([[destination, data]]);

					this.emit('pass', new PassEvent({in: input, out: output}));
					this.outputExists = true;
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
				break;
			}
			case 'wireX': {
				const oppositeDirection = {
					top: 'bottom',
					bottom: 'top',
					left: 'right',
					right: 'left',
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

						this.emit('pass', new PassEvent({in: input, out: output}));
						this.outputExists = true;
					}
				}
				break;
			}
			case 'wireF': {
				for (const [source, queue] of this.inputQueues.entries()) {

					// When data exists in pluged direction
					if (queue.length === 0) {
						continue;
					}
					if(source in this.config.io.flow) {
						const destinations = this.config.io.flow[source];
						const data = queue.shift();

						// pass through
						const input = new Map([[source, data]]);

						const output = new Map();
						destinations.forEach((direction) => {
							const outData = new Data(this.board, data.value);
							this.outputQueues.get(direction).push(outData);
							output.set(direction, outData);
						});

						this.emit('pass', new PassEvent({in: input, out: output}));
						this.outputExists = true;
					} else {
						// Erase data when data exists in non-pluged direction
						while (queue.length) {
							const data = queue.shift();
							this.emit('erase', data);
						}
					}
				}
				break;
			}
		}
	}

	hand() {
		this.outputExists = false;

		for (const [direction, queue] of this.outputQueues.entries()) {
			while (queue.length) {
				const data = queue.shift();
				this.handTo(direction, data);
			}
		}
	}

	handTo(direction, data) {
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
					const nextBlock = this.board.getBlock(this.x, this.y - 1);
					nextBlock.input('bottom', data);
					this.emit('hand', data);
				} else {
					this.emit('erase', data);
				}
				break;
			case 'bottom':
				if (this.board.height > this.y + 1) {
					const nextBlock = this.board.getBlock(this.x, this.y + 1);
					nextBlock.input('top', data);
					this.emit('hand', data);
				} else {
					this.emit('erase', data);
				}
				break;
			case 'left':
				if (0 <= this.x - 1) {
					const nextBlock = this.board.getBlock(this.x - 1, this.y);
					nextBlock.input('right', data);
					this.emit('hand', data);
				} else {
					this.emit('erase', data);
				}
				break;
			case 'right':
				if (this.board.width > this.x + 1) {
					const nextBlock = this.board.getBlock(this.x + 1, this.y);
					nextBlock.input('left', data);
					this.emit('hand', data);
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
