const typeToConfig = require('./type-to-config');
const stages = require('../stages');
const blockNames = Object.keys(typeToConfig);

// Check the equality of two arrays *as sets*
const arrayEquals = module.exports.arrayEquals = (arrayA, arrayB) => {
	const setA = new Set(arrayA);
	const setB = new Set(arrayB);

	if (setA.size !== setB.size) {
		return false;
	}

	for (const item of setA) {
		if (!setB.has(item)) {
			return false;
		}
	}

	return true;
};

module.exports.toCSS = (coordinate) => ({
	left: `${coordinate.x}px`,
	top: `${coordinate.y}px`,
});

// Promisified setTimeout
module.exports.wait = (time) => (
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	})
);

module.exports.validateSubmission = (submission) => {
	const stage = submission.stage;

	if (!(typeof submission.stage === 'object')) {
		return {pass: false, message: 'stage data is missing'};
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
			if (!arrayEquals(Object.keys(block), ['x', 'y', 'name', 'rotate'])) {
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

			if (typeof block.name !== 'string') {
				return `name of block ${index} should be a string`;
			}

			if (!blockNames.includes(block.name)) {
				return `name of block ${index} is unknown`;
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
