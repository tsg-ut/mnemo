require('regenerator-runtime/runtime');

// Check the equality of two arrays *as sets*
module.exports.arrayEquals = (arrayA, arrayB) => {
	const setA = new Set(arrayA);
	const setB = new Set(arrayB);

	if (setA.size !== setB.size) {
		return false;
	}

	for (const item of setA) {
		if (!setB.has(item)) {
			return false;
		}
	}

	return true;
};

module.exports.toCSS = (coordinate) => ({
	left: `${coordinate.x}px`,
	top: `${coordinate.y}px`,
});

// Promisified setTimeout
module.exports.wait = (time) => (
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	})
);

// https://gist.github.com/bellbind/353819de43bf694fba3b
module.exports.zip = function* (...values) {
	const iterators = Array.from(values, (value) => value[Symbol.iterator]());
	let nexts = iterators.map((iterator) => iterator.next());

	while (nexts.every((next) => !next.done)) {
		yield nexts.map((next) => next.value);
		nexts = iterators.map((iterator) => iterator.next());
	}
};

module.exports.log = (a, b) => {
	if (a <= 0 || a === 1 || b <= 0 || (a === Infinity && b === Infinity)) {
		return NaN;
	}

	let lower = 0;
	let upper = b;

	while (upper - lower > 1) {
		const mid = Math.floor((lower + upper) / 2);
		if (Math.pow(a, mid) <= b) {
			lower = mid;
		} else {
			upper = mid;
		}
	}
	return lower;
};

module.exports.floorTowardsZero = (decimal) =>
	(0 < decimal) ? Math.floor(decimal) : Math.ceil(decimal);

// http://stackoverflow.com/a/9039885
module.exports.isiOS = () => navigator.userAgent.match(/iPad|iPhone|iPod/) && !window.MSStream;

// http://stackoverflow.com/a/11752084
module.exports.isMac = () => navigator.platform.toLowerCase().startsWith('mac');

// https://stackoverflow.com/a/3540295
module.exports.isMobile = () => navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);

// eslint-disable-next-line no-empty-function
module.exports.noop = () => {};

// Assign unique ids for native objects
// Works like id() of python
// http://stackoverflow.com/a/43963612
module.exports.id = (() => {
	let currentId = 0;
	const map = new WeakMap();

	return (object) => {
		if (!map.has(object)) {
			map.set(object, ++currentId);
		}

		return map.get(object);
	};
})();

// eslint-disable-next-line no-empty-function
module.exports.nop = () => {};

module.exports.normalizeStageInput = (inputs) => (
	inputs.map((input) => {
		if (input === null) {
			return null;
		}

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
	})
);

module.exports.sum = (array) => (
	array.reduce((previous, current) => previous + current, 0)
);
