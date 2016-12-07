module.exports = {
	name: 'conditional02',
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
	inputX: 5,
	outputX: 5,
	input: [5, 6, null, null],
	output: [10, 18, null, null],
	ioGenerator: (random) => {
		const generateAnswer = (input) => {
			if (input === 5) {
				return 10;
			} else if (input === 6) {
				return 15;
			}
			return input;
		};

		const input1 = Math.floor(random() * 200);
		const output1 = generateAnswer(input1);

		const input2 = Math.floor(random() * 200);
		const output2 = generateAnswer(input2);

		return {
			input: [5, 6, input1, input2],
			output: [10, 18, output1, output2],
		};
	},
	width: 11,
	height: 11,
	clockLimit: 100,
	statement: '5は2倍、6は3倍、それ以外は1倍をしてみよう!',
	title: '条件分岐 -基本- 2',
};
