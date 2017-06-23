module.exports = {
	name: 'gcd',
	version: 5,
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
	inputX: [5, 7],
	outputX: 6,
	input: [[null, null], [null, null], [null, null], [56, 1275]],
	output: [null, null, null, 1],
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

		const inputs = [];

		const factors1 = [2, 2, 3, 3, 3, 3, 3, 3, 5, 5, 5, 7, 7, 11, 13, 17];

		shuffleArray(factors1);
		const valueA1 = factors1.slice(0, 3).reduce((a, b) => a * b) * 2;
		const valueB1 = factors1.slice(3, 6).reduce((a, b) => a * b) * 2;

		inputs.push([valueA1, valueB1]);

		const factors2 = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 7, 7, 11, 13, 17];

		shuffleArray(factors2);
		const valueA2 = factors2.slice(0, 4).reduce((a, b) => a * b) * 5;
		const valueB2 = factors2.slice(4, 8).reduce((a, b) => a * b) * 5;

		inputs.push([valueA2, valueB2]);

		const factors3 = [1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 5, 11, 11, 13, 13, 17];

		shuffleArray(factors3);
		const valueA3 = factors3.slice(0, 3).reduce((a, b) => a * b) * 7;
		const valueB3 = factors3.slice(3, 6).reduce((a, b) => a * b) * 7;

		inputs.push([valueA3, valueB3]);

		inputs.sort((a, b) => gcd(b) - gcd(a));

		return {
			input: [
				inputs[0],
				inputs[1],
				inputs[2],
				[56, 1275],
			],
			output: [
				gcd(inputs[0]),
				gcd(inputs[1]),
				gcd(inputs[2]),
				gcd([56, 1275]),
			],
		};
	},
	width: 13,
	height: 13,
	clockLimit: 500,
	statement: '二数の最大公約数を計算してみよう!',
	title: '最大公約数',
};
