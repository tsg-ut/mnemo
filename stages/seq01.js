module.exports = {
	name: 'seq01',
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		wireX: null,
		'const-0': null,
		'minus-1': null,
		add: null,
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
	inputX: [
		4,
		6,
	],
	outputX: 5,
	input: [
		[
			3,
			[
				1,
				2,
				3,
			],
		],
		[
			4,
			[
				3,
				2,
				1,
				3,
			],
		],
		[
			10,
			[
				68,
				11,
				85,
				53,
				14,
				96,
				88,
				61,
				21,
				57,
			],
		],
		[
			30,
			[
				26,
				23,
				43,
				48,
				2,
				7,
				16,
				69,
				16,
				3,
				41,
				3,
				17,
				39,
				98,
				65,
				77,
				52,
				89,
				31,
				37,
				49,
				15,
				46,
				2,
				53,
				74,
				83,
				8,
				93,
			],
		],
	],
	output: [
		6,
		9,
		554,
		1225,
	],
	width: 11,
	height: 11,
	statement: '配列の値を全て足してみよう',
	title: '配列 -基本- 1',
};
