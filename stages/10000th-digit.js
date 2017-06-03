module.exports = {
	name: '10000th-digit',
	version: 2,
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
	input: [null, null, null, null, 107],
	output: [null, null, null, null, 3],
	ioGenerator: (random) => {
		const iterations = (n) => (
			10000 % (n - 1) === 0 ? n - 1 : 10000 % (n - 1)
		);

		const calc = (p) => {
			let reminder = 1;
			for (let i = 0; i < iterations(p) - 1; i++) {
				reminder = (reminder * 10) % p;
			}
			return Math.floor(reminder * 10 / p);
		};

		const candidates = [
			7,
			11,
			13,
			17,
			19,
			23,
			29,
			31,
			37,
			41,
			43,
			47,
			53,
			59,
			61,
			67,
			71,
			73,
			79,
			83,
			89,
			97,
			101,
			103,
			// 107
			109,
			113,
			127,
			131,
			137,
			139,
			149,
			151,
			157,
			163,
			167,
			173,
			179,
		].filter((n) => iterations(n) <= 36);

		const inputs = [];

		// Take input which takes at least 24 iterations
		const heavyInputs = candidates.filter((n) => iterations(n) >= 24 && calc(n) !== 3);
		inputs.push(heavyInputs[Math.floor(random() * heavyInputs.length)]);

		// Generate outputMap
		const outputMap = new Map();
		candidates.forEach((n) => {
			if (!outputMap.has(calc(n))) {
				outputMap.set(calc(n), []);
			}
			outputMap.get(calc(n)).push(n);
		});

		const outputCandidates = Array.from(outputMap.keys()).filter((n) => (
			n !== 3 && n !== calc(inputs[0])
		));

		// Take unique outputs by 3 and get corresponding inputs

		const index1 = Math.floor(random() * outputCandidates.length);
		const inputCandidates1 = outputMap.get(outputCandidates[index1]);
		inputs.push(inputCandidates1[Math.floor(random() * inputCandidates1.length)]);
		outputCandidates[index1] = outputCandidates[0];

		const index2 = Math.floor(random() * (outputCandidates.length - 1)) + 1;
		const inputCandidates2 = outputMap.get(outputCandidates[index2]);
		inputs.push(inputCandidates2[Math.floor(random() * inputCandidates2.length)]);
		outputCandidates[index2] = outputCandidates[1];

		const index3 = Math.floor(random() * (outputCandidates.length - 2)) + 2;
		const inputCandidates3 = outputMap.get(outputCandidates[index3]);
		inputs.push(inputCandidates3[Math.floor(random() * inputCandidates3.length)]);

		inputs.sort((a, b) => a - b);

		return {
			input: [
				inputs[0],
				inputs[1],
				inputs[2],
				inputs[3],
				107,
			],
			output: [
				calc(inputs[0]),
				calc(inputs[1]),
				calc(inputs[2]),
				calc(inputs[3]),
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
