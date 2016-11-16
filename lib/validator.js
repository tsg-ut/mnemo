const blockConfigs = require('./block-configs');
const stages = require('../stages');
const Board = require('./board');
const {arrayEquals, zip} = require('./util');

const blockNames = Object.keys(blockConfigs);

// https://github.com/tsg-ut/mnemo/wiki/%E3%82%B9%E3%82%B3%E3%82%A2%E3%81%AE%E4%BB%95%E6%A7%98#%E8%A8%88%E7%AE%97%E5%BC%8F
module.exports.calculateScore = ({clocks: C, blocks: B, stage}) => {
	const {clockLimit: C_L, width: W, height: H} = stage;

	const P_C = Math.floor(500 * Math.exp(2 * (H - C) / (C_L - 2 * H) * Math.log(5 / 2))) * 10;
	const P_B = Math.floor(500 * Math.exp((H - B) / (H * (W - 1)) * Math.log(5 / 2))) * 10;

	return P_C + P_B;
};

module.exports.validateSubmission = (submission) => {
	if (typeof submission.stage !== 'string') {
		return {pass: false, message: 'stage data is missing'};
	}

	const stage = stages.find((s) => s.name === submission.stage);

	if (typeof stage !== 'object') {
		return {pass: false, message: 'stage data is invalid'};
	}

	if (!Array.isArray(submission.board)) {
		return {pass: false, message: 'board should be an array'};
	}

	if (submission.board.length === 0) {
		return {pass: false, message: 'board must at least have one block'};
	}

	let error = null;

	submission.board.forEach((block, index) => {
		const message = (() => {
			if (!arrayEquals(Object.keys(block), ['x', 'y', 'type', 'rotate'])) {
				return `keys of block ${index} are invalid`;
			}

			if (!Number.isInteger(block.x)) {
				return `x position of block ${index} should be an integer`;
			}

			if (block.x < 0 || stage.width <= block.x) {
				return `x position of block ${index} exceeds the board size`;
			}

			if (!Number.isInteger(block.y)) {
				return `y position of block ${index} should be an integer`;
			}

			if (block.y < 0 || stage.height <= block.y) {
				return `y position of block ${index} exceeds the board size`;
			}

			if (typeof block.type !== 'string') {
				return `type of block ${index} should be a string`;
			}

			if (!blockNames.includes(block.type)) {
				return `type of block ${index} is unknown`;
			}

			if (!Number.isInteger(block.rotate)) {
				return `rotation of block ${index} should be an integer`;
			}

			if (block.rotate < 0 || 4 <= block.rotate) {
				return `rotation of block ${index} is invalid`;
			}

			return null;
		})();

		if (message !== null) {
			error = message;
		}
	});

	if (error) {
		return {pass: false, message: error};
	}

	// Validate uniqueness of the block positions
	const positions = new Set();
	submission.board.forEach((block) => {
		const index = block.y * stage.width + block.x;
		positions.add(index);
	});

	if (positions.size !== submission.board.length) {
		return {pass: false, message: 'positions of blocks are not unique'};
	}

	// Validate if the only usable blocks are used
	const blockCounts = new Map();
	submission.board.forEach((block) => {
		if (blockCounts.has(block.type)) {
			blockCounts.set(block.type, blockCounts.get(block.type) + 1);
		} else {
			blockCounts.set(block.type, 1);
		}
	});

	for (const [type, count] of blockCounts.entries()) {
		if (!{}.hasOwnProperty.call(stage.parts, type)) {
			return {pass: false, message: 'used blocks are not matching to the stage'};
		}

		const allowedCount = stage.parts[type];

		if (allowedCount !== null && count > allowedCount) {
			return {pass: false, message: 'used blocks are not matching to the stage'};
		}
	}

	// Validate if this passes test cases

	const board = new Board({
		width: stage.width,
		height: stage.height,
		inputX: stage.inputX,
		outputX: stage.outputX,
	});

	submission.board.forEach((block) => {
		board.placeBlock(block);
	});

	let maxClock = 0;

	for (const [input, output] of zip(stage.input, stage.output)) {
		board.run(input);

		if (board.outputValue !== output) {
			return {pass: false, message: 'the board cannot clear the stage'};
		}

		maxClock = Math.max(maxClock, board.clock);
	}

	return {pass: true, clocks: maxClock, blocks: board.blockCount};
};
