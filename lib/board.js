const Block = require('./block');
const Data = require('./data');
const blockConfigs = require('./block-configs');
const EventEmitter = require('events');
const seedrandom = require('seedrandom');

class Board extends EventEmitter {
	constructor(config, blockSize) {
		super();

		this.height = config.height;
		this.width = config.width;
		this.clockLimit = config.clockLimit;

		this.status = 'stop';
		this.clock = 0;
		this.outputValue = null;
		this.blockSize = blockSize;

		this.blocks = [];
		for (let i = 0; i < this.height; i++) {
			const row = [];
			this.blocks.push(row);

			for (let j = 0; j < this.width; j++) {
				row.push(null);
			}
		}

		for (let x = 0; x < this.width; x++) {
			for (let y = 0; y < this.height; y++) {
				this.placeBlock({x, y, type: 'empty'});
			}
		}

		if (typeof config.inputX === 'number') {
			this.inputBlockX = [config.inputX];
		} else {
			this.inputBlockX = config.inputX;
		}
		this.inputBlockY = 0;
		this.outputBlockX = config.outputX;
		this.outputBlockY = config.height - 1;
	}

	get inputBlock() {
		return this.inputBlockX.map((x) => this.blocks[this.inputBlockY][x]);
	}

	get outputBlock() {
		return this.blocks[this.outputBlockY][this.outputBlockX];
	}

	get blockCount() {
		let count = 0;

		this.forBlocks((block) => {
			if (block.config.name !== 'empty') {
				count++;
			}
		});

		return count;
	}

	get weighedBlockCount() {
		let count = 0;

		this.forBlocks((block) => {
			if (block.config.name !== 'empty') {
				count += block.config.weight;
			}
		});

		return count;
	}

	get dataCount() {
		let count = 0;

		this.forBlocks((block) => {
			for (const queue of block.inputQueues.values()) {
				count += queue.length;
			}
			for (const queue of block.outputQueues.values()) {
				count += queue.length;
			}
		});

		return count;
	}

	get datas() {
		return this.blocks.reduce((previousRow, row) => (
			previousRow.concat(row.reduce((previousBlock, block) => {
				let datas = [];
				for (const direction of block.inputQueues.keys()) {
					datas = datas.concat(block.inputQueues.get(direction));
					datas = datas.concat(block.outputQueues.get(direction));
				}
				return previousBlock.concat(datas);
			}, []))
		), []);
	}

	// Generate the JSON serializable board data that can be exchanged between API
	get boardData() {
		const blocks = [];

		this.forBlocks((block, x, y) => {
			if (block.config.name !== 'empty') {
				blocks.push({
					x,
					y,
					type: block.config.name,
					rotate: block.rotate,
				});
			}
		});

		return blocks;
	}

	getBlock(x, y) {
		return this.blocks[y][x];
	}

	setBlockSize(blockSize) {
		this.blockSize = blockSize;
		this.forBlocks((block) => {
			block.size = blockSize;
		});
	}

	forBlocks(callback) {
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				const block = this.getBlock(x, y);
				callback.call(this, block, x, y);
			}
		}
	}

	getSeededRandom() {
		// Use arrays instead of objects in seeded JSON. Objects cannot be serialized uniquely.
		const blocks = [];

		this.forBlocks((block, x, y) => {
			if (block.config.name !== 'empty') {
				blocks.push([
					x,
					y,
					block.config.name,
					block.rotate,
				]);
			}
		});

		const seed = JSON.stringify(blocks);
		const random = seedrandom(seed);
		return random;
	}

	placeBlock({x, y, type, rotate}) {
		const config = Object.assign({}, blockConfigs[type]);
		config.x = x;
		config.y = y;
		config.rotate = rotate;
		config.name = type;

		const block = new Block(this, config, this.blockSize);
		block.on('erase', (data) => {
			this.emit('erase', block, data);
		});
		block.on('pass', (io) => {
			this.emit('pass', block, io);
		});
		this.blocks[y][x] = block;
	}

	// Run the board until the end
	// Similar to Stage#executeCase, but without DOM access.
	run(inputValue) {
		this.input(inputValue);

		// 頼む～ES6末尾再帰最適化実装してくれ～という気分
		const clockUp = () => {
			this.step();

			if (this.status === 'stop' || this.status === 'paused') {
				return null;
			}

			this.pass();

			if (this.status === 'stop' || this.status === 'paused') {
				return null;
			}

			if (this.clock >= this.clockLimit) {
				return null;
			}

			if (this.dataCount > 100) {
				return null;
			}

			return clockUp();
		};

		clockUp();
	}

	input(value) {
		const newValueArray = (typeof value === 'number') ? [value] : value;
		const inputData = newValueArray.map((v, i) => {
			const inputs = (typeof v === 'number') ? [v] : v;
			const newDatas = inputs.map((x) => {
				const newData = new Data(this, x);
				this.inputBlock[i].input('top', newData);
				return newData;
			});
			return newDatas;
		});

		this.status = 'executing';
		this.clock = 0;
		this.outputValue = null;

		return inputData;
	}

	output(value) {
		this.halt();
		this.outputValue = value;

		// Wait for the next tick to successfully break the clockUp loop
		process.nextTick(() => {
			this.emit('output', value);
		});
	}

	clearData() {
		this.forBlocks((block) => block.clearData());
	}

	step() {
		this.forBlocks((block) => block.step());
		this.clock++;

		if (this.datas.length === 0) {
			this.halt();
		} else {
			let noOutput = true;
			this.forBlocks((block) => {
				for (const queue of block.outputQueues.values()) {
					if (queue.length > 0) {
						noOutput = false;
						break;
					}
				}
			});
			if (noOutput) {
				this.pause();
			}
		}
	}

	pass() {
		this.forBlocks((block) => block.pass());

		if (this.datas.length === 0) {
			this.halt();
		}
	}

	halt() {
		this.status = 'stop';
		this.clearData();
		this.emit('halt');
	}

	pause() {
		this.status = 'paused';
		this.emit('paused');
	}
}

module.exports = Board;
