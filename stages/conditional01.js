module.exports = {
	name: 'conditional01',
	version: 3,
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
	},
	inputX: 4,
	outputX: 4,
	input: [5, -10, null, null],
	output: [15, -20, null, null],
	ioGenerator: (random) => {
		const input1 = Math.floor(random() * 200);
		const output1 = input1 % 2 === 0 ? 2 * input1 : 3 * input1;

		const input2 = Math.floor(random() * 200);
		const output2 = input2 % 2 === 0 ? 2 * input2 : 3 * input2;

		return {
			input: [5, -10, input1, input2],
			output: [15, -20, output1, output2],
		};
	},
	width: 9,
	height: 7,
	clockLimit: 100,
	statement: '偶数なら2倍,奇数なら3倍してみよう!',
	title: '条件分岐 -基本- 1',
	modal: 'conditionals',
};
