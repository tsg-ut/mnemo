module.exports = {
	name: 'xor',
	version: 1,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		wireXdot: null,
		nand: null,
	},
	inputX: [
		1,
		3,
	],
	outputX: 2,
	input: [
		[
			0,
			0,
		],
		[
			0,
			1,
		],
		[
			1,
			0,
		],
		[
			1,
			1,
		],
	],
	output: [
		0,
		1,
		1,
		0,
	],
	width: 5,
	height: 5,
	clockLimit: 25,
	statement: 'XORを作ろう!',
	title: 'XOR',
};
