module.exports = {
	name: 'repeat-self',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'times-2': null,
		'times-10': null,
		'div-2': null,
		'plus-1': null,
		'minus-1': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-10': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		pow: null,
		equal: null,
		conditional: null,
		transistor: null,
		diode: null,
	},
	inputX: 4,
	outputX: 4,
	input: [1, null, null, 9],
	output: [1, null, null, 999999999],
	ioGenerator: (random) => {
		const candidates = Array.from({length: 7}, (item, index) => index + 2); // 2..8
		const inputs = [];

		// Shuffle array and take heading 3
		const index1 = Math.floor(random() * 7);
		inputs.push(candidates[index1]);
		candidates[index1] = candidates[0];

		const index2 = Math.floor(random() * 6) + 1;
		inputs.push(candidates[index2]);

		inputs.sort((a, b) => a - b);

		return {
			input: [
				1,
				inputs[0],
				inputs[1],
				9,
			],
			output: [
				1,
				parseInt(inputs[0].toString().repeat(inputs[0])),
				parseInt(inputs[1].toString().repeat(inputs[1])),
				999999999,
			],
		};
	},
	width: 9,
	height: 9,
	clockLimit: 300,
	statement: '一桁の数を自分自身の回数だけリピートしよう！',
	title: '自己反復',
};
