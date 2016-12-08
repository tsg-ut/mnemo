module.exports = {
	name: 'conditional02',
	version: 3,
	parts: {
		wireI: null,
		wireL: null,
		wireT: null,
		'times-2': null,
		'times-3': null,
		'plus-1': null,
		'plus-2': null,
		'minus-2': null,
		equal: null,
		add: null,
		sub: null,
		div: null,
		mul: null,
		'c-contact': null,
		conditional: null,
		transistor: null,
	},
	inputX: 5,
	outputX: 5,
	input: [5, 6, null, null],
	output: [10, 18, null, null],
	ioGenerator: (random) => {
		const lowerbound = (array, value) => {
			if (array[0] > value) {
				return -1;
			}

			let lb = 0;
			let ub = array.length;

			while (lb + 1 < ub) {
				const middle = Math.floor((ub + lb) / 2);
				if (array[middle] > value) {
					ub = middle;
				} else {
					lb = middle;
				}
			}
			return lb;
		};

		const generateRandom = (excludes, maximum = 200) => {
			excludes.sort();
			const modifiedMax = maximum - excludes.length;
			const number = Math.floor(random() * modifiedMax);

			let before = -1;
			let offset = 0;
			while (before !== offset) {
				const tmp = lowerbound(excludes, number + offset) + 1;
				before = offset;
				offset = tmp;
			}
			return number + offset;
		};

		const generateAnswer = (input) => {
			if (input === 5) {
				return 10;
			} else if (input === 6) {
				return 18;
			}
			return input;
		};

		const input1 = generateRandom([5, 6], 198);
		const output1 = generateAnswer(input1);

		const input2 = generateRandom([5, 6], 198);
		const output2 = generateAnswer(input2);

		return {
			input: [5, 6, input1, input2],
			output: [10, 18, output1, output2],
		};
	},
	width: 11,
	height: 11,
	clockLimit: 100,
	statement: '5は2倍、6は3倍、それ以外は1倍をしてみよう!',
	title: '条件分岐 -基本- 2',
};
