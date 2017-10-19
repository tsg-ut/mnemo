const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	devtool: 'cheap-module-source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
		}, {
			test: /\.js$/,
			include: [
				path.resolve(__dirname, 'node_modules/react-hammerjs'),
			],
			loader: 'babel-loader',
			options: {
				plugins: [
					'transform-class-properties',
				],
				babelrc: false,
			},
		}, {
			test: /\.ls$/,
			loader: 'livescript-loader',
		}],
	},
	externals: [(context, request, callback) => {
		if (request === 'react-hammerjs') {
			callback();
			return;
		}

		nodeExternals()(context, request, callback);
	}],
};
