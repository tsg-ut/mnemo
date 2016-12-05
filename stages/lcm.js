module.exports = {
	name: 'lcm',
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
	inputX: [4, 6],
	outputX: 5,
	input: [null, null, null, [450, 756]],
	output: [null, null, null, 18900],
	ioGenerator: (random) => 	{
		// Durstenfeld shuffle
		const shuffleArray = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(random() * (i + 1));
				const temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		};

		const gcd = ([a, b]) => {
			if (b === 0) {
				return a;
			}

			return gcd([b, a % b]);
		};

		const lcm = ([a, b]) => a * b / gcd([a, b]);

		const inputs = Array.from({length: 3}, () => {
			const factors = [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 5, 5, 7, 7, 11, 13];

			shuffleArray(factors);
			const valueA = factors.slice(0, 3).reduce((a, b) => a * b);
			const valueB = factors.slice(3, 7).reduce((a, b) => a * b);

			return [valueA, valueB];
		});

		inputs.sort((a, b) => lcm(a) - lcm(b));

		return {
			input: [
				inputs[0],
				inputs[1],
				inputs[2],
				[450, 756],
			],
			output: [
				lcm(inputs[0]),
				lcm(inputs[1]),
				lcm(inputs[2]),
				lcm([450, 756]),
			],
		};
	},
	width: 11,
	height: 11,
	clockLimit: 500,
	statement: '最小公倍数を計算してみよう',
	title: '最小公倍数',
};
