module.exports = {
	name: 'conditional03',
	version: 4,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null,
	},
	inputX: 4,
	outputX: 4,
	input: [5, 3, null, null, null],
	output: [0, 5, null, null, null],
	ioGenerator: (random) => {
		const candidates = [0, 1, 2, 4, 6];
		const inputs = [];

		// Shuffle array and take heading 3
		const index1 = Math.floor(random() * 5);
		inputs.push(candidates[index1]);
		candidates[index1] = candidates[0];

		const index2 = Math.floor(random() * 4) + 1;
		inputs.push(candidates[index2]);
		candidates[index2] = candidates[1];

		const index3 = Math.floor(random() * 3) + 2;
		inputs.push(candidates[index3]);

		inputs.sort((a, b) => a - b);

		const outputs = inputs.map((input) => ((input + 2) % 7));

		return {
			input: [
				5,
				3,
				inputs[0],
				inputs[1],
				inputs[2],
			],
			output: [
				0,
				5,
				outputs[0],
				outputs[1],
				outputs[2],
			],
		};
	},
	width: 9,
	height: 9,
	clockLimit: 50,
	statement: 'mod7で2を足してみよう(入力は[0,6]であることが保証されている）',
	title: '条件分岐 -基本- 3',
};
