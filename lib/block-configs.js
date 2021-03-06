const util = require('./util');

module.exports = {
	empty: {
		type: 'empty',
		io: {},
	},
	wireI: {
		type: 'wire',
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 1,
		rotatable: true,
	},
	wireL: {
		type: 'wire',
		io: {
			plugs: ['top', 'right'],
		},
		weight: 1,
		rotatable: true,
	},
	wireT: {
		type: 'wire',
		io: {
			plugs: ['right', 'top', 'left'],
		},
		weight: 1,
		rotatable: true,
	},
	wireXdot: {
		type: 'wire',
		io: {
			plugs: ['right', 'top', 'left', 'bottom'],
		},
		weight: 1,
		rotatable: false,
	},
	wireX: {
		type: 'wireF',
		io: {
			flow: {
				top: ['bottom'],
				bottom: ['top'],
				left: ['right'],
				right: ['left'],
			},
		},
		weight: 1,
	},
	junctionR: {
		type: 'wireF',
		io: {
			flow: {
				top: ['right'],
				left: ['right'],
				right: ['top', 'left'],
			},
		},
		weight: 2,
		rotatable: true,
	},
	junctionL: {
		type: 'wireF',
		io: {
			flow: {
				top: ['left'],
				right: ['left'],
				left: ['top', 'right'],
			},
		},
		weight: 2,
		rotatable: true,
	},
	junctionT: {
		type: 'wireF',
		io: {
			flow: {
				top: ['left', 'right'],
				right: ['top'],
				left: ['top'],
			},
		},
		weight: 2,
		rotatable: true,
	},
	'times-2': {
		type: 'calc',
		func: (n) => n * 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'times-3': {
		type: 'calc',
		func: (n) => n * 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'times-10': {
		type: 'calc',
		func: (n) => n * 10,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'add-3': {
		type: 'calc',
		func: (n) => n + 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'plus-1': {
		type: 'calc',
		func: (n) => n + 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'plus-2': {
		type: 'calc',
		func: (n) => n + 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'minus-1': {
		type: 'calc',
		func: (n) => n - 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'div-2': {
		type: 'calc',
		func: (n) => Math.round((n - n % 2) / 2),

		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'div-3': {
		type: 'calc',
		func: (n) => Math.round((n - n % 3) / 3),
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'div-10': {
		type: 'calc',
		func: (n) => Math.round((n - n % 10) / 10),
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'minus-2': {
		type: 'calc',
		func: (n) => n - 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	log10: {
		type: 'calc',
		func: (n) => n === 0 ? -Infinity : util.log(10, Math.abs(n)),
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	log2: {
		type: 'calc',
		func: (n) => n === 0 ? -Infinity : util.log(2, Math.abs(n)),
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'const-0': {
		type: 'calc',
		func: () => 0,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'const-1': {
		type: 'calc',
		func: () => 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'const-2': {
		type: 'calc',
		func: () => 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'const-3': {
		type: 'calc',
		func: () => 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'const-10': {
		type: 'calc',
		func: () => 10,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	add: {
		type: 'calc2',
		func: (a, b) => a + b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	sub: {
		type: 'calc2',
		func: (a, b) => a - b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	mul: {
		type: 'calc2',
		func: (a, b) => a * b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	div: {
		type: 'calc2',
		func: (a, b) => {
			if (b === 0) {
				return a / b;
			}
			return Math.round((a - a % b) / b);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	mod: {
		type: 'calc2',
		func: (a, b) => a % b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	pow: {
		type: 'calc2',
		func: (a, b) => {
			if (a === 1 && (b === Infinity || b === -Infinity)) {
				return 1;
			}
			return util.floorTowardsZero(a ** b);
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	log: {
		type: 'calc2',
		func: (a, b) => b === 0 ? -Infinity : util.log(Math.abs(a), Math.abs(b)),
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	sqrt: {
		type: 'calc',
		func: (n) => n < 0 ? 0 : Math.floor(Math.sqrt(n)),
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
		onRotatableWire: true,
	},
	'bitshift-left': {
		type: 'calc2',
		func: (a, b) => a << b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	'bitshift-right': {
		type: 'calc2',
		func: (a, b) => a >> b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	'bitwise-and': {
		type: 'calc2',
		func: (a, b) => a & b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	'bitwise-or': {
		type: 'calc2',
		func: (a, b) => a | b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	'bitwise-xor': {
		type: 'calc2',
		func: (a, b) => a ^ b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	equal: {
		type: 'calc2',
		func: (a, b) => a === b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	neq: {
		type: 'calc2',
		// eslint-disable-next-line no-negated-condition
		func: (a, b) => a !== b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	gt: {
		type: 'calc2',
		func: (a, b) => a > b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	geqq: {
		type: 'calc2',
		func: (a, b) => a >= b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	lt: {
		type: 'calc2',
		func: (a, b) => a < b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	leqq: {
		type: 'calc2',
		func: (a, b) => a <= b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	conditional: {
		type: 'calc2',
		func: (a, b, c) => a ? b : c,
		io: {
			in: ['top', 'left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	diode: {
		type: 'calc2',
		func: (a) => a,
		io: {
			in: ['right'],
			out: 'left',
		},
		weight: 3,
		rotatable: true,
	},
	'c-contact': {
		type: 'calc-switch',
		func: (a) => ({
			directionIndex: a ? 1 : 0,
			value: 1,
		}),
		io: {
			in: ['top'],
			out: ['left', 'right'],
		},
		weight: 3,
		rotatable: true,
	},
	transistor: {
		type: 'calc-switch',
		func: (a, b) => ({
			directionIndex: a ? 1 : 0,
			value: b,
		}),
		io: {
			in: ['top', 'left'],
			out: ['bottom', 'right'],
		},
		weight: 3,
		rotatable: true,
	},
	and: {
		type: 'calc2',
		func: (a, b) => (a !== 0 && b !== 0) ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	or: {
		type: 'calc2',
		func: (a, b) => (a !== 0 || b !== 0) ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	nand: {
		type: 'calc2',
		func: (a, b) => (a !== 0 && b !== 0) ? 0 : 1,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	nor: {
		type: 'calc2',
		func: (a, b) => (a !== 0 || b !== 0) ? 0 : 1,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	not: {
		type: 'calc2',
		func: (a) => a === 0 ? 1 : 0,
		io: {
			in: ['top'],
			out: 'bottom',
		},
		weight: 3,
		rotatable: true,
	},
	xor: {
		type: 'calc2',
		func: (a, b) => (a !== 0 ^ b !== 0) ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
};
