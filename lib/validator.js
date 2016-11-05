const typeToConfig = require('./type-to-config');
const stages = require('../stages');
const {arrayEquals} = require('./util');

const blockNames = Object.keys(typeToConfig);

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

	// TODO: block positions should be unique
	// TODO: only usable blocks are used

	if (error) {
		return {pass: false, message: error};
	}

	// TODO: Score validation

	return {pass: true};
};
