const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv = {}) => ({
	target: 'node',
	mode: argv.mode || 'development',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
		}, {
			test: /\.js$/,
			include: [
				path.resolve(__dirname, 'node_modules/react-hammerjs'),
			],
			use: [{
				loader: 'babel-loader',
				options: {
					plugins: [
						'@babel/plugin-proposal-class-properties',
					],
					babelrc: false,
				},
			}],
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
});
