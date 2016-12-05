module.exports = {
	name: 'fibonacci',
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
	inputX: 5,
	outputX: 5,
	input: [null, null, null, 20],
	output: [null, null, null, 6765],
	ioGenerator: (random) => {
		const fibonacci = [1, 1];

		for (let i = 2; i < 20; i++) {
			fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
		}

		const candidates = Array.from({length: 18}, (item, index) => index + 2); // 2..19
		const inputs = [];

		// Shuffle array and take heading 3
		const index1 = Math.floor(random() * 18);
		inputs.push(candidates[index1]);
		candidates[index1] = candidates[0];

		const index2 = Math.floor(random() * 17) + 1;
		inputs.push(candidates[index2]);
		candidates[index2] = candidates[1];

		const index3 = Math.floor(random() * 16) + 2;
		inputs.push(candidates[index3]);

		inputs.sort((a, b) => a - b);

		return {
			input: [
				inputs[0],
				inputs[1],
				inputs[2],
				20,
			],
			output: [
				fibonacci[inputs[0] - 1],
				fibonacci[inputs[1] - 1],
				fibonacci[inputs[2] - 1],
				fibonacci[19],
			],
		};
	},
	width: 11,
	height: 11,
	clockLimit: 500,
	statement: 'n番目のフィボナッチ数を計算してみよう!',
	title: 'フィボナッチ数',
};
