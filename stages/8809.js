const assert = require('assert');

module.exports = {
	name: '8809',
	version: 1,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		junctionR: null,
		junctionL: null,
		junctionT: null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-10': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'times-2': null,
		'times-10': null,
		'div-2': null,
		'div-10': null,
		add: null,
		sub: null,
		mul: null,
		div: null,
		log: null,
		mod: null,
		pow: null,
		equal: null,
		neq: null,
		gt: null,
		lt: null,
		diode: null,
		conditional: null,
		transistor: null,
	},
	inputX: 5,
	outputX: 5,
	input: [null, null, null, null, 9609348],
	output: [null, null, null, null, 7],
	ioGenerator: (random) => {
		const calc = (number) => (
			number.toString().split('').map((digit) => (
				[1, 0, 0, 0, 1, 0, 1, 0, 2, 1][parseInt(digit)]
			)).reduce((previous, current) => previous + current)
		);

		let inputs = [];

		do {
			const digits = Array.from({length: 10}, (element, index) => index);
			const digitCandidates = [...digits, ...digits];

			// shuffle
			for (let i = digitCandidates.length; i > 0; i--) {
				const shuffleIndex = Math.floor(random() * i);
				[digitCandidates[i - 1], digitCandidates[shuffleIndex]] =
				[digitCandidates[shuffleIndex], digitCandidates[i - 1]];
			}

			// Generate test cases
			inputs = Array(4).fill().map((element, index) => {
				const inputDigits = digitCandidates.slice(index * 5, (index + 1) * 5);
				assert(inputDigits.length === 5);

				// If heading digit is zero, swap the first non-zero digit with the heading zero.
				if (inputDigits[0] === 0) {
					const nonZeroIndex = inputDigits.findIndex((digit) => digit !== 0);
					assert(nonZeroIndex !== -1);
					[inputDigits[0], inputDigits[nonZeroIndex]] =
					[inputDigits[nonZeroIndex], inputDigits[0]];
				}

				const input = inputDigits.map((digit) => digit.toString()).join('');
				assert(input.length === 5);

				return parseInt(input);
			});

		// Retry if the output is not unique
		} while (new Set(inputs.map(calc)).size !== 4);

		return {
			input: [
				...inputs,
				9609348,
			],
			output: [
				...(inputs.map(calc)),
				7,
			],
		};
	},
	width: 11,
	height: 11,
	clockLimit: 200,
	statement: 'プログラマーなら1時間で解ける問題です！',
	title: '8809=6',
};
