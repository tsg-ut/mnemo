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
		rotate_levels: 2,
	},
	wireL: {
		type: 'wire',
		io: {
			plugs: ['top', 'right'],
		},
		rotate_levels: 4,
	},
	wireT: {
		type: 'wire',
		io: {
			plugs: ['right', 'bottom', 'left'],
		},
		rotate_levels: 4,
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
		rotate_levels: 2,
	},
	'times-3': {
		type: 'calc',
		func: (n) => n * 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'add-3': {
		type: 'calc',
		func: (n) => n+3,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'plus-1': {
		type: 'calc',
		func: (n) => n+1,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'plus-2': {
		type: 'calc',
		func: (n) => n+2,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'minus-1': {
		type: 'calc',
		func: (n) => n-1,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'div-2': {
		type: 'calc',
		func: (n) => (n - n % 2) / 2,

		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'div-3': {
		type: 'calc',
		func: (n) => (n - n % 3) / 3,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'minus-2': {
		type: 'calc',
		func: (n) => n-2,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'const-0': {
		type: 'calc',
		func: (n) => 0,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'const-1': {
		type: 'calc',
		func: (n) => 1,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
	},
	'const-2': {
		type: 'calc',
		func: (n) => 2,
		io: {
			plugs: ['top', 'bottom'],
		},
		rotate_levels: 2,
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
		func: (a, b) => (a - a % b) / b,
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
		func: (a, b) => Math.pow(a,b),
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
	'iko-ru': {
		type: 'calc2',
		func: (a, b) => a === b ? 1 : 0,
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
		rotate_levels: 4,
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
