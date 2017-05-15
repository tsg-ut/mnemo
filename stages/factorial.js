module.exports = {
	name: 'factorial',
	version: 4,
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
	inputX: 6,
	outputX: 6,
	input: [null, null, null, 15],
	output: [null, null, null, 1307674368000],
	ioGenerator: (random) => {
		const candidates = Array.from({length: 13}, (item, index) => index + 2); // 2..14
		const inputs = [];

		// Shuffle array and take heading 3
		const index1 = Math.floor(random() * 13);
		inputs.push(candidates[index1]);
		candidates[index1] = candidates[0];

		const index2 = Math.floor(random() * 12) + 1;
		inputs.push(candidates[index2]);
		candidates[index2] = candidates[1];

		const index3 = Math.floor(random() * 11) + 2;
		inputs.push(candidates[index3]);

		inputs.sort((a, b) => a - b);

		const factorial = (n) => (n === 1) ? 1 : n * factorial(n - 1);

		return {
			input: [
				inputs[0],
				inputs[1],
				inputs[2],
				15,
			],
			output: [
				factorial(inputs[0]),
				factorial(inputs[1]),
				factorial(inputs[2]),
				factorial(15),
			],
		};
	},
	width: 13,
	height: 13,
	clockLimit: 500,
	statement: '階乗を計算してみよう!',
	title: '階乗',
};
