module.exports = {
	name: 'spaceship',
	version: 1,
	title: '宇宙船',
	statement: '右の数より左の数が大きいなら1を、左の数より右の数が大きいなら-1を、同じなら0を出力しよう！',
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		'plus-1': null,
		'plus-2': null,
		'minus-1': null,
		'minus-2': null,
		'times-2': null,
		'times-3': null,
		'div-2': null,
		'div-3': null,
		'const-0': null,
		'const-1': null,
		'const-2': null,
		'const-3': null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		pow: null,
		log: null,
		sqrt: null,
		conditional: null,
		transistor: null,
		diode: null,
	},
	width: 7,
	height: 7,
	inputX: [2, 4],
	outputX: 3,
	clockLimit: 100,
	input: [null, null, null, null, null],
	output: [0, -1, 1, null, null],
	ioGenerator: (random) => {
		const candidates = Array.from({length: 99}, (item, index) => index + 1); // 1..100

		const swap = (index1, index2) => {
			const temp = candidates[index1];
			candidates[index1] = candidates[index2];
			candidates[index2] = temp;
		};

		const input1 = candidates[Math.floor(random() * 99)];

		const input2index1 = Math.floor(random() * 99);
		swap(0, input2index1);
		const input2index2 = Math.floor(random() * 98) + 1;

		const input2 = [candidates[0], candidates[input2index2]].sort((a, b) => a - b);

		const input3index1 = Math.floor(random() * 99);
		swap(0, input3index1);
		const input3index2 = Math.floor(random() * 98) + 1;

		const input3 = [candidates[0], candidates[input3index2]].sort((a, b) => b - a);

		const input4negative = -Math.floor(random() * 99) + 1;
		const input4positive = Math.floor(random() * 99) + 1;

		const input4 = random() < 0.5 ? [input4negative, input4positive] : [input4positive, input4negative];

		const input5index1 = Math.floor(random() * 99);
		swap(0, input5index1);
		const input5index2 = Math.floor(random() * 98) + 1;

		const input5 = [-candidates[0], -candidates[input5index2]];

		const spaceship = (a, b) => Math.sign(a - b);

		return {
			input: [
				[input1, input1],
				input2,
				input3,
				input4,
				input5,
			],
			output: [
				spaceship(input1, input1),
				spaceship(...input2),
				spaceship(...input3),
				spaceship(...input4),
				spaceship(...input5),
			],
		};
	},
};
