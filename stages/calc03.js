module.exports = {
	name: 'calc03',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null,
	},
	inputX: 2,
	outputX: 2,
	input: [1, 3, null],
	output: [6, 18, null],
	ioGenerator: (random) => {
		const input = 5 + Math.floor(random() * 10);
		const output = input * 6;

		return {
			input: [1, 3, input],
			output: [6, 18, output],
		};
	},
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: '数を6倍してみよう!',
	title: '四則演算 -基本- 3',
};
