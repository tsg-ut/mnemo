module.exports = {
	name: 'the-fifth-max',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'times-2': null,
		'times-3': null,
		'times-10': null,
		'div-2': null,
		'div-3': null,
		'div-10': null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		log10: null,
		log2: null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		'const-10': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		mod: null,
		pow: null,
		log: null,
		'bitshift-left': null,
		'bitshift-right': null,
		'bitwise-and': null,
		'bitwise-or': null,
		'bitwise-xor': null,
		equal: null,
		neq: null,
		gt: null,
		geqq: null,
		lt: null,
		leqq: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
		diode: null,
	},
	inputX: [
		14,
		16,
	],
	outputX: 15,
	input: [
		[
			5,
			[
				1,
				2,
				3,
				4,
				5,
			],
		],
		[
			5,
			[
				null,
				null,
				null,
				null,
				null,
			],
		],
		[
			7,
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
		],
		[
			7,
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
		],
		[
			7,
			[
				null,
				null,
				null,
				null,
				null,
				null,
				null,
			],
		],
	],
	output: [
		3,
		null,
		null,
		null,
		null,
	],
	ioGenerator: (random) => {
		const getMedian = (input) => input.slice(0).sort((a, b) => a - b)[(input.length - 1) / 2];

		const isMedianUnique = (input) => {
			const median = getMedian(input);
			return input.filter((x) => x === median).length === 1;
		};

		const inputs = [
			[1, 2, 3, 4, 5],
		];

		// 5 numbers in -5..5
		{
			let input = null;

			do {
				input = Array.from({length: 5}, () => -5 + Math.floor(random() * 11));
			} while (!isMedianUnique(input));

			inputs.push(input);
		}

		// 7 numbers in 1..100
		{
			let input = null;

			do {
				input = Array.from({length: 7}, () => 1 + Math.floor(random() * 100));
			} while (!isMedianUnique(input));

			inputs.push(input);
		}

		// 7 numbers in 0..49
		{
			let input = null;

			do {
				input = Array.from({length: 7}, () => Math.floor(random() * 50));
			} while (!isMedianUnique(input));

			inputs.push(input);
		}

		// 7 numbers in 50..99, the median is at last
		{
			let input = null;

			do {
				input = Array.from({length: 7}, () => 50 + Math.floor(random() * 50));
			} while (!isMedianUnique(input));

			// Swap the median and the last
			const median = getMedian(input);
			input[input.indexOf(median)] = input[6];
			input[6] = median;

			inputs.push(input);
		}

		return {
			input: inputs.map((input) => [input.length, input]),
			output: inputs.map((input) => getMedian(input)),
		};
	},
	width: 31,
	height: 31,
	clockLimit: 2000,
	statement: '与えられた配列の中央値を求めてみよう。ただし、配列の大きさは奇数であり、また中央値はただ一つであることが保証されている。',
	title: '中央値',
};
