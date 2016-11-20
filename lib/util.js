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
	if (a <= 0 || a === 1 || b <= 0) {
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
