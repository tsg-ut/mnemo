const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	devtool: 'cheap-module-source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
		}, {
			test: /\.ls$/,
			loader: 'livescript-loader',
		}],
	},
	externals: [nodeExternals()],
};
