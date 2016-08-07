const async = require('async');
const $ = require('jquery');
const Block = require('./block');
const Data = require('./data');
const typeToConfig = require('./type-to-config');
const EventEmitter = require('events');

class Board extends EventEmitter {
	constructor(config) {
		super();

		this.height = config.height;
		this.width = config.width;
		this.clock = 0;

		this.blocks = [];
		for (var i = 0; i < this.height; i++) {
			const row = [];
			this.blocks.push(row);

			for (var j = 0; j < this.width; j++) {
				row.push(null);
			}
		}

		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.placeBlock(x, y, 'empty');
			}
		}

		this.inputBlockX = config.inputX;
		this.inputBlockY = 0;
		this.outputBlockX = config.outputX;
		this.outputBlockY = config.height - 1;

		this.executing = false;
	}

	get inputBlock() {
		return this.blocks[this.inputBlockY][this.inputBlockX];
	}

	get outputBlock() {
		return this.blocks[this.outputBlockY][this.outputBlockX];
	}

	get datas() {
		const blockDatas = this.blocks.map((row) => row.map((block) => {
			let datas = [];
			for (let direction in block.inputQueues) {
				datas = datas.concat(block.inputQueues[direction]);
				datas = datas.concat(block.outputQueues[direction]);
			}
			return datas;
		}));

		// flatten
		return blockDatas.reduce((a, b) => a.concat(b), [])
	}

	getBlock(x, y) {
		return this.blocks[y][x];
	}

	forBlocks(callback) {
		for (let x = 0; x < this.width; x++) {
			for (let y = 0; y < this.height; y++) {
				const block = this.getBlock(x, y);
				callback.call(this, block, x, y);
			}
		}
	}

	placeBlock(x, y, type, rotate) {
		const config = typeToConfig[type];
		config.x = x;
		config.y = y;
		config.rotate = rotate;
		config.name = type;

		const block = new Block(this, config);
		block.on('erase', () => {this.emit('erase', block, ...arguments)});
		block.on('pass', () => {this.emit('pass', block, ...arguments)});
		this.blocks[y][x] = block;
	}

	input(value) {
		this.executing = true;
		this.inputBlock.input('top', new Data(this, this.inputBlock.top, value));
	}

	output(value) {
		this.emit('output', value);
	}

	clearData() {
		this.forBlocks((block) => block.clearData());
	}

	clockUp() {
		this.forBlocks((block) => block.step());
		this.forBlocks((block) => block.pass());
		this.clock++;
	}
}

module.exports = Board;
