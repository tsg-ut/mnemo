module.exports = {
	name: '10000th-digit',
	version: 1,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
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
		diode: null,
		conditional: null,
		transistor: null,
	},
	inputX: 6,
	outputX: 6,
	input: [null, null, null, 61],
	output: [null, null, null, 3],
	ioGenerator: (random) => {
		const calc = (p) => {
			let reminder = 1;
			for (let i = 0; i < 10000 - 1; i++) {
				reminder = (reminder * 10) % p;
			}
			return Math.floor(reminder * 10 / p);
		};

		const candidates = [7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
		const inputs = [];

		// Shuffle array and take heading 3
		const index1 = Math.floor(random() * 14);
		inputs.push(candidates[index1]);
		candidates[index1] = candidates[0];

		const index2 = Math.floor(random() * 13) + 1;
		inputs.push(candidates[index2]);
		candidates[index2] = candidates[1];

		const index3 = Math.floor(random() * 12) + 2;
		inputs.push(candidates[index3]);

		inputs.sort((a, b) => a - b);

		return {
			input: [
				inputs[0],
				inputs[1],
				inputs[2],
				61,
			],
			output: [
				calc(inputs[0]),
				calc(inputs[1]),
				calc(inputs[2]),
				3,
			],
		};
	},
	width: 13,
	height: 13,
	clockLimit: 1000,
	statement: '7以上の素数pに対して、1/pの小数点以下10000桁目の数字を求めてみよう！',
	title: '10000桁目',
};
