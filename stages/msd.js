module.exports = {
	name: 'msd',
	version: 2,
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
		pow: null,
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
		conditional: null,
		transistor: null,
		diode: null,
	},
	inputX: 7,
	outputX: 7,
	input: [null, null, 0, 123456789],
	output: [null, null, 0, 1],
	ioGenerator: (random) => {
		const input1msd = 1 + Math.floor(random() * 9);
		const input1str = [input1msd].concat(Array.from({
			length: 1 + Math.floor(random() * 3),
		}, () => Math.floor(random() * 10))).join('');
		const input1 = parseInt(input1str);

		const input2msd = 1 + Math.floor(random() * 9);
		const input2str = [input2msd].concat(Array.from({
			length: 3 + Math.floor(random() * 5),
		}, () => Math.floor(random() * 10))).join('');
		const input2 = parseInt(input2str);

		return {
			input: [
				input1,
				input2,
				0,
				123456789,
			],
			output: [
				input1msd,
				input2msd,
				0,
				1,
			],
		};
	},
	width: 15,
	height: 15,
	clockLimit: 500,
	statement: '数の最上位の桁を取り出してみよう!',
	title: '最上位の桁',
};
