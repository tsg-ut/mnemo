module.exports = {
	name: 'sqrt-easy',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		equal: null,
		neq: null,
		conditional: null,
		transistor: null,
		diode: null,
	},
	inputX: 4,
	outputX: 4,
	input: [null, null, null, 225],
	output: [null, null, null, 15],
	ioGenerator: (random) => {
		const candidates = Array.from({length: 13}, (item, index) => index + 2); // 2..14
		const outputs = [];

		// Shuffle array and take heading 3
		const index1 = Math.floor(random() * 13);
		outputs.push(candidates[index1]);
		candidates[index1] = candidates[0];

		const index2 = Math.floor(random() * 12) + 1;
		outputs.push(candidates[index2]);
		candidates[index2] = candidates[1];

		const index3 = Math.floor(random() * 11) + 2;
		outputs.push(candidates[index3]);

		outputs.sort((a, b) => a - b);

		return {
			input: [
				outputs[0] * outputs[0],
				outputs[1] * outputs[1],
				outputs[2] * outputs[2],
				15 * 15,
			],
			output: [
				outputs[0],
				outputs[1],
				outputs[2],
				15,
			],
		};
	},
	width: 9,
	height: 9,
	clockLimit: 300,
	statement: '平方根を計算してみよう!',
	title: '平方根 -easy-',
};
