const Block = require('./block');
const Data = require('./data');
const typeToConfig = require('./type-to-config');
const EventEmitter = require('events');

class Board extends EventEmitter {
	constructor(config) {
		super();

		this.height = config.height;
		this.width = config.width;

		this.executing = false;
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

		if (typeof config.inputX === "number") {
			this.inputBlockX = [config.inputX];
		}
		else {
			this.inputBlockX = config.inputX;
		}
		this.inputBlockY = 0;
		this.outputBlockX = config.outputX;
		this.outputBlockY = config.height - 1;
	}

	get inputBlock() {
		return this.inputBlockX.map((x) =>  this.blocks[this.inputBlockY][x]);
	}

	get outputBlock() {
		return this.blocks[this.outputBlockY][this.outputBlockX];
	}

	get datas() {
		return this.blocks.reduce((previousRow, row) => (
			previousRow.concat(row.reduce((previousBlock, block) => {
				let datas = [];
				for (let direction in block.inputQueues) {
					datas = datas.concat(block.inputQueues[direction]);
					datas = datas.concat(block.outputQueues[direction]);
				}
				return previousBlock.concat(datas);
			}, []))
		), []);
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
		const config = Object.assign({}, typeToConfig[type]);
		config.x = x;
		config.y = y;
		config.rotate = rotate;
		config.name = type;

		const block = new Block(this, config);
		block.on('erase', (data) => {
			this.emit('erase', block, data);
		});
		block.on('pass', (io) => {this.emit('pass', block, io)});
		this.blocks[y][x] = block;
	}

	input(value) {
		const newValueArray = (typeof value === "number") ? [value] : value;
		
		const inputData = newValueArray.map( (v,i) => {
			const newData = new Data(this, v);
			this.inputBlock[i].input('top', newData);
			return newData;
		});
		
		this.executing = true;
		this.clock = 0;
		return inputData;
	}

	output(value) {
		this.halt();

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
		}
	}

	pass() {
		this.forBlocks((block) => block.pass());

		if (this.datas.length === 0) {
			this.halt();
		}
	}

	halt() {
		this.executing = false;
		this.clearData();
		this.emit('halt');
	}
}

module.exports = Board;
