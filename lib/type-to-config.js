module.exports = {
	empty: {
		type: 'empty',
		io: {},
	},
	wire0: {
		type: 'wire',
		io: {
			plugs: ['top', 'bottom'],
		},
	},
	wire1: {
		type: 'wire',
		io: {
			plugs: ['right', 'bottom'],
		},
	},
	wire2: {
		type: 'wire',
		io: {
			plugs: ['left', 'right'],
		},
	},
	wire3: {
		type: 'wire',
		io: {
			plugs: ['left', 'bottom'],
		},
	},
	wire4: {
		type: 'wire',
		io: {
			plugs: ['top', 'left'],
		},
	},
	wire5: {
		type: 'wire',
		io: {
			plugs: ['top', 'right'],
		},
	},
	wire6: {
		type: 'wire',
		io: {
			plugs: ['top', 'right', 'bottom'],
		},
	},
	wire7: {
		type: 'wire',
		io: {
			plugs: ['right', 'bottom', 'left'],
		},
	},
	wire8: {
		type: 'wire',
		io: {
			plugs: ['bottom', 'left', 'top'],
		},
	},
	wire9: {
		type: 'wire',
		io: {
			plugs: ['left', 'top', 'right'],
		},
	},
	'times-2': {
		type: 'calc',
		func: (n) => n * 2,
		io: {
			plugs: ['top', 'bottom'],
		},
	},
	'times-3': {
		type: 'calc',
		func: (n) => n * 3,
		io: {
			plugs: ['top', 'bottom'],
		},
	},
	'add-3': {
		type: 'calc',
		func: (n) => n+3,
		io: {
			plugs: ['top', 'bottom'],
		},
	},
	'plus-1': {
		type: 'calc',
		func: (n) => n+1,
		io: {
			plugs: ['top', 'bottom'],
		},
	},
	'plus-2': {
		type: 'calc',
		func: (n) => n+2,
		io: {
			plugs: ['top', 'bottom'],
		},
	},
	'minus-2': {
		type: 'calc',
		func: (n) => n-2,
		io: {
			plugs: ['top', 'bottom'],
		},
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
		func: (a, b) => a / b,
		io: {
			in: ['left', 'right'],
			out: 'bottom',
		},
	},
}
