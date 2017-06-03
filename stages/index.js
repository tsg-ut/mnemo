/* eslint global-require: 'off' */

const stages = [
	require('./wire01.js'),
	require('./calc01.js'),
	require('./calc02.js'),
	require('./calc03.js'),
	require('./calc04.js'),
	require('./calc05.js'),
	require('./calc06.js'),
	require('./make-minus-one-easy.js'),
	require('./division-easy.js'),
	require('./sixth-power.js'),
	require('./remainder.js'),
	require('./plus-32.js'),
	require('./conditional01.js'),
	require('./conditional02.js'),
	require('./conditional03.js'),
	require('./factorial.js'),
	require('./parity.js'),
	require('./fibonacci.js'),
	require('./bivariation01.js'),
	require('./power-easy.js'),
	require('./power-hard.js'),
	require('./division-hard.js'),
	require('./gcd.js'),
	require('./lcm.js'),
	require('./make-minus-one-med.js'),
	require('./make-minus-one-hard.js'),
	require('./sqrt-easy.js'),
	require('./sqrt-hard.js'),
	require('./complement-of-2.js'),
	require('./binarian-easy.js'),
	require('./perfect-number.js'),
	require('./reversal.js'),
	require('./msd.js'),
	require('./mod3-hard.js'),
	require('./max.js'),
	require('./the-fifth-max.js'),
	require('./100.js'),
	require('./100-again.js'),
	require('./1000.js'),
	require('./plus-32-hard.js'),
	require('./xor.js'),
	require('./2017.js'),
	require('./repeat-self.js'),
	require('./fibonacci-hard.js'),
	require('./factorization.js'),
	require('./spaceship.js'),
	require('./addition-med.js'),
	require('./10000th-digit.js'),
];

// Normalize stage data
module.exports = stages.map((stage) => {
	if (!Array.isArray(stage.inputX)) {
		stage.inputX = [stage.inputX];
	}

	stage.input = stage.input.map((input) => {
		let inputDataArrays = input;

		if (!Array.isArray(inputDataArrays)) {
			inputDataArrays = [inputDataArrays];
		}

		return inputDataArrays.map((inputData) => {
			let inputDataArray = inputData;

			if (!Array.isArray(inputDataArray)) {
				inputDataArray = [inputDataArray];
			}

			return inputDataArray;
		});
	});

	return stage;
});
