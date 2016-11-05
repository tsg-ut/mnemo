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
