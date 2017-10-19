const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
const {DefinePlugin} = require('webpack');

module.exports = (env = {}) => ({
	entry: './lib/index.js',
	output: {
		path: __dirname,
		filename: env.production ? 'index.min.js' : 'index.js',
	},
	devtool: env.production ? 'source-map' : 'cheap-module-eval-source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
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
		}],
	},
	plugins: [
		...(env.production ? [
			new DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production'),
				},
			}),
			new BabiliPlugin(),
		] : []),
	],
	devServer: {
		watchContentBase: true,
	},
	resolve: {
		mainFields: ['browser', 'main'],
	},
});
