module.exports = {
	name: 'parity',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		conditional: null,
		transistor: null,
		diode: null,
	},
	inputX: 9,
	outputX: 9,
	input: [null, null, null],
	output: [null, null, null],
	ioGenerator: (random) => {
		const sumOfDigits = (n) => (
			n.toString().split('').map((d) => parseInt(d)).reduce((a, b) => a + b)
		);

		const parity = (n) => sumOfDigits(n) % 10;

		const inputs = [];

		// Sum of digits is less than 10
		inputs.push((() => {
			let n = null;

			do {
				n = 1000 + Math.floor(9000 * random());
			} while (!(sumOfDigits(n) < 10));

			return n;
		})());

		// Sum of digits is less than 20
		inputs.push((() => {
			let n = null;

			do {
				n = 1000 + Math.floor(9000 * random());
			} while (!(10 <= sumOfDigits(n) && sumOfDigits(n) < 20));

			return n;
		})());

		// Sum of digits is equal or greater than 20
		inputs.push((() => {
			let n = null;

			do {
				n = 1000 + Math.floor(9000 * random());
			} while (!(20 <= sumOfDigits(n)));

			return n;
		})());

		return {
			input: inputs,
			output: inputs.map(parity),
		};
	},
	width: 19,
	height: 19,
	clockLimit: 500,
	statement: '与えられた四桁の数の各桁の和をmod 10したものを計算してみよう!',
	title: 'パリティ',
};
