module.exports = {
	name: 'factorization',
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
		sqrt: null,
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
	inputX: 5,
	outputX: 5,
	input: [null, null, null, 211, 221],
	output: [null, null, null, 0, 13],
	ioGenerator: (random) => {
		const numbers = [0, 0, 0];
		const primes = [2];
		for (let i = 3; i < 65536; i++) {
			let flag = -1;
			for (const prime of primes) {
				if (i % prime === 0) {
					flag = prime;
					break;
				}
			}
			if (flag === -1) {
				numbers.push(0);
				primes.push(i);
			} else {
				numbers.push(flag);
			}
		}

		const candidates = Array.from({length: 199}, (item, index) => index + 2); // 2..200
		const inputs = [];

		const index1 = Math.floor(random() * 30);
		inputs.push(candidates[index1]);
		candidates[index1] = candidates[0];

		const index2 = Math.floor(random() * 119) + 1;
		inputs.push(candidates[index2]);
		candidates[index2] = candidates[1];

		const index3 = Math.floor(random() * 118) + 2;
		inputs.push(candidates[index3]);

		inputs.sort((a, b) => a - b);

		return {
			input: [
				inputs[0],
				inputs[1],
				inputs[2],
				211,
				221,
			],
			output: [
				numbers[inputs[0]],
				numbers[inputs[1]],
				numbers[inputs[2]],
				0,
				13,
			],
		};
	},
	width: 11,
	height: 11,
	clockLimit: 150,
	statement: '与えられた数が素数なら0を、素数でないなら最も小さい1でない約数を探してみよう!',
	title: '因数分解',
};
