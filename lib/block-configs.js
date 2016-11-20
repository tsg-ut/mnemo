const Util = require('./util');

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
		type: 'wireX',
		io: {},
		weight: 1,
	},
	'times-2': {
		type: 'calc',
		func: (n) => n * 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'times-3': {
		type: 'calc',
		func: (n) => n * 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'times-10': {
		type: 'calc',
		func: (n) => n * 10,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'add-3': {
		type: 'calc',
		func: (n) => n + 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'plus-1': {
		type: 'calc',
		func: (n) => n + 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'plus-2': {
		type: 'calc',
		func: (n) => n + 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'minus-1': {
		type: 'calc',
		func: (n) => n - 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'div-2': {
		type: 'calc',
		func: (n) => (n - n % 2) / 2,

		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'div-3': {
		type: 'calc',
		func: (n) => (n - n % 3) / 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'div-10': {
		type: 'calc',
		func: (n) => (n - n % 10) / 10,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'minus-2': {
		type: 'calc',
		func: (n) => n - 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	log10: {
		type: 'calc',
		func: (n) => n==0? -Infinity : Util.log(10, Math.abs(n)),
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	log2: {
		type: 'calc',
		func: (n) => n==0? -Infinity : Util.log(2, Math.abs(n)),
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'const-0': {
		type: 'calc',
		func: () => 0,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'const-1': {
		type: 'calc',
		func: () => 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'const-2': {
		type: 'calc',
		func: () => 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'const-3': {
		type: 'calc',
		func: () => 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
	},
	'const-10': {
		type: 'calc',
		func: () => 10,
		io: {
			plugs: ['top', 'bottom'],
		},
		weight: 2,
		rotatable: true,
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
			return (a - a % b) / b;
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
			return parseInt(Math.pow(a, b));
		},
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
	},
	log: {
		type: 'calc2',
		func: (a, b) => b==0? -Infinity : Util.log(Math.abs(a), Math.abs(b)),
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
		weight: 3,
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
		func: (a) => [a ? 1 : 0, 1],
		io: {
			in: ['top'],
			out: ['left', 'right'],
		},
		weight: 3,
	},
	transistor: {
		type: 'calc-switch',
		func: (a, b) => [a ? 1 : 0, b],
		io: {
			in: ['top', 'left'],
			out: ['bottom', 'right'],
		},
		weight: 3,
	},
};
