module.exports = {
	name: 'power-hard',
	version: 4,
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
	inputX: [6, 8],
	outputX: 7,
	input: [null, null, [2, 35]],
	output: [null, null, 34359738368],
	ioGenerator: (random) => {
		// 5..20 or -5..-20
		const input1Base = (5 + Math.floor(random() * 16)) * ((random() < 0.5) ? 1 : -1);

		// 2..5
		const input1Exponent = 2 + Math.floor(random() * 4);

		// 2..4 or -2..-4
		const input2Base = (2 + Math.floor(random() * 3)) * ((random() < 0.5) ? 1 : -1);

		// The result of pow should not be greater than 1e10
		const input2MaxExponent = Math.floor(Math.log(1e10) / Math.log(Math.abs(input2Base)));

		const input2Exponent = 10 + Math.floor(random() * (input2MaxExponent - 10 + 1));

		return {
			input: [
				[input1Base, input1Exponent],
				[input2Base, input2Exponent],
				[2, 35],
			],
			output: [
				Math.pow(input1Base, input1Exponent),
				Math.pow(input2Base, input2Exponent),
				Math.pow(2, 35),
			],
		};
	},
	width: 15,
	height: 15,
	clockLimit: 300,
	statement: '1つ目に与えられた数を2つ目に与えられた数乗してみよう!(ただし、愚直に計算すると時間がかかるので、より早く計算できるように工夫してみよう)',
	title: '累乗 -hard-',
};
