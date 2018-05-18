const path = require('path');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const {DefinePlugin} = require('webpack');

module.exports = (env = {}, argv = {}) => ({
	entry: './lib/index.js',
	mode: argv.mode || 'development',
	output: {
		path: __dirname,
		filename: argv.mode === 'production' ? 'index.min.js' : 'index.js',
	},
	devtool: argv.mode === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}, {
			test: /\.js$/,
			include: [
				path.resolve(__dirname, 'node_modules/react-hammerjs'),
			],
			use: [{
				loader: 'babel-loader',
				options: {
					plugins: [
						'transform-class-properties',
					],
					babelrc: false,
				},
			}],
		}],
	},
	plugins: [
		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(argv.mode),
			},
		}),
		...(argv.mode == 'production' ? [new BabelMinifyPlugin()] : []),
	],
	devServer: {
		watchContentBase: true,
	},
	resolve: {
		mainFields: ['browser', 'main'],
	},
});
