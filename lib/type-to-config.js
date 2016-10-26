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
		rotatable: true,
	},
	wireL: {
		type: 'wire',
		io: {
			plugs: ['top', 'right'],
		},
		rotatable: true,
	},
	wireT: {
		type: 'wire',
		io: {
			plugs: ['right', 'top', 'left'],
		},
		rotatable: true,
	},
	wireX: {
		type: 'wireX',
		io: {},
	},
	'times-2': {
		type: 'calc',
		func: (n) => n * 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'times-3': {
		type: 'calc',
		func: (n) => n * 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'add-3': {
		type: 'calc',
		func: (n) => n + 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'plus-1': {
		type: 'calc',
		func: (n) => n + 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'plus-2': {
		type: 'calc',
		func: (n) => n + 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'minus-1': {
		type: 'calc',
		func: (n) => n - 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'div-2': {
		type: 'calc',
		func: (n) => (n - n % 2) / 2,

		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'div-3': {
		type: 'calc',
		func: (n) => (n - n % 3) / 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'minus-2': {
		type: 'calc',
		func: (n) => n - 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'const-0': {
		type: 'calc',
		func: () => 0,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'const-1': {
		type: 'calc',
		func: () => 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	'const-2': {
		type: 'calc',
		func: () => 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotatable: true,
	},
	add: {
		type: 'calc2',
		func: (a, b) => a + b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	sub: {
		type: 'calc2',
		func: (a, b) => a - b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	mul: {
		type: 'calc2',
		func: (a, b) => a * b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
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
	},
	mod: {
		type: 'calc2',
		func: (a, b) => a % b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	pow: {
		type: 'calc2',
		func: (a, b) => Math.pow(a, b),
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	'bitshift-left': {
		type: 'calc2',
		func: (a, b) => a << b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	'bitshift-right': {
		type: 'calc2',
		func: (a, b) => a >> b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	'bitwise-and': {
		type: 'calc2',
		func: (a, b) => a & b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	'bitwise-or': {
		type: 'calc2',
		func: (a, b) => a | b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	'bitwise-xor': {
		type: 'calc2',
		func: (a, b) => a ^ b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	'equal': {
		type: 'calc2',
		func: (a, b) => a === b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	neq: {
		type: 'calc2',
		// eslint-disable-next-line no-negated-condition
		func: (a, b) => a !== b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	gt: {
		type: 'calc2',
		func: (a, b) => a > b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	geqq: {
		type: 'calc2',
		func: (a, b) => a >= b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	lt: {
		type: 'calc2',
		func: (a, b) => a < b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	leqq: {
		type: 'calc2',
		func: (a, b) => a <= b ? 1 : 0,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	conditional: {
		type: 'calc2',
		func: (a, b, c) => a ? b : c,
		io: {
			in: ['top', 'left', 'right'],
			out: 'bottom',
		},
	},
	diode: {
		type: 'calc2',
		func: (a) => a,
		io: {
			in: ['right'],
			out: 'left',
		},
		rotatable: true,
	},
	'c-contact': {
		type: 'calc-switch',
		func: (a) => [a ? 1 : 0, 1],
		io: {
			in: ['top'],
			out: ['left', 'right'],
		},
	},
	transistor: {
		type: 'calc-switch',
		func: (a, b) => [a ? 1 : 0, b],
		io: {
			in: ['top', 'left'],
			out: ['bottom', 'right'],
		},
	},
};
