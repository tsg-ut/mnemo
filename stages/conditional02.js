module.exports = {
	name: 'conditional02',
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
	},
	inputX: 5,
	outputX: 5,
	input: [5, 6, null, null],
	output: [10, 18, null, null],
	ioGenerator: (random) => {
		let candidates = Array.from({length: 200 - 1}, (item, index) => index + 1)
			.filter((val) => val !== 5 && val !== 6);

		const input1 = candidates[Math.floor(random() * candidates.length)];

		candidates = candidates.filter((val) => val != input1);
		const input2 = candidates[Math.floor(random() * candidates.length)];

		return {
			input: [5, 6, input1, input2],
			output: [10, 18, input1, input2],
		};
	},
	width: 11,
	height: 11,
	clockLimit: 100,
	statement: '5は2倍、6は3倍、それ以外は1倍をしてみよう!',
	title: '条件分岐 -基本- 2',
};
