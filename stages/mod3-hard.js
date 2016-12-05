module.exports = {
	name: 'mod3-hard',
	version: 2,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'times-2': null,
		'times-3': null,
		'times-10': null,
		log10: null,
		log2: null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		'const-10': null,
		add: null,
		sub: null,
		pow: null,
		log: null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		conditional: null,
		transistor: null,
		diode: null,
	},
	inputX: 9,
	outputX: 9,
	input: [null, null, null, null, null],
	output: [0, 1, 2, null, null],
	ioGenerator: (random) => {
		const input1target = 10000000 + Math.floor(random() * 80000000);
		const input1 = input1target - input1target % 3 + 0;

		const input2target = 10000000 + Math.floor(random() * 80000000);
		const input2 = input2target - input2target % 3 + 1;

		const input3target = 10000000 + Math.floor(random() * 80000000);
		const input3 = input3target - input3target % 3 + 2;

		const input4 = 10000000 + Math.floor(random() * 80000000);

		const input5 = 99990000 + Math.floor(random() * 10000);

		return {
			input: [
				input1,
				input2,
				input3,
				input4,
				input5,
			],
			output: [
				input1 % 3,
				input2 % 3,
				input3 % 3,
				input4 % 3,
				input5 % 3,
			],
		};
	},
	width: 19,
	height: 19,
	clockLimit: 1000,
	statement: '3で割った余りを求めてみよう!',
	title: 'mod3 -hard-',
};
